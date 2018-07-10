<template>
<div id="WinePage" v-if="!context.loading">

  <UiPanel id="WinePage--header" class="UiTheme_light">
    <UiBox class="UiTheme_cream">
      <WineStats
        :title="context.title.rendered"
        :fields="context['ws:fields']"
        :category="terms"
        />
    </UiBox>
    
    <UiBox class="UiTheme_halves">
      <img id="WineBottle" :src="media" :alt="context.title.rendered" />
    </UiBox>

    <UiBox>
      <!-- <div>
        <UiHeading :level="2" :scale="3">
          {{sections[0].heading}}
        </UiHeading>
      </div> -->
      <p class="wrap_min">{{sections[0].text | truncate}}
        <br>
        <a href="#more">Read more</a>
      </p>
    </UiBox>
  </UiPanel>

  <UiPanel>
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

  <UiPanel class="UiTheme_cream">
    <UiBoxImg :img="img1"></UiBoxImg>
    <UiBox>
      <div>
        <UiHeading :level="3">{{sections[0].heading}}</UiHeading>
        <p>{{sections[0].text}}</p>
      </div>
    </UiBox>
  </UiPanel>

  <UiPanel style="max-height:68vh; overflow: hidden;">
    <UiBoxImg :img="img4"/>
  </UiPanel>

  <UiPanel class="UiTheme_dark">
    <UiBox>
      <div>
        <UiHeading :level="3">{{sections[2].heading}}</UiHeading>
        <p>{{sections[2].text}}</p>
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
    <UiBoxImg :img="img3"/>
  </UiPanel>
  
  <UiPanel class="UiTheme_dark">
    <UiBox class="iconListBox">
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

import WineStats from '@/components/modules/Wine/Stats'
import UiHeading from '@/components/UI/Heading'

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
    UiPanel, UiBox, UiBoxImg,
    UiButton, UiHeading,
    WineStats, StaticIconList,
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
#WinePage {
  &--header {
    min-height: 88vh;
  }
}
img#WineBottle {
  mix-blend-mode: multiply;
  max-height: 42em;
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>
<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/components/UI/Box/style";
.iconList {
  min-width: 68%;
  margin: 0 auto;
  &--item {
    margin: 0 auto;
    display: flex;
    align-items: center;
    & + & {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid Color(theme);
    }
    > * {
      margin: .5rem 2rem;
      &:last-child { margin: .5rem 0 .5rem auto }
    }
    &--label {
      text-transform: uppercase;
      font-weight: 600;
      color: Color(theme);
      letter-spacing: 0.1em;
    }
  }
  &--icon,
  .UiIcon {
    margin: 0;
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    .icon { fill: Color(theme) }
  }
  &Box { @extend %UiBox_compact; }
  p { line-height: 1.3 }
}
</style>
<style lang="scss">
@import "~@/styles/theme/colors";
.UiTheme_halves {
  flex: 0 auto !important;
  padding: 2rem 1rem !important;
  background-image: linear-gradient(
    to right,
    Color(cream) 50%,
    Color(light) 50%
  );
}
</style>