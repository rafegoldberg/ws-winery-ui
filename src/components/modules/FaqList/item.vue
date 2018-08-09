<template>
  <li :class="{ open }" class="FaqItem">
    <dt @click="(open=open?false:true)">
      <slot name="question" v-bind="question"/>
    </dt>
    <dd v-html="answer" ref="answer" v-show="open"/>
  </li>
</template>

<script>
export default {
  name: "FaqItem",
  props:["question","answer"],
  data:()=>({
    open: false
  })
}
</script>

<style lang="scss" scoped>
.FaqItem {
  &:not(.open):not(:last-child) dt {
    margin-bottom: .6rem;
  }
  dt {
    &, * {
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>
