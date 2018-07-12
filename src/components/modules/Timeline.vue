<template>
<div>
  <slot v-for="(item,i) in list" v-bind="item">
    {{$log(item)}}
  </slot>
</div>
</template>

<script>
export default {
  name: "Timeline",
  props:{
    list:{
      type: Array,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
// .Timeline {}
</style>
