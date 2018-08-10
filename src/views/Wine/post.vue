<template>
  <AppLoad
    v-if="context.loading"
    />
  <div id="WinePage" class="WinePage" v-else>

    <UiPanel class="WinePage--header UiTheme_light">
      <UiBox class="WinePage--stats UiTheme_cream">
        <WineStats
          :name="title"
          :fields="context.acf"
          :vineyard="vineyard"
          :AVA="terms.AVA && terms.AVA[0]"
          />
      </UiBox>
      
      <UiBox class="WinePage--media  UiTheme_halves">
        <img :src="media" :alt="context.title.rendered" @error="setFallback" ref="bottleImg"/>
      </UiBox>

      <UiBox class="WinePage--intro UiBox_stack">
        <template v-if="sections[0].text">
          <p v-if="sections[0]" class="wrap_min">{{sections[0].text | truncate}}</p>
          <br>
          <ReadMore href="#content" class="ReadMore_gold"/>
        </template>
        <ReadMore v-else href="#content" class="ReadMore_center ReadMore_gold"/>
      </UiBox>
    </UiPanel>

    <UiPanel class="WinePage--detail">
      <UiBox><div style="text-align:center">
        <UiHeading style="flex:1 100%">Technical Notes</UiHeading>

        <div class="WinePage--detail-tables">
          <table>
            <tr>
              <th>Alc.</th>
              <td>{{acf.TA}}</td>
            </tr>
            <tr>
              <th>pH</th>
              <td>{{acf.pH}}</td>
            </tr>
            <tr>
              <th>TA</th>
              <td>{{acf.Alc}}</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Barrel Description</th>
              <td>{{acf['Barrel-Aged']}}</td>
            </tr>
            <tr>
              <th>Barrel Aged</th>
              <td>{{acf['Barrel-Description']}}</td>
            </tr>
          </table>
        </div>

        <a :href="download" class="UiButton UiButton_outline gold" :download="title">Download PDF</a>
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
        <IconList/>
      </UiBox>
    </UiPanel>
    
  </div>
  <UiBox v-else style="text-align: center; min-height: 68vh">
    Loading...
  </UiBox>
</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import loFind  from "lodash/find"
import loFlat  from "lodash/flatten"
import loGroup from "lodash/groupBy"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImg from '@/components/UI/Box/Image'
import UiIcon from '@/components/UI/Icon'
import UiButton from '@/components/UI/Button'
import UiHeading from '@/components/UI/Heading'

import WineStats from './stats'

import getTexts from "./lib/parse.wpContent"
import getTerm  from "./lib/get.wpTerm"
import getImage from "./lib/get.wpImage"

import IconList from "@/components/static/icon-list"
import ReadMore from '@/components/modules/ReadMore'

import fallback from "@/assets/bottles/default.png"

import img1 from "@/assets/mock/table.png"
import img2 from "@/assets/mock/vineyard.png"
import img3 from "@/assets/mock/harvest.png"
import img4 from "@/assets/mock/cellar.png"

import bottles from "@/assets/icons/bottles.svg"
import barrels from "@/assets/icons/barrels.svg"
import glasses from "@/assets/icons/glasses.svg"

const Window = window || {}

export default {
  name: "WinePost",
  props:[ 'slug', 'category' ],
  data: ()=>({
    Window,
  }),
  mixins:[ WpConnect ],  
  components:{
    UiPanel,
    UiBox,
    UiBoxImg,
    UiButton,
    UiHeading,

    WineStats,
    
    ReadMore,
    IconList,
  },
  methods:{
    getTerm,
    setFallback(){
      this.$refs.bottleImg.src = fallback
    }
  },
  computed:{
    media:    getImage,
    sections: getTexts,
    embed(){
      if( this.context.loading ) return
      return this.context._embedded
    },
    title(){
      if( this.context.loading ) return ''
      return this.context.title.rendered
    },
    download(){
      if( this.context.loading ) return

      let
      PDF = this.acf['Wine-PDF'],
      rgx = /.*\/wp-content\//gim,
      rep = 'https://www.williamsselyem.com/wp-content/'

      return PDF.replace(rgx,rep)
    },
    acf(){
      if( this.context.loading ) return
      return this.context.acf
    },
    terms(){
      if( this.context.loading || !this.embed ) return
      var
      terms = this.embed['wp:term']
      terms = loFlat(terms)
      return loGroup(terms,'taxonomy')
    },
    vineyard(){
      if( this.context.loading || !this.terms ) return
      var
      terms = this.terms.category
      return loFind( terms, cat=> cat.link.toLowerCase().indexOf('vineyard') )
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
  &--detail {
    &-tables {
      display: flex;
      margin: 1.5rem 0;
      min-width: 42vw;
      
      border-color: Color(theme) !important;
      border-style: solid !important;
      border-width: 0/*1px*/ 0;
      border-width: 0;
      
      table {
        &, th, td { border-color: inherit !important }
        border-bottom: 0/*1px*/ solid;
        margin: 0 .75rem/*0*/ 0/*-1px*/;
        &:not(:last-child) { 
          // border-right: 1px solid;
        }
        th {
          text-align: right;
          + td { text-align: left }
        }
      }
    }
    @include Break( max-width Breaks(2) ){
      &-tables {
        width: 100%;
        flex-flow: nowrap column;
        table {
          &:not(:last-child) { margin-bottom: 0 }
          + table {
            margin-top: 0;
            border-top: 1px solid;
          }
        }
      }
    }
  }
  // &--stats {}
  &--media {
    flex: 0 auto !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    @include Break( max-width Breaks(2) ){
      order: -1;
      margin-bottom: -2rem;
      // margin-top: .5rem;
      // margin-bottom: -9rem;
      // padding-top:  !important;
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
      // padding-top: 5rem !important;
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
