<template>
<dl class="FAQ">
  <li v-for="(item,ix) in questions">
    <dt>
      <UiHeading
        class="UiHeading_push"
        v-html="item.question"
        :level="3"
        :scale="5"/>
    </dt>
    <dd v-html="item.answer"/>
  </li>
</dl>
</template>

<script>
import UiHeading from '@/components/UI/Heading'
export default {
  name: "FaqList",
  props:[ 'questions' ],
  components:{ UiHeading },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
.FAQ {
  & {
    margin: unset;
    margin-left: -15px;
    margin-right: -15px;
  }
  li {
    list-style: none;
    margin: unset;
    padding: 1em 0;
    >dt,
    >dd {
      padding: 0 15px;
    }
    &:last-child {
      padding-bottom: 0;
      :last-child { margin-bottom: 0 !important }
    }
    & + li { border-top: 1px solid Color(theme) }
  }
  .UiHeading {
    text-align: left;
  }
}
</style>
