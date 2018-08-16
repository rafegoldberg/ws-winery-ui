<template>
<ol class="Timeline">

  <li v-for="(item,ix) in entries" :key="ix" class="Timeline--tick">
    <slot v-bind="item">
      <h3 class="Timeline--year">
        {{item.year}}
      </h3>
      <div class="Timeline--text" v-html="item.text"/>
      <img class="Timeline--media" :src="item.img">
    </slot>
  </li>

</ol>
</template>

<script>
export default {
  name: "Timeline",
  props:{
    list:{
      type: Array,
    },
    timeline:{
      type: Array,
    },
  },
  computed:{
    entries(){
      return this.list || this.timeline || []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
.Timeline {

  $B: #{&};
  $maxw: 50rem;
  
  & { // BASE RULESET
    & {
      list-style: none;
      margin: 0 auto;
      width: 100%;
      max-width: $maxw;
    }
    &--year {
      margin: 0 0 .3em;
      font-size: 2.75em;
      font-family: georgia;
      font-weight: 100;
      font-style: italic;
      color: Color(theme);
    }
  }

  & { // MOBILE
    & {
      text-align: right;
      // padding-right: 1rem;
    }
    &--tick {
      position: relative;
      z-index: 1;
      padding: 1em 2rem 1em 0;
      border-right: 1px solid Color(theme);
      &:first-child { padding-top:    0 !important }
      &:last-child  { padding-bottom: 0 !important }
    }
    &--year {
      position: relative;
      &:after {
        content: "•";
        
        position: absolute;
        top: 50%;
        right: -2.5rem;
        
        width: 1rem;
        height: 1rem;
        transform: translateY(-50%);
        margin-top: 3px;

        background-image: url("~@/assets/list-bullet.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        color: transparent;
        border-radius: 100%;

        .UiPanel[class*="UiTheme_light"] &, & {
          background-color: Color(light);
          box-shadow: 0 0 0 .5em Color(light);
        }
        .UiPanel[class*="UiTheme_cream"] & {
          background-color: Color(cream);
          box-shadow: 0 0 0 .5em Color(cream);
        }
        .UiPanel[class*="UiTheme_dark"] & {
          background-color: Color(dark);
          box-shadow: 0 0 0 .5em Color(dark);
        }
        .UiPanel[class*="UiTheme_rust"] & {
          background-color: Color(alt);
          box-shadow: 0 0 0 .5em Color(alt);
        }
      }
      &:before {
        content: "—";
        
        position: absolute;
        top: 50%;
        width: .75em;
        height: 3px;

        transform: translate(-100%,1px);
        margin-left: -.3em;

        color: transparent;
        background: Color(theme);
      }
    }
    &--media {
      position: relative;
      width: 75%;
      max-height: 75%;
      object-fit: contain;
      object-position: center;
      margin-top: 2rem;
      margin-right: -2rem;
      transform: translateX(1px);
      z-index: -1;
    }
  }

  @include Break( min-width Breaks(2) ){ // DESKTOP
    &--tick {
      & {
        width: 50%;
        max-width: $maxw / 2;
        // margin: 0 0 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      &:nth-child(even) {
        margin-left: auto;
        margin-right: 1px;
        padding: 0 0 1rem 2rem;
        text-align: left;
        border: solid Color(theme);
        border-width: 0 0 0 1px;
        #{$B}--year {
          &:before {
            z-index: 1;
            left: 0;
            width: .4em;
            height: 2px;
            margin: 0;
            transform: translate(-.5em,.04em);
          }
          &:after {
            right: unset;
            left: -2.5rem;
          }
        }
      }
      &:nth-child(odd) {
        #{$B}--year:before {
          z-index: 1;
          right: 0;
          width: .4em;
          height: 2px;
          margin: 0;
          transform: translate(.5em,.04em);
        }
      }
    }
    &--media {
      position: absolute;
      top: 50%;
      width: 100%;
      margin: 0;
      transform: translateY(-50%);
      margin-top: .5rem;
      #{$B}--tick:nth-child(odd) & {
        left: 100%;
        padding-left: 2rem;
      }
      #{$B}--tick:nth-child(even) & {
        right: 100%;
        padding-right: 2rem;
      }
    }
  }

}
</style>
