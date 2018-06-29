import Vue from "vue"

/**
 * import filter methods
 */
export {truncate} from "./truncate"
export {round}    from "./round"

let // own exports
exp = module.__proto__.exports

/**
 * loop thru all exports and
 * register as a Vue filter
 */
Object.keys(exp).map(
  key=> Vue.filter( key, exp[key] )
  )