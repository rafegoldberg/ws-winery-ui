<template>
<UiPanel id="AppNav">
<div id="AppNavWrap">

  <UiIcon name="logo" height="3.5em" width="7em" color="#CB3E3D"/>
  <UiIcon name="menu" width="1em" height="1em"></UiIcon>
  
</div>
</UiPanel>
</template>

<script>
import icons from "@/icons"
import UiPanel from "@/components/UI/Panel"
import UiIcon from "@/components/UI/Icon"
export default {
  name: "AppNav",
  components:{ UiPanel, UiIcon, ...icons }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/extend/container";
#AppNav {
  & {
    background: rgba(Color(light),.975);
    z-index: 9;
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    max-height: 6rem;
    color: Color(dark);
    padding: 0 1em;
  }
  &Wrap{
    @extend %container, %container_flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;
  }
}
</style>
