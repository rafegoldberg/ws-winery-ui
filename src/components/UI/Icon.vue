<template>
  <svg class="UiIcon"
    :viewBox="viewBox" 
    :width="width" 
    :height="height"
    :style="styles || { width, height }"
    :aria-labelledby="name" 
    xmlns="http://www.w3.org/2000/svg" 
    role="presentation">
    <title :id="name" lang="en">{{name}} icon</title>
    <defs>
      <filter xmlns="http://www.w3.org/2000/svg" id="dropshadow" height="150%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/> 
        <feOffset dx="-1" dy="0" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
      </filter>
    </defs>
    <g class="icon" :fill="fill||''">
      <slot>
        <component :is="`icon-${name}`" v-bind="options"/>
      </slot>
    </g>
  </svg>
</template>

<script>
import Icons from "@/icons";
export default {
  name: "UiIcon",
  components: { ...Icons },
  props: {
    styles:{
      type: Object,
    },
    name: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: '2em',
    },
    height: {
      type: [String, Number],
      default: '2em',
    },
    view: {
      type: [String, Array]
    },
    fill: {
      type: [String,Boolean],
      default: "currentColor"
    },
    detail: {
      type: Object,
      default:()=>( {} )
    },
    options: {
      type: Object,
      default:()=>( {} )
    },
    filter: {
      // filter="url(#dropshadow)"
      type: [String,Boolean],
      default: ""
    }
  },
  data:()=> ({
    viewBox: []
  }),
  mounted() {
    this.opts = this.options;
    this.viewBox = this.view || this.$children[0].viewBox || this.viewBox || [];
  },
};
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  vertical-align: middle;
  // margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>

<docs>

  ```vue
  <UiBox>
    <UiIcon name="logo" fill="indianred" width="16em"/>
  </UiBox>
  ```

  ### Available Icons

  - `barrels`
  - `bottles`
  - `glasses`
  - `logo`

  ### A More Complex Example

  ```vue
  <div>

  <UiBox class="UiTheme_dark">
    <ActionBox cta="Clink" title="Drink Wine" layout="float">
      <UiIcon name="glasses" fill="#BA9454" width="5em" style="float: left; margin: 1em 1em 0 0;"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.
      </p>
    </ActionBox>
  </UiBox> 

  <UiBox class="UiTheme_light">
    <ActionBox cta="Clink" title="Drink Wine">
      <UiIcon name="barrels" fill="#BA9454" width="5em" style="float: right; margin: 1em 0 0 1em;"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.
      </p>
    </ActionBox>
  </UiBox>

  </div>
  ```
  
</docs>