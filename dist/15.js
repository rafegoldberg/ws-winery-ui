(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/StatGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "StatGroup",
  props: ['layout', 'title', 'content']
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread */ "./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js");
/* harmony import */ var _VuePress_mix_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/VuePress/mix/item */ "./src/VuePress/mix/item.js");
/* harmony import */ var _computed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computed */ "./src/views/Vineyards/page/computed.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UI_Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UI/Panel */ "./src/components/UI/Panel.vue");
/* harmony import */ var _components_UI_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/UI/Box */ "./src/components/UI/Box/index.vue");
/* harmony import */ var _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/UI/Box/Image */ "./src/components/UI/Box/Image.vue");
/* harmony import */ var _components_UI_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/UI/Heading */ "./src/components/UI/Heading.vue");
/* harmony import */ var _components_modules_StatGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/modules/StatGroup */ "./src/components/modules/StatGroup.vue");
/* harmony import */ var _components_modules_ReadMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/modules/ReadMore */ "./src/components/modules/ReadMore.vue");
/* harmony import */ var _views_Wine_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/Wine/grid */ "./src/views/Wine/grid/index.vue");
/* harmony import */ var _components_static_icon_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/static/icon-list */ "./src/components/static/icon-list.vue");
/* harmony import */ var _components_modules_AdjacentNav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/modules/AdjacentNav */ "./src/components/modules/AdjacentNav.vue");
/* harmony import */ var _Wine_lib_get_wpTerm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Wine/lib/get.wpTerm */ "./src/views/Wine/lib/get.wpTerm.js");

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
  name: 'VineyardPage',
  mixins: [_VuePress_mix_item__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: ['type', 'category', 'slug'],
  created: function created() {
    this.$set(this.$root.filters, 'page', 1);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  data: function data() {
    return {
      useLandscape: false
    };
  },
  methods: {
    getTerm: function getTerm(where) {
      var terms = this.context._embedded["wp:term"];
      terms = lodash_flatten__WEBPACK_IMPORTED_MODULE_4___default()(terms);
      return lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(terms, where);
    },
    handleResize: lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      // this.$log(window.matchMedia("(max-width: 832px)").matches)
      this.$set(this, 'useLandscape', window.matchMedia("(max-width: 832px)").matches);
    }, 250)
  },
  computed: Object(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _computed__WEBPACK_IMPORTED_MODULE_2__, {
    area: function area() {
      if (this.context.loading) return {};else return this.getTerm({
        id: this.context.AVA[0]
      });
    },
    endpoint: function endpoint() {
      if (this.API) return this.API['posts']().slug(this.slug).embed();
    },
    adjacent: function adjacent() {
      if (this.context.loading) false;
      return this.context.adjacent;
    },
    embedded: function embedded() {
      if (this.context.loading) return;
      return this.context._embedded;
    }
  }),
  components: {
    UiPanel: _components_UI_Panel__WEBPACK_IMPORTED_MODULE_6__["default"],
    UiBox: _components_UI_Box__WEBPACK_IMPORTED_MODULE_7__["default"],
    UiBoxImg: _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_8__["default"],
    UiHeading: _components_UI_Heading__WEBPACK_IMPORTED_MODULE_9__["default"],
    StatGroup: _components_modules_StatGroup__WEBPACK_IMPORTED_MODULE_10__["default"],
    ReadMore: _components_modules_ReadMore__WEBPACK_IMPORTED_MODULE_11__["default"],
    AdjacentNav: _components_modules_AdjacentNav__WEBPACK_IMPORTED_MODULE_14__["default"],
    WineGrid: _views_Wine_grid__WEBPACK_IMPORTED_MODULE_12__["default"],
    StaticIconList: _components_static_icon_list__WEBPACK_IMPORTED_MODULE_13__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "StatGroup",
      class: ((_obj = {}), (_obj["StatGroup_" + _vm.layout] = _vm.layout), _obj)
    },
    [
      _vm.title
        ? _c("b", { staticClass: "StatGroup--caption", attrs: { level: 5 } }, [
            _vm._v(_vm._s(_vm.title))
          ])
        : _vm._e(),
      _c(
        "div",
        { staticClass: "StatGroup--list" },
        _vm._l(_vm.content, function(item) {
          return _c("div", { staticClass: "StatGroup--item" }, [
            _c("b", { staticClass: "StatGroup--itemLabel" }, [
              _vm._v(_vm._s(item.label))
            ]),
            _c("span", { staticClass: "StatGroup--itemText" }, [
              _vm._v(_vm._s(item.text))
            ])
          ])
        })
      )
    ]
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "UiTheme_light", attrs: { id: "VineyardPage" } },
        [
          _c(
            "UiPanel",
            { attrs: { id: "VineyardPage-overview" } },
            [
              _c(
                "UiBoxImg",
                {
                  staticClass: "UiTheme_cream",
                  staticStyle: { "background-position": "center 25%" },
                  attrs: { id: "VineyardPage-overviewMedia", img: _vm.media }
                },
                [
                  _vm.area
                    ? _c(
                        "router-link",
                        {
                          staticClass: "AVA-link",
                          attrs: { to: "/growing-ava#" + _vm.area.slug }
                        },
                        [
                          _c("span", {
                            staticClass: "AVA-link--index",
                            domProps: { textContent: _vm._s(_vm.area.index) }
                          }),
                          _vm._v(
                            "\n        " + _vm._s(this.area.name) + "\n      "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _c(
                "UiBox",
                {
                  staticClass: "UiTheme_light wrap_mid",
                  attrs: { id: "VineyardPage-overviewContent" }
                },
                [
                  _vm.text
                    ? _c(
                        "div",
                        { attrs: { id: "VineyardPage-overviewContent-inner" } },
                        [
                          _c(
                            "header",
                            [
                              _c(
                                "AdjacentNav",
                                _vm._b(
                                  { attrs: { all: "/vineyards" } },
                                  "AdjacentNav",
                                  _vm.adjacent,
                                  false
                                )
                              ),
                              _c("UiHeading", {
                                staticClass:
                                  "UiHeading_push÷2 UiHeading_spaceX2",
                                attrs: {
                                  id: "VineyardPage-overviewHeader",
                                  level: 2,
                                  scale: 3
                                },
                                domProps: {
                                  innerHTML: _vm._s(_vm.context.title.rendered)
                                }
                              })
                            ],
                            1
                          ),
                          _c(
                            "aside",
                            { attrs: { id: "VineyardPage-overviewSidebar" } },
                            [
                              _vm._l(_vm.context.acf.vineyardStats, function(
                                stats,
                                i
                              ) {
                                return Array.isArray(
                                  _vm.context.acf.vineyardStats
                                )
                                  ? _c(
                                      "StatGroup",
                                      _vm._b(
                                        { key: "statGroup-" + i },
                                        "StatGroup",
                                        stats,
                                        false
                                      )
                                    )
                                  : _vm._e()
                              }),
                              _vm._l(_vm.tables, function(tbl) {
                                return !Array.isArray(
                                  _vm.context.acf.vineyardStats
                                )
                                  ? _c("div", {
                                      domProps: { innerHTML: _vm._s(tbl) }
                                    })
                                  : _vm._e()
                              })
                            ],
                            2
                          ),
                          _c(
                            "div",
                            { attrs: { id: "VineyardPage-overviewText" } },
                            [
                              _c("blockquote", {
                                domProps: { innerHTML: _vm._s(_vm.text[0]) }
                              }),
                              _c("p", {
                                domProps: { innerHTML: _vm._s(_vm.text[1]) }
                              }),
                              _vm.text.length > 2
                                ? _c("ReadMore", {
                                    attrs: {
                                      id: "VineyardPage-overviewKick",
                                      href: "#content"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm.text.length > 2
            ? _c(
                "UiPanel",
                {
                  staticClass: "UiTheme_cream",
                  staticStyle: { "flex-direction": "row-reverse" },
                  attrs: { id: "content" }
                },
                [
                  _c("UiBox", { staticClass: "UiBox_stack" }, [
                    _c(
                      "div",
                      {
                        staticClass: "wrap_mid",
                        attrs: { id: "VineyardPage--media" }
                      },
                      [
                        _vm.iframe.length
                          ? _c("span", {
                              staticClass: "iframeWrap",
                              domProps: { innerHTML: _vm._s(_vm.iframe[0]) }
                            })
                          : _vm._e()
                      ]
                    ),
                    _c(
                      "article",
                      {
                        staticClass: "wrap_mid",
                        staticStyle: { columns: "18em", "column-gap": "2rem" },
                        attrs: { id: "VineyardPage--text" }
                      },
                      _vm._l(_vm.text.slice(2), function(p) {
                        return _c("p", { domProps: { innerHTML: _vm._s(p) } })
                      })
                    )
                  ])
                ],
                1
              )
            : _vm._e(),
          _c(
            "UiPanel",
            { staticClass: "VineyardPage--grid UiTheme_light" },
            [
              _c(
                "UiBox",
                { staticClass: "UiBox_stack" },
                [
                  _c(
                    "UiHeading",
                    {
                      staticClass: "UiHeading_spaceX2",
                      attrs: { level: 2, scale: 3 }
                    },
                    [
                      _vm._v("\n        Our\n        "),
                      _c("span", {
                        domProps: {
                          innerHTML: _vm._s(_vm.context.title.rendered)
                        }
                      }),
                      _vm._v(" Wines\n      ")
                    ]
                  ),
                  _c("WineGrid", {
                    staticClass: "wrap",
                    attrs: { category: _vm.slug, paginate: 4 }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "UiPanel",
            { staticClass: "UiTheme_dark" },
            [
              _c(
                "UiBox",
                { staticClass: "iconListBox" },
                [_c("StaticIconList")],
                1
              )
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.StatGroup[data-v-2be30afa] {\n  font-size: .88em;\n  line-height: 1.4;\n}\n.StatGroup + .StatGroup[data-v-2be30afa] {\n    margin-top: 0.4rem;\n    padding-top: 0.6rem;\n    border-top: 1px solid #BA9454;\n}\n.StatGroup--caption[data-v-2be30afa] {\n  padding: 0.4rem 0.5rem;\n  font-size: 1rem;\n  font-family: \"futura-pt\", Futura, Verdana, sans-serif;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #BA9454;\n}\n.StatGroup_column .StatGroup--item[data-v-2be30afa] {\n  padding: 0.4rem 0.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap column;\n          flex-flow: nowrap column;\n}\n.StatGroup_row .StatGroup--item[data-v-2be30afa] {\n  display: table-row;\n}\n.StatGroup_row .StatGroup--item > *[data-v-2be30afa] {\n    display: table-cell;\n    padding: 0.4rem 0.5rem;\n}\n.StatGroup_row .StatGroup--list[data-v-2be30afa] {\n    display: table;\n    border-collapse: collapse;\n    border-spacing: 0;\n    max-width: 100%;\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/StatGroup.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/fonts.scss"],"names":[],"mappings":";AAsBA;EAMI,iBAAgB;EAChB,iBAAgB;CAMjB;AAbH;IASM,mBANO;IAOP,oBAA4B;IAC5B,8BC/BW;CDgCZ;AAGH;EACE,uBAbe;EAcf,gBAAe;EACf,sDEvC+C;EFwC/C,iBAAgB;EAChB,0BAAyB;EACzB,eCzCa;CD0Cd;AAIC;EACE,uBAxBa;EAyBb,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAwB;EAAxB,8BAAwB;EAAxB,iCAAwB;KAAxB,0BAAwB;KAAxB,2BAAwB;MAAxB,6BAAwB;UAAxB,yBAAwB;CACzB;AACD;EACE,mBAAkB;CAWnB;AAZD;IAGI,oBAAmB;IACnB,uBAhCW;CAiCZ;AACO;IACN,eAAc;IACd,0BAAyB;IACzB,kBAAiB;IACjB,gBAAe;CAChB","file":"StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/colors\";\n@import \"~@/styles/theme/fonts\";\n.StatGroup {\n\n  $B: #{&};\n  $pad: .4rem .5rem;\n\n  & {\n    font-size: .88em;\n    line-height: 1.4;\n    & + & {\n      margin-top: nth($pad,1);\n      padding-top: nth($pad,1)*1.5;\n      border-top: 1px solid Color(theme);\n    }\n  }\n  \n  &--caption {\n    padding: $pad;\n    font-size: 1rem;\n    font-family: $ff-sans;\n    font-weight: 900;\n    text-transform: uppercase;\n    color: Color(theme);\n  }\n  &--item {\n    & {\n    }\n    #{$B}_column & {\n      padding: $pad;\n      display: flex;\n      flex-flow: nowrap column;\n    }\n    #{$B}_row & {\n      display: table-row;\n      > * {\n        display: table-cell;\n        padding: $pad;\n      }\n      @at-root #{$B}_row #{$B}--list {\n        display: table;\n        border-collapse: collapse;\n        border-spacing: 0;\n        max-width: 100%;\n      }\n    }\n    &Label {}\n    &Text {}\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","\n$ff-sans:  \"futura-pt\", Futura, Verdana, sans-serif;\n\n$ff-serif: 'Butler', Georgia, serif;\n\n$ff-alt:   nth($ff-serif,2), serif;\n\n$ff-mono:  Source Code Pro, monospace;"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n#VineyardPage-overviewKick {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: #BA9454;\n}\n#VineyardPage-overviewKick:not(:hover) {\n    text-decoration: none;\n}\n#VineyardPage-overviewContent {\n  -webkit-flex-basis: 33%;\n      -ms-flex-preferred-size: 33%;\n          flex-basis: 33%;\n}\n@media (max-width: 68rem) {\n#VineyardPage-overviewContent-inner {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n         -moz-box-orient: vertical;\n         -moz-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n}\n}\n#VineyardPage-overviewHeader {\n  margin-left: -.1em;\n}\n@media (max-width: 52rem) {\n#VineyardPage-overviewHeader {\n      margin: .8em auto 1.2em;\n      text-align: center;\n      text-indent: 0;\n}\n}\n#VineyardPage-overviewMedia:before {\n  display: none !important;\n}\n#VineyardPage-overviewSidebar {\n  float: left;\n  width: 42%;\n  margin: 0 1.4rem 0 -.4rem;\n  border-right: 1px solid #BA9454;\n}\n#VineyardPage-overviewSidebar > :first-child caption {\n    padding-top: 0.3rem;\n}\n#VineyardPage-overviewSidebar > :not(:first-child) caption {\n    border-top: 1px solid;\n    margin-top: 0.7rem;\n}\n@media (max-width: 68rem) {\n#VineyardPage-overviewSidebar > :not(:first-child) caption {\n        border-top: 3px solid;\n}\n}\n@media (max-width: 68rem) {\n#VineyardPage-overviewSidebar {\n      float: none;\n      width: 100%;\n      border-right: none;\n      margin: 0;\n      padding: 0;\n}\n}\n@media (min-width: 68rem) {\n#VineyardPage-overviewSidebar:not(:empty) + #VineyardPage-overviewText {\n    margin-left: 45%;\n}\n}\n#VineyardPage--media {\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 68rem) {\n#VineyardPage--media {\n      margin-top: -3rem;\n}\n}\n@media (max-width: 38rem) {\n#VineyardPage--media {\n      min-width: 100vw;\n      margin-top: -6rem;\n      margin-left: -2.5rem;\n}\n}\n#VineyardPage--media .iframeWrap {\n    position: relative;\n    display: block;\n    padding-bottom: 55%;\n    /* 16:9 */\n    padding-top: 25px;\n    height: 0;\n}\n#VineyardPage--media .iframeWrap iframe {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n}\n@media (min-width: 68rem) {\n#VineyardPage > .UiPanel:first-child {\n    min-height: 100vh;\n    max-height: unset;\n}\n#VineyardPage > .UiPanel:first-child > .UiBoxImage:first-child {\n    max-height: 100vh;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n}\n}\n@media (min-width: 68rem) and (min-width: 52rem) {\n#VineyardPage > .UiPanel:first-child > .UiBoxImage:first-child {\n      background-position: center !important;\n}\n}\n@media (max-width: 52rem) {\n.VineyardPage--grid, .VineyardPage--grid > .UiBox:first-child {\n    padding-top: 0;\n}\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/Vineyards/page/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/extend/text.label.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AAoPK;ECnPH,iBAAgB;EAChB,eAAc;EACd,0BAAyB;EACzB,sBAAqB;EACrB,eCHe;CDOhB;AD2OI;IC7OD,sBAAqB;CACtB;ADkLC;EACE,wBAAe;MAAf,6BAAe;UAAf,gBAAe;CAOhB;AGlID;AH6HI;MACE,qBAAa;MAAb,sBAAa;MAAb,kBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,6BAAsB;MAAtB,8BAAsB;MAAtB,+BAAsB;SAAtB,0BAAsB;SAAtB,2BAAsB;UAAtB,2BAAsB;cAAtB,uBAAsB;CACvB;CAAA;AAIL;EAEE,mBAAkB;CAOnB;AG7ID;AHoIA;MAII,wBAAuB;MACvB,mBAAkB;MAClB,eAAc;CAGjB;CAAA;AAEA;EAEG,yBAAwB;CACzB;AAGH;EACE,YAAW;EACX,WA/BiB;EAgCjB,0BAAyB;EACzB,gCEvNW;CF2OZ;AAxBA;IAOG,oBAAmB;CACpB;AARF;IAUG,sBAAqB;IACrB,mBAAkB;CAInB;AGpKH;AHqJC;QAaK,sBAAqB;CAExB;CAAA;AGpKH;AHqJA;MAkBI,YAAW;MACX,YAAW;MACX,mBAAkB;MAClB,UAAS;MACT,WAAU;CAEb;CAAA;AG7KD;AH8KA;IAEI,iBAAgC;CAEnC;CAAA;AAMH;EACE,sBAAqB;CAwBtB;AGjNC;AHwLF;MAII,kBAAiB;CAqBpB;CAAA;AGjNC;AHwLF;MAOI,iBAAgB;MAChB,kBAAiB;MACjB,qBAAoB;CAgBvB;CAAA;AAzBA;IAYG,mBAAkB;IAClB,eAAc;IACd,oBAAmB;IAAE,UAAU;IAC/B,kBAAiB;IACjB,UAAS;CAQV;AAxBF;MAkBK,mBAAkB;MAClB,OAAM;MACN,QAAO;MACP,YAAW;MACX,aAAY;CACb;AG/MH;AHoNJ;IAGM,kBAAiB;IACjB,kBAAiB;CAClB;AALL;IAOM,kBAAiB;IACjB,yBAAgB;IAAhB,iBAAgB;IAChB,OAAM;CAIP;CAAA;AGjOD;AHoNJ;MAWQ,uCAAsC;CAEzC;CAAA;AGjOD;AHqOJ;IAGM,eAAc;CACf;CAAA","file":"index.vue?vue&type=style&index=0&lang=scss&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~@/styles/theme/colors';\n@import '~@/styles/theme/breaks';\n@import '~@/styles/theme/fonts';\n\n@import '~@/styles/extend/text.label';\n\n#VineyardPage {\n  &-overview {\n    $sidebar-width: 42%;\n\n    &Content {\n      flex-basis: 33%;\n      @include Break(max-width Breaks(4)) {\n        &-inner {\n          display: flex;\n          flex-direction: column;\n        }\n      }\n    }\n\n    &Header {\n      // margin: 0 0 1rem;\n      margin-left: -.1em;\n      @include Break(max-width Breaks(3)) {\n        margin: .8em auto 1.2em;\n        text-align: center;\n        text-indent: 0;\n        // line-height: 1.1;\n      }\n    }\n\n    &Media {\n      &:before {\n        display: none !important;\n      }\n    }\n\n    &Sidebar {\n      float: left;\n      width: $sidebar-width;\n      margin: 0 1.4rem 0 -.4rem;\n      border-right: 1px solid Color(theme);\n\n      > :first-child caption {\n        padding-top: 0.3rem;\n      }\n      > :not(:first-child) caption {\n        border-top: 1px solid;\n        margin-top: 0.7rem;\n        @include Break(max-width Breaks(4)) {\n          border-top: 3px solid;\n        }\n      }\n\n      @include Break(max-width Breaks(4)) {\n        float: none;\n        width: 100%;\n        border-right: none;\n        margin: 0;\n        padding: 0;\n      }\n    }\n    &Sidebar:not(:empty) + &Text {\n      @include Break(min-width Breaks(4)) {\n        margin-left: $sidebar-width + 3%;\n      }\n    }\n\n    &Kick {\n      @extend %text-label;\n    }\n  }\n  &--media {\n    margin-bottom: 1.5rem;\n    \n    @include Break(max-width Breaks(4)) {\n      margin-top: -3rem;\n    }\n    @include Break(max-width Breaks(2)) {\n      min-width: 100vw;\n      margin-top: -6rem;\n      margin-left: -2.5rem;\n    }\n    .iframeWrap {\n      position: relative;\n      display: block;\n      padding-bottom: 55%; /* 16:9 */\n      padding-top: 25px;\n      height: 0;\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n}\n\n#VineyardPage > .UiPanel:first-child {\n  @include Break(min-width Breaks(4)) {\n    & {\n      min-height: 100vh;\n      max-height: unset;\n    }\n    > .UiBoxImage:first-child {\n      max-height: 100vh;\n      position: sticky;\n      top: 0;\n      @include Break(min-width Breaks(3)) {\n        background-position: center !important;\n      }\n    }\n  }\n}\n\n.VineyardPage--grid {\n  @include Break( max-width Breaks(3) ){\n    &, > .UiBox:first-child {\n      padding-top: 0;\n    }\n  }\n}\n","%text-label {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: Color(theme);\n  &:not(:hover) {\n    text-decoration: none;\n  }\n}","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.AVA-link {\n  position: absolute;\n  right: 0;\n  bottom: 1.5rem;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2em;\n  margin: auto 0 0 auto;\n  padding: 0.6em 0.9em 0.6em 0;\n  font-size: smaller;\n  line-height: 1;\n  text-decoration: none;\n  color: #FAFAFA;\n  background: rgba(13, 13, 13, 0.6);\n  border: 1px solid rgba(90, 90, 90, 0.75);\n  border-width: 1px 0;\n  -webkit-border-radius: 1em 0 0 1em;\n     -moz-border-radius: 1em 0 0 1em;\n          border-radius: 1em 0 0 1em;\n  -webkit-box-shadow: 1px 2px 12px -1px rgba(0, 0, 0, 0.5);\n     -moz-box-shadow: 1px 2px 12px -1px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 2px 12px -1px rgba(0, 0, 0, 0.5);\n  -webkit-transition: .26s ease;\n  -o-transition: .26s ease;\n  -moz-transition: .26s ease;\n  transition: .26s ease;\n}\n.AVA-link--index {\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -moz-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n       -moz-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 2em;\n    height: 2em;\n    margin-right: 0.6em;\n    font-weight: bold;\n    background: #BA9454;\n    color: #FAFAFA;\n    border: 0 double #FAFAFA;\n    -webkit-border-radius: 100%;\n       -moz-border-radius: 100%;\n            border-radius: 100%;\n    -webkit-transition: inherit;\n    -o-transition: inherit;\n    -moz-transition: inherit;\n    transition: inherit;\n}\n.AVA-link:not(:hover) .AVA-link--index {\n    -webkit-box-shadow: 0 0 0 3px #FAFAFA, 0 0 0 0px #FAFAFA inset;\n       -moz-box-shadow: 0 0 0 3px #FAFAFA, 0 0 0 0px #FAFAFA inset;\n            box-shadow: 0 0 0 3px #FAFAFA, 0 0 0 0px #FAFAFA inset;\n}\n.AVA-link:hover .AVA-link--index {\n    -webkit-box-shadow: 0 0 0 0px #FAFAFA, 0 0 0 3px #FAFAFA inset;\n       -moz-box-shadow: 0 0 0 0px #FAFAFA, 0 0 0 3px #FAFAFA inset;\n            box-shadow: 0 0 0 0px #FAFAFA, 0 0 0 3px #FAFAFA inset;\n}\n.AVA-link:after {\n    content: '\\2192';\n    -webkit-transition: inherit;\n    -o-transition: inherit;\n    -moz-transition: inherit;\n    transition: inherit;\n    margin-left: .2em;\n    -webkit-transform: translateY(1px);\n       -moz-transform: translateY(1px);\n        -ms-transform: translateY(1px);\n         -o-transform: translateY(1px);\n            transform: translateY(1px);\n}\n.AVA-link:not(:hover) {\n    opacity: .9;\n}\n.AVA-link:not(:hover):after {\n      margin-left: -1em;\n      opacity: 0;\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/Vineyards/page/index.vue"],"names":[],"mappings":";AAAA,iBAAiB;AA+SjB;EAQE,mBAAkB;EAClB,SAAQ;EACR,eAAc;EAGd,4BAAoB;EAApB,6BAAoB;EAApB,yBAAoB;EAApB,4BAAoB;EAApB,qBAAoB;EACpB,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,YAba;EAcb,sBAAqB;EACrB,6BAAmC;EAEnC,mBAAkB;EAClB,eAjBW;EAmBX,sBAAqB;EACrB,eAjBgB;EAkBhB,kCAA6B;EAC7B,yCAAoC;EACpC,oBAAmB;EACnB,mCAAkC;KAAlC,gCAAkC;UAAlC,2BAAkC;EAClC,yDAAwC;KAAxC,sDAAwC;UAAxC,iDAAwC;EACxC,8BAAqB;EAArB,yBAAqB;EAArB,2BAAqB;EAArB,sBAAqB;CAuCtB;AAtCC;IACE,4BAAoB;IAApB,6BAAoB;IAApB,yBAAoB;IAApB,4BAAoB;IAApB,qBAAoB;IACpB,0BAAmB;IAAnB,4BAAmB;OAAnB,uBAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;IACnB,yBAAuB;IAAvB,gCAAuB;OAAvB,sBAAuB;QAAvB,sBAAuB;YAAvB,wBAAuB;IACvB,WAhCW;IAiCX,YAjCW;IAkCX,oBAhCW;IAiCX,kBAAiB;IACjB,oBAjCc;IAkCd,eAjCc;IAkCd,yBAlCc;IAmCd,4BAAmB;OAAnB,yBAAmB;YAAnB,oBAAmB;IACnB,4BAAmB;IAAnB,uBAAmB;IAAnB,yBAAmB;IAAnB,oBAAmB;CACpB;AA3CH;IA8CI,+DAEyB;OAFzB,4DAEyB;YAFzB,uDAEyB;CAC1B;AAjDH;IAmDI,+DAEyB;OAFzB,4DAEyB;YAFzB,uDAEyB;CAC1B;AAtDH;IAwDI,iBAAa;IACb,4BAAmB;IAAnB,uBAAmB;IAAnB,yBAAmB;IAAnB,oBAAmB;IACnB,kBAAiB;IACjB,mCAA0B;OAA1B,gCAA0B;QAA1B,+BAA0B;SAA1B,8BAA0B;YAA1B,2BAA0B;CAC3B;AA5DH;IA8DI,YAAW;CAKZ;AAnEH;MAgEM,kBAAiB;MACjB,WAAU;CACX","file":"index.vue?vue&type=style&index=1&lang=scss&","sourcesContent":["@charset \"UTF-8\";\n.AVA-link {\n  position: absolute;\n  right: 0;\n  bottom: 1.5rem;\n  display: inline-flex;\n  align-items: center;\n  height: 2em;\n  margin: auto 0 0 auto;\n  padding: 0.6em 0.9em 0.6em 0;\n  font-size: smaller;\n  line-height: 1;\n  text-decoration: none;\n  color: #FAFAFA;\n  background: rgba(13, 13, 13, 0.6);\n  border: 1px solid rgba(90, 90, 90, 0.75);\n  border-width: 1px 0;\n  border-radius: 1em 0 0 1em;\n  box-shadow: 1px 2px 12px -1px rgba(0, 0, 0, 0.5);\n  transition: .26s ease; }\n  .AVA-link--index {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 2em;\n    height: 2em;\n    margin-right: 0.6em;\n    font-weight: bold;\n    background: #BA9454;\n    color: #FAFAFA;\n    border: 0 double #FAFAFA;\n    border-radius: 100%;\n    transition: inherit; }\n  .AVA-link:not(:hover) .AVA-link--index {\n    box-shadow: 0 0 0 3px #FAFAFA, 0 0 0 0px #FAFAFA inset; }\n  .AVA-link:hover .AVA-link--index {\n    box-shadow: 0 0 0 0px #FAFAFA, 0 0 0 3px #FAFAFA inset; }\n  .AVA-link:after {\n    content: '→';\n    transition: inherit;\n    margin-left: .2em;\n    transform: translateY(1px); }\n  .AVA-link:not(:hover) {\n    opacity: .9; }\n    .AVA-link:not(:hover):after {\n      margin-left: -1em;\n      opacity: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n#VineyardPage blockquote {\n  font-family: Georgia, serif;\n  font-style: italic;\n  color: #BA9454;\n  border-left: 0 solid transparent;\n  margin-left: 0;\n  padding-left: 0;\n}\n#VineyardPage hr {\n  border-width: 1px 0 0;\n  border-style: solid;\n  border-color: #BA9454;\n  margin: 1rem 0;\n}\n#VineyardPage-overview table {\n  margin: 0;\n  font-size: 0.8rem;\n}\n#VineyardPage-overview table * {\n    font-size: inherit;\n    border: none;\n}\n#VineyardPage-overview table caption {\n    border: none;\n    font-weight: 900;\n    letter-spacing: 0;\n    margin: 0;\n    padding: 0.8em 0.4em;\n    font-size: 1.2em;\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/Vineyards/page/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/fonts.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],"names":[],"mappings":";AA0XA;EAEI,4BCvX8B;EDwX9B,mBAAkB;EAClB,eE5Xa;EF6Xb,iCAAgC;EAChC,eAAc;EACd,gBAAe;CAChB;AARH;EAWI,sBAAqB;EACrB,oBAAmB;EACnB,sBErYa;EFsYb,eAAc;CACf;AAED;EACE,UAAS;EACT,kBAAiB;CAalB;AAfA;IAIG,mBAAkB;IAClB,aAAY;CACb;AANF;IAQG,aAAY;IACZ,iBAAgB;IAChB,kBAAiB;IACjB,UAAS;IACT,qBAAoB;IACpB,iBAAgB;CACjB","file":"index.vue?vue&type=style&index=2&lang=scss&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~@/styles/theme/colors';\n@import '~@/styles/theme/fonts';\n\n#VineyardPage {\n  blockquote {\n    font-family: $ff-alt;\n    font-style: italic;\n    color: Color(theme);\n    border-left: 0 solid transparent;\n    margin-left: 0;\n    padding-left: 0;\n  }\n\n  hr {\n    border-width: 1px 0 0;\n    border-style: solid;\n    border-color: Color(theme);\n    margin: 1rem 0;\n  }\n\n  &-overview table {\n    margin: 0;\n    font-size: 0.8rem;\n    * {\n      font-size: inherit;\n      border: none;\n    }\n    caption {\n      border: none;\n      font-weight: 900;\n      letter-spacing: 0;\n      margin: 0;\n      padding: 0.8em 0.4em;\n      font-size: 1.2em;\n    }\n  }\n} // #VineyardPage\n","\n$ff-sans:  \"futura-pt\", Futura, Verdana, sans-serif;\n\n$ff-serif: 'Butler', Georgia, serif;\n\n$ff-alt:   nth($ff-serif,2), serif;\n\n$ff-mono:  Source Code Pro, monospace;","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("29d49cc2", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("56b7766c", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("61def64b", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("21ccb068", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/modules/StatGroup.vue":
/*!**********************************************!*\
  !*** ./src/components/modules/StatGroup.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatGroup.vue?vue&type=template&id=2be30afa&scoped=true& */ "./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true&");
/* harmony import */ var _StatGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatGroup.vue?vue&type=script&lang=js& */ "./src/components/modules/StatGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StatGroup_vue_vue_type_style_index_0_id_2be30afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& */ "./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StatGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2be30afa",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('2be30afa', component.options)
    } else {
      api.reload('2be30afa', component.options)
    }
    module.hot.accept(/*! ./StatGroup.vue?vue&type=template&id=2be30afa&scoped=true& */ "./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatGroup.vue?vue&type=template&id=2be30afa&scoped=true& */ "./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true&");
(function () {
      api.rerender('2be30afa', {
        render: _StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/modules/StatGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/modules/StatGroup.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/modules/StatGroup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./StatGroup.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_style_index_0_id_2be30afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=style&index=0&id=2be30afa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_style_index_0_id_2be30afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_style_index_0_id_2be30afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_style_index_0_id_2be30afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_style_index_0_id_2be30afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_style_index_0_id_2be30afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StatGroup.vue?vue&type=template&id=2be30afa&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/StatGroup.vue?vue&type=template&id=2be30afa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatGroup_vue_vue_type_template_id_2be30afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Vineyards/page/computed.js":
/*!**********************************************!*\
  !*** ./src/views/Vineyards/page/computed.js ***!
  \**********************************************/
/*! exports provided: media, iframe, tables, text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iframe", function() { return iframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tables", function() { return tables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_0__);

function media(self) {
  if (this.context.loading) return;

  if ('cover' in this.context.acf && this.context.acf.cover && Object.values(this.context.acf.cover).filter(function (v) {
    return v ? true : false;
  }).length) {
    var cover = this.context.acf.cover;
    if (!this.useLandscape) return cover.portraitImg.url;else return cover.landscapeImg.url;
  }

  var img = lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default()(this.embedded['wp:featuredmedia'])[0],
      src = img.source_url;
  src = this.wsRewriteSRC(src);
  return src;
}
function iframe(self, str) {
  if (this.context.loading) return;

  if ('video' in this.context.acf && this.context.acf.video && this.context.acf.video.length) {
    var acf = this.context.acf.video,
        vid = acf.indexOf('/') >= 0 ? acf.split('/').reverse()[0] : acf;
    vid = "<iframe src=\"//player.vimeo.com/video/".concat(vid, "?title=0&byline=0&portrait=0\" width=\"640\" height=\"355\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe>");
    return [vid];
  }

  var txt = str || this.context.content.rendered,
      rgx = txt.match(/(<iframe[^>]*>.*[^<]*?<\/iframe>)/gim);
  if (rgx && rgx.length) return rgx.map(function (e) {
    return e.trim();
  }).filter(function (e) {
    return e && e !== "&nbsp;" ? true : false;
  });else return [];
}
function tables(self, str) {
  var txt = str || !this.context.loading && this.context.content.rendered,
      rgx = txt.match(/(<table[^>]*>(?:.|\s)*?<\/table>)/gim);
  if (rgx && rgx.length) return rgx.map(function (e) {
    return e.trim();
  }).filter(function (e) {
    return e && e !== "&nbsp;" ? true : false;
  });else return [];
}
function text(self) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "p";
  if (this.context.loading) return;
  if ('vineyardNotes' in this.context.acf && this.context.acf.vineyardNotes) str = this.context.acf.vineyardNotes.quote + (this.context.acf.vineyardNotes.content || this.context.content.rendered);
  var txt = str || this.context.content.rendered,
      rgx = "(?!".concat(tag, ">)([^><]+)(?=</?").concat(tag, ">)");
  rgx = new RegExp(rgx, 'gim');
  return txt.match(rgx).map(function (e) {
    return e.trim();
  }).filter(function (e) {
    return e && e !== "&nbsp;" ? true : false;
  });
}

/***/ }),

/***/ "./src/views/Vineyards/page/index.vue":
/*!********************************************!*\
  !*** ./src/views/Vineyards/page/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a26252e8& */ "./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/Vineyards/page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ "./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=2&lang=scss& */ "./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
      api.createRecord('a26252e8', component.options)
    } else {
      api.reload('a26252e8', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=a26252e8& */ "./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a26252e8& */ "./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8&");
(function () {
      api.rerender('a26252e8', {
        render: _index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/Vineyards/page/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Vineyards/page/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/views/Vineyards/page/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************!*\
  !*** ./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************!*\
  !*** ./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&":
/*!******************************************************************************!*\
  !*** ./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8&":
/*!***************************************************************************!*\
  !*** ./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a26252e8& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/page/index.vue?vue&type=template&id=a26252e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a26252e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Wine/lib/get.wpTerm.js":
/*!******************************************!*\
  !*** ./src/views/Wine/lib/get.wpTerm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTerm; });
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);


function getTerm(where, WPX) {
  if (!WPX) WPX = this.context;
  if (!where || !WPX._embedded) return {};
  var terms = WPX._embedded["wp:term"];
  terms = lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default()(terms);
  return lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(terms, where);
}

/***/ })

}]);
//# sourceMappingURL=15.js.map