<template>
<div class="home">

  <div class="UiPanel UiTheme_cream">
    <div class="UiBox">
      <p>Winery visits are reserved for List members only. Allow us to arrange a tour and tasting tailored specifically for you. You may schedule a visit for up to six people. During your visit, your party will be hosted individually; while you’re here, we don’t want you to feel like customers on a tour. We want you to feel like guests in our home.</p>
    </div>
  </div>

  <div class="UiPanel">
    <div class="UiBox">
      <WineWidget></WineWidget>
    </div>
    <div class="UiBox" style="flex:0 0 42%">
      <ActionBox v-bind="mock0">
        <UiList slot-scope="slot" :list="slot"></UiList>
      </ActionBox>
    </div>
  </div>

  <div class="UiPanel UiTheme_dark">
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

export default {
  name: "WidgetsPage",
  components: {
    UiList,
    ActionBox,
    WineWidget
  },
  computed:{
    mock0(){ return data0 },
    mock1(){ return data1 },
  }
}
</script>
