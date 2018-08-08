<template>
<div class="swiper-container">

  <div class="swiper-wrapper">
    <!-- Slides -->
    <div v-for="(slide,i) in slides"
        class="swiper-slide swiper-lazy"
        :data-background="slide.image.url"
        >
    <slot v-bind="slide">

      <!-- <iframe v-if="slide.video"
        :src="getVimeoSRC(slide.video)"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen
        webkitallowfullscreen
        ></iframe> -->
      <!-- <VimeoPlayer v-if="slide.video" :video-id="getVimeoID(slide.video)"/> -->

      <ActionBox v-bind="slide" class="wrap_min" style="margin: 0 auto 0 0"/>
      <!-- <h2 v-html="slide.title"/>
      <div v-html="slide.content"/> -->

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

import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

// import {vueVimeoPlayer as VimeoPlayer} from 'vue-vimeo-player'
import ActionBox from '@/components/modules/ActionBox'

export default {
  name: "Slider",
  components:{ ActionBox },
  props:[
    'slides',
    'settings',
  ],
  create(){
    },
  mounted(){
    this.opts = loMerge({},this.defaults,this.settings||{})
    this.swiper = new Swiper(this.$el,this.opts)
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
.swiper {
  &-container {
    // min-height: 100vh;
    // height: 100vh;
    width: 100vw;
    // position: fixed;
    // top: 0;
    // left: 0;
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
    // @media (max-width) {}
    &:before {
      position: relative;
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom left,
        #{"rgba(0,0,0,0)"} 42%,
        rgba(0,0,0,.88)
        );
      pointer-events: none;
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
.video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100vw !important;
  min-height: 110vh !important;
  > * {
    width: 100%;
    height: 100vw;
  }
}
</style>
