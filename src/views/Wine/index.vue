<template>
<div v-if="!context.loading">

<UiPanel class="UiTheme_light">
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
    <div>
      <UiHeading :level="2" :scale="3">
        {{sections[0].heading}}
      </UiHeading>
      <p>{{sections[0].text | truncate}}
        <br>
        <a href="#more">Read more</a>
      </p>
    </div>
  </UiBox>
</UiPanel>

<UiPanel>
  <UiBox>
    <UiHeading>Technical Notes</UiHeading>
    <table>
      <tr>
        <th></th>
        <td></td>
      </tr>
    </table>
  </UiBox>
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
  <UiBoxImg :img="img3" class="UiBoxImage_fixed"/>
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

<UiPanel class="UiTheme_dark">
  <UiBox class="iconListBox">
    <section class="iconList">
      <div class="iconList--item">
        <img :src="icon.bottles" class="iconList--icon">
        <p>
          <span class="iconList--item--label">All Our Wines</span>
          <br>
          <small>Visit our wine library to find a specific bottle or peruse our full collection.</small>
        </p>
        <UiButton>Library</UiButton>
      </div>
      <div class="iconList--item">
        <img :src="icon.barrels" class="iconList--icon">
        <p>
          <span class="iconList--item--label">How To Purchase</span>
          <br>
          <small>Our wines are available twice a year for purchase.</small>
        </p>
        <UiButton>Purchasing</UiButton>
      </div>
      <div class="iconList--item">
        <img :src="icon.glasses" class="iconList--icon">
        <p>
          <span class="iconList--item--label">Visit The Winery</span>
          <br>
          <small>Arrange a private tour and tasting tailored specifically for you.</small>
        </p>
        <UiButton>Visiting</UiButton>
      </div>
    </section>
  </UiBox>
</UiPanel>

</div>
</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import loFlat from "lodash/flatten"
import loPick from "lodash/pick"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImg from '@/components/UI/Box/Image'
import UiButton from '@/components/UI/Button'

import WineStats from '@/components/Wine/Stats'
import UiHeading from '@/components/UI/Heading'

import getTexts from "./lib/parse.wpContent"
import getTerm  from "./lib/get.wpTerm"
import getImage from "./lib/get.wpImage"

import img1 from "@/assets/mock/table.png"
import img2 from "@/assets/mock/cellar.png"
import img3 from "@/assets/mock/harvest.png"
// import img4 from "@/assets/mock/grapes.png"

import icon_bottles from "@/assets/icons/bottles.svg"
import icon_barrels from "@/assets/icons/barrels.svg"
import icon_glasses from "@/assets/icons/glasses.svg"

export default {
  name: "WinePost",
  props:[ 'slug', 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel, UiBox, UiBoxImg,
    UiButton, UiHeading, WineStats
  },
  methods:{ getTerm },
  computed:{
    icon(){
      return {
        bottles: icon_bottles,
        barrels: icon_barrels,
        glasses: icon_glasses,
      }
    },

    img1: ()=> img1,
    img2: ()=> img2,
    img3: ()=> img3,

    media:    getImage,
    sections: getTexts,
    embed(){ 
      if( this.context.loading ) return
      return this.context._embedded
    },
    details(){
      return loPick( this['ws:fields'], ['key1','key2'] )
    },
    terms(){
      if( this.context.loading || !this.embed ) return
      // return this.embed['wp:term']
      return loFlat(this.embed['wp:term'])
    },
  }
}
</script>

<style lang="scss">
img#WineBottle {
  mix-blend-mode: multiply;
  max-height: 33em;
  max-width: 88%;
  width: auto;
  height: auto;
}
</style>
<style lang="scss">
@import "~@/styles/config/colors";
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
  &--icon {
    margin: 0;
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }
  &Box { @extend %UiBox_compact; }
  p { line-height: 1.3 }
}
</style>
<style lang="scss">
@import "~@/styles/config/colors";
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