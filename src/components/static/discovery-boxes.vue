<template>
<UiPanel>
  <UiBoxImage
      v-for="context in boxes"
      v-if="showBox(context)"
      :key="context.key"
      :img="context.background"
      >
    <DiscoverBox v-bind="context.box"/>
  </UiBoxImage>
</UiPanel>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiBoxImage from "@/components/UI/Box/Image"

import DiscoverBox from "@/components/modules/DiscoverBox"

let
boxes = [
  {
    key: "wines",
    background: "http://192.168.64.2/clients/ws3/wp-content/uploads/2018/07/our-wines.png",
    box: {
      icon:{ name: "CirclePlus" },
      header:{
        text: "Our Wines"
      },
      link:   "/our-wines"
    },
  },
  {
    key: "vineyards",
    box: {
      icon:{ name: "CirclePlus" },
      header:{
        text: "Our Vineyards"
      },
      link:   "/vineyards"
    },
  },
  {
    key: "history",
    background: "http://192.168.64.2/clients/ws3/wp-content/uploads/2018/07/our-vineyards.png",
    box: {
      icon:{ name: "CirclePlus" },
      header:{
        text: "Our History"
      },
      link:   "/history"
    },
  },
  {
    key: "people",
    background: "http://192.168.64.2/clients/ws3/wp-content/uploads/2018/07/our-people.png",
    box: {
      icon:{ name: "CirclePlus" },
      header:{
        text: "Our People"
      },
      link:   "/people"
    },
  }
]

export default {
  name: "DiscoveryBoxes",
  components: { UiPanel, UiBox, UiBoxImage, DiscoverBox },
  props:{
    wines:{ type: Boolean, default: false },
    vineyards:{ type: Boolean, default: false },
    history:{ type: Boolean, default: false },
    people:{ type: Boolean, default: false },
  },
  data:()=> ({ boxes }),
  methods:{
    showBox(ctx){
      return this[ctx.key]
    }
  },
}
</script>