<template>
  <router-link class="DiscoverBox" :to="link">
    <header class="DiscoverBox--header">
      <small class="DiscoverBox--discoverText">Discover</small>
      <UiHeading v-bind="header"/>
    </header>
    <UiIcon v-bind="icon"/>
  </router-link>
</template>

<script>
import UiHeading from '@/components/UI/Heading'
import UiIcon from '@/components/UI/Icon'
export default {
  name: "DiscoverBox",
  props:{
    header: { type: Object },
    link:   { type: String },
    icon:   { type: Object }
  },
  components:{
    UiHeading,
    UiIcon,
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
.DiscoverBox {

  text-align: center;
  text-decoration: none;
  
  @include Break( min-width Breaks(3) ){
    .UiBoxImage > &:only-child { margin-top: 32vmin }
  }
  @include Break( max-width Breaks(3) ){
    .UiBoxImage > &:only-child {
      margin: 0;
    }
  }

  /deep/ .UiIcon path[fill] { fill:  Color(light) !important }
  /deep/ .UiIcon [stroke]   {
    stroke: transparent !important;
    transition: all .38s ease-out;
  }
  &:hover /deep/ .UiIcon [stroke]   { stroke: Color(light) !important }
  
  &--header {
    // margin-bottom: .5em;
    .UiHeading {
      line-height: 1;
    }
  }
  &--discoverText {
    text-transform: uppercase;
    letter-spacing: .3em;
    // font-weight: lighter;
    color: Color(theme);
    text-shadow: 0 1px 5px rgba(25,25,25,.75)
  }
}
</style>
