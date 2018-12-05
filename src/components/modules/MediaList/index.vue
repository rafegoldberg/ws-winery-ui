<template>
<div class="MediaList">

  <div>
    <slot name="head">
      <UiHeading>{{title}}</UiHeading>
    </slot>
    <ul class="MediaList--list">
      <li v-for="(item,i) in list"
          class="MediaList--item"
          :class="{
            'MediaList--item_active': (active==i)
          }" @mouseover="( active = i )">
        <slot v-bind="{ item, key:i }">
          {{item}}
        </slot>
      </li>
    </ul>
  </div>
  
  <div class="MediaList--media" style="display: flex">
    <img v-show="!imgLoading" :src="media" @load="(imgLoading = false)">
    <img v-if="imgLoading" :src="imgSpinner" style="margin: auto">
  </div>

</div>
</template>

<script>
import API from '@/VuePress/mix/API'
import UiHeading from '@/components/UI/Heading'

import imgSpinner from '@/assets/preloader.gif'
import fallback from './mock/default.jpg'

export default {
  name: "MediaList",
  mixins:[ API ],
  components:{ UiHeading },
  props:{
    list:{ type:[Array,Object] },
    title:{ type:String }
  },
  data:()=>({
    current: 0,
    imgSpinner,
    imgLoading: false,
  }),
  methods:{
    // getImage(){
    //   // console.log({args:arguments,self:this})
    // }
  },
  computed:{
    active:{
      default: 0,
      get( ){
        return this.current
      },
      set(i){
        let
        list   = this.list,
        prior  = this.current,
        active = i>=0 ? i : -1

        if( list[active] )
          active!=prior && this.$emit( 'activate', list[active], list[prior]  )

        this.current = active
      }
    },
  },
  asyncComputed:{
    media:{
      default: fallback,
      async get(){
        if( !this.API ) return fallback
        
        let
        img = this.list[this.active] ? this.list[this.active].featured_media : false

        if( !img ) return fallback
        
        let
        err,
        xhr = await this.API.media()
          .id(img)
          .get()
          .then( rsp=> this.wsRewriteSRC(rsp.source_url) )
          .catch( e=>( err = e ))

        if( err ) return fallback
        return xhr
      },
      watch(){ this.active }
    }
  },
  watch:{
    media(is,was){
      this.imgLoading = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
.MediaList {
  $base: #{&};
  & {
    // justify-self: center;
    // align-self: center;
    display: inline-flex;
    align-items: center;
    margin: 0 auto;
  }
  &--media {
    margin: 0;
    &:first-child { margin-right: 1.5rem }
    &:last-child { margin-left: 1.5rem }
    width: 50vmax;
    height: 42vmax;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &--list {
    padding: unset;
    list-style: none;
    font-weight: 100;
    width: 15em;
    max-width: 100%;
    white-space: nowrap;
    font-size: .9em;
  }
  &--item {
    position: relative;
    padding: .3em 0;
    color: inherit;
    letter-spacing: .05em;
    cursor: default;
    & + & {
      border-top: 1px solid rgba( mix(Color(dark),Color(cream)), .4 );
    }
    &:before {
      content: " ";
      color: transparent;
      background: Color(theme);
      display: inline-block;
      height: 2px;
      width: 1.5em;
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -1px;
      margin-right: -.5em;
      opacity: 0;
      transition: .2s .1s ease-out;
    }
    &_active {
      font-weight: bold;
      font-weight: 400;
      letter-spacing: 0.036em;
      &:before {
        opacity: 1;
        margin-right: 0.5em;
      }
    }
  }
  @include Break( max-width Breaks(3) ){
    flex-flow: nowrap column-reverse;
    &--media {
      //-----------------------
      display: none !important;
      //-----------------------
      // width: 100vw;
      // max-height: 32vh;
      // margin: 0 0 1.5rem !important;
      // img {
      //   object-fit: cover;
      //   object-position: center 25%;
      // }
    }
  }
}
a {
  text-decoration: none;
}
.MediaList--item:not(.MediaList--item_active) {
  overflow: hidden;
  &:before { transition: all 0s !important }
}
</style>

<docs>
```vue
<MediaList :style="{
  position:'relative',
}"/>
```
</docs>