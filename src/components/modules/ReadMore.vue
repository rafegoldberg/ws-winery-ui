<template>
<a class="ReadMore" :href="href">
  <slot>{{text}}</slot>
  <br>
  <slot name="icon" v-if="icon">
    <UiIcon :name="icon" height="1em" width="1em"></UiIcon>
  </slot>
</a>
</template>

<script>
import UiIcon from '@/components/UI/Icon'
export default {
  name: "ReadMore",
  props:{
    href:{ type:String, required:true        },
    text:{ type:String, default:"Read More"  },
    icon:{ type:[String,Boolean], default:"arrow-down" },
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
    font-weight: bold;
  }
  @include Break( max-width Breaks(3) ){
    text-align: center;
  }
  &_gold {
    @extend .ReadMore;
    color: Color(theme);
  }
  &_center {
    text-align: center;
    justify-content: center;
  }
}
</style>

