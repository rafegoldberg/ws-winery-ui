<template>
<div id="HistoryPage">

  <UiPanel :connect="'down'">
    <UiBoxImage :img="img.featured" style="height: 80vh;">
      <UiHeading :level="2" class="UiHeading_center">Discover<br>Our History</UiHeading>
    </UiBoxImage>
    <a href="#article" slot="connect">Scroll Down</a>
  </UiPanel>

  <UiPanel id="article">
    <UiBox tag="article" class="UiBox_stack">
      <UiHeading scale="3" class="UiHeading_space UiHeading_push÷2 UiHeading_gold UiHeading_center wrap_min">
        How does a lark become a passion and a passion become a legend?
      </UiHeading>
      <div class="columns wrap_mid" v-if="!context.loading" v-html="context.content.rendered"/>
      <a href="#timeline" class="@next">
        Highlights from their improbable journey
        <UiIcon name="ArrowDown" width="1em" style="display:block;margin:0 auto"/>
      </a>
    </UiBox>
  </UiPanel>

  <UiPanel>
    <UiBoxImage :img="img.casks" class="UiBoxImage_fixed UiBoxImage_vignette-z" style="height: 28rem; max-height: 70vh"/>
  </UiPanel>

  <UiPanel id="timeline" class="UiTheme_light">
    <UiBox class="UiBox_stack">
      <Timeline v-if="!context.loading" :list="context.acf.timeline" class="wrap_mid"/>      
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
import UiIcon from "@/components/UI/Icon"

import Timeline from "@/components/modules/Timeline"

import feat  from "./assets/feat.png"
import casks from "./assets/cellared-casks.png"

export default {
  name:"HistoryPage",
  mixins:[ WpConnect ],
  components:{
    UiPanel,
    UiBox,
    UiBoxImage,
    UiHeading,
    UiIcon,
    Timeline
  },
  data:()=>({
    img: {
      featured: feat,
      casks: casks,
    }
  })
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";
#HistoryPage {
  .columns {
    columns: 18rem;
    column-gap: 2rem;
    /deep/ > * {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
  .\@next {
    font-family: $ff-alt;
    font-style: italic;
    color: Color(theme);
    line-height: 1.3;
    margin-top: 1rem;
    text-decoration: none;
    text-align: center;
  }
}
</style>
