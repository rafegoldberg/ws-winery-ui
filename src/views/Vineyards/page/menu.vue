<template>
<nav id="VineyardsPage--overviewNav">

  <router-link v-if="prev" :to="prev">
    <UiIcon name="arrow-left" width=".75em" height=".75em"></UiIcon>
    Prior
  </router-link>

  <router-link :to="all">All</router-link>

  <router-link v-if="next" :to="next">
    Next
    <UiIcon name="arrow-right" width=".75em" height=".75em"></UiIcon>
  </router-link>
  
</nav>
</template>

<script>
import UiIcon from "@/components/UI/Icon"
export default {
  name: "VineyardsPageMenu",
  props:{
    all: { type:String, default:"." },
    next:{ type:String },
    prev:{ type:String },
  },
  components:{ UiIcon },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/extend/text.label";

#VineyardsPage--overviewNav {
  & {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    line-height: 2;
    @include Break( max-width Breaks(3) ) {
      justify-content: center;
      margin-bottom: 2rem;
    }
  }
  > * + * {
    margin-left: 1rem;
  }

  a {
    @extend %text-label;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    .UiIcon {
      transition: .2s ease-out;
    }
    &:first-child {
      .UiIcon {
        right: 100%;
        margin-right: .2em;
      }
      // &:hover .UiIcon { transform: translateX(-.36em) }
    }
    &:last-child  {
      .UiIcon {
        left: 100%;
        margin-left: .1em;
      }
      // &:hover .UiIcon { transform: translateX(.36em) }
    }
  }
  
  @include Break( max-width Breaks(4) ){
    text-align: center;
  }
}
</style>
