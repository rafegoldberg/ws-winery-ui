<template>  
<div id="app">

  <AppNav class="UiTheme_light_translucent"/>
  <router-view/>
  <AppFooter class="UiTheme_dark"/>
  
</div>
</template>
<script>
import AppFooter from "@/components/App/footer"
import AppNav from "@/components/App/nav"
export default {
  name:"App",
  components:{
    AppNav, AppFooter,
  }
}
</script>

<style lang="scss" id="document">
@import "~@/styles/main";
@import "~@/styles/extend/themes";
</style>