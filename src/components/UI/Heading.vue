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
  & {
    font-family: $ff-serif;
    font-weight: 300;
  }
  &_sans {
    font-family: $ff-sans;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.05em;
  }

  @for $i from 1 through 6 {
    &_scale#{$i} {
      font-size: Size(-$i);
    }
  }
}
</style>
<docs>
```vue
<UiBox class="UiTheme_cream">

<UiHeading :level="1" style="text-align: center;">
  2016 Westside Road Neighbors Pinot Noir
</UiHeading>

</UiBox>
```

## Typographic Scale

```vue
<div>
  <UiHeading :level=1 :scale=6>Heading 6</UiHeading>
  <br/>
  <UiHeading :level=2 :scale=5>Heading 5</UiHeading>
  <br/>
  <UiHeading :level=3 :scale=4>Heading 4</UiHeading>
  <br/>
  <UiHeading :level=4 :scale=3>Heading 3</UiHeading>
  <br/>
  <UiHeading :level=5 :scale=2>Heading 2</UiHeading>
  <br/>
  <UiHeading :level=6 :scale=1>Heading 1</UiHeading>
</div>
```

## Typographic Applications

You can also use the sans-serif typeset where appropriate:

```vue
<UiBox class="UiTheme_light">

<UiHeading class="UiHeading_sans" :level="6" style="text-align: center;">
  <b>2016 Westside Road Neighbors Pinot Noir</b>
</UiHeading>

</UiBox>
```

In certain settings you may mix the two applications together:

```vue
<UiBox>

<header style=text-align:center>
  <UiHeading class="UiHeading_sans" style="font-weight:400;" :level="6">Anderson Valley</UiHeading>
  <UiHeading :level="3">Ferrington Vineyard</UiHeading>
</header>

</UiBox>
```
</docs>