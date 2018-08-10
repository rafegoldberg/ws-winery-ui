<template>
<div class="ActionBox">

  <div class="ActionBox--content">
    <!-- @slot Customize the `<ActionBox/>` header. -->
    <slot name="header">
      <!-- {{$log({OG:{level,cta},heading})}} -->
      <UiHeading class="UiHeading" v-bind="heading||{level,cta}" v-if="heading.text||title">
        {{heading.text||title}}
      </UiHeading>
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
      <div v-html="content"/>
    </slot>
  </div>
  
  <div class="ActionBox--action" v-if="layout!=='float'">
    <!-- @slot Custom action item or footer. -->
    <slot name="action" v-bind="{button}" v-if="cta||button.cta">
      <UiButton v-bind="button"/>
    </slot>
    <ReadMore v-if="ReadMore" :href="ReadMore.indexOf('#')==0 ? ReadMore:'#' + ReadMore"/>
  </div>
  
</div>
</template>

<script>
import UiButton from "@/components/UI/Button"
import UiHeading from "@/components/UI/Heading"
import ReadMore from "@/components/modules/ReadMore"
export default {
  name: "ActionBox",
  props: {
    content: {
      type: [ Array, String, Object ],
      default: ""
    },

    ReadMore: {
      type: [String,Boolean],
      default: false,
    },
    
    layout: {
      type: String,
      default: ""
    },

    heading: {
      type: Object
    },
    title: { type: String },
    level: { type: [String,Number] },
    scale: { type: [String,Number] },

    button: {
      type: Object
    },
    cta: { type: [String,Object] },
    url: { type: String },
  },
  components: { UiButton, UiHeading, ReadMore }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
.ActionBox {
  &--action {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.5em;
    > .ReadMore {
      display: inline-block;
      width: unset;
      text-decoration: none;
      color: Color(theme);
      font-weight: bold;
      &:not(:first-child) { margin-left: 1em }
      &:only-child {
        @include Break( max-width Breaks(3) ){
          margin-left:  auto;
          margin-right: auto;
        }
      }
    }
    &:empty {
      display: none;
    }
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