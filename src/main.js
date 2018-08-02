import API from "@/VuePress/WP"
import Vue from "vue"

Vue.config.devtools = true
Vue.config.productionTip = false

import "@/includes/use/log"
import "@/includes/use/async"
import "@/includes/use/scrollView"
import "@/includes/use/googleMaps"

import App from "./App.vue"
import router from "@/includes/use/router"

import "@/includes/filters"

let
options = {
  showFilters: false,
  filters:{
    categories:[],
    tags:[],
    varietals:[],
    AVA:[]
  }
}

new Vue({
  router,
  data:()=>options,
  render: h=> h(App)
}).$mount("#app")

