import Vue from "vue"
import App from "./App.vue"

import API from "@/VuePress/WP"
API.then(wp=> (window.API = wp))

import "@/includes/filters"

import "@/includes/use/log"
import "@/includes/use/async"
import "@/includes/use/inView"

import router from "@/includes/use/router"

new Vue({
  router,
  render: h=> h(App)
}).$mount("#app")

Vue.config.devtools = true
Vue.config.productionTip = false
