(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eb5"],{"0fef":function(n,e,t){"use strict";var a=t("63c0"),i=t.n(a);i.a},2442:function(n,e,t){var a=t("2b03"),i=t("badf"),r=t("4b17"),o=Math.max,s=Math.min;function l(n,e,t){var l=null==n?0:n.length;if(!l)return-1;var A=l-1;return void 0!==t&&(A=r(t),A=t<0?o(l+A,0):s(A,l-1)),a(n,i(e,3),A,!0)}n.exports=l},"311c":function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,"\n.WineWidget[data-v-878dde62] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap column;\n          flex-flow: nowrap column;\n  max-width: 15em;\n  margin: 0 auto;\n  border-bottom: 1px solid #BA9454;\n}\n.WineWidget[data-v-878dde62] > :first-child {\n    margin-bottom: 1em !important;\n}\n.WineWidget[data-v-878dde62] > :last-child {\n    margin-top: 1em !important;\n}\n.WineWidget[data-v-878dde62] .UiHeading {\n    margin: auto;\n    text-align: center;\n    font-weight: 500;\n}\n.WineWidget--image[data-v-878dde62] {\n    height: 15em;\n    mix-blend-mode: multiply;\n}\n.WineWidget--detail[data-v-878dde62] {\n    width: 80%;\n    margin: 0 auto !important;\n    table-layout: fixed;\n    text-align: center;\n    color: #BA9454;\n    border-spacing: 0;\n    border-top: 1px solid;\n}\n.WineWidget--detail td[data-v-878dde62] {\n      white-space: nowrap;\n      padding: .5em;\n}\n.WineWidget--detail td + td[data-v-878dde62] {\n        border-left: 1px solid currentColor;\n}\n","",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/modules/Wine/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],names:[],mappings:";AA4FA;EACE,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAwB;EAAxB,8BAAwB;EAAxB,iCAAwB;KAAxB,0BAAwB;KAAxB,2BAAwB;MAAxB,6BAAwB;UAAxB,yBAAwB;EACxB,gBAAe;EACf,eAAc;EACd,iCC/Fe;CD0HhB;AAhCD;IAMkB,8BAA8B;CAAE;AANlD;IAOkB,2BAA8B;CAAE;AAPlD;IAUI,aAAY;IACZ,mBAAkB;IAClB,iBAAgB;CACjB;AACD;IACE,aAAY;IACZ,yBAAwB;CACzB;AACD;IACE,WAAU;IACV,0BAAyB;IACzB,oBAAmB;IACnB,mBAAkB;IAClB,eCjHa;IDkHb,kBAAiB;IACjB,sBAAqB;CAMtB;AAbA;MASG,oBAAmB;MACnB,cAAa;CAEd;AAZF;QAWY,oCAAoC;CAAE",file:"index.vue?vue&type=style&index=0&id=878dde62&lang=scss&scoped=true&",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "~@/styles/theme/fonts";\n@import "~@/styles/theme/colors";\n\n.WineWidget {\n  display: flex;\n  flex-flow: nowrap column;\n  max-width: 15em;\n  margin: 0 auto;\n  border-bottom: 1px solid Color(theme);\n  >:first-child { margin-bottom: 1em !important }\n  >:last-child  { margin-top:    1em !important }\n\n  /deep/ .UiHeading {\n    margin: auto;\n    text-align: center;\n    font-weight: 500;\n  }\n  &--image {\n    height: 15em;\n    mix-blend-mode: multiply;\n  }\n  &--detail {\n    width: 80%;\n    margin: 0 auto !important;\n    table-layout: fixed;\n    text-align: center;\n    color: Color(theme);\n    border-spacing: 0;\n    border-top: 1px solid;\n    td {\n      white-space: nowrap;\n      padding: .5em;\n      & + td { border-left: 1px solid currentColor }\n    }\n  }\n}\n',"$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:    $c-black, // #0E0E0E\n  slate:   lighten($c-black,15%), // #323232,\n  silver:  lighten($c-black,67%), // #B8B8B8\n  cream:   lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: #BFB4A0,\n  light:   mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:   $c-matte, // #F0F0F0\n  theme:   $c-theme, // #BA9454\n  alt:     $c-alt,\n  brand:   $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],sourceRoot:""}])},"631d":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,a=n._self._c||e;return n.context.loading|n.loading?a("img",{attrs:{src:t("404f"),alt:"Loading..."}}):a("div",{attrs:{id:"WineGrid"}},[n.context.error||!n.context.length?a("div",{staticClass:"WineGrid--slot-error"},[n._t("error",null,null,n.context.error)],2):[a("div",{staticClass:"WineGrid"},n._l(n.context,function(e){return e.categories.indexOf(10)>=0?a("router-link",{key:e.id,staticClass:"WineGrid--item",attrs:{to:"/wine/"+e.slug}},[a("WineWidget",{attrs:{name:e.title?e.title.rendered:"",image:n.media(e),vintage:n.getTagVintage(e),price:"Release-Price"in e.acf&&e.acf["Release-Price"],date:e.date}})],1):n._e()})),n.paginate&&!n.context.loading&&n.context.length?a("div",{staticClass:"WineGridPagination",class:{WineGridPagination_sticky:n.sticky}},[a("div",{staticStyle:{"margin-right":"auto"}},[n._t("pagination-first")],2),a("span",{class:{disabled:1==n.page},on:{click:function(e){n.page=n.getPrevPage()}}},[a("UiIcon",{attrs:{name:"ArrowLeft",width:"1rem",height:"1rem"}})],1),n.page>3?a("span",{staticClass:"pageChit",domProps:{textContent:n._s("…")}}):n._e(),n._l([2,1],function(e){return n.page-e>0?a("span",{staticClass:"pageChit",on:{click:function(t){n.page=n.getPrevPage(e)}}},[n._v("\n        "+n._s(n.page-e)+"\n      ")]):n._e()}),a("b",{staticClass:"pageChit",domProps:{textContent:n._s(n.page)}}),n._l([1,2],function(e){return n.page+e<=n.pages.totalPages?a("span",{staticClass:"pageChit",on:{click:function(t){n.page=n.getNextPage(e)}}},[n._v("\n        "+n._s(n.page+e)+"\n      ")]):n._e()}),n.page<n.pages.totalPages-2?a("span",{staticClass:"pageChit",domProps:{textContent:n._s("…")}}):n._e(),a("span",{staticClass:"pageChit",class:{disabled:n.page==n.pages.totalPages},on:{click:function(e){n.page=n.getNextPage()}}},[a("UiIcon",{attrs:{name:"ArrowRight",width:"1rem",height:"1rem"}})],1),a("div",{staticStyle:{"margin-left":"auto"}},[n._t("pagination-last")],2)],2):n._e()]],2)},i=[],r=(t("7f7f"),t("a481"),t("c5f6"),t("d5e8")),o=t("2769"),s=t.n(o),l=t("995c"),A=t.n(l),c=t("4d8c"),d=t.n(c),p=t("4a00"),m=t("25c8"),g=t("f78d"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"WineWidget"},[t("img",{ref:"wineWidgetImg",staticClass:"WineWidget--image",attrs:{src:n.image},on:{error:n.setFallbackImg}}),t("UiHeading",{staticClass:"WineWidget--title",attrs:{level:6}},[t("span",{domProps:{innerHTML:n._s(n.name)}})]),t("table",{staticClass:"WineWidget--detail"},[t("tr",[t("td",{staticStyle:{padding:".15em",color:"#5C5C5C"},attrs:{colspan:"2"}},[t("small",{staticStyle:{"font-size":".75em","letter-spacing":".1em"}},[n._v(n._s(n.current?"CURRENT":"PAST")+" RELEASE")])])]),t("tr",[n.price?t("td",[t("span",{staticStyle:{position:"relative","font-family":"Georgia,serif"}},[n._m(0),n._v(n._s(parseFloat(n.price).toFixed(0))+"\n        ")])]):n._e(),t("td",[n._v(n._s(n.vintage||"N/A"))])])])],1)},f=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("sup",{staticStyle:{position:"absolute",right:"100%"}},[t("small",[n._v("$")])])}],b=(t("78ce"),t("497a")),B=t.n(b),h={name:"WineWidget",props:{name:{type:String,default:"N/A"},image:{type:[String,Object],default:B.a},vintage:{type:[String,Number,Boolean],default:"N/A"},price:{type:[String,Number,Boolean],default:0},date:{type:[String,Date]}},components:{UiHeading:g["a"]},computed:{current:function(){var n=this.parseDate(this.date),e=this.parseDate(Date.now()),t=this.diffDate(n,e);return t<=6}},methods:{setFallbackImg:function(){this.$refs.wineWidgetImg.src=B.a},parseDate:function(n){return new Date("string"==typeof str?Date.parse(n):n)},diffDate:function(n,e){var t;return t=12*(e.getFullYear()-n.getFullYear()),t-=n.getMonth()+1,t+=e.getMonth()-1,t<=0?0:t},currentRelease:function(){if(!this.context.loading){var n=this.parseDate(this.context.date),e=this.parseDate(Date.now()),t=this.diffDate(n,e);return t<=6}}}},x=h,C=(t("bde9"),t("2877")),y=function(n){n.options.__docs='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n```vue\n<WineWidget style="margin:2em auto"/>\n```\n'},k=y,w=Object(C["a"])(x,u,f,!1,null,"878dde62",null);"function"===typeof k&&k(w),w.options.__file="index.vue";var v=w.exports,$={name:"WineGrid",mixins:[r["a"]],components:{UiList:p["a"],UiIcon:m["a"],UiHeading:g["a"],WineWidget:v},inheritAttrs:!0,props:{wpx:{type:Function},paginate:{type:[Boolean,Number,String],default:10},sticky:{type:Boolean,default:!1}},computed:{page:{get:function(){return parseInt(this.$root.filters.page)||1},set:function(n){this.$set(this.$root.filters,"page",parseInt(n)||1)}},pages:function(){if(this.API||!this.context.loading)return this.context._paging},endpoint:function(){if(this.API){var n=this.API.posts().page(this.page||1);n="function"==typeof this.wpx?this.wpx(n):n.category([this.category||"wine"]);var e=this.paginate||12,t=this.paginate%4;return e-=t,n.perPage(e).embed()}}},methods:{getNextPage:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.page,t=this.pages;return parseInt(e||1)<t.totalPages?parseInt(e||1)+n:1},getPrevPage:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.page,t=this.pages;return parseInt(e||1)>1?parseInt(e||1)-n:t.totalPages},media:function(n){if(!this.context.loading&&this.context.length&&"wp:featuredmedia"in n._embedded){var e=n._embedded["wp:featuredmedia"][0].source_url;return e?e.replace(/.*\/wp-content\//gim,"https://www.williamsselyem.com/wp-content/"):B.a}},getTagVintage:function(n){var e=d()(n._embedded["wp:term"]),t=s()(e,{taxonomy:"post_tag"});return!!t&&(parseInt(t.name)||(t=A()(e,{taxonomy:"post_tag"})),t.name)}}},E=$,W=(t("0fef"),Object(C["a"])(E,a,i,!1,null,"5d7b64a9",null));W.options.__file="index.vue";e["a"]=W.exports},"63c0":function(n,e,t){var a=t("6c18");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("9e7d75b4",a,!0,{sourceMap:!0,shadowMode:!1})},"6c18":function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,"\n#WineGrid[data-v-5d7b64a9] {\n  width: 100%;\n}\n.WineGrid[data-v-5d7b64a9] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 2em;\n}\n.WineGrid--item[data-v-5d7b64a9] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap column;\n          flex-flow: nowrap column;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n     -moz-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 100%;\n}\n.WineGrid--item > .WineWidget[data-v-5d7b64a9]:only-child {\n    height: 100%;\n}\n.WineGrid a[data-v-5d7b64a9] {\n  text-decoration: none;\n}\n@media (max-width: 68rem) {\n.WineGrid[data-v-5d7b64a9] .WineWidget--detail {\n    font-size: .8em;\n}\n}\n@media (max-width: 68rem) {\n.WineGrid[data-v-5d7b64a9] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 1rem;\n}\n}\n@media (max-width: 52rem) {\n.WineGrid[data-v-5d7b64a9] {\n    grid-template-columns: 1fr 1fr;\n}\n}\n@media (max-width: 38rem) {\n.WineGrid[data-v-5d7b64a9] .WineWidget--detail td:not(:first-child) {\n    display: none;\n}\n}\n.WineGrid--slot-error .UiHeading[data-v-5d7b64a9] {\n  color: #7D1214;\n}\n.WineGridPagination[data-v-5d7b64a9] {\n  color: #BA9454;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 2rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.WineGridPagination > *[data-v-5d7b64a9] {\n    padding: 0.5rem;\n}\n.WineGridPagination .disabled[data-v-5d7b64a9] {\n    color: #b9b9b9;\n    opacity: 0.5;\n    cursor: default;\n}\n.WineGridPagination_sticky[data-v-5d7b64a9] {\n    z-index: 9;\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: -1px;\n    margin-bottom: -2rem;\n    background: rgba(250, 250, 250, 0.95);\n}\n.pageChit[data-v-5d7b64a9] {\n  width: 2rem;\n  text-align: center;\n}\n","",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/views/Wine/grid/index.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],names:[],mappings:";AAoKA;EACE,YAAW;CACZ;AACD;EAEI,cAAa;EACb,uCAAsC;EACtC,cAAa;CACd;AACD;EACE,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAwB;EAAxB,8BAAwB;EAAxB,iCAAwB;KAAxB,0BAAwB;KAAxB,2BAAwB;MAAxB,6BAAwB;UAAxB,yBAAwB;EACxB,sBAAyB;EAAzB,kCAAyB;KAAzB,mBAAyB;MAAzB,mBAAyB;UAAzB,0BAAyB;EACzB,aAAY;CAEb;AANA;IAK2B,aAAa;CAAE;AAX7C;EAcM,sBAAsB;CAAE;ACrH1B;ADuGJ;IAiBiC,gBAAe;CAAI;CAAA;ACxHhD;ADuGJ;IAoBI,mCAAkC;IAClC,eAAc;CAuCjB;CAAA;ACnKG;ADuGJ;IAwBI,+BAA8B;CAoCjC;CAAA;ACnKG;ADuGJ;IA2BsD,cAAc;CAAE;CAAA;AAIjE;EACc,eEnMF;CFmMsB;AAKrC;EACE,eE3Ma;EF4Mb,qBAAa;EAAb,sBAAa;EAAb,kBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,yBAAuB;EAAvB,gCAAuB;KAAvB,sBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;EACvB,0BAAmB;EAAnB,4BAAmB;KAAnB,uBAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,iBAAgB;EAChB,0BAAiB;KAAjB,uBAAiB;MAAjB,sBAAiB;UAAjB,kBAAiB;CAgBlB;AAtBA;IAQG,gBACF;CAAC;AATF;IAWG,eE9M0B;IF+M1B,aAAY;IACZ,gBAAe;CAChB;AACD;IACE,WAAU;IACV,yBAAgB;IAAhB,iBAAgB;IAChB,aAAY;IACZ,qBAAoB;IACpB,sCEpNgC;CFqNjC;AAGL;EACE,YAAW;EACX,mBAAkB;CACnB",file:"index.vue?vue&type=style&index=0&id=5d7b64a9&lang=scss&scoped=true&",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "~@/styles/theme/breaks";\n@import "~@/styles/theme/colors";\n#WineGrid {\n  width: 100%;\n}\n.WineGrid {\n  & {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 2em;\n  }\n  &--item {\n    display: flex;\n    flex-flow: nowrap column;\n    justify-content: flex-end;\n    height: 100%;\n    >.WineWidget:only-child { height: 100% }\n  }\n  \n  a { text-decoration: none }\n  \n  @include Break( max-width Breaks(4) ){\n    /deep/ .WineWidget--detail { font-size: .8em; }\n  }\n  @include Break( max-width Breaks(4) ){\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 1rem;\n  }\n  @include Break( max-width Breaks(3) ){\n    grid-template-columns: 1fr 1fr;\n  }\n  @include Break( max-width Breaks(2) ){\n    /deep/ .WineWidget--detail td:not(:first-child) { display: none }\n  }\n\n  &--slot {\n    &-error {\n      .UiHeading { color: Color(alt) }\n    }\n    // &-nullset {}\n  }\n\n  &Pagination {\n    color: Color(theme);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2rem;\n    user-select: none;\n    > * {\n      padding: 0.5rem\n    }\n    .disabled {\n      color: Color(silver);\n      opacity: 0.5;\n      cursor: default;\n    }\n    &_sticky {\n      z-index: 9;\n      position: sticky;\n      bottom: -1px;\n      margin-bottom: -2rem;\n      background: rgba(Color(light),.95);\n    }\n  }  \n}\n.pageChit {\n  width: 2rem;\n  text-align: center;\n}\n',"//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:    $c-black, // #0E0E0E\n  slate:   lighten($c-black,15%), // #323232,\n  silver:  lighten($c-black,67%), // #B8B8B8\n  cream:   lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: #BFB4A0,\n  light:   mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:   $c-matte, // #F0F0F0\n  theme:   $c-theme, // #BA9454\n  alt:     $c-alt,\n  brand:   $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],sourceRoot:""}])},"995c":function(n,e,t){var a=t("5ca0"),i=t("2442"),r=a(i);n.exports=r},b819:function(n,e,t){var a=t("311c");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("60a900cd",a,!0,{sourceMap:!0,shadowMode:!1})},bde9:function(n,e,t){"use strict";var a=t("b819"),i=t.n(a);i.a}}]);
//# sourceMappingURL=chunk-6eb5.js.map