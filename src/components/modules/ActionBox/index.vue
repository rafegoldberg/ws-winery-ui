<template>
<div class="ActionBox">

  <div class="ActionBox--content">
    <!-- @slot Customize the `<ActionBox/>` header. -->
    <slot name="header">
      <UiHeading class="UiHeading" v-bind="{level,scale}">{{title}}</UiHeading>
    </slot>
    <div v-if="layout=='float'"
        class="ActionBox--action"
        :class="{
          'ActionBox--button_float': layout
        }">
      <UiButton>{{cta}}</UiButton>
    </div>
    <!-- @slot Add custom content to the box. -->
    <slot v-bind="content">
      <p>{{content}}</p>
    </slot>
  </div>
  
  <div class="ActionBox--action" v-if="layout!=='float'">
    <!-- @slot Custom action item or footer. -->
    <slot name="action" v-bind="{cta}">
      <UiButton v-if="cta">{{cta}}</UiButton>
    </slot>
  </div>
  
</div>
</template>

<script>
import UiButton from "@/components/UI/Button"
import UiHeading from "@/components/UI/Heading"
export default {
  name: "ActionBox",
  props: {
    title: {
      type: String,
      default: "Box Title"
    },
    content: {
      type: [ Array, String, Object ],
      default: ""
    },
    cta: {
      type: String,
    },
    layout: {
      type: String,
      default: ""
    },
    level: {
      type: [String,Number]
    },
    scale: {
      type: [String,Number]
    }
  },
  components: { UiButton, UiHeading }
};
</script>

<style lang="scss" scoped>
.ActionBox {
  &--action {
    margin-top: 1.5em;
  }
  &--button {
    &_float {
      float: right;
      margin-left: 1em;
    }
  }
}</style>

<docs>
Render an `<ActionBox/>` with sub-components:
  
```vue
<ActionBox cta="Drink" title="A, B, C">
  <UiList :list="['easy as one, two, three','simple as do-re-mi']"></UiList>
</ActionBox>
```

Pass a custom `[layout]`:

```vue
<ActionBox cta="Drink Wine" layout="float">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.
  </p>
</ActionBox>
```
</docs>