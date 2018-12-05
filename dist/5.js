(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static/icon-list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/UI/Icon */ "./src/components/UI/Icon.vue");
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/UI/Button */ "./src/components/UI/Button/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "StaticIconList",
  created: function created() {
    if (Object.keys(this.list).length) this.items = Object.assign({}, this.items, this.list);
  },
  props: {
    list: {
      type: Object,
      default: function _default() {
        return {
          glasses: {
            title: "Visit The Winery",
            text: "Arrange a private tour and tasting tailored specifically for you.",
            CTA: "Visit Us",
            URL: '/visit'
          }
        };
      }
    }
  },
  data: function data() {
    return {
      items: {
        bottles: {
          title: "All Our Wines",
          text: "Visit our wine library to find a specific bottle or peruse our full collection.",
          CTA: "Wine Library",
          URL: '/wine#all'
        },
        barrels: {
          title: "How To Purchase",
          text: "Our wines are available twice a year for purchase.",
          CTA: "How to Buy",
          URL: '/purchase'
        }
        /* glasses: {
          title:"Visit The Winery",
          text: "Arrange a private tour and tasting tailored specifically for you.",
          CTA:  "Visit Us",
          URL:  '/visit',
        } */

      }
    };
  },
  components: {
    UiIcon: _components_UI_Icon__WEBPACK_IMPORTED_MODULE_0__["default"],
    UiButton: _components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "iconList" },
    _vm._l(_vm.items, function(item, key) {
      return _c(
        "div",
        { key: key, staticClass: "iconList--item" },
        [
          _c("UiIcon", {
            attrs: { name: item.icon || key, width: "3rem", height: "3rem" }
          }),
          _c("div", { staticClass: "iconList--item--text" }, [
            _c("span", {
              staticClass: "iconList--item--label",
              domProps: { innerHTML: _vm._s(item.title) }
            }),
            _c("div", { domProps: { innerHTML: _vm._s(item.text) } })
          ]),
          _c("router-link", {
            staticClass: "UiButton",
            attrs: { to: item.URL },
            domProps: { textContent: _vm._s(item.CTA) }
          })
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.iconListBox[data-v-e23b82be] {\n  padding: 2rem 1.5rem !important;\n}\n@media (max-width: 800px) {\n.iconListBox[data-v-e23b82be] {\n      padding: 2rem 1.5rem;\n}\n}\n.UiBox_push-left[data-v-e23b82be] {\n  margin-left: auto;\n  margin-right: 0;\n}\n.UiBox_push-right[data-v-e23b82be] {\n  margin-right: auto;\n  margin-left: 0;\n}\n.UiBox_push-up[data-v-e23b82be] {\n  margin-top: auto;\n  margin-bottom: 0;\n}\n.UiBox_push-down[data-v-e23b82be] {\n  margin-bottom: auto;\n  margin-top: 0;\n}\n.UiBox_doubled.UiBoxImage[data-v-e23b82be] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap row;\n          flex-flow: nowrap row;\n}\n.UiBox_doubled.UiBoxImage [style='background-image: url(\"\")'][data-v-e23b82be] {\n    background-color: transparent !important;\n}\n.UiBox_doubled > .UiBox[class*=\"UiTheme_\"][data-v-e23b82be] {\n  -webkit-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n     -moz-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n}\n.UiBox_doubled.UiBoxImage > .UiBox[class*=\"UiTheme_\"][data-v-e23b82be] {\n  -webkit-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n     -moz-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n}\n.iconList[data-v-e23b82be] {\n  min-width: 66%;\n  margin: 0 auto;\n}\n.iconList--item[data-v-e23b82be] {\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.iconList--item + .iconList--item[data-v-e23b82be] {\n      margin-top: 1.9rem;\n      padding-top: 1.9rem;\n      border-top: 1px solid rgba(186, 148, 84, 0.5);\n}\n.iconList--item > *[data-v-e23b82be] {\n      margin: .5rem 2rem;\n}\n.iconList--item > *[data-v-e23b82be]:last-child {\n        margin: .5rem 0 .5rem auto;\n}\n.iconList--item--label[data-v-e23b82be] {\n      text-transform: uppercase;\n      font-weight: 900;\n      color: #BA9454;\n      letter-spacing: .05em;\n}\n.iconList .UiButton[data-v-e23b82be] {\n    white-space: nowrap;\n    text-align: center;\n}\n@media (min-width: 38rem) {\n.iconList .UiButton[data-v-e23b82be] {\n        min-width: 145px;\n}\n}\n.iconList[data-v-e23b82be] .UiIcon {\n    margin: 0;\n    width: 3rem;\n    height: 3rem;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.iconList[data-v-e23b82be] .UiIcon .icon {\n      fill: #BA9454 !important;\n}\n@media (min-width: 52rem) {\n.iconList--item--label[data-v-e23b82be] {\n    display: block;\n    font-size: 1.15em;\n    margin-bottom: -0.3em;\n}\n}\n@media (max-width: 38rem) {\n.iconList--item[data-v-e23b82be] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: wrap row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n        -ms-flex-flow: wrap row;\n            flex-flow: wrap row;\n}\n.iconList--item > svg[data-v-e23b82be] {\n      -webkit-align-self: flex-start !important;\n          -ms-flex-item-align: start !important;\n              align-self: flex-start !important;\n      -webkit-box-flex: 1;\n      -webkit-flex: 1 0 2.6rem;\n         -moz-box-flex: 1;\n          -ms-flex: 1 0 2.6rem;\n              flex: 1 0 2.6rem;\n      width: 2.6rem !important;\n      height: 2.6rem !important;\n}\n.iconList--item--label[data-v-e23b82be] {\n      display: block;\n      margin: .5rem 0;\n}\n.iconList--item--text[data-v-e23b82be] {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1 -webkit-calc(100% - 2.6rem);\n         -moz-box-flex: 1;\n          -ms-flex: 1 calc(100% - 2.6rem);\n              flex: 1 calc(100% - 2.6rem);\n      margin: 0;\n      line-height: 1.75;\n      padding: 0 0 0 1rem;\n}\n.iconList--item .UiButton[data-v-e23b82be] {\n      margin: 1rem auto .3rem 3.5rem !important;\n      font-size: .75rem !important;\n}\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/static/icon-list.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Box/style.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AAwIG;ECpGD,gCAA+B;CAMhC;AAJC;ADkGC;MCjGC,qBAAoB;CAGvB;CAAA;AAGC;EACE,kBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,eAAgB;CACjB;AACD;EACE,iBAAmB;EACnB,iBAAgB;CACjB;AACD;EACE,oBAAmB;EACnB,cAAgB;CACjB;AAKA;EAEG,+BAAqB;EAArB,8BAAqB;EAArB,8BAAqB;KAArB,4BAAqB;KAArB,2BAAqB;MAArB,0BAAqB;UAArB,sBAAqB;CAItB;AANF;IAIK,yCAAwC;CACzC;AALJ;EAQG,2DAA4C;KAA5C,wDAA4C;UAA5C,mDAA4C;CAC7C;AATF;EAWG,iDAAoC;KAApC,8CAAoC;UAApC,yCAAoC;CACrC;ADqBL;EACE,eAAc;EACd,eAAc;CAqCf;AApCC;IACE,eAAc;IACd,qBAAa;IAAb,sBAAa;IAAb,kBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,0BAAmB;IAAnB,4BAAmB;OAAnB,uBAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;CAgBpB;AAnBA;MAKG,mBAAkB;MAClB,oBAAmB;MACnB,8CE1GW;CF2GZ;AARF;MAUG,mBAAkB;CAEnB;AAZF;QAWkB,2BAA2B;CAAE;AAE9C;MACE,0BAAyB;MACzB,iBAAgB;MAChB,eEnHW;MFoHX,sBAAqB;CACtB;AArBL;IAwBI,oBAAmB;IACnB,mBAAkB;CAInB;AG/DC;AHkCJ;QA2BM,iBAAgB;CAEnB;CAAA;AA7BH;IA+BI,UAAS;IACT,YAAW;IACX,aAAY;IACZ,uBAAmB;OAAnB,oBAAmB;CAGpB;AArCH;MAmCY,yBAA6B;CAAG;AGrExC;AHkDA;IA4BE,eAAc;IACd,kBAAiB;IACjB,sBAAqB;CACtB;CAAA;AGjFD;AHqCF;IAgDI,+BAAmB;IAAnB,8BAAmB;IAAnB,4BAAmB;OAAnB,4BAAmB;OAAnB,2BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;CAqBpB;AAtBA;MAGG,0CAAiC;UAAjC,sCAAiC;cAAjC,kCAAiC;MACjC,oBAAgB;MAAhB,yBAAgB;SAAhB,iBAAgB;UAAhB,qBAAgB;cAAhB,iBAAgB;MAChB,yBAAwB;MACxB,0BAAyB;CAC1B;AAzCH;MA2CI,eAAc;MACd,gBAAe;CAChB;AACD;MACE,oBAA2B;MAA3B,4CAA2B;SAA3B,iBAA2B;UAA3B,gCAA2B;cAA3B,4BAA2B;MAC3B,UAAS;MACT,kBAAiB;MACjB,oBAAmB;CACpB;AAjBF;MAmBG,0CAAyC;MACzC,6BAA4B;CAC7B;CAAA","file":"icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/breaks\";\n@import \"~@/styles/theme/colors\";\n\n@import \"~@/components/UI/Box/style\";\n\n.iconList {\n  min-width: 66%;\n  margin: 0 auto;\n  &--item {\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    & + & {\n      margin-top: 1.9rem;\n      padding-top: 1.9rem;\n      border-top: 1px solid rgba(Color(theme),.5);\n    }\n    > * {\n      margin: .5rem 2rem;\n      &:last-child { margin: .5rem 0 .5rem auto }\n    }\n    &--label {\n      text-transform: uppercase;\n      font-weight: 900;\n      color: Color(theme);\n      letter-spacing: .05em;\n    }\n  }\n  .UiButton {\n    white-space: nowrap;\n    text-align: center;\n    @include Break( min-width Breaks(2) ){\n      min-width: 145px;\n    }\n  }\n  /deep/ .UiIcon {\n    margin: 0;\n    width: 3rem;\n    height: 3rem;\n    object-fit: contain;\n    .icon { fill: Color(theme) !important }\n    // /deep/ &, /deep/ &.icon { fill: currentColor !important }\n  }\n  &Box { @extend %UiBox_compact; }\n}\n\n.iconList {\n  @include Break( min-width Breaks(3) ){\n    &--item--label {\n      display: block;\n      font-size: 1.15em;\n      margin-bottom: -0.3em;\n    }\n  }\n  @include Break( max-width Breaks(2) ){\n    &--item {\n      flex-flow: wrap row;\n      >svg {\n        align-self: flex-start !important;\n        flex: 1 0 2.6rem;\n        width: 2.6rem !important;\n        height: 2.6rem !important;\n      }\n      &--label {\n        display: block;\n        margin: .5rem 0;\n      }\n      &--text {\n        flex: 1 calc(100% - 2.6rem);\n        margin: 0;\n        line-height: 1.75;\n        padding: 0 0 0 1rem;\n      }\n      .UiButton {\n        margin: 1rem auto .3rem 3.5rem !important;\n        font-size: .75rem !important;\n      }\n    }\n  }\n}\n","@import \"~@/styles/theme/colors\";\n@import \"~@/styles/theme/breaks\";\n\n%UiBox {\n  & {\n    position: relative;\n\n    align-self: stretch;\n    padding: 5rem 4rem;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  &_center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n  &.wrap {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @include Break( max-width Breaks(-1)){\n    padding: 7rem 4rem;\n  }\n  @include Break( max-width Breaks(2)){\n    padding: 5rem 2.5rem;\n  }\n}\n\n%UiBox_minh {\n  min-height: 42vh;\n}\n\n%UiBox_compact {\n\n  padding: 2rem 1.5rem !important;\n  \n  @media ( max-width:800px ) {\n    padding: 2rem 1.5rem;\n  }\n  \n}\n\n.UiBox { // margin pushers\n  &_push-left {\n    margin-left:   auto;\n    margin-right:  0;\n  }\n  &_push-right {\n    margin-right:  auto;\n    margin-left:   0;\n  }\n  &_push-up {\n    margin-top:    auto;\n    margin-bottom: 0;\n  }\n  &_push-down {\n    margin-bottom: auto;\n    margin-top:    0;\n  }\n}\n\n.UiBox { // doubled\n  $B: #{&};\n  &_doubled {\n    &.UiBoxImage {//:not(.UiBox_stack) { /*<- why did I add that suffix?*/\n      flex-flow: nowrap row;\n      [style='background-image: url(\"\")'] {\n        background-color: transparent !important;\n      }\n    }\n    & > #{$B}[class*=\"UiTheme_\"] {\n      box-shadow: 0 .3em 4em -.6em rgba(0,0,0,.15);\n    }\n    &.UiBoxImage > #{$B}[class*=\"UiTheme_\"] {\n      box-shadow: 0 0 8em 0 rgba(0,0,0,.5);\n    }\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("33c44806", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/VuePress/mix/connect.js":
/*!*************************************!*\
  !*** ./src/VuePress/mix/connect.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./API */ "./src/VuePress/mix/API.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_API__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      loading: true
    };
  },
  props: {
    type: {
      type: String,
      default: "posts"
    },
    category: {
      type: [Number, String]
    },
    parent: {
      type: [Number, String]
    },
    include: {
      type: [Number, String, Array]
    },
    exclude: {
      type: [Number, String, Array]
    }
  },
  methods: {
    fetch: function fetch() {
      return this.endpoint;
    }
  },
  computed: {
    endpoint: function endpoint() {
      var type = this.type || 'posts';
      if (this.API) return this.API[type]();
    }
  },
  asyncComputed: {
    context: {
      default: {
        loading: true
      },
      get: function () {
        var _get = Object(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var error, data;
          return _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.API || !this.endpoint)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", {
                    loading: true
                  });

                case 4:
                  this.$set(this, 'loading', true);

                case 5:
                  error = false;
                  _context.next = 8;
                  return this.fetch().get().catch(function (e) {
                    return error = e;
                  });

                case 8:
                  data = _context.sent;

                  if (!error) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt("return", {
                    error: error
                  });

                case 13:
                  this.$set(this, 'loading', false);
                  this.$emit('wp:load', data);

                case 15:
                  return _context.abrupt("return", data);

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function get() {
          return _get.apply(this, arguments);
        };
      }(),
      watch: function watch() {
        return this.$route.params;
      }
    }
  }
});

/***/ }),

/***/ "./src/components/static/icon-list.vue":
/*!*********************************************!*\
  !*** ./src/components/static/icon-list.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-list.vue?vue&type=template&id=e23b82be&scoped=true& */ "./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true&");
/* harmony import */ var _icon_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-list.vue?vue&type=script&lang=js& */ "./src/components/static/icon-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _icon_list_vue_vue_type_style_index_0_id_e23b82be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& */ "./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _icon_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e23b82be",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('e23b82be', component.options)
    } else {
      api.reload('e23b82be', component.options)
    }
    module.hot.accept(/*! ./icon-list.vue?vue&type=template&id=e23b82be&scoped=true& */ "./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-list.vue?vue&type=template&id=e23b82be&scoped=true& */ "./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true&");
(function () {
      api.rerender('e23b82be', {
        render: _icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/static/icon-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/static/icon-list.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/static/icon-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./icon-list.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_style_index_0_id_e23b82be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=style&index=0&id=e23b82be&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_style_index_0_id_e23b82be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_style_index_0_id_e23b82be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_style_index_0_id_e23b82be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_style_index_0_id_e23b82be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_style_index_0_id_e23b82be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./icon-list.vue?vue&type=template&id=e23b82be&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/icon-list.vue?vue&type=template&id=e23b82be&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_list_vue_vue_type_template_id_e23b82be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=5.js.map