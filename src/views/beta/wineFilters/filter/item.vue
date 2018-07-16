<template>
  <label class="FilterItem">
    <input class="FilterItem--status" type="checkbox" v-model="$parent.filters" :value="id" :name="slug">
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
    border-radius: 100%;
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
}
</style>
