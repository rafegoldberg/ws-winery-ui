(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/People/Bio.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuePress_mix_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/VuePress/mix/item */ "./src/VuePress/mix/item.js");
/* harmony import */ var _includes_NavTheme_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/includes/NavTheme/mixin */ "./src/includes/NavTheme/mixin.js");
/* harmony import */ var _components_UI_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/UI/Panel */ "./src/components/UI/Panel.vue");
/* harmony import */ var _components_UI_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/UI/Box */ "./src/components/UI/Box/index.vue");
/* harmony import */ var _components_UI_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UI/Heading */ "./src/components/UI/Heading.vue");
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UI/Button */ "./src/components/UI/Button/index.vue");
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UI/Icon */ "./src/components/UI/Icon.vue");
/* harmony import */ var _components_modules_ReadMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/modules/ReadMore */ "./src/components/modules/ReadMore.vue");
/* harmony import */ var _components_modules_AdjacentNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/modules/AdjacentNav */ "./src/components/modules/AdjacentNav.vue");
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
  name: "Bio",
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (self) {
      return self.navTheme_update({
        brand: "logoTheme_dualtone"
      });
    });
  },
  props: ['slug', 'category'],
  mixins: [_VuePress_mix_item__WEBPACK_IMPORTED_MODULE_0__["default"], _includes_NavTheme_mixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    UiPanel: _components_UI_Panel__WEBPACK_IMPORTED_MODULE_2__["default"],
    UiBox: _components_UI_Box__WEBPACK_IMPORTED_MODULE_3__["default"],
    UiButton: _components_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"],
    UiHeading: _components_UI_Heading__WEBPACK_IMPORTED_MODULE_4__["default"],
    UiIcon: _components_UI_Icon__WEBPACK_IMPORTED_MODULE_6__["default"],
    ReadMore: _components_modules_ReadMore__WEBPACK_IMPORTED_MODULE_7__["default"],
    AdjacentNav: _components_modules_AdjacentNav__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  computed: {
    featured_img: function featured_img() {
      if (this.context.loading) return;

      if ('wp:featuredmedia' in this.context._embedded) {
        var src = this.context._embedded['wp:featuredmedia'][0].source_url;
        src = this.wsRewriteSRC(src);
        return src;
      } else return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.context.loading
    ? _c("AppLoad")
    : _c(
        "main",
        { staticClass: "Bio UiTheme_cream", attrs: { id: "StaffBio" } },
        [
          _c(
            "AdjacentNav",
            _vm._b(
              { staticClass: "AdjacentNav_center" },
              "AdjacentNav",
              _vm.context.adjacent,
              false
            )
          ),
          _c(
            "UiPanel",
            { staticClass: "UiTheme_cream wrap_mid" },
            [
              _c("UiBox", { staticClass: "Bio--overview" }, [
                _c(
                  "div",
                  {
                    style: {
                      position: "relative",
                      flex: [0, "50%"]
                    }
                  },
                  [
                    _c(
                      "a",
                      { staticClass: "Bio--role", attrs: { href: "#intro" } },
                      [
                        _c("b", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.context.acf.role
                                ? _vm.context.acf.role.name
                                : "Our People"
                            )
                          }
                        })
                      ]
                    ),
                    _c("img", {
                      staticClass: "Bio--media",
                      attrs: {
                        src: _vm.featured_img,
                        alt: _vm.context.title.rendered
                      },
                      on: {
                        error: function(e) {
                          e.target.style.opacity = 0
                          e.target.style.maxHeight = "300px"
                        }
                      }
                    })
                  ]
                ),
                _c(
                  "div",
                  { staticClass: "Bio--intro", attrs: { id: "intro" } },
                  [
                    _c(
                      "header",
                      { staticClass: "Bio--introHeader" },
                      [
                        _c("UiHeading", {
                          staticClass: "UiHeading_gold",
                          attrs: { level: 2, scale: 3 },
                          domProps: {
                            innerHTML: _vm._s(_vm.context.title.rendered)
                          }
                        }),
                        _c("b", { staticClass: "Bio--position" }, [
                          _vm._v(_vm._s(_vm.context.acf.position))
                        ])
                      ],
                      1
                    ),
                    _c("p", [_vm._v(_vm._s(_vm.context.acf.intro))]),
                    _vm.context.acf.content
                      ? _c("ReadMore", {
                          staticClass: "ReadMore_gold",
                          staticStyle: { "text-transform": "uppercase" },
                          attrs: { href: "#content" }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _c(
            "UiPanel",
            { staticClass: "UiTheme_light", attrs: { id: "content" } },
            [
              _c("UiBox", { staticClass: "UiBox_stack wrap_flex_min" }, [
                _c("div", [
                  _c("article", {
                    domProps: { innerHTML: _vm._s(_vm.context.acf.content) }
                  }),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "text-align": "center",
                        "margin-top": "1.6rem"
                      }
                    },
                    [
                      _c(
                        "UiButton",
                        {
                          staticClass: "UiButton_outline UiButton_gold",
                          attrs: { url: "/people" }
                        },
                        [_vm._v("Back to Our People")]
                      )
                    ],
                    1
                  )
                ])
              ])
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.Bio--intro[data-v-b73219bc] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 50%;\n     -moz-box-flex: 0;\n      -ms-flex: 0 50%;\n          flex: 0 50%;\n  padding-left: 2em;\n}\n.Bio--position[data-v-b73219bc] {\n  text-transform: capitalize;\n}\n.Bio--role[data-v-b73219bc] {\n  position: absolute;\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 1.2rem;\n  font-weight: 100;\n  text-transform: uppercase;\n  -webkit-transform: rotate(-90deg);\n     -moz-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n       -o-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-transform-origin: right bottom;\n     -moz-transform-origin: right bottom;\n      -ms-transform-origin: right bottom;\n       -o-transform-origin: right bottom;\n          transform-origin: right bottom;\n  bottom: 100%;\n  right: 100%;\n  letter-spacing: .1em;\n  text-decoration: none;\n  color: inherit;\n}\n.Bio--role > .UiIcon[data-v-b73219bc] {\n    opacity: 0 !important;\n}\n.Bio--role > .UiIcon[data-v-b73219bc] {\n      vertical-align: -.68em;\n      margin-left: .25em;\n      opacity: .4;\n      cursor: pointer;\n}\n@media (min-width: 52rem) {\n.Bio--role[data-v-b73219bc] {\n      pointer-events: none;\n}\n.Bio--role > .UiIcon[data-v-b73219bc] {\n        display: none;\n}\n}\n@media (max-width: 52rem) {\n.Bio--role[data-v-b73219bc] {\n      font-size: 1.1rem;\n      line-height: 1.8;\n}\n}\n.Bio--media[data-v-b73219bc] {\n  width: 100%;\n  height: 32em;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (min-width: 29rem) and (max-width: 52rem) {\n.Bio--media[data-v-b73219bc] {\n      -o-object-fit: contain;\n         object-fit: contain;\n      -o-object-position: center top;\n         object-position: center top;\n      height: auto;\n      max-height: 32em;\n      width: auto;\n}\n}\n@media (max-width: 29rem) {\n.Bio--media[data-v-b73219bc] {\n      margin-right: -1rem;\n      width: 100%;\n      min-width: -webkit-calc(100% + 2.5rem);\n      min-width: -moz-calc(100% + 2.5rem);\n      min-width: calc(100% + 2.5rem);\n}\n}\n.Bio #content > .UiBox[data-v-b73219bc]:only-child {\n  padding-top: 7.5rem;\n  padding-bottom: 10rem;\n}\n.Bio #content[data-v-b73219bc]:before, .Bio #content[data-v-b73219bc]:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  width: 1px;\n  height: 8rem;\n  background: #BA9454;\n}\n.Bio #content[data-v-b73219bc]:before {\n  top: -1.5rem;\n}\n.Bio #content[data-v-b73219bc]:after {\n  bottom: 0;\n}\n.Bio .AdjacentNav[data-v-b73219bc] {\n  z-index: 8;\n  position: relative;\n  margin: 0;\n  padding-top: 7rem;\n}\n@media (max-width: 52rem) {\n.Bio .AdjacentNav[data-v-b73219bc] {\n      margin: 0 0 .6rem;\n      padding-top: 2.6rem;\n}\n}\n@media (max-width: 52rem) {\n.Bio--overview[data-v-b73219bc] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: nowrap column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n        -ms-flex-flow: nowrap column;\n            flex-flow: nowrap column;\n}\n}\n@media (max-width: 52rem) and (max-width: 68rem) {\n.Bio--overview[data-v-b73219bc] {\n      padding-top: 6rem !important;\n      margin-top: -4rem;\n}\n}\n@media (max-width: 52rem) {\n.Bio--overview[data-v-b73219bc] > :first-child {\n      margin-bottom: 1.5rem;\n      min-height: 300px;\n}\n}\n@media (max-width: 52rem) and (min-width: 52rem) {\n.Bio--overview[data-v-b73219bc] > :first-child {\n        min-width: 100%;\n}\n}\n@media (max-width: 52rem) and (max-width: 29rem) {\n.Bio--overview[data-v-b73219bc] > :first-child {\n        min-width: 100%;\n}\n}\n@media (max-width: 52rem) {\n.Bio--overview[data-v-b73219bc] > :last-child {\n      padding-left: 0 !important;\n}\n.Bio--overview[data-v-b73219bc] > :last-child > :not(p) {\n        text-align: center !important;\n}\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/People/Bio.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],"names":[],"mappings":";AA8GE;EACE,oBAAW;EAAX,oBAAW;KAAX,iBAAW;MAAX,gBAAW;UAAX,YAAW;EACX,kBAAiB;CAClB;AACD;EACE,2BAA0B;CAC3B;AACD;EACE,mBAAkB;EAClB,sBAAqB;EACrB,oBAAmB;EACnB,kBAAiB;EACjB,iBAAgB;EAChB,0BAAyB;EACzB,kCAAyB;KAAzB,+BAAyB;MAAzB,8BAAyB;OAAzB,6BAAyB;UAAzB,0BAAyB;EACzB,uCAA8B;KAA9B,oCAA8B;MAA9B,mCAA8B;OAA9B,kCAA8B;UAA9B,+BAA8B;EAC9B,aAAY;EACZ,YAAW;EACX,qBAAoB;EACpB,sBAAqB;EACrB,eAAc;CAkBf;AA/BA;IAeG,sBAAqB;CAOtB;AAtBF;MAiBK,uBAAsB;MACtB,mBAAkB;MAClB,YAAW;MACX,gBAAe;CAChB;AC1EH;ADqDF;MAwBI,qBAAoB;CAOvB;AA/BA;QAyBc,cAAc;CAAE;CAAA;AC9E7B;ADqDF;MA4BI,kBAAiB;MACjB,iBAAgB;CAEnB;CAAA;AACD;EACE,YAAW;EACX,aAAY;EACZ,qBAAiB;KAAjB,kBAAiB;CAalB;ACrGC;ADqFF;MAKM,uBAAmB;SAAnB,oBAAmB;MACnB,+BAA2B;SAA3B,4BAA2B;MAC3B,aAAY;MACZ,iBAAgB;MAChB,YAAW;CAOhB;CAAA;ACrGC;ADqFF;MAYI,oBAAmB;MACnB,YAAW;MACX,uCAA8B;MAA9B,oCAA8B;MAA9B,+BAA8B;CAEjC;CAAA;AAxDH;EA2DM,oBAAmB;EACnB,sBAAqB;CACtB;AA7DL;EAgEM,YAAW;EACX,mBAAkB;EAClB,UAAS;EACT,WAAU;EACV,aAAY;EACZ,oBEhLW;CFiLZ;AAtEL;EAuEe,aAAe;CAAE;AAvEhC;EAwEe,UAAe;CAAE;AAxEhC;EA2EI,WAAU;EACV,mBAAkB;EAClB,UAAS;EACT,kBAAiB;CAKlB;AChIC;AD6CJ;MAgFM,kBAAiB;MACjB,oBAAmB;CAEtB;CAAA;AChIC;ADkIA;IACE,6BAAwB;IAAxB,8BAAwB;IAAxB,iCAAwB;OAAxB,0BAAwB;OAAxB,2BAAwB;QAAxB,6BAAwB;YAAxB,yBAAwB;CAezB;CAAA;AClJD;ADkIA;MAGM,6BAA4B;MAC5B,kBAAiB;CAYtB;CAAA;AClJD;ADkIC;MAOG,sBAAqB;MACrB,kBAAiB;CAGlB;CAAA;AC7IH;ADkIC;QAS0C,gBAAgB;CAExD;CAAA;AC7IH;ADkIC;QAU0C,gBAAgB;CACxD;CAAA;AC7IH;ADkIC;MAaG,2BAA0B;CAE3B;AAfF;QAciB,8BAA8B;CAAE;CAAA","file":"Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/colors\";\n@import \"~@/styles/theme/breaks\";\n.Bio {\n  &--intro {\n    flex: 0 50%;\n    padding-left: 2em;\n  }\n  &--position {\n    text-transform: capitalize;\n  }\n  &--role {\n    position: absolute;\n    display: inline-block;\n    white-space: nowrap;\n    font-size: 1.2rem;\n    font-weight: 100;\n    text-transform: uppercase;\n    transform: rotate(-90deg);\n    transform-origin: right bottom;\n    bottom: 100%;\n    right: 100%;\n    letter-spacing: .1em;\n    text-decoration: none;\n    color: inherit;\n    > .UiIcon {\n      opacity: 0 !important;\n      & {\n        vertical-align: -.68em;\n        margin-left: .25em;\n        opacity: .4;\n        cursor: pointer;\n      }\n    }\n    @include Break( min-width Breaks(3) ){\n      pointer-events: none;\n      >.UiIcon { display: none }\n    }\n    @include Break( max-width Breaks(3) ){\n      font-size: 1.1rem;\n      line-height: 1.8;\n    }\n  }\n  &--media {\n    width: 100%;\n    height: 32em;\n    object-fit: cover;\n    @include Break( (min-width Breaks(1)) (max-width Breaks(3)) ){\n        object-fit: contain;\n        object-position: center top;\n        height: auto;\n        max-height: 32em;\n        width: auto;\n    }\n    @include Break( max-width Breaks(1) ){\n      margin-right: -1rem;\n      width: 100%;\n      min-width: calc(100% + 2.5rem);\n    }\n  }\n  #content {\n    >.UiBox:only-child {\n      padding-top: 7.5rem;\n      padding-bottom: 10rem;\n    }\n    &:before,\n    &:after {\n      content: \"\";\n      position: absolute;\n      left: 50%;\n      width: 1px;\n      height: 8rem;\n      background: Color(theme);\n    }\n    &:before { top:   -1.5rem }\n    &:after  { bottom: 0      }\n  }\n  .AdjacentNav {\n    z-index: 8;\n    position: relative;\n    margin: 0;\n    padding-top: 7rem;\n    @include Break( max-width Breaks(3) ){\n      margin: 0 0 .6rem;\n      padding-top: 2.6rem;\n    }\n  }\n  @include Break( max-width Breaks(3) ){\n    &--overview {\n      flex-flow: nowrap column;\n        @include Break( max-width Breaks(4) ){\n          padding-top: 6rem !important;\n          margin-top: -4rem;\n        }\n      >:first-child {\n        margin-bottom: 1.5rem;\n        min-height: 300px;\n        @include Break( min-width Breaks(3) ){ min-width: 100% }\n        @include Break( max-width Breaks(1) ){ min-width: 100% }\n      }\n      >:last-child {\n        padding-left: 0 !important;\n        & > :not(p) { text-align: center !important }\n      }\n    }\n  }\n}\n","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("46099074", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&");
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

/***/ "./src/includes/NavTheme/mixin.js":
/*!****************************************!*\
  !*** ./src/includes/NavTheme/mixin.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    $app: function $app() {
      return this.$root.$children[0];
    }
  },
  methods: {
    navTheme_update: function navTheme_update() {
      var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var under = this.navTheme_filter(this.$app.site.AppNav || {}),
          over = this.navTheme_filter(theme),
          merge = Object.assign({
        brand: 'logoTheme_dualtone',
        menu: 'menuTheme_gold'
      }, under, over),
          cList = Object.values(merge).filter(function (v) {
        return v;
      }); // this.$log({under, over, merge, cList})

      this.$root.navTheme = cList;
      return cList;
    },
    navTheme_filter: function navTheme_filter(obj) {
      return Object.keys(obj).reduce(function (all, key) {
        var val = obj[key];
        if (key && val) all[key] = val;
        return all;
      }, {});
    }
  }
});

/***/ }),

/***/ "./src/views/People/Bio.vue":
/*!**********************************!*\
  !*** ./src/views/People/Bio.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bio.vue?vue&type=template&id=b73219bc&scoped=true& */ "./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true&");
/* harmony import */ var _Bio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bio.vue?vue&type=script&lang=js& */ "./src/views/People/Bio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Bio_vue_vue_type_style_index_0_id_b73219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& */ "./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Bio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b73219bc",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('b73219bc', component.options)
    } else {
      api.reload('b73219bc', component.options)
    }
    module.hot.accept(/*! ./Bio.vue?vue&type=template&id=b73219bc&scoped=true& */ "./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bio.vue?vue&type=template&id=b73219bc&scoped=true& */ "./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true&");
(function () {
      api.rerender('b73219bc', {
        render: _Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/People/Bio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/People/Bio.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/People/Bio.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Bio.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_style_index_0_id_b73219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=style&index=0&id=b73219bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_style_index_0_id_b73219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_style_index_0_id_b73219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_style_index_0_id_b73219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_style_index_0_id_b73219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_style_index_0_id_b73219bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Bio.vue?vue&type=template&id=b73219bc&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/People/Bio.vue?vue&type=template&id=b73219bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bio_vue_vue_type_template_id_b73219bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map