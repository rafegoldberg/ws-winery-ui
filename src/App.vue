<template>  
<div id="app">

  <router-view/>
  <AppFooter class="UiTheme_dark"/>
  
</div>
</template>
<script>
import AppFooter from "@/components/App/footer"
export default {
  name:"App",
  components:{
    AppFooter,
  }
}
</script>

<style lang="scss" id="document">
@import "~@/styles/main";
@import "~@/styles/extend/themes";
</style>