<template>

  <component :is="tag" class="UiButton" :href="url" :to="url">
    <!-- @slot Add rich markup to your button. -->
    <slot>{{cta}}</slot>
  </component>

</template>
<script>
export default {
  name: "UiButton",
  props: {
    url: { type:String, default:''       },
    tag: { type:String, default:"button" },
    cta: { type:String, required:false   }
  }
}
</script>
<style lang="scss">
@import "./style.scss";
.UiButton {
  &_gold, &.gold {
    color: Color(theme);
  }
  &_flex {
    display: inline-flex;
    flex-flow: nowrap row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
<docs>
#### Using Props

Quickly pass a custom call-to-action:

```vue
<UiButton :cta="'First Do This'"/>
```

#### Using Slots

For more involved scenarios, you can pass custom markup directly to the `<UiButton/>`'s default slot:

```vue
<UiButton>
  Now Do <a href="#action"><b>That</b></a>
</UiButton>
```
</docs>