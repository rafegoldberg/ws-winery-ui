<template>
<div id="WinePage" v-if="!context.loading">

  <UiPanel id="WinePage--header" class="UiTheme_light">
    <UiBox class="UiTheme_cream">
      <WineList v-bind="{category}"/>
    </UiBox>
  </UiPanel>
  
</div>
<UiBox v-else style="text-align: center; min-height: 68vh">Loading...</UiBox>
</template>

<script>
import WineList from "@/components/modules/Wine/list"
export default {
  name: "WineArchive",
  props:['category'],
  components:{ WineList }
}
</script>

<style lang="scss" scoped>
</style>
