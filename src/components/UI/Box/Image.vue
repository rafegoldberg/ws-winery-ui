<template>
<UiBox class="UiBoxImage" :style="{ backgroundImage:src }">

  <slot/>

</UiBox>
</template>

<script>
import UiBox from '.';
import fallback_img from '@/assets/mock/harvest.png';
/**
 * A flexbox-based layout component for use within a `<UiPanel/>` wrapper.
 */
export default {
  name: "UiBoxImage",
  props:{ img:{ type:[String,Object], default:fallback_img } },
  components:{ UiBox },
  computed:{
    src(){ return `url(${this.img})` }
  },
  mounted(){
    if( this.$parent.$options.name=='UiPanel' )
      this.$parent.$el.classList.add('UiTheme_dark')
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
.UiBoxImage {

  min-height: 38vh;

  & {
    position: relative;
    z-index: 1;
    
    flex-flow: nowrap column;
    justify-content: flex-end;
    align-items: center;

    color: #FFF;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &:only-child {
      // min-height: 90vh;
      @media (max-width:800px) { min-height: 63vh }
    }
  }
  &:not(:empty):before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .75;
    background-image: linear-gradient(
      to bottom,
      rgba(0,0,0,.15) 08%,
      rgba(0,0,0,.63) 68%, 
      rgba(0,0,0,.75) 88%
    );
  }
  
  &_sticky {
    min-height: 100vh;
    max-height: 100vh;
    position: sticky;
    top: 0;
  }
  &_fixed {
    background-attachment: fixed;
    background-size: cover;
  }
  &_vignette {
    $shade: rgba( Color(dark),  .5 );
    $edge:  rgba( Color(light), .2 );
    &Vertical, &-v {
      box-shadow:
      inset 0  1px 0 0 $edge,
      inset 0 -1px 0 0 $edge,
      inset 0  1em 2em -.25em $shade,
      inset 0 -1em 2em -.25em $shade;
    }
    &Horizontal, &-z {
      box-shadow:
      inset  1em 0 2em -.25em $shade,
      inset -1em 0 2em -.25em $shade;
    }
    & {
      box-shadow:
      inset  0    1em 2em -.25em $shade,
      inset  0   -1em 2em -.25em $shade,
      inset  1em  0   2em -.25em $shade,
      inset -1em  0   2em -.25em $shade;
      box-shadow: inset 0 0 2em .75em $shade;
    }
  }
}
</style>

<docs>
  ```vue
  <UiBoxImage style="justify-content: flex-start">
    <div style="margin: 0 auto 0 0">
      <header>
        <UiIcon name=barrels width="5em" height="5em" style="display: block; margin: 0 auto 1em"/>
        <UiHeading>
          Harvest 2016
        </UiHeading>
      </header>
      <UiList :list="[
        'Pruney notes',
        'Weak legs',
        'Mature tannins'
      ]"/>
    </div>
  </UiBoxImage>
  ```
</docs>