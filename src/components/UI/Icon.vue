<template>
  <svg class="UiIcon"
    :width="width" 
    :height="height" 
    :viewBox="viewBox" 
    :aria-labelledby="name" 
    xmlns="http://www.w3.org/2000/svg" 
    role="presentation">
    <title :id="name" lang="en">{{name}} icon</title>
    <g :fill="fill">
      <slot>
        <component :is="`icon-${name}`"/>
      </slot>
    </g>
  </svg>
</template>

<script>
import Icons from "@/icons"
export default {
  name: "UiIcon",
  components:{ ...Icons },
  mounted(){
    this.viewBox = this.$children[0].viewBox || 0;
  },
  props: {
    name: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: "auto"
    },
    height: {
      type: [Number, String],
      default: "auto"
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    viewBox: {
      type: String,
      default: '0'
    }
  },
}
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  // margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>

<docs>
```vue
<UiBox>
  <UiIcon name="glasses" fill="#BA9454" width="5em"/>
</UiBox>
```

### A More Complex Example

```vue
<UiBox class="UiTheme_dark">
  <ActionBox cta="Clink" layout="float" title="Drink Wine">
    <UiIcon name="glasses" fill="#BA9454" width="8em" style="float: left; margin: .5em 1em 0 -1em;"/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.
    </p>
  </ActionBox>
</UiBox>
```
</docs>