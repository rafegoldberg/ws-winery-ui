<template>
<UiPanel>
  <UiBoxImage v-for="box in boxes">
    <DiscoverBox></DiscoverBox>
  </UiBoxImage>
</UiPanel>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"

import DiscoverBox from "@/components/modules/DiscoverBox"

let
boxes = [
  {
    background: "http://192.168.64.2/clients/ws3/wp-content/uploads/2018/07/our-vineyards-alt.png",
    key: "discover-our-wines",
    box: {
      header: "Our Wines",
      link:   "/wines"
    },
  },
  {
    background: "http://192.168.64.2/clients/ws3/wp-content/uploads/2018/07/our-vineyards-alt.png",
    key: "discover-our-history",
    box: {
      header: "Our History",
      link:   "/history"
    },
  },
]
export default {
  name: "DiscoveryBoxes",
  components: { UiPanel, UiBox, DiscoverBox }
}
</script>