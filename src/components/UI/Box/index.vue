<template>
<component :is="tag" class="UiBox">
  <slot/>
</component>
</template>
<script>
import schema from './schema';
export default {
  name: "UiBox",
  props: schema
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
.UiBox {
  @extend %UiBox, %UiBox_center;
}
</style>