<template>
<main id="StaffBio" v-if="!context.loading" class="Bio UiTheme_cream">

  <UiPanel class="UiTheme_cream wrap_mid">
    <UiBox class="Bio--overview">
      <div :style="{
        position: 'relative',
        flex:[ 0, '50%' ],
        }">
        <a href="#intro" class="Bio--role">
          <!-- <UiIcon name="ArrowLeft" width=".8em"/> -->
          <b v-html="context.acf.role.name"/>
        </a>
        <img class="Bio--media"
          :src="featured_img"
          :alt="context.title.rendered">
      </div>
      <div id="intro" class="Bio--intro">
        <header class="Bio--introHeader">
          <UiHeading :level="2" :scale="3" class="UiHeading_gold">
            {{context.title.rendered}}
          </UiHeading>
          <b class="Bio--position">{{context.acf.position}}</b>
        </header>
        <p>{{context.acf.intro}}</p>
        <ReadMore href="#content" class="ReadMore_gold"/>
      </div>
    </UiBox>
    <!-- <span slot="connect">
        <ReadMore href="#content" class="ReadMore_gold" :icon="false"/>
    </span> -->
  </UiPanel>

  <UiPanel id="content" class="UiTheme_light">
    <UiBox class="UiBox_stack wrap_flex_min">
      <div>
        <article v-html="context.acf.content"/>
        <br>
        <router-link to="/people" style="display: block; text-align: center; text-decoration: none">
          <UiButton class="UiButton_outline UiButton_gold UiButton_flex">
            Back to Our People
          </UiButton>
        </router-link>
      </div>
    </UiBox>
  </UiPanel>
  
  
</main>
<UiBox v-else style="text-align: center; min-height: 68vh">Loading...</UiBox>
</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiHeading from '@/components/UI/Heading'
import UiButton from '@/components/UI/Button'
import UiIcon from '@/components/UI/Icon'

import ReadMore from '@/components/modules/ReadMore'

export default {
  name: "Bio",
  props:[ 'slug', 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel,
    UiBox,
    UiButton,
    UiHeading,
    UiIcon,
    ReadMore,
  },
  computed:{
    featured_img(){
      if( this.context.loading ) return
      if( 'wp:featuredmedia' in this.context._embedded ){
        let
        src = this.context._embedded['wp:featuredmedia'][0].source_url
        src = src.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
        return src
      }
      else return ""
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
.Bio {
  &--intro {
    flex: 0 50%;
    padding-left: 2em;
  }
  &--position {
    text-transform: capitalize;
  }
  &--role {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 100;
    text-transform: uppercase;
    transform: rotate(-90deg);
    transform-origin: right bottom;
    bottom: 100%;
    right: 100%;
    letter-spacing: .1em;
    text-decoration: none;
    color: inherit;
    > .UiIcon {
      opacity: 0 !important;
      & {
        vertical-align: -.68em;
        margin-left: .25em;
        opacity: .4;
        cursor: pointer;
      }
    }
    @include Break( min-width Breaks(3) ){
      pointer-events: none;
      >.UiIcon { display: none }
    }
    @include Break( max-width Breaks(3) ){
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }
  &--media {
    width: 100%;
    height: 32em;
    object-fit: cover;
    @include Break( (min-width Breaks(1)) (max-width Breaks(3)) ){
        object-fit: contain;
        object-position: center top;
        height: auto;
        max-height: 32em;
        width: auto;
    }
    @include Break( max-width Breaks(1) ){
      margin-right: -1rem;
      width: 100%;
      min-width: calc(100% + 2rem);
    }
  }
  #content {
    >.UiBox:only-child {
      padding-top: 7.5rem;
      padding-bottom: 10rem;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      width: 1px;
      height: 8rem;
      background: Color(theme);
    }
    &:before { top:   -1.5rem }
    &:after  { bottom: 0      }
  }
  @include Break( max-width Breaks(3) ){
    &--overview {
      flex-flow: nowrap column;
        @include Break( max-width Breaks(4) ){
          padding-top: 6rem !important;
        }
      >:first-child {
        margin-bottom: 1.5rem;
        min-height: 300px;
        @include Break( min-width Breaks(3) ){ min-width: 100% }
        @include Break( max-width Breaks(1) ){ min-width: 100% }
      }
      >:last-child {
        padding-left: 0 !important;
        & > :not(p) { text-align: center !important }
      }
    }
  }
}
</style>