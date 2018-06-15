import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Alt from "./views/Alt.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/alt",
      name: "alt",
      component: Alt
    }
  ]
});
