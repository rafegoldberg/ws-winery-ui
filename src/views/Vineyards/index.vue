<template>

  <AppLoad
    v-if="context.loading"
    />
  <main id="VineyardsListPage" v-else>
    
    <UiPanel :connect="'down'">
      <UiBoxImage :img="imgs.feat" class="UiBox_tall">
        <UiHeading :level="1" :scale="2">
          {{page.title}}
        </UiHeading>
      </UiBoxImage>
    </UiPanel>

    <UiPanel>
      <UiBox class="UiBox_stack UiBox_connectedBottom wrap_flex_min">
        <UiHeading class="UiHeading_center UiHeading_gold">Greatness in the bottle starts with greatness in the vineyard.</UiHeading>
        <p style="text-align: justify">First things first. Every bottle of wine is born in the vineyard. That’s why we are so particular about the way we source grapes. The grapes have to be exceptional, or no amount of knowledge, effort, time or craft will turn them into exceptional wine.</p>
        <a @click="e=> e.path[2].nextElementSibling.nextElementSibling.scrollIntoView(true)" class="UiButton UiButton_outline UiButton_gold">View Our Vineyards</a>
      </UiBox>
    </UiPanel>
    
    <UiPanel>
      <UiBoxImage :img="imgs.about" class="UiBox_tall" style="background-position: top center"/>
    </UiPanel>

    <UiPanel>

      <UiBox class="VinyardsPage--about  UiBox_connectedTop">
        <div class="wrap_tiny">
          <UiHeading class="UiHeading_gold" :level="4">Buying Grapes</UiHeading>
          <p>In the beginning, all of our grapes were purchased from existing vineyards, based on deals sealed with nothing but a handshake. Thirty-five years later, nearly all of those “handshake agreements” are still in place—a testament to the loyal, personal relationships our founders established with the region’s most respected grape growers.</p>
          <p>There is no doubt that our success was built on partnering with these growers. Some are neighbors, located right here in the Russian River Valley. Others tend vineyards in Sonoma and Mendocino counties. Each has something unique to contribute; all are committed to producing wine grapes without peer.
          </p>
          <br>
          <ReadMore text="Our Growers Vineyards" href="#growers-vineyards" class="ReadMore_center ReadMore_gold"/>
          <br>
        </div>
        <div class="wrap_tiny">
          <UiHeading class="UiHeading_gold" :level="4">Growing Grapes</UiHeading>
          <p>As the popularity of our wines grew, our growers were unable to keep up with the increased demand. The next logical step was to start growing some of our own grapes.</p>
          <p>In 1998, we purchased the Drake property in Guerneville—a riverside orchard which had once provided apples for Gerber baby foods—and started cultivating Pinot Noir grapes on the land. In the intervening years, we have purchased and developed four more Estate vineyards.</p>
          <p>In 2009, Wine Enthusiast Magazine awarded our 2007 Litton Estate Pinot Noir a score of 100 points, marking the first time a major wine publication gave a California Pinot Noir a perfect score. We take great pride that this prestigious honor went to a wine made entirely with grapes from one of our own Estate vineyards.</p>
          <br>
          <ReadMore text="Our Estate Vineyards" href="#estate-vineyards" class="ReadMore_center ReadMore_gold"/>
          <br class="hide_mobile">
        </div>
      </UiBox>

    </UiPanel>

    <UiPanel>
      <UiBoxImage :img="imgs.casks" class="UiBox_tall"/>
    </UiPanel>

    <UiPanel id="estate-vineyards" class="UiTheme_cream">
      <v-list :category="25" title="Estate Vineyards"/>
      <div class="VinyardsPage--list-readMore">
        <ReadMore class="ReadMore_gold ReadMore_center" href="#growers-vineyards">
          <em class="serif">Our Growers Vineyards</em>
        </ReadMore>
      </div>
    </UiPanel>

    <UiPanel>
      <UiBoxImage :img="imgs.grapes" class="UiBox_tall"/>
    </UiPanel>

    <UiPanel id="growers-vineyards" class="UiTheme_cream">
      <v-list :category="26" title="Growers Vineyards"/>
      <div class="VinyardsPage--list-readMore">
        <ReadMore class="ReadMore_gold ReadMore_center" href="#estate-vineyards" icon="ArrowUp" :textFirst="false">
          <em class="serif">Our Estate Vineyards</em>
        </ReadMore>
      </div>
    </UiPanel>

    <DiscoveryBoxes :people="true" :history="true" :wines="true"/>

  </main>

</template>

<script>
import WpConnect from "@/VuePress/mix/connect"
import navTheme from "@/includes/NavTheme/mixin"

import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiBoxImage from "@/components/UI/Box/Image"
import UiHeading from "@/components/UI/Heading"
import UiList from "@/components/UI/List"

import VList from "./list"
import ReadMore from "@/components/modules/ReadMore"
import DiscoveryBoxes from "@/components/static/discovery-boxes"

import featImg from "@/assets/mock/vineyard-feat.png"
import casksImg from "@/assets/mock/vineyards-page/casks.png"
import grapesImg from "@/assets/mock/vineyards-page/grapes.png"
import aboutImg from "@/assets/mock/vineyards-page/about.png"

let pageSettings = {
  title: "Discover Our Vineyards",
}

export default {
  name: "VineyardsList",
  props:[
    'type',
    'category',
    'parent',
    'include',
    'exclude',
  ],
  mixins:[ WpConnect, navTheme ],  
  
  beforeRouteEnter(to,from,next){
    next(self=> self.navTheme_update({
      menu: "menuTheme_light",
      // brand: "logoTheme_light"
      }))
  },

  components:{
    UiPanel, UiBox,
    UiBoxImage,
    UiList, UiHeading,
    VList,
    ReadMore,
    DiscoveryBoxes
  },
  computed:{
    page: ()=> pageSettings,
    imgs: ()=>({
      feat:   featImg,
      casks:  casksImg,
      grapes: grapesImg,
      about:  aboutImg,
    })
  },
  metatags:{
    title: "Our Vineyards",
  },
  methods: {
    fetch() {
      let ep = this.endpoint
      
      if( this.parent )
        ep = ep.parent(this.parent)
      if( this.category )
        ep = ep.category(this.category)
      if( this.include )
        ep = ep.include(this.include)
      if( this.exclude )
        ep = ep.exclude(this.exclude)

      return ep
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/components/UI/Button/style";
.UiPanel[id$="-vineyards"] {
  display: block !important;
}
.VinyardsPage {
  &--about {
    & > * {
      &:first-child { margin: -15rem 3rem 0 auto }
      &:last-child { margin: 15rem auto 0 3rem  }
    }

    $mq: (Breaks(2) + Breaks(3))/2;
    @include Break( max-width Breaks(3) ){
      flex-flow: nowrap column;
      & > * {
        margin: 3rem 0 0 !important;
        &:first-child { margin-top: 0 !important }
      }
    }

  }
  &--list {
    &-readMore {
      position: relative;
      z-index: 2;
      text-align: center;
      transform: translateY(-3rem);
      padding: 1.5rem 0 0;
    }
  }
}
</style>
