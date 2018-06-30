<template>
<component :is="`h${level}`" :class="{
  UiHeading: true,
  [`UiHeading_scale${scale||level}`]: true,
  }">

  <slot/>

</component>
</template>

<script>
export default {
  name: "UiHeading",
  props:{
    level:{ type: [String,Number], default:3 },
    scale:{ type: [String,Number] },
  }
}
</script>

<style lang="scss">
@import "~@/styles/tools/em";
@import "~@/styles/config/scale";
@import "~@/styles/config/colors";
@import "~@/styles/config/fonts";

.UiHeading {
  font-family: $ff-serif;
  font-weight: 300;
  // color: Color(theme);
  @for $i from 1 through 6 {
    &_scale#{$i} {
      font-size: Size(-$i);
    }
  }
}
</style>
<docs>
```vue
<div>

  <UiHeading :level=6 :scale=1>Heading 1</UiHeading>
  
  <br/>
  
  <UiHeading :level=5 :scale=2>Heading 2</UiHeading>
  
  <br/>
  
  <UiHeading :level=4 :scale=3>Heading 3</UiHeading>
  
  <br/>
  
  <UiHeading :level=3 :scale=4>Heading 4</UiHeading>
  
  <br/>
  
  <UiHeading :level=2 :scale=5>Heading 5</UiHeading>
  
  <br/>
  
  <UiHeading :level=1 :scale=6>Heading 6</UiHeading>
  
</div>
```
</docs>