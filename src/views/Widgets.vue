<template>
<div class="widgets" :class="{
  [`UiTheme_${theme}`]: theme,
  }">

  <Home></Home>

  <UiPanel class="UiTheme_cream">
    <UiBox :stack="true">
      <div>
        <UiHeading slot="header">
          Estate<br>Vineyards
        </UiHeading>
        <MediaList>
        </MediaList>
      </div>
    </UiBox>
  </UiPanel>

  <UiPanel class="-UiTheme_cream">
    <UiBoxImage v-bind="mImg0">
      <UiHeading>Welcome</UiHeading>
    </UiBoxImage>
    <UiBox>
      <ActionBox v-bind="mock0">
        <UiList slot-scope="slot" :list="slot"/>
      </ActionBox>
    </UiBox>
  </UiPanel>

  <UiPanel class="UiTheme_light">
    <UiBox class="UiTheme_cream">
      <WineWidget></WineWidget>
    </UiBox>
    <UiBox class="UiTheme_cream">
      <WineStats v-bind="mock5"></WineStats>
    </UiBox>
  </UiPanel>

  <UiPanel>
    <UiBox>
      <ActionBox v-bind="mock1" layout="float"/>
    </UiBox>
    <UiBoxImage v-bind="mImg2">
      <UiHeading>Visit</UiHeading>
    </UiBoxImage>
  </UiPanel>

</div>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiBoxImage from "@/components/UI/Box/Image"
import UiList from "@/components/UI/List"
import UiHeading from "@/components/UI/Heading"

import ActionBox from "@/components/ActionBox"
import MediaList from "@/components/MediaList"
import WineWidget from "@/components/Wine"
import WineStats from "@/components/Wine/Stats"

import mock0 from "@/components/ActionBox/mock/context.0.json"
import mock1 from "@/components/ActionBox/mock/context.1.json"
import mock2 from "./Home/mock/welcome.png"
import mock3 from "./Home/mock/indelible.png"
import mock4 from "./Home/mock/visit.png"
import mock5 from "./Wine/mock.ferrington.js"

import __TEMP__HP from "./Home"

let
settings = {
  theme: 'dark'
}
if( window ) window.UiSettings = settings

export default {
  name: "WidgetsPage",
  components: {

    Home: __TEMP__HP,
    
    UiBox, UiPanel,
    UiList, UiBoxImage, UiHeading,

    ActionBox, MediaList,
    
    WineWidget, WineStats
  },
  data: ()=> settings,
  computed:{
    mock0:()=> mock0,
    mock1:()=> mock1,
    mImg0:()=>({ img:mock2 }),
    mImg1:()=>({ img:mock3 }),
    mImg2:()=>({ img:mock4 }),
    mock5:()=> mock5,
  }
}
</script>

