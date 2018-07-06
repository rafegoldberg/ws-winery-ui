<template>  
<div id="app">

  <AppNav/>
  
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
</style>
