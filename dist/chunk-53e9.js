(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e9"],{"032a":function(n,e,t){var a=t("3345");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("61def64b",a,!0,{sourceMap:!0,shadowMode:!1})},"0bfb":function(n,e,t){"use strict";var a=t("cb7c");n.exports=function(){var n=a(this),e="";return n.global&&(e+="g"),n.ignoreCase&&(e+="i"),n.multiline&&(e+="m"),n.unicode&&(e+="u"),n.sticky&&(e+="y"),e}},"0f32":function(n,e,t){var a=t("b047c"),i=t("1a8c"),r="Expected a function";function o(n,e,t){var o=!0,s=!0;if("function"!=typeof n)throw new TypeError(r);return i(t)&&(o="leading"in t?!!t.leading:o,s="trailing"in t?!!t.trailing:s),a(n,e,{leading:o,maxWait:e,trailing:s})}n.exports=o},"116a":function(n,e,t){"use strict";var a=t("85f6"),i=t.n(a);i.a},1310:function(n,e){function t(n){return null!=n&&"object"==typeof n}n.exports=t},"2caf":function(n,e,t){var a=t("5ca1");a(a.S,"Array",{isArray:t("1169")})},"32ae":function(n,e,t){"use strict";var a=t("032a"),i=t.n(a);i.a},3345:function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,"\n#VineyardPage blockquote {\n  font-family: Georgia, serif;\n  font-style: italic;\n  color: #BA9454;\n  border-left: 0 solid transparent;\n  margin-left: 0;\n  padding-left: 0;\n}\n#VineyardPage hr {\n  border-width: 1px 0 0;\n  border-style: solid;\n  border-color: #BA9454;\n  margin: 1rem 0;\n}\n#VineyardPage-overview table {\n  margin: 0;\n  font-size: 0.8rem;\n}\n#VineyardPage-overview table * {\n    font-size: inherit;\n    border: none;\n}\n#VineyardPage-overview table caption {\n    border: none;\n    font-weight: 900;\n    letter-spacing: 0;\n    margin: 0;\n    padding: 0.8em 0.4em;\n    font-size: 1.2em;\n}\n","",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/Vineyards/page/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/fonts.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],names:[],mappings:";AAqQA;EAEI,4BClQ8B;EDmQ9B,mBAAkB;EAClB,eEvQa;EFwQb,iCAAgC;EAChC,eAAc;EACd,gBAAe;CAChB;AARH;EAWI,sBAAqB;EACrB,oBAAmB;EACnB,sBEhRa;EFiRb,eAAc;CACf;AAED;EACE,UAAS;EACT,kBAAiB;CAalB;AAfA;IAIG,mBAAkB;IAClB,aAAY;CACb;AANF;IAQG,aAAY;IACZ,iBAAgB;IAChB,kBAAiB;IACjB,UAAS;IACT,qBAAoB;IACpB,iBAAgB;CACjB",file:"index.vue?vue&type=style&index=1&lang=scss&",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~@/styles/theme/colors';\n@import '~@/styles/theme/fonts';\n\n#VineyardPage {\n  blockquote {\n    font-family: $ff-alt;\n    font-style: italic;\n    color: Color(theme);\n    border-left: 0 solid transparent;\n    margin-left: 0;\n    padding-left: 0;\n  }\n\n  hr {\n    border-width: 1px 0 0;\n    border-style: solid;\n    border-color: Color(theme);\n    margin: 1rem 0;\n  }\n\n  &-overview table {\n    margin: 0;\n    font-size: 0.8rem;\n    * {\n      font-size: inherit;\n      border: none;\n    }\n    caption {\n      border: none;\n      font-weight: 900;\n      letter-spacing: 0;\n      margin: 0;\n      padding: 0.8em 0.4em;\n      font-size: 1.2em;\n    }\n  }\n} // #VineyardPage\n",'\n$ff-sans:  "futura-pt", Futura, Verdana, sans-serif;\n\n$ff-serif: \'"Butler"\', Georgia, serif;\n\n$ff-alt:   nth($ff-serif,2), serif;\n\n$ff-mono:  Source Code Pro, monospace;',"$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],sourceRoot:""}])},3799:function(n,e,t){"use strict";var a=t("72aa"),i=t.n(a);i.a},"3b2b":function(n,e,t){var a=t("7726"),i=t("5dbc"),r=t("86cc").f,o=t("9093").f,s=t("aae3"),c=t("0bfb"),l=a.RegExp,A=l,d=l.prototype,m=/a/g,p=/a/g,u=new l(m)!==m;if(t("9e1e")&&(!u||t("79e5")(function(){return p[t("2b4c")("match")]=!1,l(m)!=m||l(p)==p||"/a/i"!=l(m,"i")}))){l=function(n,e){var t=this instanceof l,a=s(n),r=void 0===e;return!t&&a&&n.constructor===l&&r?n:i(u?new A(a&&!r?n.source:n,e):A((a=n instanceof l)?n.source:n,a&&r?c.call(n):e),t?this:d,l)};for(var f=function(n){n in l||r(l,n,{configurable:!0,get:function(){return A[n]},set:function(e){A[n]=e}})},B=o(A),h=0;B.length>h;)f(B[h++]);d.constructor=l,l.prototype=d,t("2aba")(a,"RegExp",l)}t("7a56")("RegExp")},"408c":function(n,e,t){var a=t("2b3e"),i=function(){return a.Date.now()};n.exports=i},4917:function(n,e,t){t("214f")("match",1,function(n,e,t){return[function(t){"use strict";var a=n(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a):new RegExp(t)[e](String(a))},t]})},"5e78":function(n,e,t){var a=t("db0b");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("556f8f0a",a,!0,{sourceMap:!0,shadowMode:!1})},"72aa":function(n,e,t){var a=t("f9a3");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("ee8584f8",a,!0,{sourceMap:!0,shadowMode:!1})},"85f6":function(n,e,t){var a=t("a69d");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("56b7766c",a,!0,{sourceMap:!0,shadowMode:!1})},"97f3":function(n,e,t){"use strict";t("2caf");var a=t("6bde"),i=(t("96cf"),t("3040")),r=t("d5e8");e["a"]={mixins:[r["a"]],props:{type:{type:String,default:"posts"}},methods:{fetch:function(){return this.id?this.endpoint.id(this.id).embed():this.slug?this.endpoint.slug(this.slug).embed():this.endpoint.embed()}},asyncComputed:{context:{default:{loading:!0},get:function(){var n=Object(i["a"])(regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(this.API&&this.endpoint){n.next=2;break}return n.abrupt("return",{loading:!0});case 2:return e=!1,n.next=5,this.fetch().get().catch(function(n){return e=n});case 5:if(t=n.sent,!e){n.next=8;break}return n.abrupt("return",{error:e});case 8:if("object"!=Object(a["a"])(t)||!Array.isArray(t)){n.next=12;break}return n.abrupt("return",t[0]);case 12:return n.abrupt("return",t);case 13:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),watch:function(){this.$route.params}}}}},a2b7:function(n,e,t){"use strict";t.r(e);var a={};t.r(a),t.d(a,"media",function(){return c}),t.d(a,"iframe",function(){return l}),t.d(a,"tables",function(){return A}),t.d(a,"text",function(){return d});var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.context.loading?t("AppLoad"):t("main",{staticClass:"UiTheme_light",attrs:{id:"VineyardPage"}},[t("UiPanel",{attrs:{id:"VineyardPage-overview"}},[t("UiBoxImg",{staticClass:"UiTheme_cream",staticStyle:{"background-position":"center 25%"},attrs:{id:"VineyardPage-overviewMedia",img:n.media}}),t("UiBox",{staticClass:"UiTheme_light wrap_mid",attrs:{id:"VineyardPage-overviewContent"}},[n.text?t("div",{attrs:{id:"VineyardPage-overviewContent-inner"}},[t("header",[t("AdjacentNav",n._b({attrs:{all:"/vineyards"}},"AdjacentNav",n.adjacent,!1)),t("UiHeading",{staticClass:"UiHeading_contract UiHeading_space÷2",attrs:{id:"VineyardPage-overviewHeader",level:2,scale:3},domProps:{innerHTML:n._s(n.context.title.rendered)}})],1),t("aside",{attrs:{id:"VineyardPage-overviewSidebar"}},[n._l(n.context.acf.vineyardStats,function(e,a){return Array.isArray(n.context.acf.vineyardStats)?t("StatGroup",n._b({key:"statGroup-"+a},"StatGroup",e,!1)):n._e()}),n._l(n.tables,function(e){return Array.isArray(n.context.acf.vineyardStats)?n._e():t("div",{domProps:{innerHTML:n._s(e)}})})],2),t("div",{attrs:{id:"VineyardPage-overviewText"}},[t("blockquote",{domProps:{innerHTML:n._s(n.text[0])}}),t("p",{domProps:{innerHTML:n._s(n.text[1])}}),n.text.length>2?t("ReadMore",{attrs:{id:"VineyardPage-overviewKick",href:"#content"}}):n._e()],1)]):n._e()])],1),n.text.length>2?t("UiPanel",{staticClass:"UiTheme_cream",staticStyle:{"flex-direction":"row-reverse"},attrs:{id:"content"}},[t("UiBox",{staticClass:"UiBox_stack"},[t("div",{staticClass:"wrap_mid",attrs:{id:"VineyardPage--media"}},[n.iframe.length?t("span",{staticClass:"iframeWrap",domProps:{innerHTML:n._s(n.iframe[0])}}):n._e()]),t("article",{staticClass:"wrap_mid",staticStyle:{columns:"18em","column-gap":"2rem"},attrs:{id:"VineyardPage--text"}},n._l(n.text.slice(2),function(e){return t("p",{domProps:{innerHTML:n._s(e)}})}))])],1):n._e(),t("UiPanel",{staticClass:"UiTheme_light"},[t("UiBox",{staticClass:"UiBox_stack"},[t("UiHeading",{staticClass:"UiHeading_space",attrs:{level:2,scale:3}},[n._v("\n        Our\n        "),t("span",{domProps:{innerHTML:n._s(n.context.title.rendered)}}),n._v(" Wines\n      ")]),t("WineGrid",{staticClass:"wrap",attrs:{category:n.slug,paginate:4}})],1)],1),t("UiPanel",{staticClass:"UiTheme_dark"},[t("UiBox",{staticClass:"iconListBox"},[t("StaticIconList")],1)],1)],1)},r=[],o=t("c93e"),s=(t("cadf"),t("551c"),t("097d"),t("97f3"));t("3b2b"),t("4f37"),t("6d67"),t("4917"),t("28a5"),t("57e7"),t("a481"),t("ac6a"),t("8615"),t("d25f");function c(n){if(!this.context.loading){if(this.context.acf.cover&&Object.values(this.context.acf.cover).filter(function(n){return!!n}).length){var e=this.context.acf.cover;return this.useLandscape?e.landscapeImg.url:e.portraitImg.url}var t=this.embedded["wp:featuredmedia"][0],a=t.source_url;return a=a.replace(/.*\/wp-content\//gim,"https://www.williamsselyem.com/wp-content/"),a}}function l(n,e){if(!this.context.loading){if(this.context.acf.video.length){var t=this.context.acf.video,a=t.indexOf("/")>=0?t.split("/").reverse()[0]:t;return a='<iframe src="//player.vimeo.com/video/'.concat(a,'?byline=0&portrait=0" width="640" height="355" frameborder="0" allowfullscreen="allowfullscreen"></iframe>'),[a]}var i=e||this.context.content.rendered,r=i.match(/(<iframe[^>]*>.*[^<]*?<\/iframe>)/gim);return r&&r.length?r.map(function(n){return n.trim()}).filter(function(n){return!(!n||"&nbsp;"===n)}):[]}}function A(n,e){var t=e||!this.context.loading&&this.context.content.rendered,a=t.match(/(<table[^>]*>(?:.|\s)*?<\/table>)/gim);return a&&a.length?a.map(function(n){return n.trim()}).filter(function(n){return!(!n||"&nbsp;"===n)}):[]}function d(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"p";if(!this.context.loading){this.context.acf.vineyardNotes&&(e=this.context.acf.vineyardNotes.quote+(this.context.acf.vineyardNotes.content||this.context.content.rendered));var a=e||this.context.content.rendered,i="(?!".concat(t,">)([^><]+)(?=</?").concat(t,">)");return i=new RegExp(i,"gim"),a.match(i).map(function(n){return n.trim()}).filter(function(n){return!(!n||"&nbsp;"===n)})}}var m=t("0f32"),p=t.n(m),u=t("1f9d"),f=t("9683"),B=t("c84c"),h=t("f78d"),b=function(){var n,e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"StatGroup",class:(n={},n["StatGroup_"+e.layout]=e.layout,n)},[e.title?a("b",{staticClass:"StatGroup--caption",attrs:{level:5}},[e._v(e._s(e.title))]):e._e(),a("div",{staticClass:"StatGroup--list"},e._l(e.content,function(n){return a("div",{staticClass:"StatGroup--item"},[a("b",{staticClass:"StatGroup--itemLabel"},[e._v(e._s(n.label))]),a("span",{staticClass:"StatGroup--itemText"},[e._v(e._s(n.text))])])}))])},g=[],y={name:"StatGroup",props:["layout","title","content"]},v=y,x=(t("3799"),t("2877")),k=Object(x["a"])(v,b,g,!1,null,"4e537326",null);k.options.__file="StatGroup.vue";var w=k.exports,C=t("47d9"),$=t("631d"),E=t("0f54"),I=t("ded9"),q={name:"VineyardPage",mixins:[s["a"]],props:["type","category","slug"],created:function(){this.$set(this.$root.filters,"page",1),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},data:function(){return{useLandscape:!1}},methods:{handleResize:p()(function(){this.$log(window.matchMedia("(max-width: 832px)").matches),this.$set(this,"useLandscape",window.matchMedia("(max-width: 832px)").matches)},250)},computed:Object(o["a"])({},a,{endpoint:function(){if(this.API)return this.API["posts"]().slug(this.slug).embed()},adjacent:function(){return this.context.loading,this.context.adjacent},embedded:function(){if(!this.context.loading)return this.context._embedded}}),components:{UiPanel:u["a"],UiBox:f["a"],UiBoxImg:B["a"],UiHeading:h["a"],StatGroup:w,ReadMore:C["a"],AdjacentNav:I["a"],WineGrid:$["a"],StaticIconList:E["a"]}},U=q,_=(t("116a"),t("32ae"),Object(x["a"])(U,i,r,!1,null,null,null));_.options.__file="index.vue";e["default"]=_.exports},a69d:function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,"\n#VineyardPage-overviewKick {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: #BA9454;\n}\n#VineyardPage-overviewKick:not(:hover) {\n    text-decoration: none;\n}\n#VineyardPage-overviewContent {\n  -webkit-flex-basis: 33%;\n      -ms-flex-preferred-size: 33%;\n          flex-basis: 33%;\n}\n@media (max-width: 68rem) {\n#VineyardPage-overviewContent-inner {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n         -moz-box-orient: vertical;\n         -moz-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n}\n}\n#VineyardPage-overviewHeader {\n  margin: 0 0 1rem;\n}\n@media (max-width: 68rem) {\n#VineyardPage-overviewHeader {\n      margin: 0.5em auto;\n      text-align: center;\n      line-height: 1.1;\n}\n}\n#VineyardPage-overviewSidebar {\n  float: left;\n  width: 42%;\n  margin: 0 1.4rem 0 -.4rem;\n  border-right: 1px solid #BA9454;\n}\n#VineyardPage-overviewSidebar > :first-child caption {\n    padding-top: 0.3rem;\n}\n#VineyardPage-overviewSidebar > :not(:first-child) caption {\n    border-top: 1px solid;\n    margin-top: 0.7rem;\n}\n@media (max-width: 68rem) {\n#VineyardPage-overviewSidebar > :not(:first-child) caption {\n        border-top: 3px solid;\n}\n}\n@media (max-width: 68rem) {\n#VineyardPage-overviewSidebar {\n      float: none;\n      width: 100%;\n      border-right: none;\n      margin: 0;\n      padding: 0;\n}\n}\n@media (min-width: 68rem) {\n#VineyardPage-overviewSidebar:not(:empty) + #VineyardPage-overviewText {\n    margin-left: 45%;\n}\n}\n#VineyardPage--media {\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 38rem) {\n#VineyardPage--media {\n      min-width: 100vw;\n      margin-left: -2.5rem;\n}\n}\n#VineyardPage--media .iframeWrap {\n    position: relative;\n    display: block;\n    padding-bottom: 55%;\n    /* 16:9 */\n    padding-top: 25px;\n    height: 0;\n}\n#VineyardPage--media .iframeWrap iframe {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n}\n@media (min-width: 68rem) {\n#VineyardPage > .UiPanel:first-child {\n    min-height: 100vh;\n    max-height: unset;\n}\n#VineyardPage > .UiPanel:first-child > .UiBoxImage:first-child {\n    max-height: 100vh;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n}\n}\n@media (min-width: 68rem) and (min-width: 52rem) {\n#VineyardPage > .UiPanel:first-child > .UiBoxImage:first-child {\n      background-position: center !important;\n}\n}\n","",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/Vineyards/page/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/extend/text.label.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],names:[],mappings:";AAoNK;ECnNH,iBAAgB;EAChB,eAAc;EACd,0BAAyB;EACzB,sBAAqB;EACrB,eCHe;CDOhB;AD2MI;IC7MD,sBAAqB;CACtB;AD0JC;EACE,wBAAe;MAAf,6BAAe;UAAf,gBAAe;CAOhB;AG1GD;AHqGI;MACE,qBAAa;MAAb,sBAAa;MAAb,kBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,6BAAsB;MAAtB,8BAAsB;MAAtB,+BAAsB;SAAtB,0BAAsB;SAAtB,2BAAsB;UAAtB,2BAAsB;cAAtB,uBAAsB;CACvB;CAAA;AAIL;EACE,iBAAgB;CAMjB;AGnHD;AH4GA;MAGI,mBAAkB;MAClB,mBAAkB;MAClB,iBAAgB;CAEnB;CAAA;AAED;EACE,YAAW;EACX,WAvBiB;EAwBjB,0BAAyB;EACzB,gCEvLW;CF2MZ;AAxBA;IAOG,oBAAmB;CACpB;AARF;IAUG,sBAAqB;IACrB,mBAAkB;CAInB;AGpIH;AHqHC;QAaK,sBAAqB;CAExB;CAAA;AGpIH;AHqHA;MAkBI,YAAW;MACX,YAAW;MACX,mBAAkB;MAClB,UAAS;MACT,WAAU;CAEb;CAAA;AG7ID;AH8IA;IAEI,iBAAgC;CAEnC;CAAA;AAMH;EACE,sBAAqB;CAmBtB;AG5KC;AHwJF;MAGI,iBAAgB;MAChB,qBAAoB;CAgBvB;CAAA;AApBA;IAOG,mBAAkB;IAClB,eAAc;IACd,oBAAmB;IAAE,UAAU;IAC/B,kBAAiB;IACjB,UAAS;CAQV;AAnBF;MAaK,mBAAkB;MAClB,OAAM;MACN,QAAO;MACP,YAAW;MACX,aAAY;CACb;AG1KH;AH+KJ;IAGM,kBAAiB;IACjB,kBAAiB;CAClB;AALL;IAOM,kBAAiB;IACjB,yBAAgB;IAAhB,iBAAgB;IAChB,OAAM;CAIP;CAAA;AG5LD;AH+KJ;MAWQ,uCAAsC;CAEzC;CAAA",file:"index.vue?vue&type=style&index=0&lang=scss&",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~@/styles/theme/colors';\n@import '~@/styles/theme/breaks';\n@import '~@/styles/theme/fonts';\n\n@import '~@/styles/extend/text.label';\n\n#VineyardPage {\n  &-overview {\n    $sidebar-width: 42%;\n\n    &Content {\n      flex-basis: 33%;\n      @include Break(max-width Breaks(4)) {\n        &-inner {\n          display: flex;\n          flex-direction: column;\n        }\n      }\n    }\n\n    &Header {\n      margin: 0 0 1rem;\n      @include Break(max-width Breaks(4)) {\n        margin: 0.5em auto;\n        text-align: center;\n        line-height: 1.1;\n      }\n    }\n\n    &Sidebar {\n      float: left;\n      width: $sidebar-width;\n      margin: 0 1.4rem 0 -.4rem;\n      border-right: 1px solid Color(theme);\n\n      > :first-child caption {\n        padding-top: 0.3rem;\n      }\n      > :not(:first-child) caption {\n        border-top: 1px solid;\n        margin-top: 0.7rem;\n        @include Break(max-width Breaks(4)) {\n          border-top: 3px solid;\n        }\n      }\n\n      @include Break(max-width Breaks(4)) {\n        float: none;\n        width: 100%;\n        border-right: none;\n        margin: 0;\n        padding: 0;\n      }\n    }\n    &Sidebar:not(:empty) + &Text {\n      @include Break(min-width Breaks(4)) {\n        margin-left: $sidebar-width + 3%;\n      }\n    }\n\n    &Kick {\n      @extend %text-label;\n    }\n  }\n  &--media {\n    margin-bottom: 1.5rem;\n    @include Break(max-width Breaks(2)) {\n      min-width: 100vw;\n      margin-left: -2.5rem;\n    }\n    .iframeWrap {\n      position: relative;\n      display: block;\n      padding-bottom: 55%; /* 16:9 */\n      padding-top: 25px;\n      height: 0;\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n}\n\n#VineyardPage > .UiPanel:first-child {\n  @include Break(min-width Breaks(4)) {\n    & {\n      min-height: 100vh;\n      max-height: unset;\n    }\n    > .UiBoxImage:first-child {\n      max-height: 100vh;\n      position: sticky;\n      top: 0;\n      @include Break(min-width Breaks(3)) {\n        background-position: center !important;\n      }\n    }\n  }\n}\n","%text-label {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: Color(theme);\n  &:not(:hover) {\n    text-decoration: none;\n  }\n}","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],sourceRoot:""}])},b047c:function(n,e,t){var a=t("1a8c"),i=t("408c"),r=t("b4b0"),o="Expected a function",s=Math.max,c=Math.min;function l(n,e,t){var l,A,d,m,p,u,f=0,B=!1,h=!1,b=!0;if("function"!=typeof n)throw new TypeError(o);function g(e){var t=l,a=A;return l=A=void 0,f=e,m=n.apply(a,t),m}function y(n){return f=n,p=setTimeout(k,e),B?g(n):m}function v(n){var t=n-u,a=n-f,i=e-t;return h?c(i,d-a):i}function x(n){var t=n-u,a=n-f;return void 0===u||t>=e||t<0||h&&a>=d}function k(){var n=i();if(x(n))return w(n);p=setTimeout(k,v(n))}function w(n){return p=void 0,b&&l?g(n):(l=A=void 0,m)}function C(){void 0!==p&&clearTimeout(p),f=0,l=u=A=p=void 0}function $(){return void 0===p?m:w(i())}function E(){var n=i(),t=x(n);if(l=arguments,A=this,u=n,t){if(void 0===p)return y(u);if(h)return p=setTimeout(k,e),g(u)}return void 0===p&&(p=setTimeout(k,e)),m}return e=r(e)||0,a(t)&&(B=!!t.leading,h="maxWait"in t,d=h?s(r(t.maxWait)||0,e):d,b="trailing"in t?!!t.trailing:b),E.cancel=C,E.flush=$,E}n.exports=l},b4b0:function(n,e,t){var a=t("1a8c"),i=t("ffd6"),r=NaN,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,A=parseInt;function d(n){if("number"==typeof n)return n;if(i(n))return r;if(a(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=a(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var t=c.test(n);return t||l.test(n)?A(n.slice(2),t?2:8):s.test(n)?r:+n}n.exports=d},b592:function(n,e,t){"use strict";var a=t("5e78"),i=t.n(a);i.a},db0b:function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,"\n.AdjacentNav a[data-v-d648af8c] {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: #BA9454;\n}\n.AdjacentNav a[data-v-d648af8c]:not(:hover) {\n    text-decoration: none;\n}\n.AdjacentNav_center a.hide[data-v-d648af8c] {\n  opacity: 0;\n  pointer-events: none;\n}\n.AdjacentNav[data-v-d648af8c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 2;\n}\n.AdjacentNav[data-v-d648af8c]:not(:first-child) {\n    margin-top: 1.5rem;\n}\n.AdjacentNav[data-v-d648af8c]:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n@media (max-width: 52rem) {\n.AdjacentNav[data-v-d648af8c] {\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n         -moz-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 2rem;\n}\n}\n.AdjacentNav > * + *[data-v-d648af8c] {\n  margin-left: 1rem;\n}\n.AdjacentNav a[data-v-d648af8c] {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none;\n}\n.AdjacentNav a .UiIcon[data-v-d648af8c] {\n    -webkit-transition: .2s ease-out;\n    -o-transition: .2s ease-out;\n    -moz-transition: .2s ease-out;\n    transition: .2s ease-out;\n}\n.AdjacentNav a:first-child .UiIcon[data-v-d648af8c] {\n    right: 100%;\n    margin-right: .2em;\n}\n.AdjacentNav a:last-child .UiIcon[data-v-d648af8c] {\n    left: 100%;\n    margin-left: .1em;\n}\n.AdjacentNav a.hide[data-v-d648af8c] {\n    display: none;\n}\n.AdjacentNav a.hide + a[data-v-d648af8c] {\n      margin-left: 0;\n}\n.AdjacentNav_center[data-v-d648af8c] {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.AdjacentNav_center a.hide[data-v-d648af8c] {\n    display: inline;\n}\n@media (max-width: 68rem) {\n.AdjacentNav[data-v-d648af8c] {\n    text-align: center;\n}\n}\n","",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/AdjacentNav.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/extend/text.label.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],names:[],mappings:";AAyCA;ECxCE,iBAAgB;EAChB,eAAc;EACd,0BAAyB;EACzB,sBAAqB;EACrB,eCHe;CDOhB;ADgCD;IClCI,sBAAqB;CACtB;AD4BH;EACE,WAAU;EACV,qBAAoB;CACrB;AAED;EAII,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,eAAc;CAKf;AAXH;IAE0B,mBAAmB;CAAE;AAF/C;IAGyB,sBAAsB;CAAE;AGoB7C;AHvBJ;MAQM,yBAAuB;MAAvB,gCAAuB;SAAvB,sBAAuB;UAAvB,sBAAuB;cAAvB,wBAAuB;MACvB,oBAAmB;CAEtB;CAAA;AAXH;EAaI,kBAAiB;CAClB;AAdH;EAkBI,4BAAoB;EAApB,6BAAoB;EAApB,yBAAoB;EAApB,4BAAoB;EAApB,qBAAoB;EACpB,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,sBAAqB;CAsBtB;AA1CH;IAsBM,iCAAwB;IAAxB,4BAAwB;IAAxB,8BAAwB;IAAxB,yBAAwB;CACzB;AAvBL;IA0BQ,YAAW;IACX,mBAAkB;CACnB;AA5BP;IAiCQ,WAAU;IACV,kBAAiB;CAClB;AAnCP;IAuCM,cAAa;CAEd;AAzCL;MAwCY,eAAe;CAAE;AAI3B;EACE,yBAAuB;EAAvB,gCAAuB;KAAvB,sBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;CAKxB;AANA;IAIG,gBAAe;CACd;AG1BH;AHvBJ;IAqDI,mBAAkB;CAErB;CAAA",file:"AdjacentNav.vue?vue&type=style&index=0&id=d648af8c&lang=scss&scoped=true&",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "~@/styles/theme/breaks";\n@import "~@/styles/theme/colors";\n@import "~@/styles/extend/text.label";\n\n%soft-hide {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.AdjacentNav {\n  & {\n    &:not(:first-child) { margin-top: 1.5rem }\n    &:not(:last-child) { margin-bottom: 1.5rem }\n    display: flex;\n    align-items: center;\n    line-height: 2;\n    @include Break( max-width Breaks(3) ) {\n      justify-content: center;\n      margin-bottom: 2rem;\n    }\n  }\n  > * + * {\n    margin-left: 1rem;\n  }\n\n  a {\n    @extend %text-label;\n    display: inline-flex;\n    align-items: center;\n    text-decoration: none;\n    .UiIcon {\n      transition: .2s ease-out;\n    }\n    &:first-child {\n      .UiIcon {\n        right: 100%;\n        margin-right: .2em;\n      }\n      // &:hover .UiIcon { transform: translateX(-.36em) }\n    }\n    &:last-child  {\n      .UiIcon {\n        left: 100%;\n        margin-left: .1em;\n      }\n      // &:hover .UiIcon { transform: translateX(.36em) }\n    }\n    &.hide {\n      display: none;\n      + a { margin-left: 0 }\n    }\n  }\n\n  &_center {\n    justify-content: center;\n    a.hide { \n      @extend %soft-hide;\n      display: inline;\n      }\n  }\n  \n  @include Break( max-width Breaks(4) ){\n    text-align: center;\n  }\n}\n',"%text-label {\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  color: Color(theme);\n  &:not(:hover) {\n    text-decoration: none;\n  }\n}","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],sourceRoot:""}])},ded9:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("small",{staticClass:"AdjacentNav"},[t("router-link",{class:{hide:!n.prev},attrs:{to:n.prev?n.prev.slug+"#top":"#prev"}},[t("UiIcon",{attrs:{name:"arrow-left",width:".75em",height:".75em"}}),n._v("\n    Prior\n  ")],1),t("router-link",{attrs:{to:n.all+"#top"}},[n._v("All")]),t("router-link",{class:{hide:!n.next},attrs:{to:n.next?n.next.slug+"#top":"#next"}},[n._v("\n    Next\n    "),t("UiIcon",{attrs:{name:"arrow-right",width:".75em",height:".75em"}})],1)],1)},i=[],r=(t("cadf"),t("551c"),t("097d"),t("25c8")),o={name:"AdjacentNav",props:{all:{type:String,default:"."},next:{type:[String,Object]},prev:{type:[String,Object]}},components:{UiIcon:r["a"]}},s=o,c=(t("b592"),t("2877")),l=Object(c["a"])(s,a,i,!1,null,"d648af8c",null);l.options.__file="AdjacentNav.vue";e["a"]=l.exports},f9a3:function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,'\n.StatGroup[data-v-4e537326] {\n  font-size: .88em;\n  line-height: 1.4;\n}\n.StatGroup + .StatGroup[data-v-4e537326] {\n    margin-top: 0.4rem;\n    padding-top: 0.6rem;\n    border-top: 1px solid #BA9454;\n}\n.StatGroup--caption[data-v-4e537326] {\n  padding: 0.4rem 0.5rem;\n  font-size: 1rem;\n  font-family: "futura-pt", Futura, Verdana, sans-serif;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #BA9454;\n}\n.StatGroup_column .StatGroup--item[data-v-4e537326] {\n  padding: 0.4rem 0.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap column;\n          flex-flow: nowrap column;\n}\n.StatGroup_row .StatGroup--item[data-v-4e537326] {\n  display: table-row;\n}\n.StatGroup_row .StatGroup--item > *[data-v-4e537326] {\n    display: table-cell;\n    padding: 0.4rem 0.5rem;\n}\n.StatGroup_row .StatGroup--list[data-v-4e537326] {\n    display: table;\n    border-collapse: collapse;\n    border-spacing: 0;\n    max-width: 100%;\n}\n',"",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/StatGroup.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/fonts.scss"],names:[],mappings:";AAsBA;EAMI,iBAAgB;EAChB,iBAAgB;CAMjB;AAbH;IASM,mBANO;IAOP,oBAA4B;IAC5B,8BC/BW;CDgCZ;AAGH;EACE,uBAbe;EAcf,gBAAe;EACf,sDEvC+C;EFwC/C,iBAAgB;EAChB,0BAAyB;EACzB,eCzCa;CD0Cd;AAIC;EACE,uBAxBa;EAyBb,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAwB;EAAxB,8BAAwB;EAAxB,iCAAwB;KAAxB,0BAAwB;KAAxB,2BAAwB;MAAxB,6BAAwB;UAAxB,yBAAwB;CACzB;AACD;EACE,mBAAkB;CAWnB;AAZD;IAGI,oBAAmB;IACnB,uBAhCW;CAiCZ;AACO;IACN,eAAc;IACd,0BAAyB;IACzB,kBAAiB;IACjB,gBAAe;CAChB",file:"StatGroup.vue?vue&type=style&index=0&id=4e537326&lang=scss&scoped=true&",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "~@/styles/theme/colors";\n@import "~@/styles/theme/fonts";\n.StatGroup {\n\n  $B: #{&};\n  $pad: .4rem .5rem;\n\n  & {\n    font-size: .88em;\n    line-height: 1.4;\n    & + & {\n      margin-top: nth($pad,1);\n      padding-top: nth($pad,1)*1.5;\n      border-top: 1px solid Color(theme);\n    }\n  }\n  \n  &--caption {\n    padding: $pad;\n    font-size: 1rem;\n    font-family: $ff-sans;\n    font-weight: 900;\n    text-transform: uppercase;\n    color: Color(theme);\n  }\n  &--item {\n    & {\n    }\n    #{$B}_column & {\n      padding: $pad;\n      display: flex;\n      flex-flow: nowrap column;\n    }\n    #{$B}_row & {\n      display: table-row;\n      > * {\n        display: table-cell;\n        padding: $pad;\n      }\n      @at-root #{$B}_row #{$B}--list {\n        display: table;\n        border-collapse: collapse;\n        border-spacing: 0;\n        max-width: 100%;\n      }\n    }\n    &Label {}\n    &Text {}\n  }\n}\n',"$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}",'\n$ff-sans:  "futura-pt", Futura, Verdana, sans-serif;\n\n$ff-serif: \'"Butler"\', Georgia, serif;\n\n$ff-alt:   nth($ff-serif,2), serif;\n\n$ff-mono:  Source Code Pro, monospace;'],sourceRoot:""}])},ffd6:function(n,e,t){var a=t("3729"),i=t("1310"),r="[object Symbol]";function o(n){return"symbol"==typeof n||i(n)&&a(n)==r}n.exports=o}}]);
//# sourceMappingURL=chunk-53e9.js.map