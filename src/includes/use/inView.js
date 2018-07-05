import Vue from 'vue'
import checkView from 'vue-check-view'

Vue.use(checkView)

Vue.prototype.$scrollIntersect = function(e){

  let
  AppNav    = document.getElementById('AppNav'),
  element   = e.target.element,
  intersect = this.rect,
  offset    = AppNav.offsetHeight
  
  if( intersect.top <= (offset/2) && intersect.bottom >= (offset/2) ){
    let
    classx  = "UiTheme_",
    UiTheme = Array.from(element.classList).filter(e=>e.indexOf(classx)==0)[0] || classx+'light'
  }
    // AppNav.classList.add()
}
