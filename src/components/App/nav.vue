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
    <ui-link
      v-if="cta"
      v-bind="cta"
      id="AppNav-menuJoin"
      />
    <span id="AppNav-menuTrigger" class="AppMenuTrigger">
      <button @click="toggleMenu">
        <small>MENU  </small><UiIcon name="menu" width="1em" height="1em"/>
      </button>
      <AppMenu
        :cta="cta"
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
  components:{
    AppMenu,
    UiPanel,
    UiIcon
  },
  props:[
    "cta",
    "tag"
  ],
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
  &-menuJoin {
    // TODO: extrapolate this in to a lower/separate style tag
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
    & {
      padding: 0 1em;
      height: 4rem;
      background: rgba(250, 250, 250, .96);
      color: Color(slate);
      box-shadow: -4px 0 2rem 4px rgba(48, 41, 3, 0.08);
      transition: .4s ease-out;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";

@mixin DualToneLogo {
  /deep/ .icon--text path,
  /deep/ .icon--ornament--rule {
    fill: Color(brand) !important;
  }
  /deep/ .icon--ornament--rinceau {
    fill: Color(dark) !important;
  }
  /deep/ .icon--text {
    filter: none !important;
  }
}

#AppNav {

  --c: #{Color(theme)}; // default

  &:not(.logoTheme_dualtone) {
    --c: #{Color(light)}; // logo default
    color: var(--c);
  }
  &.logoTheme_dualtone {
    @include DualToneLogo;
  }
  &.logoTheme_dark {
    --c: #{Color(dark)};
    color: Color(dark);
  }
  &.logoTheme_light {
    --c: #{Color(light)};
    color: Color(light);
  }

  &-menu {
    --c: #{Color(theme)};
    color: var(--c); // menu default
  }
  &.menuTheme_gold &-menu {
    --c: #{Color(theme)};
  }
  &.menuTheme_dark &-menu {
    --c: #{Color(dark)};
  }
  &.menuTheme_light &-menu {
    --c: #{Color(light)};
    button {
      text-shadow:
        0 1px 0 rgba(Color(dark),.3),
        0 -1px .5em rgba(Color(dark),.3);
    }
  }

  @include Break( max-width Breaks(4) ){
    &-logo {
      @include DualToneLogo();
    }
    &-menu {
      --c: #{Color(theme)} !important;
    }
  }
}
</style>


<style lang="scss">
@import "~@/styles/theme/breaks";

#AppNav {
  @include Break( min-width Breaks(4) ){
    position: relative !important;
    margin-bottom: -6rem !important;
    + [id] >:first-child [class*="UiBox"] {
      padding-top: 9rem;
    }
  }
}
</style>
