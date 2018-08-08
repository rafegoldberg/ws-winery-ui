<template>
<UiPanel id="HomePage" class="UiTheme_dark">

  <Slider
    v-if="!page.loading"
    :slides="acf.panels"
    :settings="{
      direction: 'vertical',
      parallax: true,

      speed: 400,

      freeMode: true,
      freeModeSticky: true,
      mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
      },
      keyboard: true,
      
      lazy: true,
      preloadImages: false,

      pagination: {
        type: 'bullets'
      },

      breakpoints: {
        1088:{ // Breaks(4)
          direction: 'horizontal',
          freeMode: false,
        }
      }
    }"/>

</UiPanel>
</template>

<script>
import API from "@/VuePress/mix/API"
import Slider from "@/components/modules/Slider"

import UiPanel from "@/components/UI/Panel"

export default {
  name: "HomePage",
  mixins:[ API ],
  components:{ UiPanel, Slider },
  asyncComputed:{
    page:{
      default:{ loading:true },
      async get(){
        if(!( this.API && this.endpoint )) return {loading:true}

        let
        err = false,
        xhr = await this.endpoint.get().catch(e=>( err = e ))

        if (err) return { error:err }
        return xhr
      }
    }
  },
  computed:{
    endpoint(){
      if( !this.API ) return false
      return this.API.namespace('ws/v1').front()
    },
    acf(){
      if( !this.page.loading )
        return this.page.acf
    }
  },
}
</script>

<style lang="scss">
@import "~@/styles/theme/breaks";

#HomePage {

  $top-offset: 6rem;
  $top-offset--M: 4rem;
  $left-offset: 5rem;
  
  & {
    z-index: 1;
    position: relative;
    height: 100vh;
    color: #FAFAFA;
    @include Break( max-width Breaks(4) ){
      margin-top: -$top-offset--M;
    }
  }
  +#AppFooter {
    display: none;
  }
  .swiper {
    &-container {
      @include Break( min-width Breaks(4) ){
        position: relative;
        height: 100%;
        // padding-top: $top-offset;
        // margin-top: -$top-offset;
      }
      @include Break( max-width Breaks(4) ){
        position: absolute;
        height: 100%;
        // margin-top: -$top-offset--M;
      }
    }
    &-slide {
      padding: 1.5rem 2rem;
      @include Break( min-width Breaks(4) ){
        padding: 9rem 4rem 4rem;
        padding-left: $left-offset;
      }
    }
    &-pagination {
      &-bullets {
        display: flex;
        flex-flow: nowrap column;
        justify-content: stretch;
        align-items: center;
        @include Break( min-width Breaks(4) ){
          height: 50vh;
          right: unset !important;
          left: $left-offset / 1.75;
          top: 50%;
        }
        @include Break( max-width Breaks(4) ){
          flex-flow: nowrap row;
          height: 8px;
          width: 88vw;
          right: 6vw !important;
          left: unset;
          bottom: 1.5rem;
        }
      }
      &-bullet {
        all: unset;
        flex: 1;
        width: 8px;
        height: 8px;
        margin: 0 !important;
        background: rgba(255,255,255,.25);
        transition: .3s ease;
        & + * {
          @include Break( min-width Breaks(4) ){
            margin-top: 2px !important;
          }
          @include Break( max-width Breaks(4) ){
            margin-left: 2px !important;
          }
        }
        &-active {
          position: relative;
          background: #bb9353;
          &:after {
            content: "Slide";
            position: absolute;
            text-align: center;
            width: 100%;
            left: 0;
            bottom: 100%;
            @include Break( min-width Breaks(4) ){
              top: 50%;
              left: unset;
              bottom: unset;
              right: 100%;
              transform: translateY(-50%) rotate(-90deg);
              margin-right: .5em;
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
/**
 * Page Styles
 */
#HomePage {
}
</style>