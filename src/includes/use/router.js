import Vue from "vue";
import Router from "vue-router";
import routes from "@/routes";
Vue.use(Router);

let
router = new Router({

  base: "/", // "/clients/ws3/"
  
  routes,
  mode: "history",
  linkActiveClass: "open",
  linkExactActiveClass: "active",

  scrollBehavior (to, from, savedPosition) {
    if ( to.hash == '#all' || to.hash == '#top')
      return { x:0, y:0 }
    if (to.hash)
      return { selector: to.hash }
    if( savedPosition )
      return savedPosition
    else
      return { x:0, y:0 }
  }
});

export default router

