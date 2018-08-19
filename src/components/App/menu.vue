<template>

  <nav class="AppMenu"
      :class="{ AppMenu_open:open }"
      @mouseover="(open=true)"
      at-mouseout="(open=false)"
      >
    <router-link to="/" class="AppMenu--brand" @click.native="toggle(false)">
      <UiIcon
        name="Logo"
        width="8.5rem"
        height="auto"
        fill="#D21034"
        :detail="{ ornament:'#0E0E0E' }"/>
    </router-link>
    <ul class="AppMenu--list">
      <li class="AppMenu--list-item" v-for="(data,key,ix) in menu">
        <router-link
          v-if="typeof data!='object'"
          v-html="key"
          :to="data"
          @click.native="toggle(false)"
          class="AppMenu--list-link"
          style="text-decoration: none"
          />
        <template v-else>
          <span class="AppMenu--list-link" v-html="key"/>
          <ul>
            <router-link
              v-for="(url,key,ix) in data"
              :key="url"
              :to="url"
              tag="li"
              @click.native="toggle(false)"
              class="AppMenu--list-link"
              style="text-decoration: none" v-html="key"
              />
          </ul>
        </template>
      </li>
    </ul>
    <!-- <ol>
      <li :v-for="v in menu">
        {{$log(v)}}
        <router-link to="item" tag="li" @click.native="toggle(false)">
          <a style="text-decoration: none">Item</a>
        </router-link>
      </li>
      <li>menu here</li>
    </ol> -->
    <UiIcon class="AppMenu--close" name="CirclePlus" width="1.5em" height="1.5em" @click.native="toggle"/>

    <WineSearch @blur="$log($router)" class="UiTheme_dark" :style="{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      padding: '1rem',
      borderColor: '#BA9454'
    }"/>
    
  </nav>

</template>

<script>
import WP from "@/VuePress/mix/API"

import UiList from "@/components/UI/List"
import UiIcon from "@/components/UI/Icon"

import WineSearch from "@/views/Wine/search"

let
defaults = { open:false }

export default {
  name: "AppMenu",
  mixins:[WP],
  components:{ UiList, UiIcon, WineSearch },
  data:()=>({
    open: false,
    menu: {
      'Wine Library': '/wine',
      'Our Story':{
        'Our Wines': '/our-wines',
        'Our Vineyards': '/vineyards',
        'Our People': '/people',
        'Our History': '/history',
      },
      'Purchasing': '/purchase',
      'Science': {
        'Growing': '/growing-ava',
        'When to Drink': '/when-to-drink',
      },
      'Visit': '/visit',
      'Contact': '/contact',
    }
  }),
  methods:{
    toggle(setTo){
      this.open = this.open ? false : true
      if( this.open ) this.$emit('open')
      else this.$emit('close')
    },
  },
  asyncComputed:{
    context:{
      default: {loading:true},
      async get(){
        if( !this.API ) return {loading:true}
        let
        XHR = await this.API.namespace('acf/v3')
          .options()
          .id('options')
          .get()
          .then(rsp=>{
            // this.$log(rsp)
            return rsp
          })

        return XHR
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/theme/colors';
@import '~@/styles/theme/fonts';
@import '~@/styles/theme/breaks';
@import '~@/styles/extend/themes';
.AppMenu {

  $Base: &;
  @extend %cream, %cream_translucent;
  
  & { // self
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    padding: 0 1em;
    // padding: 0 2em 0 1em;
    // box-shadow: -4px 0 2rem 4px rgba( 48, 41, 3, .08 );
    // border-left: 8px solid rgba(Color(theme), .25);
  }
  & { // open
    opacity: 0;
    pointer-events: none;
    &_open {
      &, & #{$Base} {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
  &Trigger {
    $pop: mix( Color(theme), Color(dark), 98% );

    position: relative;
    // color: Color(theme);

    >:first-child {
      
      all: unset;
      appearance: none;

      display: inline-flex;
      justify-content: center;
      align-items: center;      
      
      padding: .34em .5em;
      border-radius: 2px;
      background-color: transparent;
      transition: .3s 0s ease-out;

      >small {
        line-height: 1.6;
        transform: translateY(1px);
        @include Break( max-width Breaks(2) ){
          width: 0;
          overflow: hidden;
        }
      }
    }
    >:first-child:hover,
    >:first-child:focus-within,
    &:hover >:first-child {
      background-color: rgba($pop,.25);
    }
    // #AppNav.cream & {
    //   color: Color(theme);
    // }
  }
  .open,
  .active {
    a {
      font-family: #{$ff-serif};
      white-space: nowrap;
    }
  }
  .open a {
    font-weight: 600;
    letter-spacing: -.015em;
  }
  .active a {
    font-weight: 900;
    letter-spacing: -.03em;
  }
}
</style>

<style lang="scss" scoped>
@import '~@/styles/theme/fonts';
@import '~@/styles/theme/breaks';
@import '~@/styles/theme/colors';
.AppMenu {
  width: 100vw;
  min-height: 100vh;
  -webkit-overflow-scrolling: touch;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &--close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    transform: rotate(45deg);
  }
  &--list {
    margin: auto;
    list-style: none;
    // border-right: 1px solid;
    &-item {
      display: flex;
      position: relative;
      & + & {
        // border-top: 1px solid;
      }
      > ul {
        display: flex;
        list-style: none;
        // position: absolute;
        // left: 100%;
        // top: 0;
        margin: 0;
        white-space: nowrap;
        &, > * { transition: .3s ease }
        &:before,
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          margin-top: -8px;
          width: 0;
          height: 0;
          color: #b9b9b9;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid currentColor;
          transition: .3s 0 ease;
          opacity: 0;
        }
        &:after {
          color: #f6f4ed;
          margin-left: -1.25px;
          z-index: 9999;
        }
      }
      &:not(:hover) > ul {
        opacity: 0;
        pointer-events: none;
        > * { transform: translateX(-1rem) }
      }
      &:hover > ul,
      > ul:hover {
        opacity: 1;
        pointer-events: initial;
        z-index: 2;
        &:before, &:after {
          opacity: 1;
        }
      }
    }
    &-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      text-align: right;
      cursor: pointer;
      transition: .2s ease;
      &:hover {
        color: Color(theme);
      }
    }
    &-item > &-link {
      width: 8rem;
      white-space: nowrap;
      direction: rtl;
      border-right: 1px solid Color(silver);
      font-family: $ff-serif;
      text-transform: uppercase;
      letter-spcaing: .1em;
    }
    &-item:not(:first-child) > &-link {
      border-top: 1px solid Color(silver);
    }
  }
  &--brand {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    display: inline-block;
    .UiIcon {
      max-width: 100%;
    }
  }
  /* 
    @include Break( min-width Breaks(4) ){
      &--brand {
        margin-right: 15vw;
      }
    }
    @include Break( max-width Breaks(4) ){
      flex-flow: nowrap column;
      &--brand {
        margin-bottom: 1rem;
      }
    }
    @include Break( max-width Breaks(2) ){
      &--close {
        top: 1rem;
        right: 1rem;
      }
      &--brand .UiIcon {
        min-width: 12rem;
      }
    }
   */
   .open {
     font-weight: bold;
   }
}
</style>