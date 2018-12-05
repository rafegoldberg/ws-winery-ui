(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/Slider/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/once */ "./node_modules/lodash/once.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_vimeo_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-vimeo-player */ "./node_modules/vue-vimeo-player/dist/bundle.es.js");
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UI/Icon */ "./src/components/UI/Icon.vue");
/* harmony import */ var _components_modules_ActionBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/modules/ActionBox */ "./src/components/modules/ActionBox/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Slider",
  components: {
    UiIcon: _components_UI_Icon__WEBPACK_IMPORTED_MODULE_5__["default"],
    ActionBox: _components_modules_ActionBox__WEBPACK_IMPORTED_MODULE_6__["default"],
    VimeoPlayer: vue_vimeo_player__WEBPACK_IMPORTED_MODULE_4__["vueVimeoPlayer"]
  },
  props: ['slides', 'settings'],
  mounted: function mounted() {
    var _this = this;

    this.opts = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, this.defaults, this.settings || {}, {
      init: false
    });
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.$el, this.opts);

    var setIndicatorPosition = function (val) {
      return _this.indicatorPosition = val;
    }.bind(this);

    this.swiper.on('init', function () {
      if (this.slides[0].classList.contains('swiper-slide-video')) {
        var inner = document.querySelectorAll('.swiper-slide[data-hash="1"] .ActionBox')[0];
        inner.classList.add('fade');
        setTimeout(function () {
          inner.classList.add('fade_in');
        }, 9880);
      }

      setIndicatorPosition(this.activeIndex);
    });
    this.swiper.on('slideChange', function () {
      setIndicatorPosition(this.activeIndex);
    });
    this.swiper.init();
  },
  data: function data() {
    return {
      indicatorPosition_store: 0,
      defaults: {
        /**
         * Default Swiper Options
         */
        // observer: true,
        // watchOverflow: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiper: false
    };
  },
  computed: {
    indicatorPosition: {
      get: function get() {
        return this.indicatorPosition_store;
      },
      set: function set(v) {
        this.indicatorPosition_store = v / this.slides.length * 100;
      }
    }
  },
  methods: {
    startPlayer: function startPlayer(vimeo) {
      // this.$log(vimeo,vimeo.player)
      vimeo.player.play();
    },
    getVimeoID: function getVimeoID(str) {
      var src = str.split(/src="(.*?)"/g)[1] || str;
      src = src.split('/').reverse()[0];
      return src;
    },
    getVimeoSRC: function getVimeoSRC(url) {
      return "".concat(url, "?autoplay=1&loop=1&title=0&byline=0&portrait=0");
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");
/* harmony import */ var _VuePress_mix_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/VuePress/mix/API */ "./src/VuePress/mix/API.js");
/* harmony import */ var _includes_NavTheme_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/includes/NavTheme/mixin */ "./src/includes/NavTheme/mixin.js");
/* harmony import */ var _components_UI_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UI/Panel */ "./src/components/UI/Panel.vue");
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UI/Icon */ "./src/components/UI/Icon.vue");
/* harmony import */ var _components_modules_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/modules/Slider */ "./src/components/modules/Slider/index.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "HomePage",
  mixins: [_VuePress_mix_API__WEBPACK_IMPORTED_MODULE_2__["default"], _includes_NavTheme_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    UiPanel: _components_UI_Panel__WEBPACK_IMPORTED_MODULE_4__["default"],
    UiIcon: _components_UI_Icon__WEBPACK_IMPORTED_MODULE_5__["default"],
    Slider: _components_modules_Slider__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  watch: {
    page: function page() {
      this.navTheme_update(this.page.acf && this.page.acf.AppNav || false);
    }
  },
  asyncComputed: {
    page: {
      default: {
        loading: true
      },
      get: function () {
        var _get = Object(_Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var err, xhr;
          return _Users_z00221y_bitnami_stackman_machines_xampp_volumes_root_htdocs_clients_ws3_wp_content_themes_ws_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.API && this.endpoint) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", {
                    loading: true
                  });

                case 2:
                  err = false;
                  _context.next = 5;
                  return this.endpoint.get().catch(function (e) {
                    return err = e;
                  });

                case 5:
                  xhr = _context.sent;

                  if (!err) {
                    _context.next = 8;
                    break;
                  }

                  return _context.abrupt("return", {
                    error: err
                  });

                case 8:
                  return _context.abrupt("return", xhr);

                case 9:
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
  computed: {
    endpoint: function endpoint() {
      if (!this.API) return false;
      return this.API.namespace('ws/v1').front();
    },
    acf: function acf() {
      if (!this.page.loading) return this.page.acf;
    }
  },
  methods: {
    nextSlide: function nextSlide() {
      this.$refs.slider.swiper.slideNext();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "swiper-container" },
    [
      _c(
        "div",
        { staticClass: "swiper-wrapper" },
        _vm._l(_vm.slides, function(slide, i) {
          return _c(
            "div",
            {
              staticClass: "swiper-slide swiper-lazy",
              class: {
                "swiper-slide-video": slide.video
              },
              attrs: { "data-background": slide.image.url, "data-hash": i + 1 }
            },
            [
              _vm._t(
                "default",
                [
                  slide.video
                    ? _c(
                        "div",
                        { staticClass: "swiper-slide-video-bg" },
                        [
                          _c("VimeoPlayer", {
                            ref: "vimeo",
                            refInFor: true,
                            attrs: {
                              "video-id": _vm.getVimeoID(slide.video),
                              loop: true,
                              autoplay: true,
                              options: {
                                title: 0,
                                byline: 0,
                                portrait: 0,
                                muted: 1
                              }
                            },
                            on: {
                              loaded: function($event) {
                                _vm.startPlayer(_vm.$refs.vimeo[0])
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "ActionBox",
                    _vm._b(
                      {
                        staticClass: "wrap_min",
                        staticStyle: {
                          position: "relative",
                          margin: "0 auto 0 0"
                        },
                        style: {
                          textShadow: slide.video
                            ? "0 1px 6px rgba(82,82,82,.4)"
                            : ""
                        }
                      },
                      "ActionBox",
                      slide,
                      false
                    )
                  ),
                  slide.image
                    ? _c("div", { staticClass: "swiper-lazy-preloader" })
                    : _vm._e(),
                  slide.altLink || slide.button.url
                    ? _c(
                        "UiLink",
                        {
                          staticClass: "swiper-more-arrow",
                          attrs: {
                            url: slide.altLink.url || slide.button.url,
                            target: slide.altLink.target
                          }
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(slide.altLink.title || "Learn More") +
                              "\n          "
                          ),
                          _c("UiIcon", {
                            attrs: { name: "ArrowRightLong", width: "3rem" }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                null,
                slide
              )
            ],
            2
          )
        })
      ),
      _c(
        "div",
        { staticClass: "swiper-pagination-wrapper" },
        [
          _c("div", { staticClass: "swiper-pagination" }),
          _c("UiIcon", {
            attrs: {
              name: "Indicator",
              styles: {
                top:
                  "calc( " +
                  this.indicatorPosition +
                  "% + (" +
                  100 / this.slides.length +
                  "% / 2) )",
                left:
                  "calc( " +
                  this.indicatorPosition +
                  "% + (" +
                  100 / this.slides.length +
                  "% / 2) )"
              }
            }
          })
        ],
        1
      ),
      _vm._t("swiper-post", null, null, _vm.swiper)
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=template&id=a83bd3b0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index.vue?vue&type=template&id=a83bd3b0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.page.loading
    ? _c("AppLoad", { attrs: { theme: "cream" } })
    : _c(
        "UiPanel",
        { staticClass: "UiTheme_dark", attrs: { id: "HomePage" } },
        [
          !_vm.page.loading
            ? _c("Slider", {
                ref: "slider",
                attrs: {
                  slides: _vm.acf.panels,
                  settings: {
                    threshold: 12,
                    breakpoints: {
                      1088: {
                        direction: "horizontal",
                        freeMode: false
                      }
                    },
                    direction: "vertical",
                    speed: 800,
                    resistanceRatio: 0.5,
                    // freeMode: true,
                    // freeModeSticky: true,
                    // freeModeMomentum: true,
                    // freeModeMomentumVelocityRatio: 10,
                    hashNavigation: {
                      watchState: true,
                      replaceState: true
                    },
                    keyboard: true,
                    lazy: {
                      loadPrevNext: true,
                      loadPrevNextAmount: 2,
                      loadOnTransitionStart: true
                    },
                    mousewheel: {
                      releaseOnEdges: true,
                      sensitivity: 1
                    },
                    pagination: {
                      type: "bullets",
                      renderBullet: function renderBullet(ix, className) {
                        var panel = _vm.acf.panels[ix]
                        return (
                          "<div class='" +
                          className +
                          "'>\n            <span class='" +
                          className +
                          "-text' style='width: calc(50vh / " +
                          _vm.acf.panels.length +
                          ")'>\n              " +
                          panel.label +
                          "\n            </span>\n          </div>"
                        )
                      }
                    }
                    //parallax: true,
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "swiper-post",
                    fn: function(swiper) {
                      return _c(
                        "div",
                        {},
                        [
                          _c(
                            "div",
                            {
                              class: {
                                "swiper-scroll": true,
                                hidden: !(
                                  swiper.activeIndex + 1 <
                                  _vm.acf.panels.length
                                )
                              },
                              on: { click: _vm.nextSlide }
                            },
                            [_vm._v("\n        Scroll Down\n      ")]
                          ),
                          _c("div", { staticClass: "swiper-social" }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.facebook.com/WilliamsSelyem",
                                  target: "_BLANK"
                                }
                              },
                              [
                                _c("UiIcon", {
                                  attrs: {
                                    name: "Facebook",
                                    width: "1em",
                                    height: "1em"
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.instagram.com/williamsselyemwinery/",
                                  target: "_BLANK"
                                }
                              },
                              [
                                _c("UiIcon", {
                                  attrs: {
                                    name: "Insta",
                                    width: "1em",
                                    height: "1em"
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://twitter.com/Williams_Selyem",
                                  target: "_BLANK"
                                }
                              },
                              [
                                _c("UiIcon", {
                                  attrs: {
                                    name: "Twitter",
                                    width: "1em",
                                    height: "1em"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v("\n\\      "),
                          _c(
                            "ui-link",
                            {
                              staticClass: "swiper-account",
                              attrs: {
                                url:
                                  "https://www.williams-selyem.com/shopping3/account/login.cfm"
                              }
                            },
                            [
                              _c("UiIcon", {
                                attrs: {
                                  name: "Account",
                                  width: "1em",
                                  height: "1em"
                                }
                              }),
                              _c("span", [_vm._v("My Account")])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            : _vm._e()
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.swiper-container[data-v-4037c448] {\n  width: 100vw;\n}\n.swiper-slide[data-v-4037c448] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap column;\n          flex-flow: nowrap column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n     -moz-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  background-position: center;\n  -moz-background-size: cover;\n       background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 0;\n}\n.swiper-slide[style*=\"background-image\"][data-v-4037c448]:not(.swiper-slide-video):before, .swiper-slide[style*=\"background-image\"][data-v-4037c448]:not(.swiper-slide-video):after {\n    position: relative;\n    z-index: -1;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: -webkit-linear-gradient(217deg, rgba(0, 0, 0, 0) 50%, black 88%);\n    background: -moz- oldlinear-gradient(217deg, rgba(0, 0, 0, 0) 50%, black 88%);\n    background: -o-linear-gradient(217deg, rgba(0, 0, 0, 0) 50%, black 88%);\n    background: linear-gradient(233deg, rgba(0, 0, 0, 0) 50%, black 88%);\n    pointer-events: none;\n}\n.swiper-slide[style*=\"background-image\"][data-v-4037c448]:not(.swiper-slide-video):before {\n    opacity: .4;\n}\n.swiper-slide[style*=\"background-image\"][data-v-4037c448]:not(.swiper-slide-video):after {\n    opacity: .4;\n}\n@media (max-width: 52rem) {\n.swiper-slide[style*=\"background-image\"][data-v-4037c448]:not(.swiper-slide-video):after {\n      display: none;\n}\n.swiper-slide[style*=\"background-image\"][data-v-4037c448]:not(.swiper-slide-video):before {\n      background: transparent;\n      -webkit-transition: .4s .1s ease-in-out;\n      -o-transition: .4s .1s ease-in-out;\n      -moz-transition: .4s .1s ease-in-out;\n      transition: .4s .1s ease-in-out;\n}\n.swiper-slide[style*=\"background-image\"]:not(.swiper-slide-video).swiper-slide-active[data-v-4037c448]:before {\n      -webkit-backdrop-filter: blur(8px);\n              backdrop-filter: blur(8px);\n}\n}\n.swiper-slide.swiper-lazy > *[data-v-4037c448] {\n    -webkit-transition: opacity .3s .15s ease-out;\n    -o-transition: opacity .3s .15s ease-out;\n    -moz-transition: opacity .3s .15s ease-out;\n    transition: opacity .3s .15s ease-out;\n}\n.swiper-slide.swiper-lazy:not(.swiper-lazy-loaded) > *[data-v-4037c448]:not(.swiper-lazy-preloader) {\n    opacity: 0 !important;\n}\n.swiper-slide.swiper-lazy[data-v-4037c448]:before {\n    -webkit-transition: .3s .15s ease-out;\n    -o-transition: .3s .15s ease-out;\n    -moz-transition: .3s .15s ease-out;\n    transition: .3s .15s ease-out;\n}\n.swiper-slide.swiper-lazy[data-v-4037c448]:not(.swiper-lazy-loaded):before {\n    opacity: 0 !important;\n}\n.swiper-pagination-bullet[data-v-4037c448], .swiper-pagination-bullet *[data-v-4037c448] {\n  cursor: pointer;\n}\n.swiper-more-arrow[data-v-4037c448] {\n  position: absolute;\n  top: 50%;\n  right: 2.5rem;\n  -webkit-transform: translateY(-50%);\n     -moz-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n       -o-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-decoration: none;\n}\n.swiper-more-arrow .UiIcon[data-v-4037c448] {\n    margin-left: 0.5rem;\n    -webkit-transition: .3s ease;\n    -o-transition: .3s ease;\n    -moz-transition: .3s ease;\n    transition: .3s ease;\n}\n .swiper-more-arrow:hover .UiIcon {\n    -webkit-transform: translateX(0.8rem);\n       -moz-transform: translateX(0.8rem);\n        -ms-transform: translateX(0.8rem);\n         -o-transform: translateX(0.8rem);\n            transform: translateX(0.8rem);\n}\n@media (max-width: 52rem) {\n.swiper-more-arrow[data-v-4037c448] {\n      display: none;\n}\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/Slider/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AAkJE;EACE,aAAY;CACb;AACD;EACE,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAwB;EAAxB,8BAAwB;EAAxB,iCAAwB;KAAxB,0BAAwB;KAAxB,2BAAwB;MAAxB,6BAAwB;UAAxB,yBAAwB;EACxB,yBAAuB;EAAvB,gCAAuB;KAAvB,sBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;EACvB,yBAAuB;EAAvB,gCAAuB;KAAvB,sBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;EAEvB,4BAA2B;EAC3B,4BAAsB;OAAtB,uBAAsB;EACtB,6BAA4B;EAC5B,mBAAkB;EAClB,WAAU;CA8CX;AAxDA;IAaK,mBAAkB;IAClB,YAAW;IACX,YAAW;IACX,mBAAkB;IAClB,OAAM;IACN,QAAO;IACP,YAAW;IACX,aAAY;IACZ,6EAIG;IAJH,8EAIG;IAJH,wEAIG;IAJH,qEAIG;IACH,qBAAoB;CACrB;AA3BJ;IA8BK,YAAW;CACZ;AA/BJ;IAkCK,YAAW;CACZ;ACxHH;ADqFD;MAqCgB,cAAc;CAAE;AArChC;MAuCO,wBAAuB;MACvB,wCAA+B;MAA/B,mCAA+B;MAA/B,qCAA+B;MAA/B,gCAA+B;CAChC;AAzCN;MA2CO,mCAA0B;cAA1B,2BAA0B;CAC3B;CAAA;AA5CN;IAiDS,8CAAsC;IAAtC,yCAAsC;IAAtC,2CAAsC;IAAtC,sCAAsC;CAAE;AAjDjD;IAkDgE,sBAAsB;CAAE;AAlDxF;IAqDc,sCAA8B;IAA9B,iCAA8B;IAA9B,mCAA8B;IAA9B,8BAA8B;CAAE;AArD9C;IAsDuC,sBAAsB;CAAE;AAI7D;EACU,gBAAgB;CAAE;AAG/B;EACE,mBAAkB;EAClB,SAAQ;EACR,cAAa;EACb,oCAA2B;KAA3B,iCAA2B;MAA3B,gCAA2B;OAA3B,+BAA2B;UAA3B,4BAA2B;EAC3B,sBAAqB;CAWtB;AAhBA;IAOG,oBAAmB;IACnB,6BAAoB;IAApB,wBAAoB;IAApB,0BAAoB;IAApB,qBAAoB;CACrB;CACD;IACE,sCAA4B;OAA5B,mCAA4B;QAA5B,kCAA4B;SAA5B,iCAA4B;YAA5B,8BAA4B;CAC7B;AC/JD;ADmJF;MAcI,cAAa;CAEhB;CAAA","file":"index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/breaks\";\n.swiper {\n  &-container {\n    width: 100vw;\n  }\n  &-slide {\n    display: flex;\n    flex-flow: nowrap column;\n    justify-content: center;\n    align-items: flex-start;\n\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: relative;\n    z-index: 0;\n    &[style*=\"background-image\"]:not(.swiper-slide-video) {\n      &:before, &:after {\n        position: relative;\n        z-index: -1;\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(\n          233deg,\n          rgba(black, 0) 50%,\n          rgba(black, 1) 88%\n          );\n        pointer-events: none;\n      }\n      &:before {\n        // mix-blend-mode: overlay;\n        opacity: .4;\n      }\n      &:after {\n        // mix-blend-mode: saturation;\n        opacity: .4;\n      }\n      @include Break( max-width Breaks(3) ){\n        &:after  { display: none }\n        &:before {\n          background: transparent;\n          transition: .4s .1s ease-in-out;\n        }\n        &.swiper-slide-active:before {\n          backdrop-filter: blur(8px);\n        }\n      }\n    }\n    &.swiper-lazy {\n      // children\n      > * { transition: opacity .3s .15s ease-out }\n      &:not(.swiper-lazy-loaded) > *:not(.swiper-lazy-preloader) { opacity: 0 !important }\n      \n      // pseudos\n      &:before { transition: .3s .15s ease-out }\n      &:not(.swiper-lazy-loaded):before { opacity: 0 !important }\n    }\n  }\n  &-pagination {\n    &-bullet {\n      &, & * { cursor: pointer }\n    }\n  }\n  &-more-arrow {\n    position: absolute;\n    top: 50%;\n    right: 2.5rem;\n    transform: translateY(-50%);\n    text-decoration: none;\n    .UiIcon {\n      margin-left: 0.5rem;\n      transition: .3s ease;\n    }\n    /deep/ &:hover .UiIcon {\n      transform: translateX(.8rem);\n    }\n    @include Break( max-width Breaks(3) ) {\n      display: none;\n    }\n  }\n}\n","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.swiper-slide-video-bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.swiper-slide-video-bg > * {\n    pointer-events: none;\n}\n.swiper-slide-video iframe {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n     -moz-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 188vmax !important;\n  min-height: 188vmax !important;\n}\n@media (max-width: 52rem) and (orientation: landscape) and (min-height: 29rem) {\n.swiper-slide-video iframe {\n    width: 100vmax !important;\n    min-height: 100vmax !important;\n}\n}\n.swiper-slide-video .fade {\n  opacity: 0;\n  -webkit-transition: 1.2s 0s ease-in !important;\n  -o-transition: 1.2s 0s ease-in !important;\n  -moz-transition: 1.2s 0s ease-in !important;\n  transition: 1.2s 0s ease-in !important;\n}\n.swiper-slide-video .fade_in {\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/Slider/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AA0OE;EACE,mBAAkB;EAClB,aAAY;EACZ,cAAa;EACb,OAAM;EACN,QAAO;EACP,iBAAgB;CAIjB;AAVA;IAQG,qBAAoB;CACrB;AAVL;EAaI,mBAAkB;EAClB,SAAQ;EACR,UAAS;EACT,yCAA+B;KAA/B,sCAA+B;MAA/B,qCAA+B;OAA/B,oCAA+B;UAA/B,iCAA+B;EAC/B,0BAAyB;EACzB,+BAA8B;CAO/B;AClMC;ADyKJ;IAqBQ,0BAAyB;IACzB,+BAA8B;CAGnC;CAAA;AAzBH;EA2BI,WAAU;EACV,+CAAsC;EAAtC,0CAAsC;EAAtC,4CAAsC;EAAtC,uCAAsC;CAEvC;AA9BH;IA6BW,WAAW;CAAE","file":"index.vue?vue&type=style&index=1&lang=scss&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/breaks\";\n\n.swiper-slide-video {\n  &-bg {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    > * {\n      pointer-events: none;\n    }\n  }\n  iframe {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    width: 188vmax !important;\n    min-height: 188vmax !important;\n    @include Break( max-width Breaks(3) ){\n      @include Break( (orientation landscape) (min-height Breaks(1)) ){\n        width: 100vmax !important;\n        min-height: 100vmax !important;\n      }\n    }\n  }\n  .fade {\n    opacity: 0;\n    transition: 1.2s 0s ease-in !important;\n    &_in { opacity: 1 }\n  }\n}\n","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n#HomePage .swiper-social, #HomePage .swiper-scroll, #HomePage .swiper-account {\n  z-index: 9;\n  position: fixed;\n  position: fixed;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #b9b9b9;\n  text-decoration: none;\n}\n#HomePage .swiper-scroll, #HomePage .swiper-pagination-bullet-text {\n  color: white;\n  text-shadow: 0 0 12px rgba(0, 0, 0, 0.8);\n}\n@media (max-width: 52rem) {\n.app.route_HomePage #AppNav {\n    background-color: rgba(250, 250, 250, 0.75);\n    -webkit-box-shadow: 0 0.3em 1em rgba(14, 14, 14, 0.1), 0 1px 0 rgba(255, 255, 255, 0.7);\n       -moz-box-shadow: 0 0.3em 1em rgba(14, 14, 14, 0.1), 0 1px 0 rgba(255, 255, 255, 0.7);\n            box-shadow: 0 0.3em 1em rgba(14, 14, 14, 0.1), 0 1px 0 rgba(255, 255, 255, 0.7);\n}\n.app.route_HomePage #AppNav:before {\n      z-index: -1;\n      content: '';\n      position: absolute;\n      top: -1px;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      backdrop-filter: blur(9px);\n      -webkit-backdrop-filter: blur(9px);\n      pointer-events: none;\n}\n}\n#HomePage {\n  z-index: 1;\n  position: relative;\n  height: 100vh;\n  color: #fafafa;\n}\n@media (max-width: 68rem) {\n#HomePage {\n      position: absolute;\n      margin-top: -4rem;\n      width: 100%;\n      height: 100%;\n}\n}\n#HomePage + #AppFooter {\n  display: none;\n}\n#HomePage .swiper-slide {\n  overflow: hidden;\n}\n#HomePage .swiper-social {\n  bottom: 2rem;\n  right: 3rem;\n}\n#HomePage .swiper-social > * + * {\n    margin-left: 1rem;\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-social {\n      display: none;\n}\n}\n#HomePage .swiper-scroll {\n  display: block;\n  -webkit-transform: translateX(-50%);\n     -moz-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n       -o-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 50%;\n  bottom: 0;\n  font-size: .75em;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  -webkit-transition: .3s ease-in;\n  -o-transition: .3s ease-in;\n  -moz-transition: .3s ease-in;\n  transition: .3s ease-in;\n  cursor: pointer;\n}\n#HomePage .swiper-scroll:after {\n    content: '';\n    height: 3rem;\n    width: 1px;\n    background: currentColor;\n    display: block;\n    margin: 0 auto;\n}\n#HomePage .swiper-scroll.hidden {\n    opacity: 0;\n    pointer-events: none;\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-scroll {\n      display: none !important;\n}\n}\n#HomePage .swiper-account {\n  bottom: 2rem;\n  left: 3rem;\n  font-size: .9em;\n}\n#HomePage .swiper-account .UiIcon {\n    margin-right: .5rem;\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-account {\n      position: fixed;\n      bottom: 13vh;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n         -moz-transform: translateX(-50%);\n          -ms-transform: translateX(-50%);\n           -o-transform: translateX(-50%);\n              transform: translateX(-50%);\n      color: #fafafa;\n}\n}\n@media (min-width: 68rem) {\n#HomePage .swiper-container {\n    position: relative;\n    height: 100%;\n}\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-container {\n    position: absolute;\n    height: 100%;\n}\n}\n#HomePage .swiper-slide {\n  padding: 1.5rem 2rem;\n}\n@media (min-width: 68rem) {\n#HomePage .swiper-slide {\n      padding: 9rem 4rem 4rem;\n      padding-left: 11rem;\n}\n}\n@media (max-width: 38rem) {\n#HomePage .swiper-slide * {\n      text-align: center;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n         -moz-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n         -moz-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n}\n#HomePage .swiper-pagination-wrapper {\n  position: absolute;\n  z-index: 99;\n}\n@media (min-width: 68rem) {\n#HomePage .swiper-pagination-wrapper {\n      height: 50vh;\n      right: unset !important;\n      left: 5.5rem;\n      top: 50%;\n      top: -webkit-calc(50% + 1.5rem);\n      top: -moz-calc(50% + 1.5rem);\n      top: calc(50% + 1.5rem);\n      -webkit-transform: translate(-50%, -50%);\n         -moz-transform: translate(-50%, -50%);\n          -ms-transform: translate(-50%, -50%);\n           -o-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n}\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-pagination-wrapper {\n      height: 8px;\n      width: 88vw;\n      right: 6vw !important;\n      left: unset;\n      bottom: 1.5rem;\n}\n}\n#HomePage .swiper-pagination-bullets {\n  top: 0 !important;\n  left: 0 !important;\n  right: 0 !important;\n  left: 0 !important;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap column;\n          flex-flow: nowrap column;\n  -webkit-box-pack: stretch;\n  -webkit-justify-content: stretch;\n     -moz-box-pack: stretch;\n      -ms-flex-pack: stretch;\n          justify-content: stretch;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-pagination-bullets {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: nowrap row;\n         -moz-box-orient: horizontal;\n         -moz-box-direction: normal;\n          -ms-flex-flow: nowrap row;\n              flex-flow: nowrap row;\n}\n}\n#HomePage .swiper-pagination-bullet {\n  all: unset;\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n     -moz-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 8px;\n  height: 8px;\n  margin: 0 !important;\n  background: rgba(250, 250, 250, 0.25);\n  -webkit-transition: .3s ease;\n  -o-transition: .3s ease;\n  -moz-transition: .3s ease;\n  transition: .3s ease;\n}\n@media (min-width: 68rem) {\n#HomePage .swiper-pagination-bullet + * {\n      margin-top: 2px !important;\n}\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-pagination-bullet + * {\n      margin-left: 2px !important;\n}\n}\n#HomePage .swiper-pagination-bullet-text {\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    left: 0;\n    bottom: -webkit-calc(100% + 1em);\n    bottom: -moz-calc(100% + 1em);\n    bottom: calc(100% + 1em);\n    font-size: 0.9em;\n}\n@media (min-width: 68rem) {\n#HomePage .swiper-pagination-bullet-text {\n        top: 0;\n        right: -webkit-calc(100% + 1em);\n        right: -moz-calc(100% + 1em);\n        right: calc(100% + 1em);\n        bottom: unset;\n        left: unset;\n        line-height: 1;\n        height: initial;\n        -webkit-transform: rotate(-90deg) translate(0, -125%);\n           -moz-transform: rotate(-90deg) translate(0, -125%);\n            -ms-transform: rotate(-90deg) translate(0, -125%);\n             -o-transform: rotate(-90deg) translate(0, -125%);\n                transform: rotate(-90deg) translate(0, -125%);\n        -webkit-transform-origin: top right;\n           -moz-transform-origin: top right;\n            -ms-transform-origin: top right;\n             -o-transform-origin: top right;\n                transform-origin: top right;\n}\n}\n#HomePage .swiper-pagination-bullet-active {\n    position: relative;\n    background: #BA9454;\n    /* box-shadow:\n            2px 0 0 Color(theme),\n            -2px 0 0 Color(theme);\n          @include Break( max-width Breaks(4) ){\n            box-shadow:\n              0  2px 0 Color(theme),\n              0 -2px 0 Color(theme);\n          } */\n}\n#HomePage .swiper-pagination-bullet > * {\n    opacity: 0;\n    -webkit-transition: .3s .2s ease-out;\n    -o-transition: .3s .2s ease-out;\n    -moz-transition: .3s .2s ease-out;\n    transition: .3s .2s ease-out;\n}\n#HomePage .swiper-pagination-bullet-active > * {\n    opacity: 1;\n}\n#HomePage .swiper-pagination-wrapper .UiIcon {\n  z-index: 99;\n  position: absolute;\n  -webkit-transition: .3s ease;\n  -o-transition: .3s ease;\n  -moz-transition: .3s ease;\n  transition: .3s ease;\n  -webkit-transform: translate(0, -50%) !important;\n     -moz-transform: translate(0, -50%) !important;\n      -ms-transform: translate(0, -50%) !important;\n       -o-transform: translate(0, -50%) !important;\n          transform: translate(0, -50%) !important;\n}\n@media (min-width: 68rem) {\n#HomePage .swiper-pagination-wrapper .UiIcon {\n      left: -webkit-calc(-1em - 4px) !important;\n      left: -moz-calc(-1em - 4px) !important;\n      left: calc(-1em - 4px) !important;\n}\n}\n@media (max-width: 68rem) {\n#HomePage .swiper-pagination-wrapper .UiIcon {\n      top: 0px !important;\n      -webkit-transform: translate(-50%, -50%) rotate(90deg) !important;\n         -moz-transform: translate(-50%, -50%) rotate(90deg) !important;\n          -ms-transform: translate(-50%, -50%) rotate(90deg) !important;\n           -o-transform: translate(-50%, -50%) rotate(90deg) !important;\n              transform: translate(-50%, -50%) rotate(90deg) !important;\n}\n}\n", "", {"version":3,"sources":["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],"names":[],"mappings":";AAuIE;EACE,WAAU;EACV,gBAAe;EACf,gBAAe;EACf,4BAAoB;EAApB,6BAAoB;EAApB,yBAAoB;EAApB,4BAAoB;EAApB,qBAAoB;EACpB,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,eCpI8B;EDqI9B,sBAAqB;CACtB;AACD;EACE,aAAY;EACZ,yCAAgC;CACjC;AEnFC;AFsFJ;IAGM,4CAA8B;IAM9B,wFAEmB;OAFnB,qFAEmB;YAFnB,gFAEmB;CAcpB;AAzBL;MAcQ,YAAW;MACX,YAAW;MACX,mBAAkB;MAClB,UAAS;MACT,SAAQ;MACR,UAAS;MACT,QAAO;MACP,2BAA0B;MAC1B,mCAAkC;MAClC,qBAAoB;CACrB;CAAA;AAKP;EAOI,WAAU;EACV,mBAAkB;EAClB,cAAa;EACb,eCjLoC;CDwLrC;AEpIC;AFmHJ;MAYM,mBAAkB;MAClB,kBAVgB;MAWhB,YAAW;MACX,aAAY;CAEf;CAAA;AAjBH;EAmBI,cAAa;CACd;AApBH;EAwBQ,iBAAgB;CACjB;AAzBP;EA4BQ,aAAY;EACZ,YAAW;CAOZ;AApCP;IA+BU,kBAAiB;CAClB;AEnJL;AFmHJ;MAkCU,cAAa;CAEhB;CAAA;AApCP;EAuCQ,eAAc;EACd,oCAA2B;KAA3B,iCAA2B;MAA3B,gCAA2B;OAA3B,+BAA2B;UAA3B,4BAA2B;EAC3B,UAAS;EACT,UAAS;EACT,iBAAgB;EAChB,0BAAyB;EACzB,sBAAqB;EACrB,gCAAuB;EAAvB,2BAAuB;EAAvB,6BAAuB;EAAvB,wBAAuB;EACvB,gBAAe;CAgBhB;AA/DP;IAiDU,YAAW;IACX,aAAY;IACZ,WAAU;IACV,yBAAwB;IACxB,eAAc;IACd,eAAc;CACf;AAvDT;IAyDU,WAAU;IACV,qBAAoB;CACrB;AE9KL;AFmHJ;MA6DU,yBAAwB;CAE3B;CAAA;AA/DP;EAkEQ,aAAY;EACZ,WAAU;EACV,gBAAe;CAWhB;AA/EP;IAsEU,oBAAmB;CACpB;AE1LL;AFmHJ;MAyEU,gBAAe;MACf,aAAY;MACZ,UAAS;MACT,oCAA2B;SAA3B,iCAA2B;UAA3B,gCAA2B;WAA3B,+BAA2B;cAA3B,4BAA2B;MAC3B,eCpP8B;CDsPjC;CAAA;AElMH;AFmHJ;IAmFQ,mBAAkB;IAClB,aAAY;CASf;CAAA;AEhND;AFmHJ;IAyFQ,mBAAkB;IAClB,aAAY;CAGf;CAAA;AA7FL;EA+FM,qBAAoB;CAYrB;AE9ND;AFmHJ;MAiGQ,wBAAuB;MACvB,oBA9Fa;CAuGhB;CAAA;AE9ND;AFmHJ;MAsGU,mBAAkB;MAClB,yBAAuB;MAAvB,gCAAuB;SAAvB,sBAAuB;UAAvB,sBAAuB;cAAvB,wBAAuB;MACvB,0BAAmB;MAAnB,4BAAmB;SAAnB,uBAAmB;UAAnB,uBAAmB;cAAnB,oBAAmB;CACpB;CAAA;AAzGT;EA8GQ,mBAAkB;EAClB,YAAW;CAgBZ;AElPH;AFmHJ;MAiHU,aAAY;MACZ,wBAAuB;MACvB,aAAsB;MACtB,SAAQ;MACR,gCAAuB;MAAvB,6BAAuB;MAAvB,wBAAuB;MACvB,yCAA+B;SAA/B,sCAA+B;UAA/B,qCAA+B;WAA/B,oCAA+B;cAA/B,iCAA+B;CASlC;CAAA;AElPH;AFmHJ;MAyHU,YAAW;MACX,YAAW;MACX,sBAAqB;MACrB,YAAW;MACX,eAAc;CAEjB;CAAA;AA/HP;EAiIQ,kBAAiB;EACjB,mBAAkB;EAClB,oBAAmB;EACnB,mBAAkB;EAClB,aAAY;EACZ,YAAW;EACX,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAwB;EAAxB,8BAAwB;EAAxB,iCAAwB;KAAxB,0BAAwB;KAAxB,2BAAwB;MAAxB,6BAAwB;UAAxB,yBAAwB;EACxB,0BAAwB;EAAxB,iCAAwB;KAAxB,uBAAwB;MAAxB,uBAAwB;UAAxB,yBAAwB;EACxB,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;CAIpB;AEjQH;AFmHJ;MA4IU,+BAAqB;MAArB,8BAAqB;MAArB,8BAAqB;SAArB,4BAAqB;SAArB,2BAAqB;UAArB,0BAAqB;cAArB,sBAAqB;CAExB;CAAA;AA9IP;EAgJQ,WAAU;EACV,mBAAkB;EAClB,oBAAO;EAAP,gBAAO;KAAP,iBAAO;MAAP,YAAO;UAAP,QAAO;EACP,WAAU;EACV,YAAW;EACX,qBAAoB;EACpB,sCC7TgC;ED8ThC,6BAAoB;EAApB,wBAAoB;EAApB,0BAAoB;EAApB,qBAAoB;CAkDrB;AE5TH;AFmHJ;MA0JY,2BAA0B;CAK7B;CAAA;AElRL;AFmHJ;MA6JY,4BAA2B;CAE9B;CAAA;AA/JT;IAkKU,mBAAkB;IAClB,mBAAkB;IAClB,YAAW;IACX,QAAO;IACP,iCAAwB;IAAxB,8BAAwB;IAAxB,yBAAwB;IACxB,iBAAgB;CAcjB;AExSL;AFmHJ;QA0KY,OAAM;QACN,gCAAuB;QAAvB,6BAAuB;QAAvB,wBAAuB;QACvB,cAAa;QACb,YAAW;QACX,eAAc;QAEd,gBAAe;QAEf,sDAA4C;WAA5C,mDAA4C;YAA5C,kDAA4C;aAA5C,iDAA4C;gBAA5C,8CAA4C;QAC5C,oCAA2B;WAA3B,iCAA2B;YAA3B,gCAA2B;aAA3B,+BAA2B;gBAA3B,4BAA2B;CAE9B;CAAA;AArLT;IAuLU,mBAAkB;IAClB,oBCzWO;ID0WP;;;;;;;cAOI;CACL;AAjMT;IAmMU,WAAU;IACV,qCAA4B;IAA5B,gCAA4B;IAA5B,kCAA4B;IAA5B,6BAA4B;CAC7B;AArMT;IAuMU,WAAU;CACX;AAxMT;EA2MQ,YAAW;EACX,mBAAkB;EAClB,6BAAoB;EAApB,wBAAoB;EAApB,0BAAoB;EAApB,qBAAoB;EACpB,iDAA0C;KAA1C,8CAA0C;MAA1C,6CAA0C;OAA1C,4CAA0C;UAA1C,yCAA0C;CAM3C;AEvUH;AFmHJ;MA+M+C,0CAAiC;MAAjC,uCAAiC;MAAjC,kCAAiC;CAKzE;CAAA;AEvUH;AFmHJ;MAiNU,oBAAmB;MACnB,kEAAyD;SAAzD,+DAAyD;UAAzD,8DAAyD;WAAzD,6DAAyD;cAAzD,0DAAyD;CAE5D;CAAA","file":"index.vue?vue&type=style&index=0&lang=scss&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"~@/styles/theme/colors\";\n@import \"~@/styles/theme/breaks\";\n\n%swiper {\n  &-footer {\n    z-index: 9;\n    position: fixed;\n    position: fixed;\n    display: inline-flex;\n    align-items: center;\n    color: Color(silver);\n    text-decoration: none;\n  }\n  &-overlayText {\n    color: white;\n    text-shadow: 0 0 12px rgba(black,.8);\n  }\n}\n\n.app.route_HomePage {\n  @include Break( max-width Breaks(3) ){\n    #AppNav {\n      background-color: rgba(#FAFAFA,.75);\n      // background-image:\n      //   linear-gradient( to bottom, , rgba(#FAFAFA,.25) 75% ),\n      //   linear-gradient( to left, rgba(#FAFAFA,.5), transparet 25%, transparet 75%, rgba(#FAFAFA,.5) )\n      //   !important;\n      // color: #FAFAFA !important;\n      box-shadow:\n        0 .3em 1em rgba(Color(dark),.1),\n        0 1px 0 rgba(#FFF,.7);\n        ;\n      &:before {\n        z-index: -1;\n        content: '';\n        position: absolute;\n        top: -1px;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        backdrop-filter: blur(9px);\n        -webkit-backdrop-filter: blur(9px);\n        pointer-events: none;\n      }\n    }\n  }\n}\n\n#HomePage {\n\n  $top-offset: 6rem;\n  $top-offset--M: 4rem;\n  $left-offset: 11rem;\n  \n  & {\n    z-index: 1;\n    position: relative;\n    height: 100vh;\n    color: Color(light);\n    @include Break( max-width Breaks(4) ){\n      position: absolute;\n      margin-top: -$top-offset--M;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  +#AppFooter {\n    display: none;\n  }\n  .swiper {\n    & { // custom elems\n      &-slide {\n        overflow: hidden;\n      }\n      &-social {\n        @extend %swiper-footer;\n        bottom: 2rem;\n        right: 3rem;\n        > * + * {\n          margin-left: 1rem;\n        }\n        @include Break( max-width Breaks(4) ) {\n          display: none;\n        }\n      }\n      &-scroll {\n        @extend %swiper-footer, %swiper-overlayText;\n        display: block;\n        transform: translateX(-50%);\n        left: 50%;\n        bottom: 0;\n        font-size: .75em;\n        text-transform: uppercase;\n        letter-spacing: 0.1em;\n        transition: .3s ease-in;\n        cursor: pointer;\n        &:after {\n          content: '';\n          height: 3rem;\n          width: 1px;\n          background: currentColor;\n          display: block;\n          margin: 0 auto;\n        }\n        &.hidden {\n          opacity: 0;\n          pointer-events: none;\n        }\n        @include Break( max-width Breaks(4) ) {\n          display: none !important;\n        }\n      }\n      &-account {\n        @extend %swiper-footer;\n        bottom: 2rem;\n        left: 3rem;\n        font-size: .9em;\n        .UiIcon {\n          margin-right: .5rem;\n        }\n        @include Break( max-width Breaks(4) ) {\n          position: fixed;\n          bottom: 13vh;\n          left: 50%;\n          transform: translateX(-50%);\n          color: Color(light);\n        }\n      }\n    }\n    &-container {\n      @include Break( min-width Breaks(4) ){\n        position: relative;\n        height: 100%;\n        // padding-top: $top-offset;\n        // margin-top: -$top-offset;\n      }\n      @include Break( max-width Breaks(4) ){\n        position: absolute;\n        height: 100%;\n        // margin-top: -$top-offset--M;\n      }\n    }\n    &-slide {\n      padding: 1.5rem 2rem;\n      @include Break( min-width Breaks(4) ){\n        padding: 9rem 4rem 4rem;\n        padding-left: $left-offset;\n      }\n      @include Break( max-width Breaks(2) ){\n        * {\n          text-align: center;\n          justify-content: center;\n          align-items: center;\n        }\n      }\n    }\n    &-pagination {\n      &-wrapper {\n        position: absolute;\n        z-index: 99;\n        @include Break( min-width Breaks(4) ){\n          height: 50vh;\n          right: unset !important;\n          left: $left-offset / 2;\n          top: 50%;\n          top: calc(50% + 1.5rem);\n          transform: translate(-50%,-50%);\n        }\n        @include Break( max-width Breaks(4) ){\n          height: 8px;\n          width: 88vw;\n          right: 6vw !important;\n          left: unset;\n          bottom: 1.5rem;\n        }\n      }\n      &-bullets {\n        top: 0 !important;\n        left: 0 !important;\n        right: 0 !important;\n        left: 0 !important;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-flow: nowrap column;\n        justify-content: stretch;\n        align-items: center;\n        @include Break( max-width Breaks(4) ){\n          flex-flow: nowrap row;\n        }\n      }\n      &-bullet {\n        all: unset;\n        position: relative;\n        flex: 1;\n        width: 8px;\n        height: 8px;\n        margin: 0 !important;\n        background: rgba(Color(light),.25);\n        transition: .3s ease;\n        & + * {\n          @include Break( min-width Breaks(4) ){\n            margin-top: 2px !important;\n          }\n          @include Break( max-width Breaks(4) ){\n            margin-left: 2px !important;\n          }\n        }\n\n        &-text {\n          position: absolute;\n          text-align: center;\n          width: 100%;\n          left: 0;\n          bottom: calc(100% + 1em);\n          font-size: 0.9em;\n          @extend %swiper-overlayText;\n          @include Break( min-width Breaks(4) ){\n            top: 0;\n            right: calc(100% + 1em);\n            bottom: unset;\n            left: unset;\n            line-height: 1;\n            \n            height: initial;\n\n            transform: rotate(-90deg) translate(0,-125%);\n            transform-origin: top right;\n          }\n        }\n        &-active {\n          position: relative;\n          background: Color(theme);\n          /* box-shadow:\n            2px 0 0 Color(theme),\n            -2px 0 0 Color(theme);\n          @include Break( max-width Breaks(4) ){\n            box-shadow:\n              0  2px 0 Color(theme),\n              0 -2px 0 Color(theme);\n          } */\n        }\n        > * {\n          opacity: 0;\n          transition: .3s .2s ease-out;\n        }\n        &-active > * {\n          opacity: 1;\n        }\n      }\n      &-wrapper .UiIcon {\n        z-index: 99;\n        position: absolute;\n        transition: .3s ease;\n        transform: translate( 0, -50% ) !important;\n        @include Break( min-width Breaks(4) ){ left: calc(-1em - 4px) !important }\n        @include Break( max-width Breaks(4) ){\n          top: 0px !important;\n          transform: translate(-50%, -50%) rotate(90deg) !important;\n        }\n      }\n    }\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2644f5d0", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7a060506", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("215b6bea", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/modules/Slider/index.vue":
/*!*************************************************!*\
  !*** ./src/components/modules/Slider/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4037c448&scoped=true& */ "./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/modules/Slider/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_4037c448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& */ "./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ "./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4037c448",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4037c448', component.options)
    } else {
      api.reload('4037c448', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=4037c448&scoped=true& */ "./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4037c448&scoped=true& */ "./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true&");
(function () {
      api.rerender('4037c448', {
        render: _index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/modules/Slider/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/modules/Slider/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/modules/Slider/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4037c448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=0&id=4037c448&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4037c448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4037c448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4037c448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4037c448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4037c448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4037c448&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/modules/Slider/index.vue?vue&type=template&id=4037c448&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4037c448_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/index.vue":
/*!*****************************!*\
  !*** ./src/views/index.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a83bd3b0& */ "./src/views/index.vue?vue&type=template&id=a83bd3b0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./src/views/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
      api.createRecord('a83bd3b0', component.options)
    } else {
      api.reload('a83bd3b0', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=a83bd3b0& */ "./src/views/index.vue?vue&type=template&id=a83bd3b0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a83bd3b0& */ "./src/views/index.vue?vue&type=template&id=a83bd3b0&");
(function () {
      api.rerender('a83bd3b0', {
        render: _index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/index.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/views/index.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************!*\
  !*** ./src/views/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/index.vue?vue&type=template&id=a83bd3b0&":
/*!************************************************************!*\
  !*** ./src/views/index.vue?vue&type=template&id=a83bd3b0& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"315a25c0-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a83bd3b0& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"315a25c0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/index.vue?vue&type=template&id=a83bd3b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_315a25c0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a83bd3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=10.js.map