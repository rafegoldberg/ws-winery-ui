import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import routes from "@/routes";
export default new Router({
  base: '/', // process.env.NODE_ENV === 'production' ? '/clients/ws3/' : '/',
  routes,
  mode: "history",
  linkActiveClass: "open",
  linkExactActiveClass: "active"
});
