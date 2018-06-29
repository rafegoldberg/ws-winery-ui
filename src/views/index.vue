<template>
<div class="widgets" :class="{
  [`UiTheme_${theme}`]: theme,
  }">

  <UiPanel>
    <UiBoxImage :img="mock6" alt="Welcome">
      
      <header class="home--header" :style="{margin:'auto',marginLeft:0}">
        <UiHeading :level="2" :style="{maxWidth:'6em'}">
          <b>Schedule a private visit.</b>
        </UiHeading>
        <p>Visits are reserved for List members and are by appointment only.</p>
        <UiButton class="UiButton_outline">Reserve</UiButton>
      </header>

    </UiBoxImage>
  </UiPanel>
  
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
      <WineStats v-bind="mock5" :fields="mock5['ws:fields']"></WineStats>
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
import UiHeading from "@/components/UI/Heading"
import UiList from "@/components/UI/List"
import UiButton from "@/components/UI/Button"

import ActionBox from "@/components/ActionBox"
import MediaList from "@/components/MediaList"
import WineWidget from "@/components/Wine"
import WineStats from "@/components/Wine/Stats"

import mock0 from "@/components/ActionBox/mock/context.0.json"
import mock1 from "@/components/ActionBox/mock/context.1.json"
import mock2 from "@/assets/mock/welcome.png"
import mock3 from "@/assets/mock/indelible.png"
import mock4 from "@/assets/mock/visit.png"
import mock5 from "@/assets/mock/wine.ferrington.js"
import mock6 from '@/assets/mock/visit.png'

let
settings = {
  theme: 'dark'
}
if( window ) window.UiSettings = settings

export default {
  name: "WidgetsPage",
  components: {

    UiPanel, UiBox, UiBoxImage,
    UiHeading, UiList, UiButton,

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
    mock6:()=> mock6,
  }
}
</script>

