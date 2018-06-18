<template>
<div class="ActionBox">

  <div class="ActionBox--content">
    <h1 class="UiHeader">{{title}}</h1>
    <slot v-bind="content">
      <p>{{content}}</p>
    </slot>
  </div>
  
  <div class="ActionBox--action">
    <slot name="action" v-bind="{cta}">
      <button v-if="cta" class="UiButton">{{cta}}</button>
    </slot>
  </div>
  
</div>
</template>

<script>
import schema from "./schema.js";
export default {
  name: "ActionBox",
  props: schema
};
</script>

<style lang="scss" scoped>
.ActionBox {
  &--content {}
}
</style>