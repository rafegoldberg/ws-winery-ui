<template>
<component :is="tag" class="UiBox" :class="{
    'UiBox_stack': stack
  }">
  <!-- @slot Pass content and components to the `UiBox` -->
  <slot/>
</component>
</template>
<script>
/**
 * A simple flexbox layout component. Intended for use within a `<UiPanel/>` parent wrapper.
 */
export default {
  name: "UiBox",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    stack: {
      type: Boolean,
      default: false
    }
  }
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
  &_tall {
    height: 50vw;
    max-height: 75vh;
    min-height: min-content;
  }
}
</style>
<docs>
```vue
<UiBox>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.
  </p>
</UiBox>
```
</docs>