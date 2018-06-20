<template>
<div class="WineWidget">
  <img src="./mock/generic.png">
  <UiHeading :level="6" class="WineWidget--title">
    {{context.name}}
    <div>{{context.type}}</div>
  </UiHeading>
  <table>
    <tr>
      <td>${{parseFloat(context.price).toFixed(2)}}</td>
      <td>{{context.vintage}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import UiHeading from "@/components/UI/Heading"
import context from "./mock/data"
export default {
  name: "WineWidget",
  data: ()=>( {context} ),
  components:{ UiHeading }
}
</script>

<style lang="scss" scoped>

@import "~@/styles/config/fonts";
@import "~@/styles/config/colors";

.WineWidget {
  max-width: 15em;
  margin: 0 auto;
  border-bottom: 1px solid Color(theme);
  /deep/ .UiHeading {
    margin: 1em auto;
    text-align: center;
    font-weight: 500;
  }
  img {
    max-height: 15em;
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
