<template>
<div class="ActionBox" :class="{
    ActionBox_collapse: collapse,
    ActionBox_expanded: collapse && expanded,
  }">

  <div class="ActionBox--main">
    <!-- @slot Customize the `<ActionBox/>` header. -->
    <slot name="header">
      <!-- {{$log({OG:{level,cta},heading})}} -->
      <UiHeading class="UiHeading" v-bind="heading||{level,cta}" v-if="heading.text||title">
        {{heading.text||title}}
        <UiIcon
          v-if="collapse && expanded"
          name="CirclePlus"
          class="ActionBox--unexpand"
          width="1.4rem"
          height="1.4rem"
          @click.native="(expanded = false)"
          />
      </UiHeading>
    </slot>

    <div v-if="button.cta && layout=='float'"
        class="ActionBox--action"
        :class="{
          'ActionBox--button_float': layout
        }">
      <UiButton v-bind="button"/>
      <UiButton class="ActionBox--expand" v-if="collapse && !expanded" @click.native="(expanded = true)">
        <span>𝒊</span>
      </UiButton>
    </div>

    <!-- @slot Add custom content to the box. -->
    <div class="ActionBox--content">
      <slot v-bind="content">
        <div v-html="content"/>
      </slot>
    </div>
  </div>

  <div class="ActionBox--action" v-if="layout!='float'">

    <slot name="action" v-bind="{button}" v-if="button.cta">
      <UiButton v-bind="button"/>
    </slot>
    <UiButton class="ActionBox--expand" v-if="collapse && !expanded" @click.native="(expanded = true)">
      <span>𝒊</span>
    </UiButton>

    <ReadMore v-if="ReadMore" :href="ReadMore.indexOf('#')==0 ? ReadMore:'#' + ReadMore"/>
  </div>
  
</div>
</template>

<script>
import UiButton from "@/components/UI/Button"
import UiIcon from "@/components/UI/Icon"
import UiHeading from "@/components/UI/Heading"
import ReadMore from "@/components/modules/ReadMore"
export default {
  name: "ActionBox",
  data:()=>({
    expanded: false,
  }),
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

    collapse: {
      type: Boolean,
      required: false,
      default: undefined,
    }
  },
  components: { UiButton, UiIcon, UiHeading, ReadMore }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
@import "~@/components/UI/Button/style";
.ActionBox {
  $B: #{&};
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
  // &--content {}
  &--button {
    &_float {
      float: right;
      margin-left: 1em;
    }
  }

  &_collapse {
    /deep/ p:last-child {
      margin-bottom: 0 !important;
    }
    @include Break( min-width Breaks(2) ){
      #{$B}--unexpand,
      #{$B}--expand {
        display: none;
      }
    }
    @include Break( max-width Breaks(2) ){
      &:not(#{$B}_expanded) {
        & {
          height: 30vh;
          display: flex;
          flex-flow: nowrap column;
          justify-content: center;
          align-items: center;
        }
        #{$B}--action {
          float: none;
          justify-content: center;
          margin: 1em auto 0;
          text-align: center;
        }
        #{$B}--content {
          display: none;
        }
      }
      #{$B}--expand {
        >span {
          line-height: 0;
          vertical-align: -1px;
          font-size: 1.4em;
        }
      }
      #{$B}--unexpand {
        float: right;
        margin-top: .4rem;
        transform: rotate(45deg);
      }
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