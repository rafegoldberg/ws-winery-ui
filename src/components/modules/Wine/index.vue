<template>
<div class="WineWidget">
  <img :src="image" class="WineWidget--image">
  <UiHeading :level="6" class="WineWidget--title">
    {{name}}
  </UiHeading>
  <table class="WineWidget--detail">
    <tr>
      <td>${{parseFloat(price).toFixed(2)}}</td>
      <td>{{vintage}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import UiHeading from "@/components/UI/Heading"
import fallback_img from "./mock/generic.png"

export default {
  name: "WineWidget",
  props:{
    name: {
      type: String,
      default: "Ferrington Vineyard",
    },
    image: {
      type: [String,Object],
      default: fallback_img,
    },
    vineyard: {
      type: String,
      default: "Anderson Valley Ferrington Vineyard",
    },
    vintage: {
      type: [String,Number],
      default: 2009,
    },
    price: {
      type: [String,Number],
      default: 62,
    },
  },
  // data: ()=>( {context} ),
  components:{ UiHeading }
}
</script>

<style lang="scss" scoped>

@import "~@/styles/theme/fonts";
@import "~@/styles/theme/colors";

.WineWidget {
  max-width: 15em;
  margin: 0 auto;
  border-bottom: 1px solid Color(theme);
  /deep/ .UiHeading {
    margin: 1em auto;
    text-align: center;
    font-weight: 500;
  }
  &--image {
    max-height: 15em;
    mix-blend-mode: multiply;
  }
  table {
    width: 80%;
    margin: 0 auto;
    table-layout: fixed;
    text-align: center;
    color: Color(theme);
    border-spacing: 0;
    border-top: 1px solid;
    td {
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