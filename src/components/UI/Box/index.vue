<template>
  <component
      :is="tag"
      class="UiBox"
      :class="{
        'UiBox_stack': stack,
        'UiBox_expanded':  typeof collapse!=='boolean' ? false : !collapse,
        'UiBox_collapsed': typeof collapse!=='boolean' ? false :  collapse,
      }">
    
    <slot/>

    <div
      v-if="typeof collapse==='boolean'"
      class="UiBox--expandIcon">
      <UiIcon
        name="CirclePlus"
        width="1.5em"
        height="1.5em"
        @click.native="toggleCollapse"
        />
    </div>
    
  </component>
</template>
<script>
/**
 * A simple flexbox layout component. Intended for use within a `<UiPanel/>` parent wrapper.
 */
import UiIcon from "@/components/UI/Icon"
export default {
  name: "UiBox",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    stack: {
      type: Boolean,
      default: false
    },
    collapse: {
      type: Boolean,
      required: false,
      default: undefined
    }
  },
  components:{ UiIcon },
  methods:{
    toggleCollapse(){
      if( typeof this.collapse!=='boolean' ) return undefined
      this.$set(this,'collapse', this.collapse ? false : true)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
@import "~@/styles/tools/BreakClass";

.UiBox {
  @extend %UiBox, %UiBox_center;  
  > .UiBox {
    padding: 3.6rem;
    &:not(.UiBox_push-up):not(.UiBox_push-down) {
      margin-top: -3.6rem;
      margin-bottom: -3.6rem;
    }
  }
  
  &_stack {
    flex-flow: nowrap column;
    align-items: center;
  }
  &_collapsed {
    height: 100%;
    max-height: 52vh;
    overflow: hidden;
    align-items: flex-start;
    margin: 0 0 auto;
    > * {
      pointer-events: none !important;
    }
  }
  &--expandIcon {
    $icon-color: Color(theme);
    $transition: .33s 0s ease-out;
    pointer-events: unset !important;
    &:before {
      content: 'Read More';
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      top: 33%;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 2em;
      font-size: smaller;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: linear-gradient(
        to bottom,
        transparent,
        Color(dark) 90%
      );
      background: linear-gradient(
        to bottom,
        transparent,
        Color(dark) calc(100% + -3rem)
      );
      opacity: 1;
      transition: $transition;
      box-sizing: content-box;
    }
    .UiIcon {
      position: absolute;
      bottom: 3.3rem;
      left: 50%;
      transform: translateX(-50%);
      transition: $transition;
      transition-delay: 0s;
      cursor: pointer;
      /deep/ [stroke],
      /deep/ path {
        transition: .38s .1s ease-out;
        transform-origin: center;
      }
      /deep/ [stroke] { stroke: $icon-color !important; }
      /deep/ path  {
        fill: $icon-color !important;
        stroke-width: 2px;
        stroke: transparent;
      }
      &:hover {
        /deep/ [stroke] { stroke: transparent !important; }
        /deep/ path {
          transform: scale(1.4);
          stroke: $icon-color;
        }
      }
    }
    .UiBox_expanded & {
      &:before {
        opacity: 0;
        pointer-events: none;
      }
      .UiIcon {
        bottom: 2.3em;
        transform: translateX(-50%) rotate(45deg);
        transition-delay: .1s;
      }
    }
  }
  &_block {
    display: block;
  }
  &_tall {
    @include Break( min-width Breaks(4)){    
      min-height: 65vh;
      height: min-content;
      max-height: 100%;
      box-sizing: content-box;
    }
  }
  &_connected {
    $length: 8rem;
    &:before, &:after,
    &Top:before,
    &Bottom:after {
      content: "";
      z-index: 2;
      position: absolute;
      left: 50%;
      width: 1px;
      height: $length;
      background: Color(theme);
      margin-left: -1px;
    }
    &, &Top {
      padding-top: $length + 2rem;
      &:before { top: 0 } //-1.5rem }
    }
    &, &Bottom {
      padding-bottom: $length + 2rem;
      &:after  { bottom: 0 }
    }
  }
  &_overflow {
    overflow: visible;
  }
  &_jam {
    &Top, &T {
      @include Break( min-width Breaks(4) ){
        padding-top: 0;
      }
      @include BreakClass {
        padding-top: 0;
      }
    }
    &Right, &R {
      @include Break( min-width Breaks(4) ){
        padding-right: 0;
      }
      @include BreakClass {
        padding-right: 0;
      }
    }
    &Bottom, &B {
      @include Break( min-width Breaks(4) ){
        padding-bottom: 0;
      }
      @include BreakClass {
        padding-bottom: 0;
      }
    }
    &Left, &L {
      @include Break( min-width Breaks(4) ){
        padding-left: 0;
      }
      @include BreakClass {
        padding-left: 0;
      }
    }
  }
}
</style>
<docs>
  ```vue
  <UiBox>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.
    </p>
  </UiBox>
  ```
</docs>