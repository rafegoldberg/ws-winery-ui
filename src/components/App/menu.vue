<template>

  <nav class="AppMenu" :class="{ AppMenu_open:open }">
    <UiList :list="{
      'Our Vineyards': '/vineyards',
      'Our Wine': '/wine/pinot-noir/2016-westside-road-neighbors-pinot-noir',
      'Our Staff': '/people',
      }">
      <router-link slot-scope="{ item, index }" :to="item" tag="li">
        <a>{{index}}</a>
      </router-link>
    </UiList>
  </nav>

</template>

<script>
import UiList from "@/components/UI/List"

let
defaults = { open:false }

export default {
  name: "AppMenu",
  components:{ UiList },
  data:()=> defaults,
  methods:{
    toggle(){
      this.open = this.open ? false : true
      if( this.open ) this.$emit('open')
      else this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/theme/colors';
@import '~@/styles/extend/themes';
.AppMenu {

  $Base: &;
  @extend %cream, %cream_translucent;
  
  & { // self
    position: absolute;
    top: 100%;
    right: 0;
    width: 12em;
    padding: 0 2em 0 1em;
    // box-sizing: content-box;
    box-shadow: -4px 0 2rem 4px rgba( 48, 41, 3, .08 );
    border-left: 8px solid rgba(Color(theme), .25);
  }
  & { // open
    opacity: 0;
    pointer-events: none;
    &_open {
      &, & #{$Base} {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
  &Trigger {
    
    $pop: rgba(mix(Color(theme),Color(light),68%),.38);
    
    position: relative;
    color: Color(theme);
    transition: .3s;
    box-shadow:
      inset 0 0 0 0 transparent,
      0 0 0 0 transparent,
      0 0 0 0 transparent;
    &:hover {
      box-shadow:
        inset 0 0 0 .6em $pop,
        .5em 0 0 $pop,
        -.5em 0 0 $pop;
    }
  }
}
</style>
