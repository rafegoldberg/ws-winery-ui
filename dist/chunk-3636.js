(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3636"],{"00fd":function(n,e,t){var a=t("9e69"),o=Object.prototype,r=o.hasOwnProperty,i=o.toString,s=a?a.toStringTag:void 0;function c(n){var e=r.call(n,s),t=n[s];try{n[s]=void 0;var a=!0}catch(n){}var o=i.call(n);return a&&(e?n[s]=t:delete n[s]),o}n.exports=c},"0b07":function(n,e,t){var a=t("34ac"),o=t("3698");function r(n,e){var t=o(n,e);return a(t)?t:void 0}n.exports=r},"1368e":function(n,e,t){var a=t("da03"),o=function(){var n=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function r(n){return!!o&&o in n}n.exports=r},"147c":function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,'\n.UiButton {\n  -webkit-transition: .2s ease-in-out;\n  -o-transition: .2s ease-in-out;\n  -moz-transition: .2s ease-in-out;\n  transition: .2s ease-in-out;\n  opacity: .9;\n  outline: 1px dotted transparent;\n}\n.UiButton {\n    display: inline-block;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    cursor: pointer;\n    padding: .5em 1.2em;\n    font-size: .8em;\n    font-family: "futura-pt", Futura, Verdana, sans-serif;\n    font-weight: 500;\n    border: 1px solid rgba(14, 14, 14, 0.15);\n    letter-spacing: .1em;\n    text-transform: uppercase;\n    line-height: 2em;\n}\n.UiButton, .UiButton > a:only-child {\n      text-decoration: none;\n}\n.UiButton:not([class*="UiTheme_"]):not(.UiButton_outline) {\n    color: #f0f0f0;\n    background: #BA9454;\n}\n.UiButton:hover, .UiButton:focus, .UiButton:active {\n    opacity: 1;\n}\n.UiButton:focus {\n    outline: 1px dotted currentColor;\n    outline-offset: -.25em;\n}\n.UiButton_outline {\n    color: #f0f0f0;\n    background-color: transparent !important;\n    border: 1px solid currentColor !important;\n    -webkit-box-shadow: inset 0 0 0 1px currentColor !important;\n       -moz-box-shadow: inset 0 0 0 1px currentColor !important;\n            box-shadow: inset 0 0 0 1px currentColor !important;\n}\n.UiButton_outline:not(:hover) {\n      opacity: .8;\n}\n.UiButton_gold, .UiButton.gold {\n    color: #BA9454;\n}\n.UiButton_flex {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap row;\n          flex-flow: nowrap row;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n',"",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Button/style.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/fonts.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Button/index.vue"],names:[],mappings:";AAEA;EAqBE,oCAA2B;EAA3B,+BAA2B;EAA3B,iCAA2B;EAA3B,4BAA2B;EAC3B,YAAW;EAGX,gCAA+B;CAgBhC;AAzCD;IAEI,sBAAqB;IACrB,yBAAgB;OAAhB,sBAAgB;YAAhB,iBAAgB;IAChB,gBAAe;IACf,oBAAmB;IACnB,gBAAe;IACf,sDCR+C;IDS/C,iBAAgB;IAChB,yCEXa;IFYb,qBAAoB;IACpB,0BAAyB;IACzB,iBAAgB;CAIjB;AAhBH;MAcM,sBAAqB;CACtB;AAfL;IAkBI,eEnB4B;IFoB5B,oBEnBa;CFoBd;AApBH;IAuB+B,WAAW;CAAE;AAvB5C;IA2BI,iCAAgC;IAChC,uBAAsB;CACvB;AAED;IACE,eEjC4B;IFkC5B,yCAAwC;IACxC,0CAAyC;IACzC,4DAAmD;OAAnD,yDAAmD;YAAnD,oDAAmD;CAEpD;AANA;MAKiB,YAAY;CAAE;AAEhC;IACE,eEvCa;CFwCd;AGID;EACE,4BAAoB;EAApB,6BAAoB;EAApB,yBAAoB;EAApB,4BAAoB;EAApB,qBAAoB;EACpB,+BAAqB;EAArB,8BAAqB;EAArB,8BAAqB;KAArB,4BAAqB;KAArB,2BAAqB;MAArB,0BAAqB;UAArB,sBAAqB;EACrB,sCAA6B;MAA7B,0BAA6B;UAA7B,8BAA6B;EAC7B,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;CACpB",file:"index.vue?vue&type=style&index=0&lang=scss&",sourcesContent:['@import "~@/styles/theme/fonts";\n@import "~@/styles/theme/colors";\n.UiButton {\n  & {\n    display: inline-block;\n    appearance: none;\n    cursor: pointer;\n    padding: .5em 1.2em;\n    font-size: .8em;\n    font-family: $ff-sans;\n    font-weight: 500;\n    border: 1px solid rgba(Color(dark),.15);\n    letter-spacing: .1em;\n    text-transform: uppercase;\n    line-height: 2em;\n    &, >a:only-child {\n      text-decoration: none;\n    }\n  }\n  &:not([class*="UiTheme_"]):not(#{&}_outline){\n    color: Color(matte);\n    background: Color(theme);\n  }\n  transition: .2s ease-in-out;\n  opacity: .9;\n  &:hover, &:focus, &:active { opacity: 1 }\n  \n  outline: 1px dotted transparent;\n  &:focus {\n    outline: 1px dotted currentColor;\n    outline-offset: -.25em;\n  }\n\n  &_outline {\n    color: Color(matte);\n    background-color: transparent !important;\n    border: 1px solid currentColor !important;\n    box-shadow: inset 0 0 0 1px currentColor !important;\n    &:not(:hover) { opacity: .8 }\n  }\n  &_gold, &.gold {\n    color: Color(theme);\n  }\n}',"\n$ff-sans:  \"futura-pt\", Futura, Verdana, sans-serif;\n\n$ff-serif: 'Butler', Georgia, serif;\n\n$ff-alt:   nth($ff-serif,2), serif;\n\n$ff-mono:  Source Code Pro, monospace;","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}",'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "./style.scss";\n.UiButton {\n  &_flex {\n    display: inline-flex;\n    flex-flow: nowrap row;\n    justify-content: space-around;\n    align-items: center;\n  }\n}\n'],sourceRoot:""}])},"1a8c":function(n,e){function t(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)}n.exports=t},2621:function(n,e){e.f=Object.getOwnPropertySymbols},"29f3":function(n,e){var t=Object.prototype,a=t.toString;function o(n){return a.call(n)}n.exports=o},"2b3e":function(n,e,t){var a=t("585a"),o="object"==typeof self&&self&&self.Object===Object&&self,r=a||o||Function("return this")();n.exports=r},"341a":function(n,e,t){"use strict";var a=t("7674"),o=t.n(a);o.a},"34ac":function(n,e,t){var a=t("9520"),o=t("1368e"),r=t("1a8c"),i=t("dc57"),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,l=Function.prototype,u=Object.prototype,p=l.toString,f=u.hasOwnProperty,A=RegExp("^"+p.call(f).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(n){if(!r(n)||o(n))return!1;var e=a(n)?A:c;return e.test(i(n))}n.exports=d},3698:function(n,e){function t(n,e){return null==n?void 0:n[e]}n.exports=t},3729:function(n,e,t){var a=t("9e69"),o=t("00fd"),r=t("29f3"),i="[object Null]",s="[object Undefined]",c=a?a.toStringTag:void 0;function l(n){return null==n?void 0===n?s:i:c&&c in Object(n)?o(n):r(n)}n.exports=l},"456d":function(n,e,t){var a=t("4bf8"),o=t("0d58");t("5eda")("keys",function(){return function(n){return o(a(n))}})},"47d9":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a",{staticClass:"ReadMore",class:n.classes.join(" "),attrs:{href:n.href}},[n.textFirst?[n._t("icon",[t("UiIcon",{attrs:{name:n.icon||"ArrowUp",height:"1em",width:"1em"}}),t("br")])]:n._e(),n._t("default",[t("span",{domProps:{innerHTML:n._s(n.text)}})]),n.textFirst?n._e():[n._t("icon-last",[t("br"),t("UiIcon",{attrs:{name:n.icon||"ArrowDown",height:"1em",width:"1em"}})])]],2)},o=[],r=t("25c8"),i={name:"ReadMore",props:{href:{type:String,required:!0},text:{type:String,default:"Read More"},icon:{type:[String,Boolean]},textFirst:{type:Boolean,default:!1},classes:{type:Array,default:function(){return[]}}},components:{UiIcon:r["a"]}},s=i,c=(t("341a"),t("2877")),l=Object(c["a"])(s,a,o,!1,null,"aa1290ea",null);l.options.__file="ReadMore.vue";e["a"]=l.exports},"4af9":function(n,e,t){"use strict";var a=t("cac2"),o=t.n(a);o.a},"504c":function(n,e,t){var a=t("0d58"),o=t("6821"),r=t("52a7").f;n.exports=function(n){return function(e){var t,i=o(e),s=a(i),c=s.length,l=0,u=[];while(c>l)r.call(i,t=s[l++])&&u.push(n?[t,i[t]]:i[t]);return u}}},"585a":function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t("c8ba"))},"5eda":function(n,e,t){var a=t("5ca1"),o=t("8378"),r=t("79e5");n.exports=function(n,e){var t=(o.Object||{})[n]||Object[n],i={};i[n]=e(t),a(a.S+a.F*r(function(){t(1)}),"Object",i)}},7333:function(n,e,t){"use strict";var a=t("0d58"),o=t("2621"),r=t("52a7"),i=t("4bf8"),s=t("626a"),c=Object.assign;n.exports=!c||t("79e5")(function(){var n={},e={},t=Symbol(),a="abcdefghijklmnopqrst";return n[t]=7,a.split("").forEach(function(n){e[n]=n}),7!=c({},n)[t]||Object.keys(c({},e)).join("")!=a})?function(n,e){var t=i(n),c=arguments.length,l=1,u=o.f,p=r.f;while(c>l){var f,A=s(arguments[l++]),d=u?a(A).concat(u(A)):a(A),m=d.length,B=0;while(m>B)p.call(A,f=d[B++])&&(t[f]=A[f])}return t}:c},7674:function(n,e,t){var a=t("da64");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t("499e").default;o("3f52f08f",a,!0,{sourceMap:!0,shadowMode:!1})},8615:function(n,e,t){var a=t("5ca1"),o=t("504c")(!1);a(a.S,"Object",{values:function(n){return o(n)}})},9520:function(n,e,t){var a=t("3729"),o=t("1a8c"),r="[object AsyncFunction]",i="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";function l(n){if(!o(n))return!1;var e=a(n);return e==i||e==s||e==r||e==c}n.exports=l},9638:function(n,e){function t(n,e){return n===e||n!==n&&e!==e}n.exports=t},"9e69":function(n,e,t){var a=t("2b3e"),o=a.Symbol;n.exports=o},ac6a:function(n,e,t){for(var a=t("cadf"),o=t("0d58"),r=t("2aba"),i=t("7726"),s=t("32e9"),c=t("84f2"),l=t("2b4c"),u=l("iterator"),p=l("toStringTag"),f=c.Array,A={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(A),m=0;m<d.length;m++){var B,b=d[m],y=A[b],h=i[b],g=h&&h.prototype;if(g&&(g[u]||s(g,u,f),g[p]||s(g,p,b),c[b]=f,y))for(B in a)g[B]||r(g,B,a[B],!0)}},c7cd:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t(n.url?n.isRelative(n.url)?"router-link":"a":n.tag,{tag:"component",staticClass:"UiButton",class:n.classes,attrs:{target:!n.isRelative(n.url)&&"_blank",href:n.url,to:n.url}},[n._t("default",[n._v(n._s(n.cta))])],2)},o=[],r=(t("6762"),t("2fdb"),t("386d"),t("57e7"),{name:"UiButton",props:{url:{type:String,default:""},tag:{type:String,default:"button"},cta:{type:String,required:!1},classes:{type:[String,Array,Object],default:""}},methods:{isRelative:function(n){var e=[0==n.indexOf("mailto:"),0==n.search(/https?:\/\//),0==n.indexOf("//"),0==n.indexOf("www.")];return!e.includes(!0)}}}),i=r,s=(t("4af9"),t("2877")),c=function(n){n.options.__docs='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#### Using Props\n\nQuickly pass a custom call-to-action:\n\n```vue\n<UiButton :cta="\'First Do This\'"/>\n```\n\n#### Using Slots\n\nFor more involved scenarios, you can pass custom markup directly to the `<UiButton/>`\'s default slot:\n\n```vue\n<UiButton>\n  Now Do <a href="#action"><b>That</b></a>\n</UiButton>\n```\n'},l=c,u=Object(s["a"])(i,a,o,!1,null,null,null);"function"===typeof l&&l(u),u.options.__file="index.vue";e["a"]=u.exports},cac2:function(n,e,t){var a=t("147c");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t("499e").default;o("d2c12864",a,!0,{sourceMap:!0,shadowMode:!1})},da03:function(n,e,t){var a=t("2b3e"),o=a["__core-js_shared__"];n.exports=o},da64:function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,'\n.ReadMore[data-v-aa1290ea], .ReadMore_caps[data-v-aa1290ea], .ReadMore.caps[data-v-aa1290ea], .ReadMore_gold[data-v-aa1290ea], .ReadMore.gold[data-v-aa1290ea] {\n  display: block;\n  width: 100%;\n  line-height: 1.2;\n}\n.ReadMore[data-v-aa1290ea], .ReadMore_caps[data-v-aa1290ea], .ReadMore.caps[data-v-aa1290ea], .ReadMore_gold[data-v-aa1290ea], .ReadMore.gold[data-v-aa1290ea], .ReadMore[data-v-aa1290ea] > :only-child, .ReadMore_caps[data-v-aa1290ea] > :only-child, .ReadMore_gold[data-v-aa1290ea] > :only-child {\n    text-decoration: none;\n}\n@media (max-width: 52rem) {\n.ReadMore[data-v-aa1290ea], .ReadMore_caps[data-v-aa1290ea], .ReadMore.caps[data-v-aa1290ea], .ReadMore_gold[data-v-aa1290ea], .ReadMore.gold[data-v-aa1290ea] {\n      text-align: center;\n}\n}\n.ReadMore_serif[data-v-aa1290ea], .ReadMore.serif[data-v-aa1290ea], .serif.ReadMore_caps[data-v-aa1290ea], .serif.ReadMore_gold[data-v-aa1290ea] {\n    font-family: "Butler", Georgia, serif;\n    font-weight: 500;\n    font-style: italic;\n}\n.ReadMore_caps[data-v-aa1290ea], .caps.ReadMore_caps[data-v-aa1290ea], .caps.ReadMore[data-v-aa1290ea], .caps.ReadMore_gold[data-v-aa1290ea] {\n    text-transform: uppercase;\n}\n.ReadMore_gold[data-v-aa1290ea], .gold.ReadMore_caps[data-v-aa1290ea], .gold.ReadMore_gold[data-v-aa1290ea], .gold.ReadMore[data-v-aa1290ea] {\n    color: #BA9454;\n}\n.ReadMore_center[data-v-aa1290ea] {\n    text-align: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n       -moz-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n',"",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/ReadMore.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/fonts.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],names:[],mappings:";AA2DA;EACE,eAAc;EACd,YAAW;EACX,iBAAgB;CA0BjB;AA7BD;IAKI,sBAAqB;CACtB;ACDC;ADLJ;MASI,mBAAkB;CAoBrB;CAAA;AAjBC;IACE,sCErE+B;IFsE/B,iBAAgB;IAChB,mBAAkB;CACnB;AACD;IAEE,0BAAyB;CAC1B;AACD;IAEE,eGhFa;CHiFd;AACD;IACE,mBAAkB;IAClB,yBAAuB;IAAvB,gCAAuB;OAAvB,sBAAuB;QAAvB,sBAAuB;YAAvB,wBAAuB;CACxB",file:"ReadMore.vue?vue&type=style&index=0&id=aa1290ea&lang=scss&scoped=true&",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "~@/styles/theme/breaks";\n@import "~@/styles/theme/colors";\n@import "~@/styles/theme/fonts";\n@import "~@/styles/extend/text.label";\n\n.ReadMore {\n  display: block;\n  width: 100%;\n  line-height: 1.2;\n  &, >:only-child {\n    text-decoration: none;\n  }\n  \n  @include Break( max-width Breaks(3) ){\n    text-align: center;\n  }\n\n  &_serif, &.serif {\n    font-family: $ff-serif;\n    font-weight: 500;\n    font-style: italic;\n  }\n  &_caps, &.caps {\n    @extend .ReadMore;\n    text-transform: uppercase;\n  }\n  &_gold, &.gold {\n    @extend .ReadMore;\n    color: Color(theme);\n  }\n  &_center {\n    text-align: center;\n    justify-content: center;\n  }\n}\n',"//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n","\n$ff-sans:  \"futura-pt\", Futura, Verdana, sans-serif;\n\n$ff-serif: 'Butler', Georgia, serif;\n\n$ff-alt:   nth($ff-serif,2), serif;\n\n$ff-mono:  Source Code Pro, monospace;","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],sourceRoot:""}])},dc57:function(n,e){var t=Function.prototype,a=t.toString;function o(n){if(null!=n){try{return a.call(n)}catch(n){}try{return n+""}catch(n){}}return""}n.exports=o},f751:function(n,e,t){var a=t("5ca1");a(a.S+a.F,"Object",{assign:t("7333")})}}]);
//# sourceMappingURL=chunk-3636.js.map