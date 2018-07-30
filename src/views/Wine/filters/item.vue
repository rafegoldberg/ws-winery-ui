<template>
  <label class="FilterItem">
    <input class="FilterItem--status"
      v-model="$root.filters[$parent.term||taxonomy]"
      :label="name"
      :type="$parent.type||checkbox"
      :name="$parent.title"
      :value="id">
    <span class="FilterItem--label">{{name}}</span>

    <small class="FilterItem--count" v-text="count"/>

  </label>
</template>

<script>
export default {
  name:"FilterItem",
  props:['id','slug','name','count','taxonomy'],
  data:()=>({ status:false })
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/fonts";
@import "~@/styles/theme/colors";
.FilterItem {
  $boxSize: 1rem;
  & {
    display: inline-flex;
    align-items: center;
  }
  &--status {
    appearance: none;
    width: $boxSize;
    height: $boxSize;
    margin-right: 1rem;
    border-radius: 4px;
    padding: .1rem;
    background: rgba(Color(silver),.4);
    outline: none;
    &[type=radio] {
      border-radius: 100%
    }
    &:hover {
      background: rgba(mix(Color(silver),Color(dark)),.5);
    }
    &:checked {
      background: Color(theme);
    }
  }
  &--label {
    max-width: 12rem;
    display: block;
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
  }
  &--status:checked + &--label {
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  &--count {
    margin: -2px 0 0 auto;
    padding-left: .8rem;
    font-family: $ff-alt;
    color: #BBB;
  }
}
</style>
<style lang="scss">
@import "~@/styles/theme/colors";
.FiltersGroup_pills {
  $item: ".FilterItem";
  & {
    display: flex !important;
    flex-flow: wrap row !important;
    justify-content: space-between !important;
  }
  #{$item} {
    & {
      position: relative;
      max-width: 20%;
      flex: 0 20%;
      text-align: center;
      cursor: pointer;
    }
    &--status {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
      opacity: 0;
    }
    &--label {
      display: block;
      width: 90%;
      max-width: 90%;
      border-radius: 3px;
      line-height: 1.5;
      margin: .4em auto;
      border: 1px solid transparent;
      font-size: 0.9em;
      transition: .3s ease-out;
    }
    &:hover #{$item}--label {
      background: rgba(Color(silver), .15);
      border-color: rgba(Color(theme),.3);
    }
    &--status:checked + #{$item}--label {
      background: rgba(Color(silver), .3);
      border-color: rgba(Color(theme),.6);
    }
    &--count {
      display: none;
    }
  }
}
</style>
