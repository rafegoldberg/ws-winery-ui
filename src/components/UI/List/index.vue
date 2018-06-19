<template>
<ul class="UiList">

  <li v-for="(text,i) in list" :key="i">
    {{text}}
  </li>

</ul>
</template>
<script>
export default {
  name: "UiList",
  props:{
    list: {
      type: [Array,Object],
      required: true,
    }
  }
}
</script>
<style lang="scss" scoped>
.UiList {
  padding: unset;
  list-style-type: none;
  > * {
    position: relative;
    padding-left: 1.6em;
    
    & + * { margin-top: .65em }
    
    &:before {
      position: absolute;
      left: 0;
      top: .2em;
      transform: translateY(0%);

      display: inline-block;
      content: " ";
      min-width: 1em;
      min-height: 1em;
      margin: 0 .5em 0 .1em;
      background-image: url("~@/assets/list-bullet.svg");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }    
  }
}
</style>
