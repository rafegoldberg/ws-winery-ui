import Vue from 'vue'
import checkView from 'vue-check-view'

Vue.use(checkView)

let
navThemeActive;
Vue.prototype.$scrollIntersect = function(e){

  let
  AppNav    = document.getElementById('AppNav'),
  element   = e.target.element,
  intersect = this.rect,
  offset    = AppNav.offsetHeight
  
  if( intersect.top <= (offset/2) && intersect.bottom >= (offset/2) ){
    let
    bemfx = "UiTheme_",
    cList = Array.from(element.classList).filter(e=> e.indexOf(bemfx)==0 ),
    theme = cList[0] ? cList[0].split(bemfx).filter(v=>v)[0] : `light`
    
    console.log(theme)
    
    if( theme==navThemeActive ) return
    if( navThemeActive )
      AppNav.classList.replace( navThemeActive, theme )
    else
      AppNav.classList.add( theme )

    navThemeActive = theme
  }
}
