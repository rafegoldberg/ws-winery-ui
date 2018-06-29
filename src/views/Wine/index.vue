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
    <img :src="media" :alt="context.title.rendered" />
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
  <UiBoxImg :img="img3"/>
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
      <p class="iconList--item">
        <img :src="icon.bottles" class="iconList--icon">
        <span class="iconList--item--label">All Our Wines</span>
        <UiButton>Library</UiButton>
      </p>
      <p class="iconList--item">
        <img :src="icon.barrels" class="iconList--icon">
        <span class="iconList--item--label">How To Purchase</span>
        <UiButton>Purchasing</UiButton>
      </p>
      <p class="iconList--item">
        <img :src="icon.glasses" class="iconList--icon">
        <span class="iconList--item--label">Visit The Winery</span>
        <UiButton>Visit Us</UiButton>
      </p>
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

import img1 from "@/assets/mock/indelible.png"
import img2 from "@/assets/mock/harvest.png"
import img3 from "@/assets/mock/cellar.png"

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
@import "~@/styles/config/colors";
@import "~@/components/UI/Box/style";
.iconList {
  flex: 1 100%;
  &--item {
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    &:last-child { margin-bottom: 0 }
    > * {
      margin: .5rem auto .5rem 2rem;
      &:last-child {
        margin: .5rem 2rem .5rem auto;
      }
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
  img {
    mix-blend-mode: multiply;
  }
}
</style>