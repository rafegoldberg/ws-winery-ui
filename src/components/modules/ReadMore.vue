<template>
<a class="ReadMore" :href="href">

  <slot name="icon" v-if="icon && !textFirst">
    <UiIcon :name="icon" height="1em" width="1em"></UiIcon>
    <br>
  </slot>

  <slot>
    <b>{{text}}</b>
  </slot>
  
  <slot name="icon" v-if="icon && textFirst">
    <br>
    <UiIcon :name="icon" height="1em" width="1em"></UiIcon>
  </slot>

</a>
</template>

<script>
import UiIcon from '@/components/UI/Icon'
export default {
  name: "ReadMore",
  props:{
    href:{
      type: String,
      required: true
    },
    text:{
      type: String,
      default: "Read More"
    },
    icon:{
      type: [String,Boolean],
      default: "arrow-down"
    },
    textFirst:{
      type: Boolean,
      default: true
    }
  },
  components:{ UiIcon }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/extend/text.label";

.ReadMore {
  display: block;
  width: 100%;
  line-height: 1.2;
  &, >:only-child {
    text-decoration: none;
  }
  @include Break( max-width Breaks(3) ){
    text-align: center;
  }
  &_gold, &.gold {
    @extend .ReadMore;
    color: Color(theme);
  }
  &_center {
    text-align: center;
    justify-content: center;
  }
}
</style>

