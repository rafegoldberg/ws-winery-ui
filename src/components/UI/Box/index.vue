<template>
<component :is="tag" class="UiBox" :class="{
    'UiBox_stack': stack
  }">
  <slot/>
</component>
</template>
<script>
import schema from './schema';
/**
 * A simple flexbox layout component. Intended for use within a `<UiPanel/>` wrapper.
 */
export default {
  name: "UiBox",
  props: schema
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
.UiBox {
  @extend %UiBox, %UiBox_center;  
  &_stack {
    flex-flow: nowrap column;
    align-items: center;
  }
}
</style>