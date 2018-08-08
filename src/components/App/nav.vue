<template>
<nav id="AppNav">

  <router-link id="AppNav-logo" to="/">
    <UiIcon name="logo"
      height="auto"
      width="8.5rem"
      filter="url(#dropshadow)"
      />
  </router-link>
  
  <div id="AppNav-menu">
    <router-link
      v-if="cta"
      v-text="cta.text"
      :to="cta.link"
      id="AppNav-menuJoin"
      />
    <span id="AppNav-menuTrigger" class="AppMenuTrigger">
      <button @click="toggleMenu">
        <small>MENU  </small><UiIcon name="menu" width="1em" height="1em"/>
      </button>
      <AppMenu
        @click.stop
        ref="menu"
        />
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
  data:()=>({
    cta:{
      link: "/beta/join",
      text: "Join the List"
    }
  }),
  methods:{
    toggleMenu(setTo){
      if( typeof this.setTo !== 'undefined' )
        this.$refs.open = setTo
      else
        this.$refs.menu.toggle()
      return this.$refs.open
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
      // position: fixed;
      z-index: 10;
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
    &.rust  { color: mix(Color(theme),Color(cream)) }
  }
  & { // transition
    transition: color .2s 0s ease-in-out;
    transition-delay: 0s !important;
    transition-duration: .3s !important;
    transition-timing-function: ease-in-out !important;
  }
  &-logo {
    >svg {
      pointer-events: none;
    }
    @include Break( min-width Breaks(4) ){
      align-self: flex-start !important;
    }
    @include Break( max-width Breaks(4) ){
      >svg:only-child { width: 5rem !important }
    }
  }
  &-menu {
    --c: #{Color(theme)};
    color: var(--c);
  }
  &-menuJoin {
    display: inline-block;
    margin: 0 .6em 0 0;
    padding: 0 .6em 1px .7em;
    line-height: 1.5;
    font-size: .88em;
    font-weight: 600;
    font-variant: small-caps;
    text-decoration: none;
    text-transform: lowercase;
    letter-spacing: .05em;
    color: var(--c);
    border: 2px solid var(--c);
    border-radius: 6em;
    &.open {
      display: none;
    }
  }
  @include Break( max-width Breaks(4) ){
    padding: 0 1em;
    height: 4rem;
    background: rgba(250, 250, 250, .96);
    color: Color(slate) !important;
    box-shadow: -4px 0 2rem 4px rgba(48, 41, 3, 0.08);
  }
}
</style>
<style lang="scss">
@import "~@/styles/theme/breaks";

#AppNav {
  @include Break( min-width Breaks(3) ){
    position: relative !important;
    margin-bottom: -96px !important;
  }
}
#AppNav + [id] >:first-child {
  &[class*="UiBox"],
   [class*="UiBox"]{
    &:first-child { padding-top: 9rem }
    @include Break( min-width Breaks(3) ){ padding-top: 9rem }
  }
}
</style>
