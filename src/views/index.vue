<template>
<AppLoad
  v-if="page.loading"
  theme="cream"
  />
<UiPanel id="HomePage" class="UiTheme_dark" v-else>
  <Slider
    ref="slider"
    v-if="!page.loading"
    :slides="acf.panels"
    :settings="{
      breakpoints: {
        1088: {
          direction: 'horizontal',
          freeMode: false
        }
      },
      direction: 'vertical',
      speed: 800,
      resistanceRatio: .5,
      // freeMode: true,
      // freeModeSticky: true,
      // freeModeMomentum: true,
      // freeModeMomentumVelocityRatio: 10,
      hashNavigation: {
        watchState: true,
        replaceState: true
      },
      keyboard: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        loadOnTransitionStart: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        sensitivity: 1
      },
      pagination: {
        type: 'bullets',
        renderBullet(ix,className){
          let
          panel = acf.panels[ix]
          return `<div class='${className}'>
            <span class='${className}-text' style='width: calc(50vh / ${acf.panels.length})'>
              ${panel.label}
            </span>
          </div>`;
        },
      },
      //parallax: true,
    }">
    <div slot="swiper-post" slot-scope="swiper">
      <div :class="{
          'swiper-scroll': true,
          'hidden': !(swiper.activeIndex+1 < acf.panels.length)
        }" @click="nextSlide">
        Scroll Down
      </div>
      <div class="swiper-social">
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
      <ui-link url="https://www.williams-selyem.com/shopping3/account/login.cfm" class="swiper-account">
        <UiIcon name="Account" width="1em" height="1em"/>
        <span>My Account</span>
      </ui-link>
    </div>
  </Slider>
</UiPanel>
</template>

<script>
import API from "@/VuePress/mix/API"
import navTheme from "@/includes/NavTheme/mixin"
import UiPanel from "@/components/UI/Panel"
import UiIcon from "@/components/UI/Icon"

import Slider from "@/components/modules/Slider"

export default {
  name: "HomePage",
  mixins:[ API, navTheme ],
  components:{ UiPanel, UiIcon, Slider },
  watch:{
    page(){
      this.navTheme_update(this.page.acf && this.page.acf.AppNav || false)
    }
  },
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
  methods:{
    nextSlide(){
      this.$refs.slider.swiper.slideNext()
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";

%swiper {
  &-footer {
    z-index: 9;
    position: fixed;
    position: fixed;
    display: inline-flex;
    align-items: center;
    color: Color(silver);
    text-decoration: none;
  }
  &-overlayText {
    color: white;
    text-shadow: 0 0 12px rgba(black,.8);
  }
}

.app.route_HomePage {
  @include Break( max-width Breaks(3) ){
    #AppNav {
      background-color: rgba(#FAFAFA,.75);
      // background-image:
      //   linear-gradient( to bottom, , rgba(#FAFAFA,.25) 75% ),
      //   linear-gradient( to left, rgba(#FAFAFA,.5), transparet 25%, transparet 75%, rgba(#FAFAFA,.5) )
      //   !important;
      // color: #FAFAFA !important;
      box-shadow:
        0 .3em 1em rgba(Color(dark),.1),
        0 1px 0 rgba(#FFF,.7);
        ;
      &:before {
        z-index: -1;
        content: '';
        position: absolute;
        top: -1px;
        right: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
        pointer-events: none;
      }
    }
  }
}

#HomePage {

  $top-offset: 6rem;
  $top-offset--M: 4rem;
  $left-offset: 11rem;
  
  & {
    z-index: 1;
    position: relative;
    height: 100vh;
    color: Color(light);
    @include Break( max-width Breaks(4) ){
      position: absolute;
      margin-top: -$top-offset--M;
      width: 100%;
      height: 100%;
    }
  }
  +#AppFooter {
    display: none;
  }
  .swiper {
    & { // custom elems
      &-slide {
        overflow: hidden;
      }
      &-social {
        @extend %swiper-footer;
        bottom: 2rem;
        right: 3rem;
        > * + * {
          margin-left: 1rem;
        }
        @include Break( max-width Breaks(4) ) {
          display: none;
        }
      }
      &-scroll {
        @extend %swiper-footer, %swiper-overlayText;
        display: block;
        transform: translateX(-50%);
        left: 50%;
        bottom: 0;
        font-size: .75em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: .3s ease-in;
        cursor: pointer;
        &:after {
          content: '';
          height: 3rem;
          width: 1px;
          background: currentColor;
          display: block;
          margin: 0 auto;
        }
        &.hidden {
          opacity: 0;
          pointer-events: none;
        }
        @include Break( max-width Breaks(4) ) {
          display: none !important;
        }
      }
      &-account {
        @extend %swiper-footer;
        bottom: 2rem;
        left: 3rem;
        font-size: .9em;
        .UiIcon {
          margin-right: .5rem;
        }
        @include Break( max-width Breaks(4) ) {
          position: fixed;
          bottom: 13vh;
          left: 50%;
          transform: translateX(-50%);
          color: Color(light);
        }
      }
    }
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
      @include Break( max-width Breaks(2) ){
        * {
          text-align: center;
          justify-content: center;
          align-items: center;
        }
      }
    }
    &-pagination {
      &-wrapper {
        position: absolute;
        z-index: 99;
        @include Break( min-width Breaks(4) ){
          height: 50vh;
          right: unset !important;
          left: $left-offset / 2;
          top: 50%;
          top: calc(50% + 1.5rem);
          transform: translate(-50%,-50%);
        }
        @include Break( max-width Breaks(4) ){
          height: 8px;
          width: 88vw;
          right: 6vw !important;
          left: unset;
          bottom: 1.5rem;
        }
      }
      &-bullets {
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        left: 0 !important;
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: nowrap column;
        justify-content: stretch;
        align-items: center;
        @include Break( max-width Breaks(4) ){
          flex-flow: nowrap row;
        }
      }
      &-bullet {
        all: unset;
        position: relative;
        flex: 1;
        width: 8px;
        height: 8px;
        margin: 0 !important;
        background: rgba(Color(light),.25);
        transition: .3s ease;
        & + * {
          @include Break( min-width Breaks(4) ){
            margin-top: 2px !important;
          }
          @include Break( max-width Breaks(4) ){
            margin-left: 2px !important;
          }
        }

        &-text {
          position: absolute;
          text-align: center;
          width: 100%;
          left: 0;
          bottom: calc(100% + 1em);
          font-size: 0.9em;
          @extend %swiper-overlayText;
          @include Break( min-width Breaks(4) ){
            top: 0;
            right: calc(100% + 1em);
            bottom: unset;
            left: unset;
            line-height: 1;
            
            height: initial;

            transform: rotate(-90deg) translate(0,-125%);
            transform-origin: top right;
          }
        }
        &-active {
          position: relative;
          background: Color(theme);
          /* box-shadow:
            2px 0 0 Color(theme),
            -2px 0 0 Color(theme);
          @include Break( max-width Breaks(4) ){
            box-shadow:
              0  2px 0 Color(theme),
              0 -2px 0 Color(theme);
          } */
        }
        > * {
          opacity: 0;
          transition: .3s .2s ease-out;
        }
        &-active > * {
          opacity: 1;
        }
      }
      &-wrapper .UiIcon {
        z-index: 99;
        position: absolute;
        transition: .3s ease;
        transform: translate( 0, -50% ) !important;
        @include Break( min-width Breaks(4) ){ left: calc(-1em - 4px) !important }
        @include Break( max-width Breaks(4) ){
          top: 0px !important;
          transform: translate(-50%, -50%) rotate(90deg) !important;
        }
      }
    }
  }
}
</style>