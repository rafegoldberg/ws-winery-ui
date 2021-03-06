<template>

  <component :is="tag" deprecated-v-view="$scrollIntersect" :id="id" class="UiPanel" :class="{'UiPanel_connected':connect}">
    <slot/>
    <i v-if="typeof connect == 'string'" class="UiPanel--connect" :class="{
        [`UiPanel--connect-${connect}`]: connect
      }">
      <slot name="connect">
        <small v-if="connect=='down'" @click="$el.nextElementSibling.scrollIntoView(true)">
          {{connectText}}
        </small>
      </slot>
    </i>
  </component>

</template>

<script>
/**
 * The `<UiPanel/>` is a full-width layout component. Each panel should contain a set of `<UiBox/>` child components. In some ways it's similar to Bootstrap's `.row > .col-*` construct. Except we're using flexbox to pull of some neat tricks that Bootstrap would never even dream to touch.
 */
export default {
  name: "UiPanel",
  props:{
    id:{ default:"" },
    tag:{ default:"div" },
    connect:{
      type:[ String, Boolean ],
      default: false
    },
    connectText:{
      type: String,
      default: 'Scroll for More',
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";

.UiPanel.UiPanel_connected > .UiBoxImage {
  padding-bottom: 5rem !important;
}
.UiPanel--connect {
  
  $height: 8em;
  $y-offset: 30;
  $y-invert: $height * ($y-offset / 100);
  $slot-offset: -1.9rem; // what is this?
  
  @at-root .UiPanel_connected {
    + .UiBox,
    + .UiPanel > .UiBox {
      padding-top: ($height - $y-invert) + 2.6em !important;
      // padding-bottom: 3rem !important;
    }
  }
  
  & {
    z-index: 8;
    position: absolute;
    left: 50%;

    max-height: 50vh !important;
    height: $height !important;
    width: 1em !important;
    margin-left: -1px;

    background-image: url("~@/assets/list-bullet.svg");
    background-size: 1em;
    background-repeat: no-repeat;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    left: 49%;
    height: 100%;
    width: 1px;
    background: Color(theme);
  }

  .UiBoxImage + & {
    z-index: 9;
    &:after {
      background: Color(light);
      height: $y-invert;
    }
  }
  >:only-child {
    position: absolute;
    left: 50%;
    top: $slot-offset;
    font-size: 0.7rem;
    white-space: nowrap;
    text-align: center;
    transform: translateX(-50%);
    text-transform: uppercase;
    letter-spacing: .15em;
    font-style: normal;
    font-family: $ff-sans;
    text-decoration: none;
    text-shadow: -1px 1px 6px rgba(0,0,0,.7);
  }


  &-bottom, &-down {
    top: 100%;
    top: calc(100% + .5em);
    background-position: center bottom;
    transform: translate(-50%,#{"-#{$y-offset}%"});
    &:before, &:after { top: -.5em }
  }
  &-top, &-up {
    top: unset;
    bottom: 100%;
    bottom: calc(100% + .5em);
    background-position: center top;
    transform: translate(-50%,#{"#{$y-offset}%"});
    &:before, &:after { top: .5em }
    .UiBoxImage + &:after { 
      top: unset;
      bottom: -.5em;
    }
    >:only-child {
      top: unset;
      bottom: $slot-offset;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "~@/styles/theme/scale";
@import "~@/styles/theme/breaks";
.UiPanel {
  & {
    position: relative;
    display: flex;
    justify-content: stretch;
    align-items: center;
    flex-flow: nowrap row;
  }
  @media ( min-width:800px ) {
    > * { flex: 1 }
  }
  @include Break( max-width Breaks(3) ) {
    flex-flow: nowrap column;
    > * {
      width: 100%;
    }
  }
  &_compact {
    margin-top: -2rem;
    margin-bottom: -3rem;
    > .UiBox {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }
}
</style>

<docs>
  ```vues
  <div>

    <UiPanel class="UiTheme_cream">
      <UiBox>
        <h1>Hello.</h1>
      </UiBox>
      <UiBox class="UiTheme_light">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.</p>
      </UiBox>
    </UiPanel>

    <UiPanel class="UiTheme_dark">
      <UiBox class="UiTheme_light">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus molestiae sapiente vel repudiandae in nulla facism? Harum facilis assumenda maiores vel aliquam. Nulla voluptatem unde nam tenetur repudiandae.</p>
      </UiBox>
      <UiBox>
        <h1>Goodbye.</h1>
      </UiBox>
    </UiPanel>

  </div>
  ```
</docs>