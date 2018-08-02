<template>
<div id="AppFooter">
<div id="AppFooterWrap">

  <slot name="left">
    © 2018 Williams Selyem Winery
  </slot>

  <slot name="right">
    <a href="#EXT">The Fine Print</a>
  </slot>

</div>
</div>
</template>

<style lang="scss" id="TEMP">
@import "~@/styles/theme/colors";
@import "~@/styles/extend/wrap";
#AppFooter {
  border-top: 1px solid rgba(255, 255, 255, 0.178);
  padding: 0 1rem;
  &Wrap { 
    @extend %wrap;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    color: Color(creamDark);
  }
}
</style>