<template>
  <div id="app">

    <AppNav/>
    <router-view :key="$route.fullPath"/>
    <AppFooter class="UiTheme_dark" />
      
    <!-- <template v-if="$route.name.toLowerCase().indexOf('beta')<0">
    </template>
    <template v-else>
      <router-view/>
    </template> -->

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
@import '~@/styles/main';
@import '~@/styles/extend/themes';

img[src*='preloader'][src*='.gif'] {
  width: 3rem;
  height: 3rem;
  opacity: 0.3;
}

p, li {
  br {
    content: "";
    display: block;
    height: 0;
    width: 100%;
    margin: -.5em 0;
  }
}
</style>
