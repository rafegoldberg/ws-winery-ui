<template>  
<div id="app">

  <AppNav class="UiTheme_light_translucent"/>
  
  <router-view :key="$route.fullPath"/>
  
  <AppFooter class="UiTheme_dark"/>
  
</div>
</template>
<script>
import AppFooter from "@/components/App/footer"
import AppNav from "@/components/App/nav"
import UiHeading from "@/components/UI/Heading"
export default {
  name:"App",
  components:{
    AppNav,
    AppFooter,
    UiHeading,
  }
}
</script>

<style lang="scss" id="document">
@import "~@/styles/main";
@import "~@/styles/extend/themes";
</style>
<style lang="scss" id="@stage:css/nav" notes="hot take on the XD designs; temporary">
@import "~@/styles/theme/breaks";
#AppNav {
  position: fixed !important;
  background: transparent;
  color: rgb(140,140,140) !important;
  + [id] >:first-child {
    &[class*="UiBox"],
    [class*="UiBox"]{
    &:first-child { padding-top: 9rem }
    @include Break( min-width Breaks(3) ){ padding-top: 9rem }
    }
  }
}
</style>
