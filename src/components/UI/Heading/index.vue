<template>
<div :is="`h${level}`" :class="{
  UiHeading: true,
  [`UiHeading_scale${scale||level}`]: true,
  }">

  <slot/>

</div>
</template>

<script>
export default {
  name: "UiHeading",
  props:{
    level:{ type: [String,Number], default:3 },
    scale:{ type: [String,Number] },
  }
}
</script>

<style lang="scss">
@import "~@/styles/tools/em";
@import "~@/styles/config/scale";
@import "~@/styles/config/colors";
@import "~@/styles/config/fonts";

.UiHeading {
  font-family: $ff-serif;
  font-weight: 300;
  // color: Color(theme);
  @for $i from 1 through 6 {
    &_scale#{$i} {
      font-size: Size(-$i);
    }
  }
}
</style>
