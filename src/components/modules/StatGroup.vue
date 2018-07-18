<template>
<div class="StatGroup" :class="{[`StatGroup_${layout}`]:layout}">
  <b v-if="title" class="StatGroup--caption" :level="5">{{title}}</b>
  <div class="StatGroup--list">
    <div class="StatGroup--item" v-for="item in content">
      <b class="StatGroup--itemLabel">{{item.label}}</b>
      <span class="StatGroup--itemText">{{item.text}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "StatGroup",
  props:[ 'layout', 'title', 'content' ],
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";
.StatGroup {

  $B: #{&};
  $pad: .4rem .5rem;

  & {
    font-size: .88em;
    line-height: 1.4;
    & + & {
      margin-top: nth($pad,1);
      padding-top: nth($pad,1)*1.5;
      border-top: 1px solid Color(theme);
    }
  }
  
  &--caption {
    padding: $pad;
    font-size: 1rem;
    font-family: $ff-sans;
    font-weight: 900;
    text-transform: uppercase;
    color: Color(theme);
  }
  &--item {
    & {
    }
    #{$B}_column & {
      padding: $pad;
      display: flex;
      flex-flow: nowrap column;
    }
    #{$B}_row & {
      display: table-row;
      > * {
        display: table-cell;
        padding: $pad;
      }
      @at-root #{$B}_row #{$B}--list {
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
        max-width: 100%;
      }
    }
    &Label {}
    &Text {}
  }
}
</style>