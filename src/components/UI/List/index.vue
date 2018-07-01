<template>
<ul class="UiList">

  <li v-for="(text,i) in list" :key="i">
    {{text}}
  </li>

</ul>
</template>
<script>
/**
 * A stylish unordered list.
 */
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
      top: 50%;
      transform: translateY(-50%);
      
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
<docs>
```vue
<UiList :list="[
  'list entry one',
  'another item',
  'a final test'
]"></UiList>
```
</docs>