// import this in to @/src/main.js
//
import router from '@/includes/use/router'

import navThemeDefaults from '../NavTheme/defaults.json'

router.beforeEach((to, from, next)=>{
  if( to.name != from.name )
    router.app.$root.navTheme = navThemeDefaults
  return next()
})