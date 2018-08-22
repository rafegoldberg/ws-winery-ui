<template>
  <div id="AppFooter">
    <div id="AppFooterWrap">

      <slot name="left">
        © {{year}} {{copyright}}
      </slot>

      <slot name="right">
        <a :href="link">The Fine Print</a>
      </slot>

    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  props:[ "copyright", "link" ],
  computed:{
    year: ()=> new Date(Date.now()).getFullYear(),
  }
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/styles/extend/wrap";
#AppFooter {
  border-top: 1px solid rgba(255, 255, 255, 0.178);
  padding: 0 1rem;
  font-size: .88rem;
  &Wrap { 
    @extend %wrap;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    color: Color(creamDark);
  }
}
</style>