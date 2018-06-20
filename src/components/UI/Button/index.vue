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
  &_outline {
    background-color: transparent;
    border: 3px solid currentColor;
    &:not(:hover) { opacity: .8 }
  }
}
</style>
