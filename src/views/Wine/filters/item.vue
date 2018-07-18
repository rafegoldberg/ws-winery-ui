<template>
  <label class="FilterItem">
    <input class="FilterItem--status" type="checkbox" v-model="$parent.filters" :value="id" :id="slug" :name="'filters'||name">
    <span class="FilterItem--label">{{name}}</span>
  </label>
</template>

<script>
export default {
  name:"FilterItem",
  props:['id','slug','name'],
  data:()=>({ status:false })
}
</script>

<style lang="scss" scoped>
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
}
</style>
