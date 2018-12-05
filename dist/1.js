(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./docs/src/.loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=custom&index=0&blockType=docs":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./docs/src/.loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Box/Image.vue?vue&type=custom&index=0&blockType=docs ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
      Component.options.__docs = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n```vue\n<UiBoxImage style=\"justify-content: flex-start\">\n  <div style=\"margin: 0 auto 0 0\">\n    <header>\n      <UiIcon name=barrels width=\"5em\" height=\"5em\" style=\"display: block; margin: 0 auto 1em\"/>\n      <UiHeading>\n        Harvest 2016\n      </UiHeading>\n    </header>\n    <UiList :list=\"[\n      'Pruney notes',\n      'Weak legs',\n      'Mature tannins'\n    ]\"/>\n  </div>\n</UiBoxImage>\n```\n"
    });

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Box/Image.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/components/UI/Box/index.vue");
/* harmony import */ var _assets_mock_harvest_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/mock/harvest.png */ "./src/assets/mock/harvest.png");
/* harmony import */ var _assets_mock_harvest_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_mock_harvest_png__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//


/**
 * A flexbox-based layout component for use within a `<UiPanel/>` wrapper.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UiBoxImage",
  props: {
    img: {
      type: [String, Object],
      default: _assets_mock_harvest_png__WEBPACK_IMPORTED_MODULE_1___default.a
    }
  },
  components: {
    UiBox: ___WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    src: function src() {
      return "url(".concat(this.img, ")");
    }
  },
  mounted: function mounted() {
    if (this.$parent.$options.name == 'UiPanel') this.$parent.$el.classList.add('UiTheme_dark');
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "UiBox",
    { staticClass: "UiBoxImage", style: { backgroundImage: _vm.src } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.UiBox_push-left[data-v-423be02c] {\n  margin-left: auto;\n  margin-right: 0;\n}\n.UiBox_push-right[data-v-423be02c] {\n  margin-right: auto;\n  margin-left: 0;\n}\n.UiBox_push-up[data-v-423be02c] {\n  margin-top: auto;\n  margin-bottom: 0;\n}\n.UiBox_push-down[data-v-423be02c] {\n  margin-bottom: auto;\n  margin-top: 0;\n}\n.UiBox_doubled.UiBoxImage[data-v-423be02c] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap row;\n          flex-flow: nowrap row;\n}\n.UiBox_doubled.UiBoxImage [style='background-image: url(\"\")'][data-v-423be02c] {\n    background-color: transparent !important;\n}\n.UiBox_doubled > .UiBox[class*=\"UiTheme_\"][data-v-423be02c] {\n  -webkit-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n     -moz-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n}\n.UiBox_doubled.UiBoxImage > .UiBox[class*=\"UiTheme_\"][data-v-423be02c] {\n  -webkit-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n     -moz-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n}\n.UiBoxImage[data-v-423be02c] {\n  min-height: 45vmin;\n}\n.UiBoxImage[data-v-423be02c] {\n    position: relative;\n    z-index: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: nowrap column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n        -ms-flex-flow: nowrap column;\n            flex-flow: nowrap column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #FFF;\n    background-repeat: no-repeat;\n    background-position: center;\n    -moz-background-size: cover;\n         background-size: cover;\n}\n.UiBoxImage[data-v-423be02c]:not(:empty):before {\n    content: \" \";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: .6;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(8%, rgba(0, 0, 0, 0.15)), color-stop(68%, rgba(0, 0, 0, 0.63)), color-stop(88%, rgba(0, 0, 0, 0.75)));\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    background-image: -moz- oldlinear-gradient(top, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    pointer-events: none;\n}\n@media (min-width: 52rem) {\n.UiBoxImage_sticky[data-v-423be02c] {\n      min-height: 100vh;\n      max-height: 100vh;\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n}\n}\n.UiBoxImage_fixed[data-v-423be02c] {\n    background-attachment: fixed;\n    -moz-background-size: cover;\n         background-size: cover;\n}\n.UiBoxImage_vignetteVertical[data-v-423be02c], .UiBoxImage_vignette-v[data-v-423be02c] {\n    -webkit-box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.2), inset 0 -1px 0 0 rgba(250, 250, 250, 0.2), inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.2), inset 0 -1px 0 0 rgba(250, 250, 250, 0.2), inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.2), inset 0 -1px 0 0 rgba(250, 250, 250, 0.2), inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5);\n}\n.UiBoxImage_vignetteHorizontal[data-v-423be02c], .UiBoxImage_vignette-z[data-v-423be02c] {\n    -webkit-box-shadow: inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n}\n.UiBoxImage_vignette[data-v-423be02c] {\n    -webkit-box-shadow: inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n    -webkit-box-shadow: inset 0 0 2em 0.75em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 0 0 2em 0.75em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 0 0 2em 0.75em rgba(14, 14, 14, 0.5);\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Box/style.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Box/Image.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],"names":[],"mappings":";AA6CE;EACE,kBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,eAAgB;CACjB;AACD;EACE,iBAAmB;EACnB,iBAAgB;CACjB;AACD;EACE,oBAAmB;EACnB,cAAgB;CACjB;AAKA;EAEG,+BAAqB;EAArB,8BAAqB;EAArB,8BAAqB;KAArB,4BAAqB;KAArB,2BAAqB;MAArB,0BAAqB;UAArB,sBAAqB;CAItB;AANF;IAIK,yCAAwC;CACzC;AALJ;EAQG,2DAA4C;KAA5C,wDAA4C;UAA5C,mDAA4C;CAC7C;AATF;EAWG,iDAAoC;KAApC,8CAAoC;UAApC,yCAAoC;CACrC;AC1CL;EAEE,mBAAkB;CA0EnB;AA5ED;IAKI,mBAAkB;IAClB,WAAU;IAEV,6BAAwB;IAAxB,8BAAwB;IAAxB,iCAAwB;OAAxB,0BAAwB;OAAxB,2BAAwB;QAAxB,6BAAwB;YAAxB,yBAAwB;IAExB,0BAAmB;IAAnB,4BAAmB;OAAnB,uBAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;IAEnB,YAAW;IACX,6BAA4B;IAC5B,4BAA2B;IAC3B,4BAAsB;SAAtB,uBAAsB;CAMvB;AArBH;IAuBI,aAAY;IACZ,mBAAkB;IAClB,YAAW;IACX,OAAM;IACN,QAAO;IACP,YAAW;IACX,aAAY;IACZ,YAAW;IACX,mLAKC;IALD,yHAKC;IALD,0HAKC;IALD,oHAKC;IALD,uHAKC;IACD,qBAAoB;CACrB;ACTC;ADWF;MAEI,kBAAiB;MACjB,kBAAiB;MACjB,yBAAgB;MAAhB,iBAAgB;MAChB,OAAM;CAET;CAAA;AACD;IACE,6BAA4B;IAC5B,4BAAsB;SAAtB,uBAAsB;CACvB;AAIC;IACE,uME3FW;OF2FX,oME3FW;YF2FX,+LE3FW;CFgGZ;AACD;IACE,kHElGW;OFkGX,+GElGW;YFkGX,0GElGW;CFqGZ;AAdF;IAgBG,iNEvGW;OFuGX,8MEvGW;YFuGX,yMEvGW;IF4GX,+DE5GW;OF4GX,4DE5GW;YF4GX,uDE5GW;CF6GZ","file":"Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&","sourcesContent":["@import \"~@/styles/theme/colors\";\n@import \"~@/styles/theme/breaks\";\n\n%UiBox {\n  & {\n    position: relative;\n\n    align-self: stretch;\n    padding: 5rem 4rem;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  &_center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n  &.wrap {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @include Break( max-width Breaks(-1)){\n    padding: 7rem 4rem;\n  }\n  @include Break( max-width Breaks(2)){\n    padding: 5rem 2.5rem;\n  }\n}\n\n%UiBox_minh {\n  min-height: 42vh;\n}\n\n%UiBox_compact {\n\n  padding: 2rem 1.5rem !important;\n  \n  @media ( max-width:800px ) {\n    padding: 2rem 1.5rem;\n  }\n  \n}\n\n.UiBox { // margin pushers\n  &_push-left {\n    margin-left:   auto;\n    margin-right:  0;\n  }\n  &_push-right {\n    margin-right:  auto;\n    margin-left:   0;\n  }\n  &_push-up {\n    margin-top:    auto;\n    margin-bottom: 0;\n  }\n  &_push-down {\n    margin-bottom: auto;\n    margin-top:    0;\n  }\n}\n\n.UiBox { // doubled\n  $B: #{&};\n  &_doubled {\n    &.UiBoxImage {//:not(.UiBox_stack) { /*<- why did I add that suffix?*/\n      flex-flow: nowrap row;\n      [style='background-image: url(\"\")'] {\n        background-color: transparent !important;\n      }\n    }\n    & > #{$B}[class*=\"UiTheme_\"] {\n      box-shadow: 0 .3em 4em -.6em rgba(0,0,0,.15);\n    }\n    &.UiBoxImage > #{$B}[class*=\"UiTheme_\"] {\n      box-shadow: 0 0 8em 0 rgba(0,0,0,.5);\n    }\n  }\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"./style.scss\";\n.UiBoxImage {\n\n  min-height: 45vmin;\n\n  & {\n    position: relative;\n    z-index: 1;\n    \n    flex-flow: nowrap column;\n    // justify-content: flex-end;\n    align-items: center;\n\n    color: #FFF;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n\n    // &:only-child {\n    //   min-height: 90vh;\n    //   // @media (max-width:800px) { min-height: 63vh }\n    // }\n  }\n  &:not(:empty):before {\n    content: \" \";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: .6;\n    background-image: linear-gradient(\n      to bottom,\n      rgba(0,0,0,.15) 08%,\n      rgba(0,0,0,.63) 68%, \n      rgba(0,0,0,.75) 88%\n    );\n    pointer-events: none;\n  }\n  \n  &_sticky {\n    @include Break( min-width Breaks(3) ){\n      min-height: 100vh;\n      max-height: 100vh;\n      position: sticky;\n      top: 0;\n    }\n  }\n  &_fixed {\n    background-attachment: fixed;\n    background-size: cover;\n  }\n  &_vignette {\n    $shade: rgba( Color(dark),  .5 );\n    $edge:  rgba( Color(light), .2 );\n    &Vertical, &-v {\n      box-shadow:\n      inset 0  1px 0 0 $edge,\n      inset 0 -1px 0 0 $edge,\n      inset 0  1em 2em -.25em $shade,\n      inset 0 -1em 2em -.25em $shade;\n    }\n    &Horizontal, &-z {\n      box-shadow:\n      inset  1em 0 2em -.25em $shade,\n      inset -1em 0 2em -.25em $shade;\n    }\n    & {\n      box-shadow:\n      inset  0    1em 2em -.25em $shade,\n      inset  0   -1em 2em -.25em $shade,\n      inset  1em  0   2em -.25em $shade,\n      inset -1em  0   2em -.25em $shade;\n      box-shadow: inset 0 0 2em .75em $shade;\n    }\n  }\n}\n","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7ac538fd", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/mock/harvest.png":
/*!*************************************!*\
  !*** ./src/assets/mock/harvest.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/harvest.47a2c406.png";

/***/ }),

/***/ "./src/components/UI/Box/Image.vue":
/*!*****************************************!*\
  !*** ./src/components/UI/Box/Image.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=423be02c&scoped=true& */ "./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true&");
/* harmony import */ var _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js& */ "./src/components/UI/Box/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Image_vue_vue_type_style_index_0_id_423be02c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& */ "./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _Image_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Image.vue?vue&type=custom&index=0&blockType=docs */ "./src/components/UI/Box/Image.vue?vue&type=custom&index=0&blockType=docs");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "423be02c",
  null
  
)

/* custom blocks */

if (typeof _Image_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_Image_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('423be02c', component.options)
    } else {
      api.reload('423be02c', component.options)
    }
    module.hot.accept(/*! ./Image.vue?vue&type=template&id=423be02c&scoped=true& */ "./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=423be02c&scoped=true& */ "./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true&");
(function () {
      api.rerender('423be02c', {
        render: _Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/UI/Box/Image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/UI/Box/Image.vue?vue&type=custom&index=0&blockType=docs":
/*!********************************************************************************!*\
  !*** ./src/components/UI/Box/Image.vue?vue&type=custom&index=0&blockType=docs ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_src_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../docs/src/.loader.js!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=custom&index=0&blockType=docs */ "./docs/src/.loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=custom&index=0&blockType=docs");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_docs_src_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/UI/Box/Image.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/UI/Box/Image.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_423be02c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=style&index=0&id=423be02c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_423be02c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_423be02c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_423be02c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_423be02c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_423be02c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=template&id=423be02c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UI/Box/Image.vue?vue&type=template&id=423be02c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_423be02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=1.js.map