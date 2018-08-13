<template>
<nav class="AdjacentNav">

  <router-link :class="{ hide:!prev }" :to="prev ? `${prev.slug}#top` : '#prev'">
    <UiIcon name="arrow-left" width=".75em" height=".75em"></UiIcon>
    Prior
  </router-link>

  <router-link :to="`${all}#top`">All</router-link>

  <router-link :class="{ hide:!next }" :to="next ? `${next.slug}#top` : '#next'">
    Next
    <UiIcon name="arrow-right" width=".75em" height=".75em"></UiIcon>
  </router-link>
  
</nav>
</template>

<script>
import UiIcon from "@/components/UI/Icon"
export default {
  name: "AdjacentNav",
  props:{
    all: { type:String, default:"." },
    next:{ type:[String,Object] },
    prev:{ type:[String,Object] },
  },
  components:{ UiIcon },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/extend/text.label";

%soft-hide {
  opacity: 0;
  pointer-events: none;
}

.AdjacentNav {
  & {
    &:not(:first-child) { margin-top: 1.5rem }
    &:not(:last-child) { margin-bottom: 1.5rem }
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
    &.hide {
      display: none;
      + a { margin-left: 0 }
    }
  }

  &_center {
    justify-content: center;
    a.hide { 
      @extend %soft-hide;
      display: inline;
      }
  }
  
  @include Break( max-width Breaks(4) ){
    text-align: center;
  }
}
</style>
