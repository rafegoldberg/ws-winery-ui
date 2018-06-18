<template>
<div class="home" :class="{
  [`UiTheme_${theme}`]: theme || 'light'
  }">

  <div class="UiPanel">
    <div class="UiBox">
      <WineWidget></WineWidget>
    </div>
    <div class="UiBox">
      <ActionBox v-bind="mock0">
        <UiList slot-scope="slot" :list="slot"></UiList>
      </ActionBox>
    </div>
  </div>

  <div class="UiPanel">
    <div class="UiBox">
      <ActionBox v-bind="mock1">
      </ActionBox>
    </div>
  </div>

</div>
</template>

<script>
import UiList from "@/components/UI/List"
import ActionBox from "@/components/ActionBox"
import WineWidget from "@/components/Wine"

import data0 from "@/components/ActionBox/mock/context.0.json"
import data1 from "@/components/ActionBox/mock/context.1.json"

let
settings = {
  theme: 'dark'
}

export default {
  name: "WidgetsPage",
  components: {
    UiList,
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
