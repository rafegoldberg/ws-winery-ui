<template>
  <AppLoad
    v-if="context.loading"
    />
  <div id="WinePage" class="WinePage" v-else>

    <UiPanel class="WinePage--header UiTheme_light reorderFirst_mobile">
      <UiBox class="WinePage--stats UiTheme_cream">
        <WineStats
          :hold="holdProgress"
          :name="title"
          :fields="context.acf"
          :vineyard="vineyard"
          :AVA="terms.AVA && terms.AVA[0]"
          :current="currentRelease"
          />
      </UiBox>

      <UiBox class="WinePage--media  UiTheme_halves">
        <img :src="media" :alt="context.title.rendered" @error="setFallback" ref="bottleImg"/>
      </UiBox>

      <UiBox class="WinePage--intro UiBox_stack hide_mobile">
        <span v-if="sections[0] && sections[0].text && sections[0].text.length >= 170" class="wrap_min">
          <UiHeading :level="3" class="UiHeading_gold UiHeading_space÷2" style="align-self: stretch">Winemakers Notes</UiHeading>          
          <p v-if="sections[0]" class="wrap_min">{{sections[0].text | truncate}}</p>
          <br>
          <ReadMore href="#content" class="ReadMore_gold">
            <b>Read More</b>
          </ReadMore>
        </span>
        <ReadMore v-else href="#content" class="ReadMore_caps ReadMore_center ReadMore_gold"/>
      </UiBox>

      <Adjacent v-bind="context.adjacent"/>
      
    </UiPanel>

    <UiPanel v-if="checkTechSpecs.includes(true)" class="WinePage--detail">
      <UiBox>
        <div :style="{
              display: 'inline-flex',
              flexFlow: 'nowrap column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
            }">
          <UiHeading class="UiHeading_space" style="flex:1 100%">
            Technical Notes
          </UiHeading>

          <span class="WinePage--detail-tables">
            <span v-if="checkTechSpecs[0]">
              <table>
                <tr v-if="acf.TA">
                  <th>Alc.</th>
                  <td>{{acf.TA}}</td>
                </tr>
                <tr v-if="acf.pH">
                  <th>pH</th>
                  <td>{{acf.pH}}</td>
                </tr>
                <tr v-if="acf.Alc">
                  <th>TA</th>
                  <td>{{acf.Alc}}</td>
                </tr>
              </table>
            </span>
            <span v-if="checkTechSpecs[1]">
              <table>
                <tr v-if="acf['Barrel-Description']">
                  <th>Barrel Description</th>
                  <td>{{acf['Barrel-Description']}}</td>
                </tr>
                <tr v-if="acf['Barrel-Aged']">
                  <th>Barrel Aged</th>
                  <td>{{acf['Barrel-Aged']}}</td>
                </tr>
              </table>
            </span>
          </span>

          <a v-if="download" :href="download" class="UiButton UiButton_outline gold" :download="title" target="_BLANK">Technical Notes PDF</a>
        </div>
      </UiBox>
    </UiPanel>

    <UiPanel id="content" class="UiTheme_cream reorderFirst_mobile" v-if="sections[0]">
      <UiBoxImg :img="img1" class="reorderLast_mobile"/>
      <UiBox class="UiTheme_cream UiBox_tall">
        <div class="wrap_min">
          <UiHeading :level="3" class="UiHeading_gold">Winemakers Notes</UiHeading>
          <p v-html="sections[0].text || 'Coming soon.'"/>
        </div>
      </UiBox>
    </UiPanel>

    <UiPanel v-if="sections[2]" class="UiTheme_dark">
      <UiBox :collapse="true" class="UiTheme_dark">
        <div class="wrap_min">
          <UiHeading :level="3" class="UiHeading_gold">Harvest Notes</UiHeading>
          <p v-html="sections[2].text"/>
        </div>
      </UiBox>
      <UiBoxImg :img="img2" class="UiBox_tall reorderFirst_mobile"></UiBoxImg>
    </UiPanel>

    <UiPanel class="UiTheme_light" v-if="acf.reviews || oldReviews && !oldReviews.loading">
      <UiBox class="UiBox_stack">
        <UiHeading :level="2" :scale="3" class="UiHeading_space">
          Reviews &amp; Scores
        </UiHeading>
        <div class="WinePage--reviews wrap_min">
          <Review v-for="review in (acf.reviews||oldReviews)" v-bind="review" :key="review.name"/>
        </div>
      </UiBox>
    </UiPanel>

    <UiPanel>
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
import navTheme from "@/includes/NavTheme/mixin"

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
import Review   from '@/components/modules/Review'
import Adjacent from '@/components/modules/AdjacentNav'

import fallback from "@/assets/bottles/default.png"

import img1 from "@/assets/mock/table.png"
import img2 from "@/assets/mock/vineyard.png"
import img3 from "@/assets/mock/harvest.png"

const Window = window || {}

export default {
  name: "WinePost",
  props:[ 'slug', 'category' ],
  data: ()=>({
    Window,
  }),
  mixins:[ WpConnect, navTheme ],
  beforeRouteEnter(to,from,next){
    next(self=> self.navTheme_update({ brand: "logoTheme_dualtone" }))
  },

  components:{
    UiPanel,
    UiBox,
    UiBoxImg,
    UiButton,
    UiHeading,

    WineStats,
    
    ReadMore,
    IconList,
    Review,
    Adjacent
  },
  methods:{
    getTerm,
    setFallback(){
      this.$refs.bottleImg.src = fallback || ''
    },
    parseDate:(fmt)=> new Date( typeof str=='string' ? Date.parse(fmt) : fmt ),
    diffDate(d1, d2){
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12
      months -= d1.getMonth() + 1
      months += d2.getMonth()
      return months <= 0 ? 0 : months
    }
  },
  computed:{
    media:    getImage,
    sections: getTexts,
    useNewParser(){
      let useNew;
      try {
        useNew = !this.context.content.rendered.match(/<h\d/gi).length
      }
      catch (error) {
        useNew = false
      }
      return useNew
    },
    currentRelease(){
      if( this.context.loading ) return
      let
      pub  = this.parseDate( this.context.date ),
      now  = this.parseDate( Date.now() ),
      diff = this.diffDate(pub,now)
      if( diff <= 6 ) return true
      else return false
    },
    checkTechSpecs(){
      let
      checks = [
        [
          'TA'  in this.acf && this.acf['TA']  ? true : false,
          'pH'  in this.acf && this.acf['pH']  ? true : false,
          'Alc' in this.acf && this.acf['Alc'] ? true : false,
        ],
        [
          'Barrel-Description' in this.acf && this.acf['Barrel-Description'] ? true : false,
          'Barrel-Aged'        in this.acf && this.acf['Barrel-Aged']        ? true : false,
        ],
      ]
      return checks.map(lr=> lr.includes(true))
    },
    embed(){
      if( this.context.loading ) return
      return this.context._embedded
    },
    title(){
      if( this.context.loading ) return ''
      return this.context.title.rendered
    },
    holdProgress(){
      if( this.context.loading ) return

      let
      Parse = this.parseDate,
      hold  = Parse( this.context.date          ),
      until = Parse( this.acf['_wpb_drinkhold'] ),
      now   = Parse( Date.now()                 )
      
      let
      progress = (now - hold) / (until - hold)
      return progress
    },
    download(){
      if( this.context.loading ) return

      let
      PDF = this.acf['Wine-PDF'],
      rgx = /.*\/wp-content\//gim,
      rep = 'https://www.williamsselyem.com/wp-content/'

      if( !PDF ) return ''
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
  },
  asyncComputed:{
    oldReviews: {
      default: {loading:true},
      async get(){
        if( !this.API || this.context.loading ) return {loading:true}
        let
        error = false,
        data  = await this.API.namespace('ws/v1').reviews().id(this.context.id)
          .get()
          .catch(e=>( error = e ))

        if (error) return {error}
        return data
      },
      lazy: true,
    },
  },
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
  
  & {
    @include Break( max-width Breaks(2) ){
      display: flex;
      flex-flow: nowrap column;
    }
  }
  
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
    @include Break( max-width Breaks(4) ){
      > #{$B}--intro {
        /deep/ p { margin: 0 auto }
      }
    }
    @include Break( max-width Breaks(3) ){
      > #{$B}--media {
        padding-top: 3rem;
        padding-bottom: 0;
      }
      > #{$B}--stats {
        padding-bottom: 0;
      }
    }
  }
  &--detail {
    &-tables {
      display: flex;
      margin: 1.5rem 0;
      // min-width: 50vw;
      
      border-color: Color(theme) !important;
      border-style: solid !important;
      border-width: 0/*1px*/ 0;
      border-width: 0;
      
      > * {
        display: inline-block;
        @include Break( min-width Breaks(3) ){
          padding: 0 .75rem;
        }
      }
      table {
        margin: 0;
        border-bottom: 0 solid;
        &, th, td { border-color: Color(theme) !important }
        tr:only-child { td, th {
          border-bottom: 1px solid;
        } }
        th {
          vertical-align: middle;
          line-height: 1.2;
          + td {
            max-width: 12rem;
            text-align: left;
          }
        }
      }
    }
    &-tables {
      > * {
        display: block;
        // max-width: 28rem;
        // min-width: 12.5rem;
      }
    }
    @include Break( min-width Breaks(3) ){
      &-tables table th {
        text-align: right;
        // white-space: nowrap;
      }
    }
    @include Break( max-width Breaks(3) ){
      &-tables {
        width: 100%;
        flex-flow: nowrap column;
        > * {
          + * {
            margin-top: 0;
            border-top: 1px solid Color(theme);
          }
          th { width: 33% }
        }
      }
    }
    @include Break( (min-width Breaks(2)) (max-width Breaks(4)) ){
      > .UiBox { padding-top: 0 }
    }
  }
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

  @include Break( max-width Breaks(4) ){
    &--intro     { order: 2 }
    .AdjacentNav { order: 1 }
  }
  .AdjacentNav {
    position: absolute;
    bottom: 1rem;
    margin: 1.5rem 0;
    left: 50%;
    transform: translateX(-50%);
    @include Break( max-width Breaks(4) ){
      position: static;
      bottom: unset;
      left: unset;
      justify-content: center;
      margin: -2rem 0 0 !important;
      transform: translate(0,-100%);
    }
    @include Break( max-width Breaks(2) ){
      order: -2;
      margin: 0 0 -1.5rem !important;
      padding: 2rem 0 0;
      transform: translate(0,0);
      background: Color(cream);
      /deep/ * { font-weight: normal !important }
    }
  }
  
  .UiBox_expanded.UiTheme_dark:not(:only-child) {
    // truncated harvest notes
    width: 100vw;
    margin-right: -100vw;
    z-index: 2;
  }
}
</style>
