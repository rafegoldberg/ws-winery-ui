<template>
<div class="WineWidget">
  <img :src="image" class="WineWidget--image" @error="setFallbackImg" ref="wineWidgetImg">
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
import UiHeading from "@/components/UI/Heading"
import fallback_img from "@/assets/bottles/default.png"

export default {
  name: "WineWidget",
  props:{
    name: {
      type: String,
      default: "N/A",
    },
    image: {
      type: [String,Object],
      default: fallback_img,
    },
    vintage: {
      type: [String,Number,Boolean],
      default: "N/A",
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
      this.$refs.wineWidgetImg.src = fallback_img
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
  }
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