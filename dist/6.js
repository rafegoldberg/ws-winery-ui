(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/AdjacentNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/UI/Icon */ "./src/components/UI/Icon.vue");
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
  name: "AdjacentNav",
  props: {
    all: {
      type: String,
      default: "."
    },
    next: {
      type: [String, Object]
    },
    prev: {
      type: [String, Object]
    }
  },
  components: {
    UiIcon: _components_UI_Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "small",
    { staticClass: "AdjacentNav" },
    [
      _c(
        "router-link",
        {
          class: { hide: !_vm.prev },
          attrs: { to: _vm.prev ? _vm.prev.slug : "#prev" }
        },
        [
          _c("UiIcon", {
            attrs: { name: "arrow-left", width: ".75em", height: ".75em" }
          }),
          _vm._v("\n    Prior\n  ")
        ],
        1
      ),
      _c("router-link", { attrs: { to: _vm.all } }, [_vm._v("All")]),
      _c(
        "router-link",
        {
          class: { hide: !_vm.next },
          attrs: { to: _vm.next ? _vm.next.slug : "#next" }
        },
        [
          _vm._v("\n    Next\n    "),
          _c("UiIcon", {
            attrs: { name: "arrow-right", width: ".75em", height: ".75em" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.AdjacentNav a[data-v-36f24b79] {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: #BA9454;\n}\n.AdjacentNav a[data-v-36f24b79]:not(:hover) {\n    text-decoration: none;\n}\n.AdjacentNav_center a.hide[data-v-36f24b79] {\n  opacity: 0;\n  pointer-events: none;\n}\n.AdjacentNav[data-v-36f24b79] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 2;\n}\n.AdjacentNav[data-v-36f24b79]:not(:first-child) {\n    margin-top: 1.5rem;\n}\n.AdjacentNav[data-v-36f24b79]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n@media (max-width: 52rem) {\n.AdjacentNav[data-v-36f24b79] {\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n         -moz-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 2rem;\n}\n}\n.AdjacentNav > * + *[data-v-36f24b79] {\n  margin-left: 1rem;\n}\n.AdjacentNav a[data-v-36f24b79] {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n}\n.AdjacentNav a .UiIcon[data-v-36f24b79] {\n    -webkit-transition: .2s ease-out;\n    -o-transition: .2s ease-out;\n    -moz-transition: .2s ease-out;\n    transition: .2s ease-out;\n}\n.AdjacentNav a:first-child .UiIcon[data-v-36f24b79] {\n    right: 100%;\n    margin-right: .2em;\n}\n.AdjacentNav a:last-child .UiIcon[data-v-36f24b79] {\n    left: 100%;\n    margin-left: .1em;\n}\n.AdjacentNav a.hide[data-v-36f24b79] {\n    display: none;\n}\n.AdjacentNav a.hide + a[data-v-36f24b79] {\n      margin-left: 0;\n}\n.AdjacentNav_center[data-v-36f24b79] {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.AdjacentNav_center a.hide[data-v-36f24b79] {\n    display: inline;\n}\n@media (max-width: 68rem) {\n.AdjacentNav[data-v-36f24b79] {\n    text-align: center;\n}\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/AdjacentNav.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/extend/text.label.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AAyCA;ECxCE,iBAAgB;EAChB,eAAc;EACd,0BAAyB;EACzB,sBAAqB;EACrB,eCHe;CDOhB;ADgCD;IClCI,sBAAqB;CACtB;AD4BH;EACE,WAAU;EACV,qBAAoB;CACrB;AAED;EAII,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,eAAc;CAKf;AAXH;IAE0B,mBAAmB;CAAE;AAF/C;IAGyB,sBAAsB;CAAE;AGoB7C;AHvBJ;MAQM,yBAAuB;MAAvB,gCAAuB;SAAvB,sBAAuB;UAAvB,sBAAuB;cAAvB,wBAAuB;MACvB,oBAAmB;CAEtB;CAAA;AAXH;EAaI,kBAAiB;CAClB;AAdH;EAkBI,4BAAoB;EAApB,6BAAoB;EAApB,yBAAoB;EAApB,4BAAoB;EAApB,qBAAoB;EACpB,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,sBAAqB;CAsBtB;AA1CH;IAsBM,iCAAwB;IAAxB,4BAAwB;IAAxB,8BAAwB;IAAxB,yBAAwB;CACzB;AAvBL;IA0BQ,YAAW;IACX,mBAAkB;CACnB;AA5BP;IAiCQ,WAAU;IACV,kBAAiB;CAClB;AAnCP;IAuCM,cAAa;CAEd;AAzCL;MAwCY,eAAe;CAAE;AAI3B;EACE,yBAAuB;EAAvB,gCAAuB;KAAvB,sBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;CAKxB;AANA;IAIG,gBAAe;CACd;AG1BH;AHvBJ;IAqDI,mBAAkB;CAErB;CAAA","file":"AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/breaks\";\n@import \"~@/styles/theme/colors\";\n@import \"~@/styles/extend/text.label\";\n\n%soft-hide {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.AdjacentNav {\n  & {\n    &:not(:first-child) { margin-top: 1.5rem }\n    &:not(:last-child) { margin-bottom: 1.5rem }\n    display: flex;\n    align-items: center;\n    line-height: 2;\n    @include Break( max-width Breaks(3) ) {\n      justify-content: center;\n      margin-bottom: 2rem;\n    }\n  }\n  > * + * {\n    margin-left: 1rem;\n  }\n\n  a {\n    @extend %text-label;\n    display: inline-flex;\n    align-items: center;\n    text-decoration: none;\n    .UiIcon {\n      transition: .2s ease-out;\n    }\n    &:first-child {\n      .UiIcon {\n        right: 100%;\n        margin-right: .2em;\n      }\n      // &:hover .UiIcon { transform: translateX(-.36em) }\n    }\n    &:last-child  {\n      .UiIcon {\n        left: 100%;\n        margin-left: .1em;\n      }\n      // &:hover .UiIcon { transform: translateX(.36em) }\n    }\n    &.hide {\n      display: none;\n      + a { margin-left: 0 }\n    }\n  }\n\n  &_center {\n    justify-content: center;\n    a.hide { \n      @extend %soft-hide;\n      display: inline;\n      }\n  }\n  \n  @include Break( max-width Breaks(4) ){\n    text-align: center;\n  }\n}\n","%text-label {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: Color(theme);\n  &:not(:hover) {\n    text-decoration: none;\n  }\n}","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6a8f4354", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/VuePress/mix/item.js":
/*!**********************************!*\
  !*** ./src/VuePress/mix/item.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/typeof */ "./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js");
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect */ "./src/VuePress/mix/connect.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_connect__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    type: {
      type: String,
      default: "posts"
    }
  },
  methods: {
    fetch: function fetch() {
      if (this.id) return this.endpoint.id(this.id).embed();
      if (this.slug) return this.endpoint.slug(this.slug).embed();else return this.endpoint.embed();
    }
  },
  asyncComputed: {
    context: {
      default: {
        loading: true
      },
      get: function () {
        var _get = Object(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
        /*#__PURE__*/
        _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var error, data;
          return _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.API || !this.endpoint)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", {
                    loading: true
                  });

                case 2:
                  error = false;
                  _context.next = 5;
                  return this.fetch().get().catch(function (e) {
                    return error = e;
                  });

                case 5:
                  data = _context.sent;

                  if (!error) {
                    _context.next = 8;
                    break;
                  }

                  return _context.abrupt("return", {
                    error: error
                  });

                case 8:
                  if (!(Object(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(data) == "object" && Array.isArray(data))) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt("return", data[0]);

                case 12:
                  return _context.abrupt("return", data);

                case 13:
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
        this.$route.params;
      }
    }
  }
});

/***/ }),

/***/ "./src/components/modules/AdjacentNav.vue":
/*!************************************************!*\
  !*** ./src/components/modules/AdjacentNav.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true& */ "./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true&");
/* harmony import */ var _AdjacentNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdjacentNav.vue?vue&type=script&lang=js& */ "./src/components/modules/AdjacentNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdjacentNav_vue_vue_type_style_index_0_id_36f24b79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& */ "./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdjacentNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36f24b79",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('36f24b79', component.options)
    } else {
      api.reload('36f24b79', component.options)
    }
    module.hot.accept(/*! ./AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true& */ "./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true& */ "./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true&");
(function () {
      api.rerender('36f24b79', {
        render: _AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/modules/AdjacentNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/modules/AdjacentNav.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/modules/AdjacentNav.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./AdjacentNav.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_style_index_0_id_36f24b79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=style&index=0&id=36f24b79&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_style_index_0_id_36f24b79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_style_index_0_id_36f24b79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_style_index_0_id_36f24b79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_style_index_0_id_36f24b79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_style_index_0_id_36f24b79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/AdjacentNav.vue?vue&type=template&id=36f24b79&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjacentNav_vue_vue_type_template_id_36f24b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=6.js.map