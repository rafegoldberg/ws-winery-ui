<template>
<div id="WinePage" class="WinePage" v-if="!context.loading">

  <UiPanel class="WinePage--header UiTheme_light">
    <UiBox class="WinePage--stats UiTheme_cream">
      <WineStats
        :title="context.title.rendered"
        :fields="context.acf"
        :terms="terms"
        />
    </UiBox>
    
    <UiBox class="WinePage--media  UiTheme_halves">
      <img :src="media" :alt="context.title.rendered"/>
    </UiBox>

    <UiBox class="WinePage--intro UiBox_stack">
      <p class="wrap_min">{{sections[0].text | truncate}}</p>
      <br>
      <ReadMore href="#content" class="ReadMore_gold"/>
    </UiBox>
  </UiPanel>

  <UiPanel style="border-top:1px solid #EEE">
    <UiBox><div style="text-align:center">
      <UiHeading>Technical Notes</UiHeading>

      <table>
        <tr>
          <th></th>
          <td></td>
        </tr>
      </table>
      
      <UiButton class="UiButton_outline gold">Download</UiButton>
    </div></UiBox>
  </UiPanel>

  <UiPanel id="content" v-if="sections[0]" class="UiTheme_cream">
    <UiBoxImg :img="img1"></UiBoxImg>
    <UiBox class="UiBox_tall">
      <div>
        <UiHeading :level="3" v-html="sections[0].heading"/>
        <p v-html="sections[0].text"/>
      </div>
    </UiBox>
  </UiPanel>

  <UiPanel style="max-height:68vh; overflow: hidden;">
    <UiBoxImg :img="img4" class="UiBox_tall UiBoxImage_vignette"/>
  </UiPanel>

  <UiPanel v-if="sections[2]" class="UiTheme_dark">
    <UiBox>
      <div>
        <UiHeading :level="3" v-html="sections[2].heading"/>
        <p v-html="sections[2].text"/>
      </div>
    </UiBox>
    <UiBoxImg :img="img2"></UiBoxImg>
  </UiPanel>

  <UiPanel>
    <UiBox><div style="text-align:center">
      <UiHeading :level="3" :scale="4">Reviews &amp; Scores</UiHeading>
    </div></UiBox>
  </UiPanel>

  <UiPanel style="max-height:62vh; overflow: hidden;">
    <UiBoxImg class="UiBox_tall" :img="img3"/>
  </UiPanel>
  
  <UiPanel class="UiTheme_dark">
    <UiBox>
      <StaticIconList/>
    </UiBox>
  </UiPanel>
  
</div>
<UiBox v-else style="text-align: center; min-height: 68vh">Loading...</UiBox>
</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import loFlat from "lodash/flatten"
import loPick from "lodash/pick"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImg from '@/components/UI/Box/Image'
import UiIcon from '@/components/UI/Icon'
import UiButton from '@/components/UI/Button'
import UiHeading from '@/components/UI/Heading'

import ReadMore from '@/components/modules/ReadMore'
import WineStats from '@/components/modules/Wine/Stats'

import getTexts from "./lib/parse.wpContent"
import getTerm  from "./lib/get.wpTerm"
import getImage from "./lib/get.wpImage"

import StaticIconList from "@/components/static/icon-list"

import img1 from "@/assets/mock/table.png"
import img2 from "@/assets/mock/vineyard.png"
import img3 from "@/assets/mock/harvest.png"
import img4 from "@/assets/mock/cellar.png"

import bottles from "@/assets/icons/bottles.svg"
import barrels from "@/assets/icons/barrels.svg"
import glasses from "@/assets/icons/glasses.svg"

export default {
  name: "WinePost",
  props:[ 'slug', 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel,
    UiBox,
    UiBoxImg,
    UiButton,
    UiHeading,
    ReadMore,
    WineStats,
    StaticIconList,
  },
  methods:{ getTerm },
  computed:{
    media:    getImage,
    sections: getTexts,
    embed(){ 
      if( this.context.loading ) return
      return this.context._embedded
    },
    terms(){
      if( this.context.loading || !this.embed ) return
      // return this.embed['wp:term']
      return loFlat(this.embed['wp:term'])
    },

    img1: ()=> img1,
    img2: ()=> img2,
    img3: ()=> img3,
    img4: ()=> img4,
    icon: ()=> ({ bottles, barrels, glasses, }),
  }
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors";
.UiTheme_halves {
  background-image: linear-gradient(
    to right,
    Color(cream) 50%,
    Color(light) 50%
  );
}
</style>
<style lang="scss">
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
.WinePage {
  $B: #{&};
  &--header {
    @include Break( (max-width Breaks(4)) (min-width Breaks(2)) ){
      flex-flow: wrap row !important;
      > #{$B}--stats {
        flex: 1 65%;
        width: 65%;
      }
      > #{$B}--media {
        flex: 1 35%;
        width: 35%;
      }
      >:last-child {
        min-width: 100%;
      }
    }
    @include Break( min-width Breaks(3) ){
      // min-height: 90vh;
    }
  }
  // &--stats {}
  &--media {
    flex: 0 auto !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    @include Break( max-width Breaks(2) ){
      order: -1;
      margin-top: .5rem;
      margin-bottom: -9rem;
      padding-top: 6rem !important;
      background: Color(cream);
    }
    img {
      mix-blend-mode: multiply;
      max-height: 42em;
      max-width: 100%;
      width: auto;
      height: auto;

      height: auto;
      // min-height: 75vh;
      max-height: calc(88vh - 4rem);

      @include Break( max-width Breaks(4) ){
        max-height: 88vh;
      }
      @include Break( max-width Breaks(3) ){
        max-height: 90vmin;
      }
    }
    @include Break( max-width Breaks(3) ){
      padding-top: 5rem !important;
    }
  }
  &--intro {
    @include Break( max-width Breaks(4) ){
      padding-top: 3.5rem !important;
      text-align: center;
    }
  }
  // .iconList p {
  //   margin-top: 1.5em;
  //   line-height: 1.3;
  // }
}
</style>
