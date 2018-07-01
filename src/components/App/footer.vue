<template>
<div id="AppFooter">
  <slot name="left">
    © Williams Selyem
  </slot>
  <slot name="right">
    <a href="#EXT">The Fine Print</a>
  </slot>
</div>
</template>

<style lang="scss" id="TEMP">
#AppFooter {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #FFF;
}
</style>