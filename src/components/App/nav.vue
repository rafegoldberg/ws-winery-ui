<template>
<nav id="AppNav">

  <router-link to="/">
    <UiIcon id="AppNav-logo" name="logo" height="auto" width="9rem" :view="[0,0,180,45.71]"/>
  </router-link>
  
  <span class="AppMenuTrigger">
    <button @click="toggleMenu">
      <small>MENU  </small><UiIcon name="menu" width="1em" height="1em"/>
    </button>
    <AppMenu @click.stop ref="menu"/>
  </span>

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
    & { // outer layout
      position: sticky;
      position: fixed;
      z-index: 9;
      top: 0;
      left: 0;
      width: 100vw;
      height: 6rem;
    }
    & { // inner layout
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
    }
    user-select: none;
  }
  & { // scroll theme
    transition: .38s 0s ease-out;
    &.light { color: Color(slate) }
    &.cream { color: Color(alt)   }
    &.dark  { color: Color(light) }
  }
}
</style>
<style lang="scss">
@import "~@/styles/theme/breaks";
#AppNav + [id] >:first-child {
  &[class*="UiBox"],
   [class*="UiBox"]{
    &:first-child { padding-top: 9rem }
    @include Break( min-width Breaks(3) ){ padding-top: 9rem }
  }
}
</style>
