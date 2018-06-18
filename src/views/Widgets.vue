<template>
<div class="home" :class="{
  [`UiTheme_${theme}`]: theme || 'light'
  }">

  <div class="UiPanel">
    <UiBox>
      <WineWidget></WineWidget>
    </UiBox>
    <UiBox>
      <ActionBox v-bind="mock0">
        <UiList slot-scope="slot" :list="slot"></UiList>
      </ActionBox>
    </UiBox>
  </div>

  <div class="UiPanel">
    <UiBox>
      <ActionBox v-bind="mock1">
      </ActionBox>
    </UiBox>
  </div>

</div>
</template>

<script>
import UiList from "@/components/UI/List"
import UiBox from "@/components/UI/Box"
import ActionBox from "@/components/ActionBox"
import WineWidget from "@/components/Wine"

import data0 from "@/components/ActionBox/mock/context.0.json"
import data1 from "@/components/ActionBox/mock/context.1.json"

let
settings = {
  theme: 'cream'
}

export default {
  name: "WidgetsPage",
  components: {
    UiList, UiBox,
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
