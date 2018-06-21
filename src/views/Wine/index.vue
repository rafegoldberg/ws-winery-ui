<template>
<UiPanel id="WinePage" class="UiTheme_cream">
  
  <UiBox>
    <WineStats v-bind="context"  style="margin:0 auto"/>
  </UiBox>
  <UiBox class="UiTheme_light"></UiBox>
  
</UiPanel>
</template>

<script>
import mockData from './mock.ferrington';

import WineStats from '@/components/Wine/Stats';
import UiPanel from '@/components/UI/Panel';
import UiBox from '@/components/UI/Box';

export default {
  name: "WinePage",
  components: {
    WineStats,
    UiPanel,
    UiBox,
  },
  props:{
    context:{ type:Object, default:()=>mockData }
  }
}
</script>

<style lang="scss" scoped>
#WinePage {
  h1, h2, { 
    font-weight: 900;
  }
}
</style>
