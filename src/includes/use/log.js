import Vue from "vue";

const
logr = console.log.bind(console)

logr.dir     = console.dir.bind(console)
logr.set     = console.groupCollapsed.bind(console)
logr.set.end = console.groupEnd.bind(console)
logr.warn    = console.warn.bind(console)
logr.err     = console.error.bind(console)
logr.tbl     = console.table.bind(console)

if (process.env.NODE_ENV == "development")
  Vue.prototype.$log = logr;
else Vue.prototype.$log = new Function();
