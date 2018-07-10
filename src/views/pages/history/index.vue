<template>
<div id="HistoryPage">
  <UiPanel :connect="'down'">
    <UiBoxImage :img="featureImage" style="height: 88vh;"/>
    <small slot="connect">Scroll Down</small>
  </UiPanel>
  <UiPanel>
    <UiBox>
      <UiHeading>👋🌍</UiHeading>
    </UiBox>
  </UiPanel>
  <UiPanel :connect="'up'" class="UiTheme_dark">
    <UiBox>
      <UiHeading>Hello World</UiHeading>
    </UiBox>
  </UiPanel>
</div>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiBoxImage from "@/components/UI/Box/Image"
import UiHeading from "@/components/UI/Heading"

import feat_img from "./assets/feat.png"

export default {
  name:"HistoryPage",
  components:{
    UiPanel,
    UiBox,
    UiBoxImage,
    UiHeading
  },
  data:()=>({
    featureImage: feat_img,
  })
}
</script>

<style>
</style>
