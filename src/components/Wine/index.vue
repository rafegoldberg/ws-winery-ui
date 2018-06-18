<template>
<div class="WineWidget">
  <img src="./mock/generic.png">
  <h3>
    {{context.name}}
    <div>{{context.type}}</div>
  </h3>
  <table>
    <tr>
      <td>${{parseFloat(context.price).toFixed(2)}}</td>
      <td>{{context.vintage}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import context from "./mock/data"
export default {
  name: "WineWidget",
  data: ()=>( {context} ),
}
</script>

<style lang="scss" scoped>

@import "~@/styles/var/fonts";
@import "~@/styles/var/colors";

.WineWidget {
  max-width: 15em;
  margin: 0 auto;
  border-bottom: 1px solid Color(gold);
  h3 {
    margin: 1em auto;
    font-family: $ff-serif;
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
    color: Color(gold);
    border-spacing: 0;
    border-top: 1px solid;
    td {
      padding: .5em;
      & + td { border-left: 1px solid currentColor }
    }
  }
}
</style>
