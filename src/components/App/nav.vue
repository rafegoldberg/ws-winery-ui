<template>
<nav id="AppNav">
<div id="AppNavWrap">

  <router-link to="/">
    <UiIcon id="AppNav-logo" name="logo" height="auto" width="9rem" :view="[0,0,180,45.71]"/>
  </router-link>
  
  <span class="AppMenuTrigger">
    <button @click="toggleMenu" style="all:unset">
      <UiIcon name="menu" width="1em" height="1em"/>
    </button>
    <AppMenu @click.stop ref="menu"/>
  </span>
  
</div>
</nav>
</template>

<script>
import AppMenu from "./menu"
import UiPanel from "@/components/UI/Panel"
import UiIcon from "@/components/UI/Icon"

export default {
  name: "AppNav",
  components:{ AppMenu, UiPanel, UiIcon },
  methods:{
    toggleMenu(){
      this.$refs.menu.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/extend/wrap";
#AppNav {
  & {
    position: sticky;
    z-index: 9;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    width: 100vw;
    height: 6rem;
    padding: 0 1em;
    
    user-select: none;
  }
  &[class*="UiTheme_light"],
  &[class*="UiTheme_cream"]{ color: Color(alt) }
  &[class*="UiTheme_dark"] { color: Color(theme) }
  
  &Wrap{
    @extend %wrap, %wrap_flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
}
</style>
