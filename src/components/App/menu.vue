<template>

  <nav class="AppMenu"
      :class="{ AppMenu_open:open }"
      @mouseover="(open=true)"
      at-mouseout="(open=false)"
      >

    <UiIcon
      class="AppMenu--close"
      name="CirclePlus"
      width="1.5em"
      height="1.5em"
      @click.native="toggle"
      />

    <div class="AppMenu--brand">
      <router-link to="/" @click.native="toggle(false)">
        <UiIcon
          name="Logo"
          width="8.5rem"
          height="auto"
          fill="#D21034"
          :detail="{ ornament:'#0E0E0E' }"/>
      </router-link>
      <em class="serif" style="display: block; line-height: 1.6; font-size: .8rem; color: #BA9454">Make the best wines, <br>from the best grapes, <br> from the best growers.</em>
    </div>
    
    <div class="AppMenu--linkBlock">
      <router-link to="/join" style="background: #7D1214" @click.native="toggle">Join the List</router-link>
      <router-link to="/join" style="background: #BA9454" @click.native="toggle">
        <UiIcon name="Account" width="1em" height="1em"/>
        My Account
      </router-link>
    </div>

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
              v-html="key"
              />
          </ul>
        </template>
      </li>
      <li class="AppMenu--list-item">
        <div class="AppMenu--list-link AppMenu--list-link_social" :style="{
          display: 'inline-flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }">
          <a href="https://www.facebook.com/WilliamsSelyem" target="_BLANK">
            <UiIcon name="Facebook" width="1em" height="1em"/>
          </a>
          <a href="https://www.instagram.com/williamsselyemwinery/" target="_BLANK">
            <UiIcon name="Insta" width="1em" height="1em"/>
          </a>
          <a href="https://twitter.com/Williams_Selyem" target="_BLANK">
            <UiIcon name="Twitter" width="1em" height="1em"/>
          </a>
        </div>
      </li>
    </ul>

    <WineSearch
      @keydown.native.enter="$router.history.push('/wine') | toggle(false)"
      :style="{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '2rem 1rem',
        color: '#BA9454',
        borderColor: '#BA9454',
        background: '#323232',
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
      'Home': '/home',
      'Our Story':{
        'Our Wines': '/our-wines',
        'Our Vineyards': '/vineyards',
        'Our People': '/people',
        'Our History': '/history',
      },
      'Wine Library': '/wine',
      'Science': {
        'Growing': '/growing-ava',
        'When to Drink': '/when-to-drink',
      },
      'How to Buy': '/purchase',
      'Contact': '/contact',
      'Visit': '/visit',
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
  @extend %light;
  
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
        &, > * { transition: .3s 0s ease }
        &:before,
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          margin-top: -8px;
          width: 0;
          height: 0;
          color: Color(silver);
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid currentColor;
          transition: .3s 0s ease;
          // opacity: 0;
        }
        &:after {
          color: Color(light);
          margin-left: -1.25px;
          z-index: 9999;
        }
      }
      // NO HOVER FX
      // &:not(:hover) > ul {
      //   opacity: 0;
      //   pointer-events: none;
      //   > * { transform: translateX(-1rem) }
      // }
      & > ul {
        z-index: 2;
        color: Color(silver);
        > * {
          font-size: .8em;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: underline transparent;
          &:hover {
            text-decoration-color: Color(theme) !important;
          }
        }
      }
      &:hover > ul,
      > ul:hover {
        opacity: 1;
        pointer-events: initial;
        &:before, &:after {
          opacity: 1;
        }
        color: Color(theme);
      }
    }
    &-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      text-align: right;
      cursor: pointer;
      transition: .3s 0s ease;
      &[href]:hover {
        color: Color(theme);
      }
      &_social {
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
        /deep/ > * {
          transition: .2s 0s ease;
          &:hover * {
            fill: Color(theme);
          }
        }
      }
    }
    &-item > &-link {
      width: 8rem;
      white-space: nowrap;
      direction: rtl;
      border-right: 1px solid Color(silver);
      font-family: $ff-serif;
      text-transform: uppercase;
      letter-spacing: .05em !important;
    }
    &-item:not(:first-child) > &-link {
      border-top: 1px solid Color(silver);
    }
  }
  &--brand {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .UiIcon {
      max-width: 100%;
      margin-right: 2rem;
    }
  }
  &--linkBlock {
    text-transform: uppercase;
    letter-spacing: .075em;
    & {
      position: absolute;
      top: 6rem;
      right: 0;
      display: flex;
      flex-flow: nowrap column;
      max-width: 15rem;
      font-size: 0.8rem;
    }
    > * {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: Color(light);
      padding: .25em 1.5em;
      font-weight: normal !important;
      text-decoration: none;
      & + * {
        margin-top: .5rem;
      }
    }
    .UiIcon:first-child {
      margin-right: .5em;
    }
  }
  .open {
    font-weight: bold;
  }
}
</style>