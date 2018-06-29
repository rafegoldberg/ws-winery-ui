<template>
<UiPanel v-if="!context.loading" class="UiTheme_light">

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
      <aside v-html="sections[0].text"></aside>
    </div>
  </UiBox>

</UiPanel>
</template>

<script>
import loFlat from "lodash/flatten"
import WpConnect from "@/VuePress/mix/item"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImg from '@/components/UI/Box/Image'

import WineStats from '@/components/Wine/Stats'
import UiHeading from '@/components/UI/Heading'

import getTexts from "./lib/parse.wpContent"
import getTerm  from "./lib/get.wpTerm"
import getImage from "./lib/get.wpImage"

export default {
  name: "WinePost",
  props:[ 'slug', 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel, UiBox, UiBoxImg,
    UiHeading, WineStats
  },
  methods:{ getTerm },
  computed:{
    media:   getImage,
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
  }
};
</script>

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
<style lang="scss" scoped>
.WinePost {
  &--hierarchy {
    list-style: none;
  }
  &--category {
    display: inline-block;
    text-transform: capitalize;

    font-size: .88em;
    font-weight: 100;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    & + &:before {
      content: "/";
      display: inline-block;
      margin: 0 .3em;
    }
  }
}
img {
  width: auto;
  min-height: 38vh;
  max-height: 22em;
}
</style>