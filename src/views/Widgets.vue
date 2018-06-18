<template>
<div class="home" :class="{
  [`UiTheme_${theme}`]: theme,
  }">

  <UiPanel>
    <UiBox>
      <ActionBox v-bind="mock0">
        <UiList slot-scope="slot" :list="slot"/>
      </ActionBox>
    </UiBox>
  </UiPanel>

  <UiPanel class="UiTheme_cream">
    <UiBox class="UiTheme_dark">
      <WineWidget></WineWidget>
    </UiBox>
    <UiBox>
      <ActionBox v-bind="mock1" layout="float"/>
    </UiBox>
  </UiPanel>

</div>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiList from "@/components/UI/List"

import ActionBox from "@/components/ActionBox"
import WineWidget from "@/components/Wine"

import data0 from "@/components/ActionBox/mock/context.0.json"
import data1 from "@/components/ActionBox/mock/context.1.json"

let
settings = {
  theme: 'light'
}
if( window ) window.UiSettings = settings

export default {
  name: "WidgetsPage",
  components: {
    UiList, UiBox, UiPanel,
    ActionBox,
    WineWidget
  },
  data: ()=> settings,
  computed:{
    mock0(){ return data0 },
    mock1(){ return data1 },
  }
}
</script>
