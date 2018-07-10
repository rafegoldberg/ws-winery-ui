<template>
  <main id="VineyardsList" v-if="!context.loading">
    
    <UiPanel :connect="'down'">
      <UiBoxImage :img="imgs.feat" style="min-height:80vh">
        <UiHeading :level="1" :scale="2">
          {{page.title}}
        </UiHeading>
      </UiBoxImage>
      <a href="#estate-vineyards-panel" slot="connect">Scroll for More</a>
    </UiPanel>

    <UiPanel id="estate-vineyards-panel" class="UiTheme_cream">
      <UiBox :stack="true">
        <div>
          <v-list category="estate-vineyards" title="Estate Vineyards"/>
        </div>
      </UiBox>
    </UiPanel>

    <UiPanel>
      <UiBoxImage :img="imgs.casks" style="min-height:68vh"/>
    </UiPanel>

    <UiPanel class="UiTheme_cream">
      <UiBox>
        <v-list title="Growers Vineyards" category="growers-vineyards"/>
      </UiBox>
    </UiPanel>
      
    <UiPanel>
      <UiBoxImage :img="imgs.grapes" style="min-height:68vh"/>
    </UiPanel>

  </main>
  <UiBox v-else style="text-align: center; min-height: 68vh">
    Loading...
  </UiBox>
</template>

<script>
import WpConnect from "@/VuePress/mix/connect"

import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiBoxImage from "@/components/UI/Box/Image"
import UiHeading from "@/components/UI/Heading"
import UiList from "@/components/UI/List"

import VList from "./list"

import featImg from "@/assets/mock/vineyard-feat.png"
import casksImg from "@/assets/mock/vineyards-page/casks.png"
import grapesImg from "@/assets/mock/vineyards-page/grapes.png"

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
  mixins:[ WpConnect ],  
  components:{
    UiPanel, UiBox,
    UiBoxImage,
    UiList, UiHeading,
    VList
  },
  computed:{
    page: ()=> pageSettings,
    imgs: ()=>({
      feat:   featImg,
      casks:  casksImg,
      grapes: grapesImg,
    })
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
