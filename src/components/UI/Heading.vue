<template>
<component :is="`h${level}`" :class="{
    UiHeading: true,
    [`UiHeading_scale${scale||level}`]: true,
  }">

  <slot>
    <span v-html="text"/>
  </slot>

</component>
</template>

<script>
export default {
  name: "UiHeading",
  props:{
    text: "",
    level:{ type: [String,Number], default:3 },
    scale:{ type: [String,Number] },
  }
}
</script>

<style lang="scss">
@import "~@/styles/tools/em";
@import "~@/styles/theme/scale";
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";

.UiHeading {
  & {
    font-family: #{$ff-serif};
    font-weight: 300;
    line-height: 1.2;
  }

  &_sans {
    font-family: $ff-sans;
    font-weight: normal;
    // text-transform: uppercase;
    // font-weight: 300;
    // letter-spacing: 0.05em;
  }

  @for $i from 1 through 6 {
    &_scale#{$i} {
      font-size: Size(-$i);
    }
  }

  .UiBox > &:only-child {
    .UiPanel:first-child > & { margin-top: auto }
    @include Break( max-width Breaks(3) ){
      text-align: center;
    }
  }

  &_space  {
    margin-bottom: 1.1em;
    &÷2, &Half  { margin-bottom: .6em }
    &X2, &Twice { margin-bottom: 1.9em }
    @include Break( max-width Breaks(3) ){
      margin-bottom: .9em;
      &÷2, &Half  { margin-bottom: .4em }
      &X2, &Twice { margin-bottom: 1.2em }
    }
  }
  &_push   {
    margin-top: 1.1em;
    &÷2, &Half  { margin-top: .6em }
    &X2, &Twice { margin-top: 1.9em }
    @include Break( max-width Breaks(3) ){
      margin-top: .9em;
      &÷2, &Half  { margin-top: .4em }
      &X2, &Twice { margin-top: 1.2em }
    }
  }
  &_spaceAuto { margin-bottom: auto }
  &_pushAuto  { margin-top: auto }

  &_caps     { text-transform: uppercase }
  &_expand   { line-height: 1.6          }
  &_contract { line-height: 0.9          }
  &_loosen   { letter-spacing: .06em     }
  &_tighten  { letter-spacing:-.03em     }
  &_center   { text-align: center        }
  &_thin     { font-weight: lighter      }
  &_bold     { font-weight: bolder       }
  &_gold     { color: Color(theme)       }

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