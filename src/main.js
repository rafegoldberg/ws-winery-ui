import API from "@/VuePress/WP"
import Vue from "vue"

Vue.config.devtools = true
Vue.config.productionTip = false

import "@/includes/use/log"
import "@/includes/use/async"
import "@/includes/use/scrollView"
import "@/includes/filters"

import App from "./App.vue"
import router from "@/includes/use/router"

new Vue({
  router,
  render: h=> h(App)
}).$mount("#app")

