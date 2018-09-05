<template>
  <div id="app" :class="[
      ...$root.classes,
      `route_${$route.name}`
    ]">

    <AppNav
      :class="[...$root.navTheme]"
      v-bind="!site.loading
        ? site.navbar
        : {}"/>

    <router-view :key="$route.fullPath"/>
    
    <AppFooter
      v-if="!this.site.loading"
      v-bind="site.AppFooter"  
      class="UiTheme_dark"/>
      
  </div>
</template>

<script>
import WP from "@/VuePress/mix/API"

import AppFooter from "@/components/App/footer"
import AppNav from "@/components/App/nav"
import UiHeading from "@/components/UI/Heading"

export default {
  name:"App",
  mixins:[ WP ],
  beforeCreate() {
    document.addEventListener("touchstart", function(){}, true);
  },
  components:{
    AppNav,
    AppFooter,
    UiHeading,
  },
  asyncComputed:{
    site:{
      default: {
        navbar: {},
        loading: true
        },
      async get(){
        if( !this.API ) return {loading:true}
        let
        xhr = await this.API
          .namespace('acf/v3')
          .options()
          .id('options')
          .get()
          .then( rsp=> rsp.acf )

        // this.$log(Object.values(xhr.AppNav))

        return xhr
      }
    }
  },
}
</script>

<style lang="scss" id="document">
@import '~@/styles/main';
@import '~@/styles/extend/themes';

img[src*='preloader'][src*='.gif'] {
  min-width: 2.5rem;
  min-height: 2.5rem;
  width: 12vmin;
  height: 12vmin;
  max-width: 3rem;
  max-height: 3rem;
  opacity: 0.3;
}

img[src*="/default."][src*=".png"] {
  mix-blend-mode: normal !important;
}

p, li {
  br {
    content: "";
    display: block;
    height: 0;
    width: 100%;
    margin: -.15em 0;
  }
}

#app > [id] > .UiPanel:first-child > .UiBoxImage:first-child {
  @extend .textPop !optional;
}
</style>
