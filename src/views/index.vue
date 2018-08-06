<template>
<UiPanel id="HomePage" class="UiTheme_dark" :style="{
  position: 'relative',
  zIndex: 1,
}">

  <Slider
    v-if="!page.loading"
    :slides="acf.panels"
    :settings="{
      direction: 'vertical',
      lazy: true,
      preloadImages: false,
      pagination: {
        type: 'bullets'
      },
      mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
      },
      freeMode: true,
      freeModeSticky: true,
      breakpoints: {
        610:{
          direction: 'horizontal'
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
/**
 * App Overrides
 */
#HomePage {
  +#AppFooter {
    display: none;
  }
  .swiper {
    $left-offset: 4rem;
    &-slide {
      padding-left: $left-offset;
    }
    &-pagination {
      &-bullets {
        display: flex;
        flex-flow: nowrap column;
        justify-content: stretch;
        align-items: center;
        height: 50vh;
        right: unset !important;
        left: $left-offset / 1.75;
        @media( max-width:610px ){
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
          @media( min-width:610px ){
            margin-top: 2px !important;
          }
          @media( max-width:610px ){
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
            @media( min-width:610px ){
              top: 50%;
              right: 100%;
              transform: translateY(-50%) rotate(-90deg);
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