(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5a"],{"0f54":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"iconList"},n._l(n.items,function(e,a){return t("div",{key:a,staticClass:"iconList--item"},[t("UiIcon",{attrs:{name:e.icon||a,width:"3rem",height:"3rem"}}),t("div",{staticClass:"iconList--item--text"},[t("span",{staticClass:"iconList--item--label",domProps:{innerHTML:n._s(e.title)}}),t("div",{domProps:{innerHTML:n._s(e.text)}})]),t("router-link",{staticClass:"UiButton",attrs:{to:e.URL},domProps:{textContent:n._s(e.CTA)}})],1)}))},i=[],o=(t("f751"),t("ac6a"),t("456d"),t("25c8")),r=t("c7cd"),s={name:"StaticIconList",created:function(){Object.keys(this.list).length&&(this.items=Object.assign({},this.items,this.list))},props:{list:{type:Object,default:function(){return{glasses:{title:"Visit The Winery",text:"Arrange a private tour and tasting tailored specifically for you.",CTA:"Visit Us",URL:"/visit"}}}}},data:function(){return{items:{bottles:{title:"All Our Wines",text:"Visit our wine library to find a specific bottle or peruse our full collection.",CTA:"Wine Library",URL:"/wine#all"},barrels:{title:"How To Purchase",text:"Our wines are available twice a year for purchase.",CTA:"How to Buy",URL:"/purchase"}}}},components:{UiIcon:o["a"],UiButton:r["a"]}},m=s,A=(t("b26c"),t("2877")),l=Object(A["a"])(m,a,i,!1,null,"b1424966",null);l.options.__file="icon-list.vue";e["a"]=l.exports},"2ada":function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,'\n.iconListBox[data-v-b1424966] {\n  padding: 2rem 1.5rem !important;\n}\n@media (max-width: 800px) {\n.iconListBox[data-v-b1424966] {\n      padding: 2rem 1.5rem;\n}\n}\n.UiBox_push-left[data-v-b1424966] {\n  margin-left: auto;\n  margin-right: 0;\n}\n.UiBox_push-right[data-v-b1424966] {\n  margin-right: auto;\n  margin-left: 0;\n}\n.UiBox_push-up[data-v-b1424966] {\n  margin-top: auto;\n  margin-bottom: 0;\n}\n.UiBox_push-down[data-v-b1424966] {\n  margin-bottom: auto;\n  margin-top: 0;\n}\n.UiBox_doubled.UiBoxImage[data-v-b1424966] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap row;\n          flex-flow: nowrap row;\n}\n.UiBox_doubled.UiBoxImage [style=\'background-image: url("")\'][data-v-b1424966] {\n    background-color: transparent !important;\n}\n.UiBox_doubled > .UiBox[class*="UiTheme_"][data-v-b1424966] {\n  -webkit-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n     -moz-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n}\n.UiBox_doubled.UiBoxImage > .UiBox[class*="UiTheme_"][data-v-b1424966] {\n  -webkit-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n     -moz-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n}\n.iconList[data-v-b1424966] {\n  min-width: 66%;\n  margin: 0 auto;\n}\n.iconList--item[data-v-b1424966] {\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.iconList--item + .iconList--item[data-v-b1424966] {\n      margin-top: 1.9rem;\n      padding-top: 1.9rem;\n      border-top: 1px solid rgba(186, 148, 84, 0.5);\n}\n.iconList--item > *[data-v-b1424966] {\n      margin: .5rem 2rem;\n}\n.iconList--item > *[data-v-b1424966]:last-child {\n        margin: .5rem 0 .5rem auto;\n}\n.iconList--item--label[data-v-b1424966] {\n      text-transform: uppercase;\n      font-weight: 900;\n      color: #BA9454;\n      letter-spacing: .05em;\n}\n.iconList .UiButton[data-v-b1424966] {\n    white-space: nowrap;\n    text-align: center;\n}\n@media (min-width: 38rem) {\n.iconList .UiButton[data-v-b1424966] {\n        min-width: 145px;\n}\n}\n.iconList[data-v-b1424966] .UiIcon {\n    margin: 0;\n    width: 3rem;\n    height: 3rem;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.iconList[data-v-b1424966] .UiIcon .icon {\n      fill: #BA9454 !important;\n}\n@media (min-width: 52rem) {\n.iconList--item--label[data-v-b1424966] {\n    display: block;\n    font-size: 1.15em;\n    margin-bottom: -0.3em;\n}\n}\n@media (max-width: 38rem) {\n.iconList--item[data-v-b1424966] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: wrap row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n        -ms-flex-flow: wrap row;\n            flex-flow: wrap row;\n}\n.iconList--item > svg[data-v-b1424966] {\n      -webkit-align-self: flex-start !important;\n          -ms-flex-item-align: start !important;\n              align-self: flex-start !important;\n      -webkit-box-flex: 1;\n      -webkit-flex: 1 0 2.6rem;\n         -moz-box-flex: 1;\n          -ms-flex: 1 0 2.6rem;\n              flex: 1 0 2.6rem;\n      width: 2.6rem !important;\n      height: 2.6rem !important;\n}\n.iconList--item--label[data-v-b1424966] {\n      display: block;\n      margin: .5rem 0;\n}\n.iconList--item--text[data-v-b1424966] {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1 -webkit-calc(100% - 2.6rem);\n         -moz-box-flex: 1;\n          -ms-flex: 1 calc(100% - 2.6rem);\n              flex: 1 calc(100% - 2.6rem);\n      margin: 0;\n      line-height: 1.75;\n      padding: 0 0 0 1rem;\n}\n.iconList--item .UiButton[data-v-b1424966] {\n      margin: 1rem auto .3rem 3.5rem !important;\n      font-size: .75rem !important;\n}\n}\n',"",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/static/icon-list.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Box/style.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss"],names:[],mappings:";AAwIG;ECpGD,gCAA+B;CAMhC;AAJC;ADkGC;MCjGC,qBAAoB;CAGvB;CAAA;AAGC;EACE,kBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,eAAgB;CACjB;AACD;EACE,iBAAmB;EACnB,iBAAgB;CACjB;AACD;EACE,oBAAmB;EACnB,cAAgB;CACjB;AAKA;EAEG,+BAAqB;EAArB,8BAAqB;EAArB,8BAAqB;KAArB,4BAAqB;KAArB,2BAAqB;MAArB,0BAAqB;UAArB,sBAAqB;CAItB;AANF;IAIK,yCAAwC;CACzC;AALJ;EAQG,2DAA4C;KAA5C,wDAA4C;UAA5C,mDAA4C;CAC7C;AATF;EAWG,iDAAoC;KAApC,8CAAoC;UAApC,yCAAoC;CACrC;ADqBL;EACE,eAAc;EACd,eAAc;CAqCf;AApCC;IACE,eAAc;IACd,qBAAa;IAAb,sBAAa;IAAb,kBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,0BAAmB;IAAnB,4BAAmB;OAAnB,uBAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;CAgBpB;AAnBA;MAKG,mBAAkB;MAClB,oBAAmB;MACnB,8CE1GW;CF2GZ;AARF;MAUG,mBAAkB;CAEnB;AAZF;QAWkB,2BAA2B;CAAE;AAE9C;MACE,0BAAyB;MACzB,iBAAgB;MAChB,eEnHW;MFoHX,sBAAqB;CACtB;AArBL;IAwBI,oBAAmB;IACnB,mBAAkB;CAInB;AG/DC;AHkCJ;QA2BM,iBAAgB;CAEnB;CAAA;AA7BH;IA+BI,UAAS;IACT,YAAW;IACX,aAAY;IACZ,uBAAmB;OAAnB,oBAAmB;CAGpB;AArCH;MAmCY,yBAA6B;CAAG;AGrExC;AHkDA;IA4BE,eAAc;IACd,kBAAiB;IACjB,sBAAqB;CACtB;CAAA;AGjFD;AHqCF;IAgDI,+BAAmB;IAAnB,8BAAmB;IAAnB,4BAAmB;OAAnB,4BAAmB;OAAnB,2BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;CAqBpB;AAtBA;MAGG,0CAAiC;UAAjC,sCAAiC;cAAjC,kCAAiC;MACjC,oBAAgB;MAAhB,yBAAgB;SAAhB,iBAAgB;UAAhB,qBAAgB;cAAhB,iBAAgB;MAChB,yBAAwB;MACxB,0BAAyB;CAC1B;AAzCH;MA2CI,eAAc;MACd,gBAAe;CAChB;AACD;MACE,oBAA2B;MAA3B,4CAA2B;SAA3B,iBAA2B;UAA3B,gCAA2B;cAA3B,4BAA2B;MAC3B,UAAS;MACT,kBAAiB;MACjB,oBAAmB;CACpB;AAjBF;MAmBG,0CAAyC;MACzC,6BAA4B;CAC7B;CAAA",file:"icon-list.vue?vue&type=style&index=0&id=b1424966&lang=scss&scoped=true&",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "~@/styles/theme/breaks";\n@import "~@/styles/theme/colors";\n\n@import "~@/components/UI/Box/style";\n\n.iconList {\n  min-width: 66%;\n  margin: 0 auto;\n  &--item {\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    & + & {\n      margin-top: 1.9rem;\n      padding-top: 1.9rem;\n      border-top: 1px solid rgba(Color(theme),.5);\n    }\n    > * {\n      margin: .5rem 2rem;\n      &:last-child { margin: .5rem 0 .5rem auto }\n    }\n    &--label {\n      text-transform: uppercase;\n      font-weight: 900;\n      color: Color(theme);\n      letter-spacing: .05em;\n    }\n  }\n  .UiButton {\n    white-space: nowrap;\n    text-align: center;\n    @include Break( min-width Breaks(2) ){\n      min-width: 145px;\n    }\n  }\n  /deep/ .UiIcon {\n    margin: 0;\n    width: 3rem;\n    height: 3rem;\n    object-fit: contain;\n    .icon { fill: Color(theme) !important }\n    // /deep/ &, /deep/ &.icon { fill: currentColor !important }\n  }\n  &Box { @extend %UiBox_compact; }\n}\n\n.iconList {\n  @include Break( min-width Breaks(3) ){\n    &--item--label {\n      display: block;\n      font-size: 1.15em;\n      margin-bottom: -0.3em;\n    }\n  }\n  @include Break( max-width Breaks(2) ){\n    &--item {\n      flex-flow: wrap row;\n      >svg {\n        align-self: flex-start !important;\n        flex: 1 0 2.6rem;\n        width: 2.6rem !important;\n        height: 2.6rem !important;\n      }\n      &--label {\n        display: block;\n        margin: .5rem 0;\n      }\n      &--text {\n        flex: 1 calc(100% - 2.6rem);\n        margin: 0;\n        line-height: 1.75;\n        padding: 0 0 0 1rem;\n      }\n      .UiButton {\n        margin: 1rem auto .3rem 3.5rem !important;\n        font-size: .75rem !important;\n      }\n    }\n  }\n}\n','@import "~@/styles/theme/colors";\n@import "~@/styles/theme/breaks";\n\n%UiBox {\n  & {\n    position: relative;\n\n    align-self: stretch;\n    padding: 5rem 4rem;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  &_center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n  &.wrap {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @include Break( max-width Breaks(-1)){\n    padding: 7rem 4rem;\n  }\n  @include Break( max-width Breaks(2)){\n    padding: 5rem 2.5rem;\n  }\n}\n\n%UiBox_minh {\n  min-height: 42vh;\n}\n\n%UiBox_compact {\n\n  padding: 2rem 1.5rem !important;\n  \n  @media ( max-width:800px ) {\n    padding: 2rem 1.5rem;\n  }\n  \n}\n\n.UiBox { // margin pushers\n  &_push-left {\n    margin-left:   auto;\n    margin-right:  0;\n  }\n  &_push-right {\n    margin-right:  auto;\n    margin-left:   0;\n  }\n  &_push-up {\n    margin-top:    auto;\n    margin-bottom: 0;\n  }\n  &_push-down {\n    margin-bottom: auto;\n    margin-top:    0;\n  }\n}\n\n.UiBox { // doubled\n  $B: #{&};\n  &_doubled {\n    &.UiBoxImage {//:not(.UiBox_stack) { /*<- why did I add that suffix?*/\n      flex-flow: nowrap row;\n      [style=\'background-image: url("")\'] {\n        background-color: transparent !important;\n      }\n    }\n    & > #{$B}[class*="UiTheme_"] {\n      box-shadow: 0 .3em 4em -.6em rgba(0,0,0,.15);\n    }\n    &.UiBoxImage > #{$B}[class*="UiTheme_"] {\n      box-shadow: 0 0 8em 0 rgba(0,0,0,.5);\n    }\n  }\n}\n',"$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n"],sourceRoot:""}])},6708:function(n,e,t){e=n.exports=t("2350")(!0),e.push([n.i,'\n.UiBox_push-left[data-v-7b01de40] {\n  margin-left: auto;\n  margin-right: 0;\n}\n.UiBox_push-right[data-v-7b01de40] {\n  margin-right: auto;\n  margin-left: 0;\n}\n.UiBox_push-up[data-v-7b01de40] {\n  margin-top: auto;\n  margin-bottom: 0;\n}\n.UiBox_push-down[data-v-7b01de40] {\n  margin-bottom: auto;\n  margin-top: 0;\n}\n.UiBox_doubled.UiBoxImage[data-v-7b01de40] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: nowrap row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n      -ms-flex-flow: nowrap row;\n          flex-flow: nowrap row;\n}\n.UiBox_doubled.UiBoxImage [style=\'background-image: url("")\'][data-v-7b01de40] {\n    background-color: transparent !important;\n}\n.UiBox_doubled > .UiBox[class*="UiTheme_"][data-v-7b01de40] {\n  -webkit-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n     -moz-box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0.3em 4em -0.6em rgba(0, 0, 0, 0.15);\n}\n.UiBox_doubled.UiBoxImage > .UiBox[class*="UiTheme_"][data-v-7b01de40] {\n  -webkit-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n     -moz-box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 8em 0 rgba(0, 0, 0, 0.5);\n}\n.UiBoxImage[data-v-7b01de40] {\n  min-height: 45vmin;\n}\n.UiBoxImage[data-v-7b01de40] {\n    position: relative;\n    z-index: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: nowrap column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n        -ms-flex-flow: nowrap column;\n            flex-flow: nowrap column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #FFF;\n    background-repeat: no-repeat;\n    background-position: center;\n    -moz-background-size: cover;\n         background-size: cover;\n}\n.UiBoxImage[data-v-7b01de40]:not(:empty):before {\n    content: " ";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: .6;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(8%, rgba(0, 0, 0, 0.15)), color-stop(68%, rgba(0, 0, 0, 0.63)), color-stop(88%, rgba(0, 0, 0, 0.75)));\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    background-image: -moz- oldlinear-gradient(top, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 8%, rgba(0, 0, 0, 0.63) 68%, rgba(0, 0, 0, 0.75) 88%);\n    pointer-events: none;\n}\n@media (min-width: 52rem) {\n.UiBoxImage_sticky[data-v-7b01de40] {\n      min-height: 100vh;\n      max-height: 100vh;\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n}\n}\n.UiBoxImage_fixed[data-v-7b01de40] {\n    background-attachment: fixed;\n    -moz-background-size: cover;\n         background-size: cover;\n}\n.UiBoxImage_vignetteVertical[data-v-7b01de40], .UiBoxImage_vignette-v[data-v-7b01de40] {\n    -webkit-box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.2), inset 0 -1px 0 0 rgba(250, 250, 250, 0.2), inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.2), inset 0 -1px 0 0 rgba(250, 250, 250, 0.2), inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.2), inset 0 -1px 0 0 rgba(250, 250, 250, 0.2), inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5);\n}\n.UiBoxImage_vignetteHorizontal[data-v-7b01de40], .UiBoxImage_vignette-z[data-v-7b01de40] {\n    -webkit-box-shadow: inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n}\n.UiBoxImage_vignette[data-v-7b01de40] {\n    -webkit-box-shadow: inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 0 1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 0 -1em 2em -0.25em rgba(14, 14, 14, 0.5), inset 1em 0 2em -0.25em rgba(14, 14, 14, 0.5), inset -1em 0 2em -0.25em rgba(14, 14, 14, 0.5);\n    -webkit-box-shadow: inset 0 0 2em 0.75em rgba(14, 14, 14, 0.5);\n       -moz-box-shadow: inset 0 0 2em 0.75em rgba(14, 14, 14, 0.5);\n            box-shadow: inset 0 0 2em 0.75em rgba(14, 14, 14, 0.5);\n}\n',"",{version:3,sources:["/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Box/style.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/components/UI/Box/Image.vue","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss","/Users/z00221y/.bitnami/stackman/machines/xampp/volumes/root/htdocs/clients/ws3/wp-content/themes/ws-ui/src/styles/theme/colors.scss"],names:[],mappings:";AA6CE;EACE,kBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,eAAgB;CACjB;AACD;EACE,iBAAmB;EACnB,iBAAgB;CACjB;AACD;EACE,oBAAmB;EACnB,cAAgB;CACjB;AAKA;EAEG,+BAAqB;EAArB,8BAAqB;EAArB,8BAAqB;KAArB,4BAAqB;KAArB,2BAAqB;MAArB,0BAAqB;UAArB,sBAAqB;CAItB;AANF;IAIK,yCAAwC;CACzC;AALJ;EAQG,2DAA4C;KAA5C,wDAA4C;UAA5C,mDAA4C;CAC7C;AATF;EAWG,iDAAoC;KAApC,8CAAoC;UAApC,yCAAoC;CACrC;AC1CL;EAEE,mBAAkB;CA0EnB;AA5ED;IAKI,mBAAkB;IAClB,WAAU;IAEV,6BAAwB;IAAxB,8BAAwB;IAAxB,iCAAwB;OAAxB,0BAAwB;OAAxB,2BAAwB;QAAxB,6BAAwB;YAAxB,yBAAwB;IAExB,0BAAmB;IAAnB,4BAAmB;OAAnB,uBAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;IAEnB,YAAW;IACX,6BAA4B;IAC5B,4BAA2B;IAC3B,4BAAsB;SAAtB,uBAAsB;CAMvB;AArBH;IAuBI,aAAY;IACZ,mBAAkB;IAClB,YAAW;IACX,OAAM;IACN,QAAO;IACP,YAAW;IACX,aAAY;IACZ,YAAW;IACX,mLAKC;IALD,yHAKC;IALD,0HAKC;IALD,oHAKC;IALD,uHAKC;IACD,qBAAoB;CACrB;ACTC;ADWF;MAEI,kBAAiB;MACjB,kBAAiB;MACjB,yBAAgB;MAAhB,iBAAgB;MAChB,OAAM;CAET;CAAA;AACD;IACE,6BAA4B;IAC5B,4BAAsB;SAAtB,uBAAsB;CACvB;AAIC;IACE,uME3FW;OF2FX,oME3FW;YF2FX,+LE3FW;CFgGZ;AACD;IACE,kHElGW;OFkGX,+GElGW;YFkGX,0GElGW;CFqGZ;AAdF;IAgBG,iNEvGW;OFuGX,8MEvGW;YFuGX,yMEvGW;IF4GX,+DE5GW;OF4GX,4DE5GW;YF4GX,uDE5GW;CF6GZ",file:"Image.vue?vue&type=style&index=0&id=7b01de40&lang=scss&scoped=true&",sourcesContent:['@import "~@/styles/theme/colors";\n@import "~@/styles/theme/breaks";\n\n%UiBox {\n  & {\n    position: relative;\n\n    align-self: stretch;\n    padding: 5rem 4rem;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  &_center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n  &.wrap {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @include Break( max-width Breaks(-1)){\n    padding: 7rem 4rem;\n  }\n  @include Break( max-width Breaks(2)){\n    padding: 5rem 2.5rem;\n  }\n}\n\n%UiBox_minh {\n  min-height: 42vh;\n}\n\n%UiBox_compact {\n\n  padding: 2rem 1.5rem !important;\n  \n  @media ( max-width:800px ) {\n    padding: 2rem 1.5rem;\n  }\n  \n}\n\n.UiBox { // margin pushers\n  &_push-left {\n    margin-left:   auto;\n    margin-right:  0;\n  }\n  &_push-right {\n    margin-right:  auto;\n    margin-left:   0;\n  }\n  &_push-up {\n    margin-top:    auto;\n    margin-bottom: 0;\n  }\n  &_push-down {\n    margin-bottom: auto;\n    margin-top:    0;\n  }\n}\n\n.UiBox { // doubled\n  $B: #{&};\n  &_doubled {\n    &.UiBoxImage {//:not(.UiBox_stack) { /*<- why did I add that suffix?*/\n      flex-flow: nowrap row;\n      [style=\'background-image: url("")\'] {\n        background-color: transparent !important;\n      }\n    }\n    & > #{$B}[class*="UiTheme_"] {\n      box-shadow: 0 .3em 4em -.6em rgba(0,0,0,.15);\n    }\n    &.UiBoxImage > #{$B}[class*="UiTheme_"] {\n      box-shadow: 0 0 8em 0 rgba(0,0,0,.5);\n    }\n  }\n}\n','\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "./style.scss";\n.UiBoxImage {\n\n  min-height: 45vmin;\n\n  & {\n    position: relative;\n    z-index: 1;\n    \n    flex-flow: nowrap column;\n    // justify-content: flex-end;\n    align-items: center;\n\n    color: #FFF;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n\n    // &:only-child {\n    //   min-height: 90vh;\n    //   // @media (max-width:800px) { min-height: 63vh }\n    // }\n  }\n  &:not(:empty):before {\n    content: " ";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: .6;\n    background-image: linear-gradient(\n      to bottom,\n      rgba(0,0,0,.15) 08%,\n      rgba(0,0,0,.63) 68%, \n      rgba(0,0,0,.75) 88%\n    );\n    pointer-events: none;\n  }\n  \n  &_sticky {\n    @include Break( min-width Breaks(3) ){\n      min-height: 100vh;\n      max-height: 100vh;\n      position: sticky;\n      top: 0;\n    }\n  }\n  &_fixed {\n    background-attachment: fixed;\n    background-size: cover;\n  }\n  &_vignette {\n    $shade: rgba( Color(dark),  .5 );\n    $edge:  rgba( Color(light), .2 );\n    &Vertical, &-v {\n      box-shadow:\n      inset 0  1px 0 0 $edge,\n      inset 0 -1px 0 0 $edge,\n      inset 0  1em 2em -.25em $shade,\n      inset 0 -1em 2em -.25em $shade;\n    }\n    &Horizontal, &-z {\n      box-shadow:\n      inset  1em 0 2em -.25em $shade,\n      inset -1em 0 2em -.25em $shade;\n    }\n    & {\n      box-shadow:\n      inset  0    1em 2em -.25em $shade,\n      inset  0   -1em 2em -.25em $shade,\n      inset  1em  0   2em -.25em $shade,\n      inset -1em  0   2em -.25em $shade;\n      box-shadow: inset 0 0 2em .75em $shade;\n    }\n  }\n}\n',"//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n","$c-black: #0e0e0e;\n$c-matte: invert($c-black,99.5%);\n$c-theme: #BA9454;\n$c-brand: #D21034;\n$c-alt:   #7D1214;\n\n$colors:(\n  dark:      $c-black, // #0E0E0E\n  slate:     lighten($c-black,15%), // #323232,\n  silver:    lighten($c-black,67%), // #B8B8B8\n  cream:     lighten(desaturate(adjust-hue($c-theme,7deg),14),42), // #F5F3ED,\n  creamDark: mix(#BFB4A0,$c-black,75%),\n  light:     mix( white, $c-matte, 69% ), // #F6F4EE\n  matte:     $c-matte, // #F0F0F0\n  theme:     $c-theme, // #BA9454\n  alt:       $c-alt,\n  brand:     $c-brand,\n);\n\n@function Color($key) {\n  $color: map-get($colors,$key);\n  @return $color;\n}"],sourceRoot:""}])},"77e3":function(n,e,t){var a=t("6708");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("0ffe4dc6",a,!0,{sourceMap:!0,shadowMode:!1})},"8f07":function(n,e,t){var a=t("2ada");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("f4ed2578",a,!0,{sourceMap:!0,shadowMode:!1})},b26c:function(n,e,t){"use strict";var a=t("8f07"),i=t.n(a);i.a},b7d4:function(n,e,t){n.exports=t.p+"wp-content/themes/ws-ui/dist/img/harvest.47a2c406.png"},c84c:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("UiBox",{staticClass:"UiBoxImage",style:{backgroundImage:n.src}},[n._t("default")],2)},i=[],o=(t("7f7f"),t("9683")),r=t("b7d4"),s=t.n(r),m={name:"UiBoxImage",props:{img:{type:[String,Object],default:s.a}},components:{UiBox:o["a"]},computed:{src:function(){return"url("+this.img+")"}},mounted:function(){"UiPanel"==this.$parent.$options.name&&this.$parent.$el.classList.add("UiTheme_dark")}},A=m,l=(t("f476"),t("2877")),c=function(n){n.options.__docs='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n```vue\n<UiBoxImage style="justify-content: flex-start">\n  <div style="margin: 0 auto 0 0">\n    <header>\n      <UiIcon name=barrels width="5em" height="5em" style="display: block; margin: 0 auto 1em"/>\n      <UiHeading>\n        Harvest 2016\n      </UiHeading>\n    </header>\n    <UiList :list="[\n      \'Pruney notes\',\n      \'Weak legs\',\n      \'Mature tannins\'\n    ]"/>\n  </div>\n</UiBoxImage>\n```\n'},b=c,d=Object(l["a"])(A,a,i,!1,null,"7b01de40",null);"function"===typeof b&&b(d),d.options.__file="Image.vue";e["a"]=d.exports},d5e8:function(n,e,t){"use strict";t("96cf");var a=t("3040"),i=(t("c5f6"),t("8e39"));e["a"]={mixins:[i["a"]],data:function(){return{loading:!0}},props:{type:{type:String,default:"posts"},category:{type:[Number,String]},parent:{type:[Number,String]},include:{type:[Number,String,Array]},exclude:{type:[Number,String,Array]}},methods:{fetch:function(){return this.endpoint}},computed:{endpoint:function(){var n=this.type||"posts";if(this.API)return this.API[n]()}},asyncComputed:{context:{default:{loading:!0},get:function(){var n=Object(a["a"])(regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(this.API&&this.endpoint){n.next=4;break}return n.abrupt("return",{loading:!0});case 4:this.$set(this,"loading",!0);case 5:return e=!1,n.next=8,this.fetch().get().catch(function(n){return e=n});case 8:if(t=n.sent,!e){n.next=13;break}return n.abrupt("return",{error:e});case 13:this.$set(this,"loading",!1),this.$emit("wp:load",t);case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),watch:function(){return this.$route.params}}}}},f476:function(n,e,t){"use strict";var a=t("77e3"),i=t.n(a);i.a}}]);
//# sourceMappingURL=chunk-5a5a.js.map