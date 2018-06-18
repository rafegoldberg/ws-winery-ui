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
@import "~@/styles/config/fonts";
@import "~@/styles/config/colors";
.UiButton {
  font-family: $ff-sans;
  font-weight: 500;
  color: Color(gallery);
  background: Color(gold);
  padding: .8em 1.5em;
  border: none;
  font-size: .7rem;
  letter-spacing: .1em;
  text-transform: uppercase;
}
</style>
