import Vue from 'vue'
import checkView from 'vue-check-view'

Vue.use(checkView)

let
lastTheme,
navOffset

function getAppNavHeight( el='AppNav' ){
  if( el = document.getElementById(el) )
    return el.offsetHeight
  else
    return 0
}

Vue.prototype.$scrollIntersect = function(e){
  if( !document.getElementById('AppNav') ) return

  let
  AppNav    = document.getElementById('AppNav'),
  element   = e.target.element,
  intersect = this.rect
  
  navOffset = navOffset || getAppNavHeight()
  
  if( intersect.bottom > (navOffset/2) && intersect.top <= (navOffset/2) ){
    
    /* console.log("%o\n%o",element,{
      top: intersect.top,
      btm: intersect.bottom,
      off: navOffset,
    }) */

    let
    bemfx = "UiTheme_",
    cList = Array.from(element.classList).filter(e=> e.indexOf(bemfx)==0 ),
    theme = cList[0] ? cList[0].split(bemfx).filter(v=>v)[0] : `light`

    if( theme==lastTheme ) return
    
    if( lastTheme )
      AppNav.classList.replace( lastTheme, theme )
    else
      AppNav.classList.add( theme )

    lastTheme = theme
  }
}
