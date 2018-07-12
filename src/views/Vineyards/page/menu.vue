<template>
<nav id="VineyardsPage--overviewNav">

  <a href="#prior">
    <UiIcon name="arrow-left" width=".75em" height=".75em"></UiIcon>
    Prior
  </a>

  <router-link to="/vineyards">All</router-link>

  <a href="#next">
    Next
    <UiIcon name="arrow-right" width=".75em" height=".75em"></UiIcon>
  </a>
  
</nav>
</template>

<script>
import UiIcon from "@/components/UI/Icon"
export default {
  name: "VineyardsPageMenu",
  components:{ UiIcon },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/extend/text.label";

#VineyardsPage--overviewNav {
  > * + * {
    margin-left: 1rem;
  }

  a {
    @extend %text-label;
    display: inline-flex;
    align-items: center;
    &:first-child .UiIcon { margin-right: .4em }
    &:last-child  .UiIcon { margin-left:  .3em }
  }
  
  @include Break( max-width Breaks(4) ){
    text-align: center;
  }
}
</style>
