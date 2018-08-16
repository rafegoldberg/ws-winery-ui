<template>
<div class="swiper-container">

  <div class="swiper-wrapper">
    <!-- Slides -->
    <div v-for="(slide,i) in slides"
        class="swiper-slide swiper-lazy" :class="{
          'swiper-slide-video': slide.video
        }"
        :data-background="slide.image.url"
        :data-hash="i+1"
        >
    <slot v-bind="slide">

      <div v-if="slide.video" class="swiper-slide-video-bg">
        <VimeoPlayer
          :video-id="getVimeoID(slide.video)"
          :loop="true"
          :autoplay="true"
          ref="vimeo"
          :options="{ title:0, byline:0, portrait:0, muted:1 }"
          @loaded="startPlayer($refs.vimeo[0])"/>
      </div>

      <ActionBox v-bind="slide" class="wrap_min" style="margin: 0 auto 0 0"/>

      

      <div v-if="slide.image" class="swiper-lazy-preloader"/>
        
    </slot>
    </div>
  </div>

  <div class="swiper-pagination"/>

  <!-- <template v-if="adjacent">
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </template> -->

  <!-- <div v-if="scrollbar" class="swiper-scrollbar"></div> -->

</div>
</template>

<script>
import loMerge from 'lodash/merge'
import loOnce from 'lodash/once'

import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

import {vueVimeoPlayer as VimeoPlayer} from 'vue-vimeo-player'
import ActionBox from '@/components/modules/ActionBox'

export default {
  name: "Slider",
  components:{ ActionBox, VimeoPlayer },
  props:[
    'slides',
    'settings',
  ],
  // created(){
  // },
  mounted(){
    this.opts = loMerge({},this.defaults,this.settings||{})
    this.swiper = new Swiper(this.$el,this.opts)
    // this.$log(this.$refs.vimeo)
  },
  data:()=>({
    defaults:{
      /**
       * Default Swiper Options
       */
      // observer: true,
      // watchOverflow: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }
  }),
  methods:{
    startPlayer: function( vimeo ){
      // this.$log(vimeo,vimeo.player)
      vimeo.player.play()
    },
    getVimeoID( str ){
      let
      src = str.split(/src="(.*?)"/g)[1] || str
      src = src.split('/').reverse()[0]
      return src
    },
    getVimeoSRC( url ){
      return `${url}?autoplay=1&loop=1&title=0&byline=0&portrait=0`
    }

  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
.swiper {
  &-container {
    width: 100vw;
  }
  &-slide {
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: flex-start;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
    &[style*="background-image"]:not(.swiper-slide-video) {
      &:before, &:after {
        position: relative;
        z-index: -1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          233deg,
          rgba(black, 0) 50%,
          rgba(black, 1) 88%
          );
        pointer-events: none;
      }
      &:before {
        mix-blend-mode: overlay;
        opacity: .6;
      }
      &:after {
        mix-blend-mode: saturation;
        opacity: .3;
      }
      @include Break( max-width Breaks(3) ){
        &:after  { display: none }
        &:before {
          background: transparent;
          transition: .4s .1s ease-in-out;
        }
        &.swiper-slide-active:before {
          backdrop-filter: blur(8px);
        }
      }
    }
    &.swiper-lazy {
      // children
      > * { transition: opacity .3s .15s ease-out }
      &:not(.swiper-lazy-loaded) > *:not(.swiper-lazy-preloader) { opacity: 0 !important }
      
      // pseudos
      &:before { transition: .3s .15s ease-out }
      &:not(.swiper-lazy-loaded):before { opacity: 0 !important }
    }
  }
  &-pagination {
    &-bullet {
      &, & * { cursor: pointer }
    }
  }
}
</style>
<style lang="scss">
@import "~@/styles/theme/breaks";

.swiper-slide-video {
  &-bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
    > * {
      pointer-events: none;
    }
  }
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 188vmax !important;
    min-height: 188vmax !important;
    @include Break( max-width Breaks(3) ){
      @include Break( (orientation landscape) (min-height Breaks(1)) ){
        width: 100vmax !important;
        min-height: 100vmax !important;
      }
    }
  }
}
</style>