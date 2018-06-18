<template>
<div class="ActionBox">

  <div class="ActionBox--content">
    <UiHeading class="UiHeading" v-bind="{level,scale}">{{title}}</UiHeading>
    <div v-if="layout=='float'"
        class="ActionBox--action"
        :class="{
          'ActionBox--button_float': layout
        }">
      <UiButton>
        {{cta}}
      </UiButton>
    </div>
    <slot v-bind="content">
      <p>{{content}}</p>
    </slot>
  </div>
  
  <div class="ActionBox--action" v-if="layout!=='float'">
    <slot name="action" v-bind="{cta}">
      <UiButton v-if="cta">{{cta}}</UiButton>
    </slot>
  </div>
  
</div>
</template>

<script>
import schema from "./schema.js";
import UiButton from "@/components/UI/Button"
import UiHeading from "@/components/UI/Heading"
export default {
  name: "ActionBox",
  props: schema,
  components: { UiButton, UiHeading }
};
</script>

<style lang="scss" scoped>
.ActionBox {
  &--button {
    &_float {
      float: right;
      margin: 1.3rem 0 0 1em;
    }
  }
}</style>