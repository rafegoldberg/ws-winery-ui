<template>
  <main id="VineyardsList" v-if="!context.loading">
    
    <UiPanel>
      <UiBoxImage :img="imgs.featImg">
        <UiHeading :level="1" :scale="2">
          {{page.title}}
        </UiHeading>
      </UiBoxImage>
    </UiPanel>

    <UiPanel class="UiTheme_cream">
      <UiBox :stack="true">
        <div>
          <router-view name="estate" title="Estate Vineyards"/>
        </div>
      </UiBox>
    </UiPanel>

    <UiPanel>
      <UiBoxImage/>
    </UiPanel>

    <UiBox>
      <router-view name="growers" title="Growers Vineyards"/>
    </UiBox>
      
    <UiPanel>
      <UiBoxImage/>
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

import MediaList from "@/components/modules/MediaList"

import featImg from "@/assets/mock/vineyard-feat.png"

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
    MediaList
  },
  computed:{
    page: ()=> pageSettings,
    imgs: ()=>({
      featImg
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
