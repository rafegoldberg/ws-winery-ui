<template>

  <button class="UiButton">
    <slot>{{cta}}</slot>
  </button>

</template>
<script>
export default {
  name: "UiButton",
  props: {
    cta: { type:String, required:false }
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
.UiButton {
  &.gold {
    color: Color(theme);
  }
  &_outline {
    background-color: transparent;
    border: 3px solid currentColor;
    &:not(:hover) { opacity: .8 }
  }
}
</style>
<docs>
### Using Props

```vue
<UiButton :cta="'Do This'"/>
```

### Using Slots

```vue
<UiButton>
  <!-- custom inner markup -->
  Schedule a 
  <a href="#action"><b>Visit</b></a>
</UiButton>
```
</docs>