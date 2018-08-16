<template>
<a class="ReadMore" :class="classes.join(' ')" :href="href">

  <template v-if="textFirst">
  <slot name="icon">
    <UiIcon :name="icon || 'ArrowUp'" height="1em" width="1em"></UiIcon>
    <br>
  </slot>
  </template>

  <slot>
    <span v-html="text"/>
  </slot>
  
  <template v-if="!textFirst">
  <slot name="icon-last">
    <br>
    <UiIcon :name="icon || 'ArrowDown'" height="1em" width="1em"></UiIcon>
  </slot>
  </template>

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
    },
    textFirst:{
      type: Boolean,
      default: false
    },
    classes: {
      type: Array,
      default: []
    }
  },
  components:{ UiIcon }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";
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

  &_serif, &.serif {
    font-family: $ff-serif;
    font-weight: 500;
    font-style: italic;
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

