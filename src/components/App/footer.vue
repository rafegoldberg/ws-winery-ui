<template>
<div id="AppFooter">
<div id="AppFooterWrap">

  <slot name="left">
    © Williams Selyem
  </slot>

  <slot name="right">
    <a href="#EXT">The Fine Print</a>
  </slot>

</div>
</div>
</template>

<style lang="scss" id="TEMP">
@import "~@/styles/extend/container";
#AppFooter {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.178);
  &Wrap { 
    @extend %container;
  }
}
</style>