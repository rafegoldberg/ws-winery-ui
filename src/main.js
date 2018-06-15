import Vue from "vue";

import "@/includes/use/log";
import "@/includes/use/async";
import router from "@/includes/use/router";

import App from "./App.vue";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.config.productionTip = false;
