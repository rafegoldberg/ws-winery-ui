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
      <template>
        <h2 v-html="slide.title"/>
        <div v-html="slide.content"/>
      </template>

      <div v-if="slide.image" class="swiper-lazy-preloader"/>
        
    </slot>
    </div>
  </div>

  <!-- <div v-if="pagination" class="swiper-pagination"></div> -->

  <!-- <template v-if="adjacent">
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </template> -->

  <!-- <div v-if="scrollbar" class="swiper-scrollbar"></div> -->

</div>
</template>

<script>
// import loMerge from 'lodash/merge'

import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

import {vueVimeoPlayer as VimeoPlayer} from 'vue-vimeo-player'

export default {
  name: "Slider",
  components:{ VimeoPlayer },
  props:[
    'slides',
    'settings',
  ],
  mounted(){
    this.swiper = new Swiper(this.$el,this.settings||{})
  },
  data:()=>({
    options:{
      /**
       * Default Options
       */
      watchOverflow: true,
    }
  }),
  computed:{
    opts:{
      get(){ return this.settings },
      set(opts){
        this.settings = loMerge(this.settings,opts)
      }
    },
  },
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
    height: 100vh;
    width: 100vw;
  }
  &-slide {
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: flex-start;
    padding: 9rem 3rem 3rem;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
  // transform: translate(0,-50vh);
  > * {
    width: 100%;
    height: 100vw;
  }
}
</style>
