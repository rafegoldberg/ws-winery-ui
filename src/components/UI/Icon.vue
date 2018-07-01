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
      <slot />
    </g>
  </svg>
</template>

<script>
import IconBarrels from "@/components/icons/barrels"
export default {
  name: "UiIcon",
  components:{ IconBarrels },
  props: {
    name: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    viewBox: {
      type: String,
      default: '0 0 18 18'
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
<UiPanel>

  <UiBox class=UiTheme_dark>
    <UiIcon name="barrels" width="5em" height="5em" view-box="0 0 76 75.488" fill="#BA9454">
      <IconBarrels/>
    </UiIcon>
  </UiBox>

  <UiBox class=UiTheme_light>
    <UiIcon name="bottles" width="5em" height="5em" view-box="0 0 76.1 72.3" fill="#BA9454">
      <IconBottles/>
    </UiIcon>
  </UiBox>

  <UiBox class=UiTheme_cream>
    <UiIcon name="glasses" width="5em" height="5em" view-box="0 0 70 63" fill="#BA9454">
      <IconGlasses/>
    </UiIcon>
  </UiBox>

</UiPanel>
```
</docs>