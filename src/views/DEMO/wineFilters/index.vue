<template>
<div id="WineFiltersWrap">
<UiPanel id="WineFiltersWrap--inner">
<UiBox>

  <div class="WineFilters">wine filters!</div>
  
</UiBox>
</UiPanel>
</div>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"

export default {
  name: "WineFilters",
  components:{
    UiPanel,
    UiBox
  },
}
</script>

<style lang="scss" scoped>
.WineFilters {
  color: magenta;
}
</style>
