import Vue from "vue";
import App from "./App.vue";

import API from "@/VuePress/WP.API";
API.then(WP => (window.WP = WP));

import "@/includes/use/log";
import "@/includes/use/async";

import router from "@/includes/use/router";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.config.productionTip = false;
