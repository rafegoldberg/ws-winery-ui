(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/DiscoverBox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UI_Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/UI/Heading */ "./src/components/UI/Heading.vue");
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/UI/Icon */ "./src/components/UI/Icon.vue");
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
  name: "DiscoverBox",
  props: {
    header: {
      type: Object
    },
    link: {
      type: String
    },
    icon: {
      type: Object
    }
  },
  components: {
    UiHeading: _components_UI_Heading__WEBPACK_IMPORTED_MODULE_0__["default"],
    UiIcon: _components_UI_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/static/discovery-boxes/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static/discovery-boxes/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UI_Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/UI/Panel */ "./src/components/UI/Panel.vue");
/* harmony import */ var _components_UI_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/UI/Box */ "./src/components/UI/Box/index.vue");
/* harmony import */ var _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/UI/Box/Image */ "./src/components/UI/Box/Image.vue");
/* harmony import */ var _components_modules_DiscoverBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modules/DiscoverBox */ "./src/components/modules/DiscoverBox.vue");
/* harmony import */ var _wines_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wines.jpg */ "./src/components/static/discovery-boxes/wines.jpg");
/* harmony import */ var _wines_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wines_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vineyards_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vineyards.png */ "./src/components/static/discovery-boxes/vineyards.png");
/* harmony import */ var _vineyards_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vineyards_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _history_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.png */ "./src/components/static/discovery-boxes/history.png");
/* harmony import */ var _history_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_history_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _people_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people.png */ "./src/components/static/discovery-boxes/people.png");
/* harmony import */ var _people_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_people_png__WEBPACK_IMPORTED_MODULE_7__);
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








var boxes = [{
  key: "wines",
  background: _wines_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  box: {
    icon: {
      name: "CirclePlus"
    },
    header: {
      text: "Our Wines"
    },
    link: "/our-wines"
  }
}, {
  key: "vineyards",
  background: _vineyards_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  box: {
    icon: {
      name: "CirclePlus"
    },
    header: {
      text: "Our Vineyards"
    },
    link: "/vineyards"
  }
}, {
  key: "history",
  background: _history_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  box: {
    icon: {
      name: "CirclePlus"
    },
    header: {
      text: "Our History"
    },
    link: "/our-history"
  }
}, {
  key: "people",
  background: _people_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  box: {
    icon: {
      name: "CirclePlus"
    },
    header: {
      text: "Our People"
    },
    link: "/people"
  }
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DiscoveryBoxes",
  components: {
    UiPanel: _components_UI_Panel__WEBPACK_IMPORTED_MODULE_0__["default"],
    UiBox: _components_UI_Box__WEBPACK_IMPORTED_MODULE_1__["default"],
    UiBoxImage: _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_2__["default"],
    DiscoverBox: _components_modules_DiscoverBox__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    wines: {
      type: Boolean,
      default: false
    },
    vineyards: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: false
    },
    people: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      boxes: boxes
    };
  },
  methods: {
    showBox: function showBox(ctx) {
      return this[ctx.key];
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true& ***!
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
    "router-link",
    { staticClass: "DiscoverBox", attrs: { to: _vm.link } },
    [
      _c(
        "header",
        { staticClass: "DiscoverBox--header" },
        [
          _c("small", { staticClass: "DiscoverBox--discoverText" }, [
            _vm._v("Discover")
          ]),
          _c("UiHeading", _vm._b({}, "UiHeading", _vm.header, false))
        ],
        1
      ),
      _c("UiIcon", _vm._b({}, "UiIcon", _vm.icon, false))
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4& ***!
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
    "UiPanel",
    _vm._l(_vm.boxes, function(context) {
      return _vm.showBox(context)
        ? _c(
            "UiBoxImage",
            { key: context.key, attrs: { img: context.background } },
            [_c("DiscoverBox", _vm._b({}, "DiscoverBox", context.box, false))],
            1
          )
        : _vm._e()
    })
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.DiscoverBox[data-v-2b0838cc] {\n  text-align: center;\n  text-decoration: none;\n}\n@media (min-width: 52rem) {\n.UiBoxImage > .DiscoverBox[data-v-2b0838cc]:only-child {\n      margin-top: 32vmin;\n}\n}\n@media (max-width: 52rem) {\n.UiBoxImage > .DiscoverBox[data-v-2b0838cc]:only-child {\n      margin: 0;\n}\n}\n.DiscoverBox[data-v-2b0838cc] .UiIcon path[fill] {\n    fill: #fafafa !important;\n}\n.DiscoverBox[data-v-2b0838cc] .UiIcon [stroke] {\n    stroke: transparent !important;\n    -webkit-transition: all .38s ease-out;\n    -o-transition: all .38s ease-out;\n    -moz-transition: all .38s ease-out;\n    transition: all .38s ease-out;\n}\n.DiscoverBox[data-v-2b0838cc]:hover .UiIcon [stroke] {\n    stroke: #fafafa !important;\n}\n.DiscoverBox--header .UiHeading[data-v-2b0838cc] {\n    line-height: 1;\n}\n.DiscoverBox--discoverText[data-v-2b0838cc] {\n    text-transform: uppercase;\n    letter-spacing: .3em;\n    color: #BA9454;\n    text-shadow: 0 1px 5px rgba(25, 25, 25, 0.75);\n}\n@media (max-width: 52rem) {\n.DiscoverBox--discoverText[data-v-2b0838cc] {\n      color: #fafafa;\n}\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/DiscoverBox.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],"names":[],"mappings":";AA8BA;EAEE,mBAAkB;EAClB,sBAAqB;CAoCtB;ACLG;AD5BA;MAA6B,mBAAmB;CAAE;CAAA;AC4BlD;ADzBA;MACE,UAAS;CACV;CAAA;AAXL;IAc8B,yBAA8B;CAAG;AAd/D;IAgBI,+BAA8B;IAC9B,sCAA6B;IAA7B,iCAA6B;IAA7B,mCAA6B;IAA7B,8BAA6B;CAC9B;AAlBH;IAmBsC,2BAA+B;CAAG;AAErE;IAGG,eAAc;CACf;AAEH;IACE,0BAAyB;IACzB,qBAAoB;IAEpB,eE3Da;IF4Db,8CAAyC;CAC1C;ACCC;ADCA;MACE,eEtDkC;CFuDnC;CAAA","file":"DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/breaks\";\n@import \"~@/styles/theme/colors\";\n.DiscoverBox {\n\n  text-align: center;\n  text-decoration: none;\n  \n  @include Break( min-width Breaks(3) ){\n    .UiBoxImage > &:only-child { margin-top: 32vmin }\n  }\n  @include Break( max-width Breaks(3) ){\n    .UiBoxImage > &:only-child {\n      margin: 0;\n    }\n  }\n\n  /deep/ .UiIcon path[fill] { fill:  Color(light) !important }\n  /deep/ .UiIcon [stroke]   {\n    stroke: transparent !important;\n    transition: all .38s ease-out;\n  }\n  &:hover /deep/ .UiIcon [stroke]   { stroke: Color(light) !important }\n  \n  &--header {\n    // margin-bottom: .5em;\n    .UiHeading {\n      line-height: 1;\n    }\n  }\n  &--discoverText {\n    text-transform: uppercase;\n    letter-spacing: .3em;\n    // font-weight: lighter;\n    color: Color(theme);\n    text-shadow: 0 1px 5px rgba(25,25,25,.75);\n  }\n  @include Break( max-width Breaks(3) ){\n    &--discoverText {\n      color: Color(light);\n    }\n  }\n}\n","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("655c2b1c", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/modules/DiscoverBox.vue":
/*!************************************************!*\
  !*** ./src/components/modules/DiscoverBox.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true& */ "./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true&");
/* harmony import */ var _DiscoverBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscoverBox.vue?vue&type=script&lang=js& */ "./src/components/modules/DiscoverBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DiscoverBox_vue_vue_type_style_index_0_id_2b0838cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& */ "./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DiscoverBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b0838cc",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('2b0838cc', component.options)
    } else {
      api.reload('2b0838cc', component.options)
    }
    module.hot.accept(/*! ./DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true& */ "./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true& */ "./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true&");
(function () {
      api.rerender('2b0838cc', {
        render: _DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/modules/DiscoverBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/modules/DiscoverBox.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/modules/DiscoverBox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscoverBox.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_style_index_0_id_2b0838cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=style&index=0&id=2b0838cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_style_index_0_id_2b0838cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_style_index_0_id_2b0838cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_style_index_0_id_2b0838cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_style_index_0_id_2b0838cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_style_index_0_id_2b0838cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/DiscoverBox.vue?vue&type=template&id=2b0838cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscoverBox_vue_vue_type_template_id_2b0838cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/static/discovery-boxes/history.png":
/*!***********************************************************!*\
  !*** ./src/components/static/discovery-boxes/history.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/history.5ac6122d.png";

/***/ }),

/***/ "./src/components/static/discovery-boxes/index.vue":
/*!*********************************************************!*\
  !*** ./src/components/static/discovery-boxes/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9281a2e4& */ "./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/static/discovery-boxes/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('9281a2e4', component.options)
    } else {
      api.reload('9281a2e4', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=9281a2e4& */ "./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9281a2e4& */ "./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4&");
(function () {
      api.rerender('9281a2e4', {
        render: _index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/static/discovery-boxes/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/static/discovery-boxes/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/components/static/discovery-boxes/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/static/discovery-boxes/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4&":
/*!****************************************************************************************!*\
  !*** ./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9281a2e4& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/static/discovery-boxes/index.vue?vue&type=template&id=9281a2e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9281a2e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/static/discovery-boxes/people.png":
/*!**********************************************************!*\
  !*** ./src/components/static/discovery-boxes/people.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/people.32fad64a.png";

/***/ }),

/***/ "./src/components/static/discovery-boxes/vineyards.png":
/*!*************************************************************!*\
  !*** ./src/components/static/discovery-boxes/vineyards.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vineyards.0745fe2e.png";

/***/ }),

/***/ "./src/components/static/discovery-boxes/wines.jpg":
/*!*********************************************************!*\
  !*** ./src/components/static/discovery-boxes/wines.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wines.4d49d7ff.jpg";

/***/ })

}]);
//# sourceMappingURL=7.js.map