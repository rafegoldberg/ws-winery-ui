<template>
<dl class="FAQ">
  <FaqItem v-for="(item,ix) in questions" v-bind="item" :key="ix">
    <UiHeading
      slot="question"
      :class="{
        'UiHeading_push':   ix==0 ? true : false,
        'UiHeading_push÷2': ix==0 ? false : true,
        'UiHeading_space÷2': true
      }"
      :level="3"
      :scale="5">
      <UiIcon name="CirclePlus" width="1em" height="1em"/>
      <div v-html="item.question"/>
    </UiHeading>
  </FaqItem>
</dl>
</template>

<script>
import UiHeading from '@/components/UI/Heading'
import UiIcon from '@/components/UI/Icon'
import FaqItem from './item'
export default {
  name: "FaqList",
  props:[ 'questions' ],
  components:{ UiHeading, UiIcon, FaqItem },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
.FAQ {
  & {
    margin: unset;
    margin: 0;
    // margin-left: -15px;
    // margin-right: -15px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    .UiIcon {
      order: 1;
      transition: .3s ease-out;
      flex: 0 0 1em;
      margin-left: 0.6em;
      /deep/ path {
        stroke: #b99453;
        stroke-width: 0;
        transition: all .6s 0s ease-out;
      }
      /deep/ circle {
        transition: all .6s .2s ease-out;
      }
    }
  }
  .FaqItem.open .UiIcon {
    transform: rotate(45deg);
    /deep/ circle {
      stroke: transparent;
      transition: all .3s .2s ease-out;
    }
    /deep/ path { stroke-width: 2px }
  }
}
</style>
