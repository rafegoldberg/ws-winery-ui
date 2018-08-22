import Vue from "vue";

let
logr = console.log.bind(console)

if( process.env.NODE_ENV == "development" ){
  logr.dir     = console.dir.bind(console)
  logr.set     = console.groupCollapsed.bind(console)
  logr.set.end = console.groupEnd.bind(console)
  logr.warn    = console.warn.bind(console)
  logr.err     = console.error.bind(console)
  logr.tbl     = console.table.bind(console)
} else {
  logr         = new Function()
  logr.dir     = new Function()
  logr.set     = new Function()
  logr.set.end = new Function()
  logr.warn    = new Function()
  logr.err     = new Function()
  logr.tbl     = new Function()
}

Vue.prototype.$log = logr

