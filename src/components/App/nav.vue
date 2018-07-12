<template>
<nav id="AppNav">

  <router-link to="/">
    <UiIcon
      id="AppNav-logo"
      name="logo"
      height="auto"
      width="9rem"
      :view="[0,0,180,45.71]"
      filter="url(#dropshadow)"
      />
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
@import "~@/styles/theme/breaks";
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
  & { // theme

    color: Color(slate);
    &.light { color: Color(slate) }
    &.cream { color: Color(dark)  }
    &.dark  { color: Color(light) }
    &.rust  { color: Color(cream) }
  }
  & { // transition
    transition: color .2s 0s ease-in-out;
    transition-delay: 0s !important;
    transition-duration: .3s !important;
    transition-timing-function: ease-in-out !important;
  }
  @include Break( max-width Breaks(4) ){
    padding: 0 1em;
    height: 4rem;
    background: rgba(250, 250, 250, 0.9);
    color: Color(slate) !important;
    box-shadow: -4px 0 2rem 4px rgba(48, 41, 3, 0.08);
    &-logo {
      width: 8em;
    }
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
