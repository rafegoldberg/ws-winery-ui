<template>

  <component :is="tag" v-view="$scrollIntersect" class="UiPanel">
    <slot/>
  </component>

</template>
<script>
/**
 * The `<UiPanel/>` is a full-width layout component. Each panel should contain a set of `<UiBox/>` child components. In some ways it's similar to Bootstrap's `.row > .col-*` construct. Except we're using flexbox to pull of some neat tricks that Bootstrap would never even dream to touch.
 */
export default {
  name: "UiPanel",
  props:{ tag:{ default:"div" } }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/theme/scale";
.UiPanel {
  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-flow: nowrap row;
  @media ( min-width:800px ) {
    > * { flex: 1 }
  }
  @media ( max-width:800px ) {
    flex-flow: nowrap column;
    > * {
      width: 100%;
    }
  }
  // display: grid;
  // grid-template-columns: repeat(2,1fr);
  // grid-gap: 0;
}
</style>
<docs>
```vue
<div>

  <UiPanel class="UiTheme_cream">
    <UiBox>
      <h1>Hello.</h1>
    </UiBox>
    <UiBox class="UiTheme_light">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.</p>
    </UiBox>
  </UiPanel>

  <UiPanel class="UiTheme_dark">
    <UiBox class="UiTheme_light">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.</p>
    </UiBox>
    <UiBox>
      <h1>Goodbye.</h1>
    </UiBox>
  </UiPanel>

</div>
```
</docs>