import Vue from "vue";

if (process.env.NODE_ENV == "development")
  Vue.prototype.$log = console.log.bind(console);
else Vue.prototype.$log = new Function();
