<template>
<div class="MediaList">

  <ul class="MediaList--list">
    <li v-for="(item,i) in list"
        class="MediaList--item"
        :class="{
          'MediaList--item_active': (current==i)
        }" @click="(current=i)">
      <slot>{{item}}</slot>
    </li>
  </ul>

  <div class="MediaList--media">
    <img src="./mock/default.jpg" alt="">
  </div>

</div>
</template>

<script>
import mock from './mock/data.long';
export default {
  name: "MediaList",
  props:{
    list:{ type:[Array,Object], default:()=>mock },
  },
  data:()=>({
    current: 0
  }),
  computed:{
    active:{
      default: 0,
      get( ){
        this.$log('active:get',this.current)
        return this.current || this.list[0]
      },
      set(i){
        this.$log('active:set',{old:this.current,new:i})
        this.current = i
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/config/colors";
.MediaList {
  $base: #{&};
  & {
    // justify-self: center;
    // align-self: center;
    display: inline-flex;
    align-items: center;
    margin: 0 auto;
  }
  &--media {
    margin: 0;
    &:first-child { margin-right: 1.5rem }
    &:last-child { margin-left: 1.5rem }
    @media ( max-width:800px ) {
      display: none;
    }
  }
  &--list {
    padding: unset;
    list-style: none;
    color: mix(Color(slate),Color(silver),75%);
    font-weight: 100;
    width: 15em;
    max-width: 100%;
    white-space: nowrap;
    font-size: .9em;
  }
  &--item {
    padding: .3em 0;
    letter-spacing: .05em;
    cursor: default;
    & + & {
      border-top: 1px solid Color(silver);
    }
    &:before {
      content: " ";
      color: transparent;
      background: Color(theme);
      display: inline-block;
      height: 2px;
      width: 1.5em;
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -1px;
      margin-right: -.5em;
      opacity: 0;
      transition: .2s .1s ease-out;
    }
    &_active {
      position: relative;
      color: Color(dark);
      font-weight: bold;
      font-weight: 400;
      letter-spacing: 0.036em;
      &:before {
        opacity: 1;
        margin-right: 0.5em;
      }
    }
  }
}
.MediaList--item:not(.MediaList--item_active) {
  overflow: hidden;
  &:before { transition: all 0s !important }
}
</style>

<docs>
```vue
<MediaList :style="{
  position:'relative',
}"/>
```
</docs>