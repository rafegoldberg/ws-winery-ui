import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import routes from "@/routes";
export default new Router({

  // base: '/clients/ws3/',
  base: '/',
  
  routes,
  mode: "history",
  linkActiveClass: "open",
  linkExactActiveClass: "active",

  scrollBehavior (to, from, savedPosition) {
    // console.log({to,from,savedPosition})
    if( to.hash=='top' || to.hash && !savedPosition ) return { x:0, y:0 }
  }
});
