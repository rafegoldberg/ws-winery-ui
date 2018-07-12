<template>
<div id="HistoryPage">
  <UiPanel :connect="'down'">
    <UiBoxImage :img="featureImage" style="height: 80vh;">
      <UiHeading>Our History</UiHeading>
    </UiBoxImage>
    <small slot="connect">Scroll Down</small>
  </UiPanel>
  <UiPanel>
    <UiBox>
      <Timeline v-if="!context.loading" :list="context.acf.timeline">
        <li slot-scope="item">
          {{item.year}}
          <br>
          <small v-html="item.text"></small>
        </li>
      </Timeline>
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
import WpConnect from "@/VuePress/mix/item"

import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiBoxImage from "@/components/UI/Box/Image"
import UiHeading from "@/components/UI/Heading"

import Timeline from "@/components/modules/Timeline"

import feat_img from "./assets/feat.png"

export default {
  name:"HistoryPage",
  mixins:[ WpConnect ],
  components:{
    UiPanel,
    UiBox,
    UiBoxImage,
    UiHeading,
    Timeline
  },
  data:()=>({
    featureImage: feat_img,
  })
}
</script>

<style>
</style>
