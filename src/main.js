import API from "@/VuePress/WP"
import Vue from "vue"

Vue.config.devtools = true
Vue.config.productionTip = false

import "@/includes/use/log"
import "@/includes/use/async"
import "@/includes/use/scrollView"
import "@/includes/use/googleMaps"

import {truncate} from "@/includes/filters/truncate"
import {round} from "@/includes/filters/round"
Vue.filter( "truncate", truncate )
Vue.filter( "round", round )

import AppLoad from "@/components/App/load"
Vue.component('AppLoad',AppLoad)

import App from "./App.vue"
import router from "@/includes/use/router"
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

