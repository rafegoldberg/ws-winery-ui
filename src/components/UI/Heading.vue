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
@import "~@/styles/theme/scale";
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";

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

  @include Break( max-width Breaks(2) ){
    text-align: center;
  }

  &_space  {
    margin-bottom: 1.2em;
    &÷2, &Half { margin-bottom: .6em }  
  }
  &_push   {
    margin-top: 1.2em;
    &÷2, &Half { margin-top: .6em }
  }
  &_caps     { text-transform: uppercase }
  &_expand   { line-height: 1.6          }
  &_contract { line-height: 1.0          }
  &_loosen   { letter-spacing: .06em     }
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