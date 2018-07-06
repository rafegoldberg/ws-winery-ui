import Vue from "vue"
import App from "./App.vue"
import router from "@/includes/use/router"

import "@/includes/use/log"
import "@/includes/use/async"
import "@/includes/use/scrollView"

import "@/includes/filters"

import API from "@/VuePress/WP"

new Vue({
  router,
  render: h=> h(App)
}).$mount("#app")

Vue.config.devtools = true
Vue.config.productionTip = false
