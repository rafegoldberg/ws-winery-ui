const
assetPath = process.env.NODE_ENV=='production' ? '/wp-content/themes/ws-ui/dist/' : '/'
__webpack_public_path__ = new URL( assetPath, window.location.origin )

// import API from "@/VuePress/WP"
import Vue from "vue"

Vue.config.devtools = true
Vue.config.productionTip = false

import "@/includes/use/log"
import "@/includes/use/meta"
import "@/includes/use/async"
import "@/includes/use/scrollView"
import "@/includes/use/googleMaps"

import {truncate} from "@/includes/filters/truncate"
import {round} from "@/includes/filters/round"
import {titleize} from 'inflection'
Vue.filter( "truncate", truncate )
Vue.filter( "round", round )

import AppLoad from "@/components/App/load"
Vue.component('AppLoad',AppLoad)

import UiLink from "@/components/UI/Link"
Vue.component('UiLink',UiLink)

import App from "./App.vue"
import router from "@/includes/use/router"
let
options = {
  showFilters: false,
  filters:{
    search: "",
    categories:[],
    tags:[],
    varietals:[],
    AVA:[]
  },
  classes:[ 'app' ],
}

new Vue({
  router,
  data:()=>options,
  render: h=> h(App),
  metatags(){
    let
    slug = (this.$route.params.slug || 'Welcome').replace(/[-_]/g,' ')
    return {
      title: titleize(slug),
      titleTemplate: '%s • Williams Selyem', // title is now "My Example App - Yay!"
      htmlAttrs: {
        lang: 'en',
      }
    }
  },
}).$mount("#app")

