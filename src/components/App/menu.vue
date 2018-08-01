<template>

  <nav class="AppMenu"
      :class="{ AppMenu_open:open }"
      @mouseover="(open=true)"
      @mouseout="(open=false)"
      >
    <UiList :list="{
      'Wine Library': '/wines',
      'Our Wines': '/beta/our-wines',
      'Our Vineyards': '/vineyards',
      'Our People': '/people',
      'Our History': '/beta/history',
      'Purchasing': '/beta/purchase',
      'Visit Us': '/beta/visit',
      'Contact Us': '/beta/contact',
      }">
      <router-link slot-scope="{ item, index }" :to="item" tag="li">
        <a style="text-decoration: none">{{index}}</a>
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
    toggle(setTo){
      this.open = this.open ? false : true
      if( this.open ) this.$emit('open')
      else this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
@import '~@/styles/theme/colors';
@import '~@/styles/theme/fonts';
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
    $pop: mix( Color(theme), Color(dark), 98% );

    position: relative;
    color: Color(theme);

    >:first-child {
      
      all: unset;
      appearance: none;

      display: inline-flex;
      justify-content: center;
      align-items: center;      
      
      padding: .34em .5em;
      border-radius: 2px;
      background-color: transparent;
      transition: .3s 0s ease-out;

      >small {
        line-height: 1.6;
        transform: translateY(1px);
      }
    }
    >:first-child:hover,
    >:first-child:focus-within,
    &:hover >:first-child {
      background-color: rgba($pop,.25);
    }
    // #AppNav.cream & {
    //   color: Color(theme);
    // }
  }
  .open,
  .active {
    a {
      font-family: #{$ff-serif};
      white-space: nowrap;
    }
  }
  .open a {
    font-weight: 600;
    letter-spacing: -.015em;
  }
  .active a {
    font-weight: 900;
    letter-spacing: -.03em;
  }
}
</style>