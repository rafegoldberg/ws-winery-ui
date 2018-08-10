<template>

<div class="Review">
  <aside class="Review--points">
    <b>{{Points}}</b>
    <small>Points</small>
  </aside>
  <div>
    <UiHeading class="Review--name  UiHeading_gold UiHeading_sans" :level="3" :scale="5"  v-html="Name"/> 
    <p class="Review--blurb" v-html="Blurb"/>
  </div>
</div>
  
</template>

<script>
import UiHeading from "@/components/UI/Heading"
export default {
  name:"Review",
  props:[ 'Blurb', 'Points', 'Name' ],
  components:{ UiHeading }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
.Review {
  $space: 1.5em;
  & {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    margin: $space*2 0 0;
    & + & {
      margin-top: $space;
      padding-top: $space*1.25;
      border-top: 1px solid Color(theme);
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
  &--name   {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .05em;
  }
  &--points {
    margin-right: $space;
    padding: $space $space/2;
    line-height: 1;
    text-align: center;
    color: Color(light);
    background: Color(theme);
    b {
      font-size: 2em;
      font-weight: 300;
      font-family: 'Butler', serif;
      letter-spacing: .05em;
      margin-left: .025em;
    }
    small {
      display: block;
      text-transform: uppercase;
      font-weight: lighter;
      letter-spacing: 0.05em;
    }
  }
  &--blurb  {}
  @include Break( max-width Breaks(3) ){
    & {
      display: block;
    }
    &--name {
      font-weight: bold;
      letter-spacing: 0;
    }
    &--points {
      float: right;
      margin: 0 0 1.5em 1.5em;
    }
  }
}
</style>
