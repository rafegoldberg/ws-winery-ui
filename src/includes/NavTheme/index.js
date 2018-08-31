// import this in to @/src/main.js
//
import router from '@/includes/use/router'

import navThemeDefaults from '../NavTheme/defaults.json'

router.beforeEach((to, from, next)=>{
  router.app.$root.navTheme = navThemeDefaults
  return next()
})