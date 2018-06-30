<template>

  <button class="UiButton">
    <!-- @slot Add rich markup to your button. -->
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
  &_gold, &.gold {
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
#### Using Props

Quickly pass a custom call-to-action:

```vue
<UiButton :cta="'First Do This'"/>
```

#### Using Slots

For more involved scenarios, you can pass custom markup directly to the `<UiButton/>`'s default slot:

```vue
<UiButton>
  Now Do <a href="#action"><b>That</b></a>
</UiButton>
```
</docs>