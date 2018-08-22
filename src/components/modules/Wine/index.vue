<template>
<div class="WineWidget">
  <img :src="src" @error="setFallbackImg" class="WineWidget--image" ref="wineWidgetImg">
  <UiHeading :level="6" class="WineWidget--title">
    <span v-html="name"/>
  </UiHeading>
  <table class="WineWidget--detail">
    <tr>
      <td style="padding: .15em; color: #5C5C5C" colspan="2">
        <small style="font-size: .75em; letter-spacing: .1em">{{current ? 'CURRENT' : 'PAST'}} RELEASE</small>
      </td>
    </tr>
    <tr>
      <td v-if="price">
        <span style="position: relative; font-family:Georgia,serif">
          <sup style="position: absolute; right: 100%"><small>$</small></sup>{{parseFloat(price).toFixed(0)}}
        </span>
      </td>
      <td>{{vintage || 'N/A'}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import WP from "@/VuePress/mix/API"
import UiHeading from "@/components/UI/Heading"
import fallback from "@/assets/bottles/default.png"

export default {
  name: "WineWidget",
  mixins:[WP],
  props:{
    id: {
      type: Number
    },
    name: {
      type: String,
      default: "N/A",
    },
    image: {
      type: [String,Number,Object],
      default: fallback,
    },
    price: {
      type: [String,Number,Boolean],
      default: 0,
    },
    date: {
      type: [String,Date],
    }
  },
  components:{ UiHeading },
  computed:{
    current(){
      let
      pub  = this.parseDate( this.date ),
      now  = this.parseDate( Date.now() ),
      diff = this.diffDate(pub,now)
      if( diff <= 6 ) return true
      else return false
    }
  },
  methods:{
    setFallbackImg(){
      if( this.$refs.wineWidgetImg )
        this.$refs.wineWidgetImg.src = fallback
    },
    parseDate:(fmt)=> new Date( typeof str=='string' ? Date.parse(fmt) : fmt ),
    diffDate(d1, d2){
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12
      months -= d1.getMonth() + 1
      months += d2.getMonth() - 1
      return months <= 0 ? 0 : months
    },
    currentRelease(){
      if( this.context.loading ) return
      let
      pub  = this.parseDate( this.context.date ),
      now  = this.parseDate( Date.now() ),
      diff = this.diffDate(pub,now)
      if( diff <= 6 ) return true
      else return false
    },
  },
  asyncComputed:{
    src: {
      default: fallback,
      async get(){
        if( !this.API ) return fallback

        let
        xhr = this.API
          .media()
          .id(this.image)
          .get()
          .then(rsp=> rsp.source_url)
          .then(rsp=> rsp.replace(
            /.*\/wp-content\//gim,
            'https://www.williamsselyem.com/wp-content/'
          ))

        return xhr
      }
    },
    vintage: {
      default: '…',
      async get(){
        if( !this.API ) return '…'
        let
        xhr = this.API
          .tags()
          .post(this.id)
          .get()
          .then(rsp=>{
            return rsp
              .map(tag=> parseInt(tag.name) )
              .filter(v=> v==NaN || !v ? false : true )[0]
          })

        return xhr
      }
    }
  },
}
</script>

<style lang="scss" scoped>

@import "~@/styles/theme/fonts";
@import "~@/styles/theme/colors";

.WineWidget {
  display: flex;
  flex-flow: nowrap column;
  max-width: 15em;
  margin: 0 auto;
  border-bottom: 1px solid Color(theme);
  >:first-child { margin-bottom: 1em !important }
  >:last-child  { margin-top:    1em !important }

  /deep/ .UiHeading {
    margin: auto;
    text-align: center;
    font-weight: 500;
  }
  &--image {
    height: 15em;
    mix-blend-mode: multiply;
  }
  &--detail {
    width: 80%;
    margin: 0 auto !important;
    table-layout: fixed;
    text-align: center;
    color: Color(theme);
    border-spacing: 0;
    border-top: 1px solid;
    td {
      white-space: nowrap;
      padding: .5em;
      & + td { border-left: 1px solid currentColor }
    }
  }
}
</style>

<docs>
```vue
<WineWidget style="margin:2em auto"/>
```
</docs>