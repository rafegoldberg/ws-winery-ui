(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./docs/src/.loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=custom&index=0&blockType=docs":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./docs/src/.loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/MediaList/index.vue?vue&type=custom&index=0&blockType=docs ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
      Component.options.__docs = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n```vue\n<MediaList :style=\"{\n  position:'relative',\n}\"/>\n```\n"
    });

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/MediaList/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");
/* harmony import */ var _VuePress_mix_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/VuePress/mix/API */ "./src/VuePress/mix/API.js");
/* harmony import */ var _components_UI_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/UI/Heading */ "./src/components/UI/Heading.vue");
/* harmony import */ var _assets_preloader_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/preloader.gif */ "./src/assets/preloader.gif");
/* harmony import */ var _assets_preloader_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_preloader_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mock_default_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/default.jpg */ "./src/components/modules/MediaList/mock/default.jpg");
/* harmony import */ var _mock_default_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mock_default_jpg__WEBPACK_IMPORTED_MODULE_5__);


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
  name: "MediaList",
  mixins: [_VuePress_mix_API__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    UiHeading: _components_UI_Heading__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    list: {
      type: [Array, Object]
    },
    title: {
      type: String
    }
  },
  data: function data() {
    return {
      current: 0,
      imgSpinner: _assets_preloader_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      imgLoading: false
    };
  },
  methods: {
    getImage: function getImage() {// console.log({args:arguments,self:this})
    }
  },
  computed: {
    active: {
      default: 0,
      get: function get() {
        return this.current;
      },
      set: function set(i) {
        var list = this.list,
            prior = this.current,
            active = i >= 0 ? i : -1;
        if (list[active]) active != prior && this.$emit('activate', list[active], list[prior]);
        this.current = active;
      }
    }
  },
  asyncComputed: {
    media: {
      default: _mock_default_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      get: function () {
        var _get = Object(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _this = this;

          var img, err, xhr;
          return _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.API) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", _mock_default_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);

                case 2:
                  img = this.list[this.active] ? this.list[this.active].featured_media : false;

                  if (img) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", _mock_default_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);

                case 5:
                  _context.next = 7;
                  return this.API.media().id(img).get().then(function (rsp) {
                    return _this.wsRewriteSRC(rsp.source_url);
                  }).catch(function (e) {
                    return err = e;
                  });

                case 7:
                  xhr = _context.sent;

                  if (!err) {
                    _context.next = 10;
                    break;
                  }

                  return _context.abrupt("return", _mock_default_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);

                case 10:
                  return _context.abrupt("return", xhr);

                case 11:
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
        this.active;
      }
    }
  },
  watch: {
    media: function media(is, was) {
      this.imgLoading = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");
/* harmony import */ var _VuePress_mix_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/VuePress/mix/connect */ "./src/VuePress/mix/connect.js");
/* harmony import */ var _includes_NavTheme_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/includes/NavTheme/mixin */ "./src/includes/NavTheme/mixin.js");
/* harmony import */ var _components_UI_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UI/Panel */ "./src/components/UI/Panel.vue");
/* harmony import */ var _components_UI_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UI/Box */ "./src/components/UI/Box/index.vue");
/* harmony import */ var _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UI/Box/Image */ "./src/components/UI/Box/Image.vue");
/* harmony import */ var _components_UI_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/UI/Heading */ "./src/components/UI/Heading.vue");
/* harmony import */ var _components_UI_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/UI/List */ "./src/components/UI/List.vue");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list */ "./src/views/Vineyards/list.vue");
/* harmony import */ var _components_modules_ReadMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/modules/ReadMore */ "./src/components/modules/ReadMore.vue");
/* harmony import */ var _components_modules_ActionBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/modules/ActionBox */ "./src/components/modules/ActionBox/index.vue");
/* harmony import */ var _components_static_discovery_boxes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/static/discovery-boxes */ "./src/components/static/discovery-boxes/index.vue");
/* harmony import */ var _assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/assets/mock/vineyard-feat.png */ "./src/assets/mock/vineyard-feat.png");
/* harmony import */ var _assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_mock_vineyards_page_casks_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/mock/vineyards-page/casks.png */ "./src/assets/mock/vineyards-page/casks.png");
/* harmony import */ var _assets_mock_vineyards_page_casks_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_mock_vineyards_page_casks_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_mock_vineyards_page_grapes_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/assets/mock/vineyards-page/grapes.png */ "./src/assets/mock/vineyards-page/grapes.png");
/* harmony import */ var _assets_mock_vineyards_page_grapes_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_mock_vineyards_page_grapes_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_mock_vineyards_page_about_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/assets/mock/vineyards-page/about.png */ "./src/assets/mock/vineyards-page/about.png");
/* harmony import */ var _assets_mock_vineyards_page_about_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_mock_vineyards_page_about_png__WEBPACK_IMPORTED_MODULE_16__);


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















var pageSettings = {
  title: "Discover Our Vineyards"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VineyardsList",
  props: ['type', 'category', 'parent', 'include', 'exclude'],
  mixins: [_VuePress_mix_connect__WEBPACK_IMPORTED_MODULE_2__["default"], _includes_NavTheme_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (self) {
      return self.navTheme_update({
        menu: "menuTheme_light",
        brand: "logoTheme_light"
      });
    });
  },
  components: {
    UiPanel: _components_UI_Panel__WEBPACK_IMPORTED_MODULE_4__["default"],
    UiBox: _components_UI_Box__WEBPACK_IMPORTED_MODULE_5__["default"],
    UiBoxImage: _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_6__["default"],
    UiList: _components_UI_List__WEBPACK_IMPORTED_MODULE_8__["default"],
    UiHeading: _components_UI_Heading__WEBPACK_IMPORTED_MODULE_7__["default"],
    VList: _list__WEBPACK_IMPORTED_MODULE_9__["default"],
    ReadMore: _components_modules_ReadMore__WEBPACK_IMPORTED_MODULE_10__["default"],
    ActionBox: _components_modules_ActionBox__WEBPACK_IMPORTED_MODULE_11__["default"],
    DiscoveryBoxes: _components_static_discovery_boxes__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  computed: {
    page: function page() {
      return pageSettings;
    },
    imgs: function imgs() {
      return {
        feat: _assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        casks: _assets_mock_vineyards_page_casks_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        grapes: _assets_mock_vineyards_page_grapes_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        about: _assets_mock_vineyards_page_about_png__WEBPACK_IMPORTED_MODULE_16___default.a
      };
    }
  },
  asyncComputed: {
    settings: {
      default: {
        loading: true
      },
      get: function () {
        var _get = Object(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var error, async;
          return _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.API) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", {
                    loading: true
                  });

                case 2:
                  _context.next = 4;
                  return this.API.namespace('acf/v3').options().id('options').get().then(function (rsp) {
                    return rsp.acf.vineyards_list_settings;
                  }).catch(function (err) {
                    return error = err;
                  });

                case 4:
                  async = _context.sent;
                  return _context.abrupt("return", async);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function get() {
          return _get.apply(this, arguments);
        };
      }()
    }
  },
  metatags: {
    title: "Our Vineyards"
  },
  methods: {
    fetch: function fetch() {
      var ep = this.endpoint;
      if (this.parent) ep = ep.parent(this.parent);
      if (this.category) ep = ep.category(this.category);
      if (this.include) ep = ep.include(this.include);
      if (this.exclude) ep = ep.exclude(this.exclude);
      return ep;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/list.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuePress_mix_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/VuePress/mix/connect */ "./src/VuePress/mix/connect.js");
/* harmony import */ var _components_UI_Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/UI/Panel */ "./src/components/UI/Panel.vue");
/* harmony import */ var _components_UI_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/UI/Box */ "./src/components/UI/Box/index.vue");
/* harmony import */ var _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/UI/Box/Image */ "./src/components/UI/Box/Image.vue");
/* harmony import */ var _components_UI_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UI/Heading */ "./src/components/UI/Heading.vue");
/* harmony import */ var _components_UI_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UI/List */ "./src/components/UI/List.vue");
/* harmony import */ var _components_modules_MediaList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/modules/MediaList */ "./src/components/modules/MediaList/index.vue");
/* harmony import */ var _assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/mock/vineyard-feat.png */ "./src/assets/mock/vineyard-feat.png");
/* harmony import */ var _assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_7__);
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








var pageSettings = {
  title: "Discover Our Vineyards"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VineyardsList",
  props: ['type', 'category', 'parent', 'include', 'exclude', 'title'],
  mixins: [_VuePress_mix_connect__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    UiPanel: _components_UI_Panel__WEBPACK_IMPORTED_MODULE_1__["default"],
    UiBox: _components_UI_Box__WEBPACK_IMPORTED_MODULE_2__["default"],
    UiBoxImage: _components_UI_Box_Image__WEBPACK_IMPORTED_MODULE_3__["default"],
    UiList: _components_UI_List__WEBPACK_IMPORTED_MODULE_5__["default"],
    UiHeading: _components_UI_Heading__WEBPACK_IMPORTED_MODULE_4__["default"],
    MediaList: _components_modules_MediaList__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: {
    page: function page() {
      return pageSettings;
    },
    imgs: function imgs() {
      return {
        featImg: _assets_mock_vineyard_feat_png__WEBPACK_IMPORTED_MODULE_7___default.a
      };
    }
  },
  methods: {
    fetch: function fetch() {
      var ep = this.endpoint;
      if (this.parent) ep = ep.parent(this.parent);
      if (this.category) ep = ep.category(this.category);
      if (this.include) ep = ep.include(this.include);
      if (this.exclude) ep = ep.exclude(this.exclude);
      return ep.perPage(60);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "MediaList" }, [
    _c(
      "div",
      [
        _vm._t("head", [_c("UiHeading", [_vm._v(_vm._s(_vm.title))])]),
        _c(
          "ul",
          { staticClass: "MediaList--list" },
          _vm._l(_vm.list, function(item, i) {
            return _c(
              "li",
              {
                staticClass: "MediaList--item",
                class: {
                  "MediaList--item_active": _vm.active == i
                },
                on: {
                  mouseover: function($event) {
                    _vm.active = i
                  }
                }
              },
              [
                _vm._t(
                  "default",
                  [_vm._v("\n          " + _vm._s(item) + "\n        ")],
                  null,
                  { item: item, key: i }
                )
              ],
              2
            )
          })
        )
      ],
      2
    ),
    _c(
      "div",
      { staticClass: "MediaList--media", staticStyle: { display: "flex" } },
      [
        _c("img", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.imgLoading,
              expression: "!imgLoading"
            }
          ],
          attrs: { src: _vm.media },
          on: {
            load: function($event) {
              _vm.imgLoading = false
            }
          }
        }),
        _vm.imgLoading
          ? _c("img", {
              staticStyle: { margin: "auto" },
              attrs: { src: _vm.imgSpinner }
            })
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.context.loading | _vm.settings.loading
    ? _c("AppLoad")
    : _c(
        "main",
        { attrs: { id: "VineyardsListPage" } },
        [
          _c(
            "UiPanel",
            { attrs: { connect: "down" } },
            [
              _c(
                "UiBoxImage",
                { staticClass: "UiBox_tall", attrs: { img: _vm.imgs.feat } },
                [
                  _c("UiHeading", { attrs: { level: 1, scale: 2 } }, [
                    _vm._v("\n        " + _vm._s(_vm.page.title) + "\n      ")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _c(
            "UiPanel",
            [
              _c(
                "UiBox",
                {
                  staticClass: "UiBox_stack UiBox_connectedBottom wrap_flex_min"
                },
                [
                  !_vm.settings.loading
                    ? _c(
                        "ActionBox",
                        _vm._b({}, "ActionBox", _vm.settings.intro, false),
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "UiButton UiButton_outline UiButton_gold",
                              attrs: { slot: "action" },
                              on: {
                                click: function(e) {
                                  return _vm.$refs[
                                    "vineyards-details"
                                  ].$el.scrollIntoView()
                                }
                              },
                              slot: "action"
                            },
                            [_vm._v("View Our Vineyards")]
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _c(
            "UiPanel",
            [
              _c("UiBoxImage", {
                staticClass: "UiBox_tall",
                staticStyle: { "background-position": "top center" },
                attrs: { img: _vm.imgs.about }
              })
            ],
            1
          ),
          !_vm.settings.loading
            ? _c(
                "UiPanel",
                { ref: "vineyards-details" },
                [
                  _c(
                    "UiBox",
                    { staticClass: "VinyardsPage--about  UiBox_connectedTop" },
                    [
                      _c(
                        "ActionBox",
                        _vm._b(
                          { staticClass: "wrap_tiny" },
                          "ActionBox",
                          _vm.settings.left,
                          false
                        )
                      ),
                      _c(
                        "ActionBox",
                        _vm._b(
                          { staticClass: "wrap_tiny" },
                          "ActionBox",
                          _vm.settings.right,
                          false
                        )
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _c(
            "UiPanel",
            [
              _c("UiBoxImage", {
                staticClass: "UiBox_tall",
                attrs: { img: _vm.imgs.casks }
              })
            ],
            1
          ),
          _c(
            "UiPanel",
            { staticClass: "UiTheme_cream", attrs: { id: "estate-vineyards" } },
            [
              _c("v-list", {
                attrs: { category: 25, title: "Estate Vineyards" }
              }),
              _c(
                "div",
                { staticClass: "VinyardsPage--list-readMore" },
                [
                  _c(
                    "ReadMore",
                    {
                      staticClass: "ReadMore_gold ReadMore_center",
                      attrs: { href: "#growers-vineyards" }
                    },
                    [
                      _c("em", { staticClass: "serif" }, [
                        _vm._v("Our Growers Vineyards")
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "UiPanel",
            [
              _c("UiBoxImage", {
                staticClass: "UiBox_tall",
                attrs: { img: _vm.imgs.grapes }
              })
            ],
            1
          ),
          _c(
            "UiPanel",
            {
              staticClass: "UiTheme_cream",
              attrs: { id: "growers-vineyards" }
            },
            [
              _c("v-list", {
                attrs: { category: 26, title: "Growers Vineyards" }
              }),
              _c(
                "div",
                { staticClass: "VinyardsPage--list-readMore" },
                [
                  _c(
                    "ReadMore",
                    {
                      staticClass: "ReadMore_gold ReadMore_center",
                      attrs: {
                        href: "#estate-vineyards",
                        icon: "ArrowUp",
                        textFirst: false
                      }
                    },
                    [
                      _c("em", { staticClass: "serif" }, [
                        _vm._v("Our Estate Vineyards")
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _c("DiscoveryBoxes", {
            attrs: { people: true, history: true, wines: true }
          })
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/list.vue?vue&type=template&id=08500d50&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/list.vue?vue&type=template&id=08500d50& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return !_vm.context.loading
    ? _c(
        "UiBox",
        { attrs: { id: "VineyardsList" } },
        [
          _c("MediaList", {
            attrs: { list: [].concat(_vm.context).reverse(), title: _vm.title },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var item = ref.item
                  return _c(
                    "router-link",
                    { attrs: { to: item.slug, append: "" } },
                    [
                      _vm._v(
                        "\n      " +
                          _vm._s(item.name || item.title.rendered) +
                          "\n      "
                      )
                    ]
                  )
                }
              }
            ])
          })
        ],
        1
      )
    : _c(
        "UiBox",
        { staticStyle: { "text-align": "center", "min-height": "68vh" } },
        [_vm._v("\n  Loading...\n")]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.MediaList[data-v-93dedfc6] {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 auto;\n}\n.MediaList--media[data-v-93dedfc6] {\n  margin: 0;\n  width: 50vmax;\n  height: 42vmax;\n}\n.MediaList--media[data-v-93dedfc6]:first-child {\n    margin-right: 1.5rem;\n}\n.MediaList--media[data-v-93dedfc6]:last-child {\n    margin-left: 1.5rem;\n}\n.MediaList--media img[data-v-93dedfc6] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.MediaList--list[data-v-93dedfc6] {\n  padding: unset;\n  list-style: none;\n  font-weight: 100;\n  width: 15em;\n  max-width: 100%;\n  white-space: nowrap;\n  font-size: .9em;\n}\n.MediaList--item[data-v-93dedfc6] {\n  position: relative;\n  padding: .3em 0;\n  color: inherit;\n  letter-spacing: .05em;\n  cursor: default;\n}\n.MediaList--item + .MediaList--item[data-v-93dedfc6] {\n    border-top: 1px solid rgba(130, 129, 126, 0.4);\n}\n.MediaList--item[data-v-93dedfc6]:before {\n    content: \" \";\n    color: transparent;\n    background: #BA9454;\n    display: inline-block;\n    height: 2px;\n    width: 1.5em;\n    position: absolute;\n    top: 50%;\n    right: 100%;\n    margin-top: -1px;\n    margin-right: -.5em;\n    opacity: 0;\n    -webkit-transition: .2s .1s ease-out;\n    -o-transition: .2s .1s ease-out;\n    -moz-transition: .2s .1s ease-out;\n    transition: .2s .1s ease-out;\n}\n.MediaList--item_active[data-v-93dedfc6] {\n    font-weight: bold;\n    font-weight: 400;\n    letter-spacing: 0.036em;\n}\n.MediaList--item_active[data-v-93dedfc6]:before {\n      opacity: 1;\n      margin-right: 0.5em;\n}\n@media (max-width: 52rem) {\n.MediaList[data-v-93dedfc6] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n    -webkit-flex-flow: nowrap column-reverse;\n       -moz-box-orient: vertical;\n       -moz-box-direction: reverse;\n        -ms-flex-flow: nowrap column-reverse;\n            flex-flow: nowrap column-reverse;\n}\n.MediaList--media[data-v-93dedfc6] {\n      display: none !important;\n}\n}\na[data-v-93dedfc6] {\n  text-decoration: none;\n}\n.MediaList--item[data-v-93dedfc6]:not(.MediaList--item_active) {\n  overflow: hidden;\n}\n.MediaList--item[data-v-93dedfc6]:not(.MediaList--item_active):before {\n    -webkit-transition: all 0s !important;\n    -o-transition: all 0s !important;\n    -moz-transition: all 0s !important;\n    transition: all 0s !important;\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/MediaList/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AA4GA;EAKI,4BAAoB;EAApB,6BAAoB;EAApB,yBAAoB;EAApB,4BAAoB;EAApB,qBAAoB;EACpB,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,eAAc;CACf;AACD;EACE,UAAS;EAGT,cAAa;EACb,eAAc;CAMf;AAXA;IAEiB,qBAAqB;CAAE;AAFxC;IAGgB,oBAAoB;CAAE;AAHtC;IAOG,YAAW;IACX,aAAY;IACZ,uBAAmB;OAAnB,oBAAmB;CACpB;AAEH;EACE,eAAc;EACd,iBAAgB;EAChB,iBAAgB;EAChB,YAAW;EACX,gBAAe;EACf,oBAAmB;EACnB,gBAAe;CAChB;AACD;EACE,mBAAkB;EAClB,gBAAe;EACf,eAAc;EACd,sBAAqB;EACrB,gBAAe;CA4BhB;AAjCA;IAOG,+CAAyD;CAC1D;AARF;IAUG,aAAY;IACZ,mBAAkB;IAClB,oBCpJW;IDqJX,sBAAqB;IACrB,YAAW;IACX,aAAY;IACZ,mBAAkB;IAClB,SAAQ;IACR,YAAW;IACX,iBAAgB;IAChB,oBAAmB;IACnB,WAAU;IACV,qCAA4B;IAA5B,gCAA4B;IAA5B,kCAA4B;IAA5B,6BAA4B;CAC7B;AACD;IACE,kBAAiB;IACjB,iBAAgB;IAChB,wBAAuB;CAKxB;AARA;MAKG,WAAU;MACV,oBAAmB;CACpB;AEzGH;AF4CJ;IAiEI,6BAAgC;IAAhC,+BAAgC;IAAhC,yCAAgC;OAAhC,0BAAgC;OAAhC,4BAAgC;QAAhC,qCAAgC;YAAhC,iCAAgC;CAcnC;AAbG;MAEE,yBAAwB;CASzB;CAAA;AAGL;EACE,sBAAqB;CACtB;AACD;EACE,iBAAgB;CAEjB;AAHD;IAEa,sCAA8B;IAA9B,iCAA8B;IAA9B,mCAA8B;IAA9B,8BAA8B;CAAE","file":"index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/colors\";\n@import \"~@/styles/theme/breaks\";\n.MediaList {\n  $base: #{&};\n  & {\n    // justify-self: center;\n    // align-self: center;\n    display: inline-flex;\n    align-items: center;\n    margin: 0 auto;\n  }\n  &--media {\n    margin: 0;\n    &:first-child { margin-right: 1.5rem }\n    &:last-child { margin-left: 1.5rem }\n    width: 50vmax;\n    height: 42vmax;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n    }\n  }\n  &--list {\n    padding: unset;\n    list-style: none;\n    font-weight: 100;\n    width: 15em;\n    max-width: 100%;\n    white-space: nowrap;\n    font-size: .9em;\n  }\n  &--item {\n    position: relative;\n    padding: .3em 0;\n    color: inherit;\n    letter-spacing: .05em;\n    cursor: default;\n    & + & {\n      border-top: 1px solid rgba( mix(Color(dark),Color(cream)), .4 );\n    }\n    &:before {\n      content: \" \";\n      color: transparent;\n      background: Color(theme);\n      display: inline-block;\n      height: 2px;\n      width: 1.5em;\n      position: absolute;\n      top: 50%;\n      right: 100%;\n      margin-top: -1px;\n      margin-right: -.5em;\n      opacity: 0;\n      transition: .2s .1s ease-out;\n    }\n    &_active {\n      font-weight: bold;\n      font-weight: 400;\n      letter-spacing: 0.036em;\n      &:before {\n        opacity: 1;\n        margin-right: 0.5em;\n      }\n    }\n  }\n  @include Break( max-width Breaks(3) ){\n    flex-flow: nowrap column-reverse;\n    &--media {\n      //-----------------------\n      display: none !important;\n      //-----------------------\n      // width: 100vw;\n      // max-height: 32vh;\n      // margin: 0 0 1.5rem !important;\n      // img {\n      //   object-fit: cover;\n      //   object-position: center 25%;\n      // }\n    }\n  }\n}\na {\n  text-decoration: none;\n}\n.MediaList--item:not(.MediaList--item_active) {\n  overflow: hidden;\n  &:before { transition: all 0s !important }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.UiButton[data-v-cac89cf0] {\n  -webkit-transition: .2s ease-in-out;\n  -o-transition: .2s ease-in-out;\n  -moz-transition: .2s ease-in-out;\n  transition: .2s ease-in-out;\n  opacity: .9;\n  outline: 1px dotted transparent;\n}\n.UiButton[data-v-cac89cf0] {\n    display: inline-block;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    cursor: pointer;\n    padding: .5em 1.2em;\n    font-size: .8em;\n    font-family: \"futura-pt\", Futura, Verdana, sans-serif;\n    font-weight: 500;\n    border: 1px solid rgba(14, 14, 14, 0.15);\n    letter-spacing: .1em;\n    text-transform: uppercase;\n    line-height: 2em;\n}\n.UiButton[data-v-cac89cf0], .UiButton > a[data-v-cac89cf0]:only-child {\n      text-decoration: none;\n}\n.UiButton[data-v-cac89cf0]:not([class*=\"UiTheme_\"]):not(.UiButton_outline) {\n    color: #f0f0f0;\n    background: #BA9454;\n}\n.UiButton[data-v-cac89cf0]:hover, .UiButton[data-v-cac89cf0]:focus, .UiButton[data-v-cac89cf0]:active {\n    opacity: 1;\n}\n.UiButton[data-v-cac89cf0]:focus {\n    outline: 1px dotted currentColor;\n    outline-offset: -.25em;\n}\n.UiButton_outline[data-v-cac89cf0] {\n    color: #f0f0f0;\n    background-color: transparent !important;\n    border: 1px solid currentColor !important;\n    -webkit-box-shadow: inset 0 0 0 1px currentColor !important;\n       -moz-box-shadow: inset 0 0 0 1px currentColor !important;\n            box-shadow: inset 0 0 0 1px currentColor !important;\n}\n.UiButton_outline[data-v-cac89cf0]:not(:hover) {\n      opacity: .8;\n}\n.UiButton_gold[data-v-cac89cf0], .UiButton.gold[data-v-cac89cf0] {\n    color: #BA9454;\n}\n.UiPanel[id$=\"-vineyards\"][data-v-cac89cf0] {\n  display: block !important;\n}\n.VinyardsPage--about > *[data-v-cac89cf0]:first-child {\n  margin: -15rem 3rem 0 auto;\n}\n.VinyardsPage--about > *[data-v-cac89cf0]:last-child {\n  margin: 15rem auto 0 3rem;\n}\n@media (max-width: 52rem) {\n.VinyardsPage--about[data-v-cac89cf0] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: nowrap column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n        -ms-flex-flow: nowrap column;\n            flex-flow: nowrap column;\n}\n.VinyardsPage--about > *[data-v-cac89cf0] {\n      margin: 3rem 0 0 !important;\n}\n.VinyardsPage--about > *[data-v-cac89cf0]:first-child {\n        margin-top: 0 !important;\n}\n}\n.VinyardsPage--list-readMore[data-v-cac89cf0] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  -webkit-transform: translateY(-3rem);\n     -moz-transform: translateY(-3rem);\n      -ms-transform: translateY(-3rem);\n       -o-transform: translateY(-3rem);\n          transform: translateY(-3rem);\n  padding: 1.5rem 0 0;\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Button/style.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/fonts.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/Vineyards/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AAEA;EAqBE,oCAA2B;EAA3B,+BAA2B;EAA3B,iCAA2B;EAA3B,4BAA2B;EAC3B,YAAW;EAGX,gCAA+B;CAgBhC;AAzCD;IAEI,sBAAqB;IACrB,yBAAgB;OAAhB,sBAAgB;YAAhB,iBAAgB;IAChB,gBAAe;IACf,oBAAmB;IACnB,gBAAe;IACf,sDCR+C;IDS/C,iBAAgB;IAChB,yCEXa;IFYb,qBAAoB;IACpB,0BAAyB;IACzB,iBAAgB;CAIjB;AAhBH;MAcM,sBAAqB;CACtB;AAfL;IAkBI,eEnB4B;IFoB5B,oBEnBa;CFoBd;AApBH;IAuB+B,WAAW;CAAE;AAvB5C;IA2BI,iCAAgC;IAChC,uBAAsB;CACvB;AAED;IACE,eEjC4B;IFkC5B,yCAAwC;IACxC,0CAAyC;IACzC,4DAAmD;OAAnD,yDAAmD;YAAnD,oDAAmD;CAEpD;AANA;MAKiB,YAAY;CAAE;AAEhC;IACE,eEvCa;CFwCd;AGsIH;EACE,0BAAyB;CAC1B;AAEE;EAEmB,2BAA2B;CAAE;AAFhD;EAGkB,0BAA2B;CAAE;ACvH9C;ADoHF;IAQI,6BAAwB;IAAxB,8BAAwB;IAAxB,iCAAwB;OAAxB,0BAAwB;OAAxB,2BAAwB;QAAxB,6BAAwB;YAAxB,yBAAwB;CAO3B;AAfA;MAUK,4BAA2B;CAE5B;AAZJ;QAWqB,yBAAyB;CAAE;CAAA;AAM/C;EACE,mBAAkB;EAClB,WAAU;EACV,mBAAkB;EAClB,qCAA4B;KAA5B,kCAA4B;MAA5B,iCAA4B;OAA5B,gCAA4B;UAA5B,6BAA4B;EAC5B,oBAAmB;CACpB","file":"index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&","sourcesContent":["@import \"~@/styles/theme/fonts\";\n@import \"~@/styles/theme/colors\";\n.UiButton {\n  & {\n    display: inline-block;\n    appearance: none;\n    cursor: pointer;\n    padding: .5em 1.2em;\n    font-size: .8em;\n    font-family: $ff-sans;\n    font-weight: 500;\n    border: 1px solid rgba(Color(dark),.15);\n    letter-spacing: .1em;\n    text-transform: uppercase;\n    line-height: 2em;\n    &, >a:only-child {\n      text-decoration: none;\n    }\n  }\n  &:not([class*=\"UiTheme_\"]):not(#{&}_outline){\n    color: Color(matte);\n    background: Color(theme);\n  }\n  transition: .2s ease-in-out;\n  opacity: .9;\n  &:hover, &:focus, &:active { opacity: 1 }\n  \n  outline: 1px dotted transparent;\n  &:focus {\n    outline: 1px dotted currentColor;\n    outline-offset: -.25em;\n  }\n\n  &_outline {\n    color: Color(matte);\n    background-color: transparent !important;\n    border: 1px solid currentColor !important;\n    box-shadow: inset 0 0 0 1px currentColor !important;\n    &:not(:hover) { opacity: .8 }\n  }\n  &_gold, &.gold {\n    color: Color(theme);\n  }\n}","\n$ff-sans:  \"futura-pt\", Futura, Verdana, sans-serif;\n\n$ff-serif: 'Butler', Georgia, serif;\n\n$ff-alt:   nth($ff-serif,2), serif;\n\n$ff-mono:  Source Code Pro, monospace;","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/breaks\";\n@import \"~@/components/UI/Button/style\";\n.UiPanel[id$=\"-vineyards\"] {\n  display: block !important;\n}\n.VinyardsPage {\n  &--about {\n    & > * {\n      &:first-child { margin: -15rem 3rem 0 auto }\n      &:last-child { margin: 15rem auto 0 3rem  }\n    }\n\n    $mq: (Breaks(2) + Breaks(3))/2;\n    @include Break( max-width Breaks(3) ){\n      flex-flow: nowrap column;\n      & > * {\n        margin: 3rem 0 0 !important;\n        &:first-child { margin-top: 0 !important }\n      }\n    }\n\n  }\n  &--list {\n    &-readMore {\n      position: relative;\n      z-index: 2;\n      text-align: center;\n      transform: translateY(-3rem);\n      padding: 1.5rem 0 0;\n    }\n  }\n}\n","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ec84f848", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1ad74396", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&");
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

/***/ "./src/assets/mock/vineyard-feat.png":
/*!*******************************************!*\
  !*** ./src/assets/mock/vineyard-feat.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vineyard-feat.7d49d137.png";

/***/ }),

/***/ "./src/assets/mock/vineyards-page/about.png":
/*!**************************************************!*\
  !*** ./src/assets/mock/vineyards-page/about.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.f6867c54.png";

/***/ }),

/***/ "./src/assets/mock/vineyards-page/casks.png":
/*!**************************************************!*\
  !*** ./src/assets/mock/vineyards-page/casks.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/casks.34cf4f67.png";

/***/ }),

/***/ "./src/assets/mock/vineyards-page/grapes.png":
/*!***************************************************!*\
  !*** ./src/assets/mock/vineyards-page/grapes.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grapes.07e33784.png";

/***/ }),

/***/ "./src/components/modules/MediaList/index.vue":
/*!****************************************************!*\
  !*** ./src/components/modules/MediaList/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=93dedfc6&scoped=true& */ "./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/modules/MediaList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_93dedfc6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& */ "./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=docs */ "./src/components/modules/MediaList/index.vue?vue&type=custom&index=0&blockType=docs");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "93dedfc6",
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('93dedfc6', component.options)
    } else {
      api.reload('93dedfc6', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=93dedfc6&scoped=true& */ "./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=93dedfc6&scoped=true& */ "./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true&");
(function () {
      api.rerender('93dedfc6', {
        render: _index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/modules/MediaList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/modules/MediaList/index.vue?vue&type=custom&index=0&blockType=docs":
/*!*******************************************************************************************!*\
  !*** ./src/components/modules/MediaList/index.vue?vue&type=custom&index=0&blockType=docs ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_src_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../docs/src/.loader.js!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=custom&index=0&blockType=docs */ "./docs/src/.loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=custom&index=0&blockType=docs");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_docs_src_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/modules/MediaList/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/modules/MediaList/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_93dedfc6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=style&index=0&id=93dedfc6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_93dedfc6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_93dedfc6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_93dedfc6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_93dedfc6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_93dedfc6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=93dedfc6&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/MediaList/index.vue?vue&type=template&id=93dedfc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_93dedfc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/modules/MediaList/mock/default.jpg":
/*!***********************************************************!*\
  !*** ./src/components/modules/MediaList/mock/default.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.c81bf580.jpg";

/***/ }),

/***/ "./src/views/Vineyards/index.vue":
/*!***************************************!*\
  !*** ./src/views/Vineyards/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cac89cf0&scoped=true& */ "./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/Vineyards/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_cac89cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& */ "./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cac89cf0",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('cac89cf0', component.options)
    } else {
      api.reload('cac89cf0', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=cac89cf0&scoped=true& */ "./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cac89cf0&scoped=true& */ "./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true&");
(function () {
      api.rerender('cac89cf0', {
        render: _index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/Vineyards/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Vineyards/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/Vineyards/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cac89cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=style&index=0&id=cac89cf0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cac89cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cac89cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cac89cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cac89cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cac89cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=cac89cf0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/index.vue?vue&type=template&id=cac89cf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cac89cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Vineyards/list.vue":
/*!**************************************!*\
  !*** ./src/views/Vineyards/list.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=08500d50& */ "./src/views/Vineyards/list.vue?vue&type=template&id=08500d50&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./src/views/Vineyards/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
      api.createRecord('08500d50', component.options)
    } else {
      api.reload('08500d50', component.options)
    }
    module.hot.accept(/*! ./list.vue?vue&type=template&id=08500d50& */ "./src/views/Vineyards/list.vue?vue&type=template&id=08500d50&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=08500d50& */ "./src/views/Vineyards/list.vue?vue&type=template&id=08500d50&");
(function () {
      api.rerender('08500d50', {
        render: _list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/Vineyards/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Vineyards/list.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/Vineyards/list.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Vineyards/list.vue?vue&type=template&id=08500d50&":
/*!*********************************************************************!*\
  !*** ./src/views/Vineyards/list.vue?vue&type=template&id=08500d50& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=08500d50& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Vineyards/list.vue?vue&type=template&id=08500d50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_08500d50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.js.map