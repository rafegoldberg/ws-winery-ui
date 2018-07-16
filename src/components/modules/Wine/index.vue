<template>
<div class="WineWidget">
  <img :src="image" class="WineWidget--image">
  <UiHeading :level="6" class="WineWidget--title">
    <span v-html="name"/>
  </UiHeading>
  <table class="WineWidget--detail">
    <tr>
      <td v-if="price">${{parseFloat(price).toFixed(2)}}</td>
      <td>{{vintage || 'N/A'}}</td>
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
  },
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