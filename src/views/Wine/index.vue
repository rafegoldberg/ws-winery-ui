<template>
<div id="WineFiltersWrap">
<UiPanel class="UiTheme_light">

  <div class="WineFilters" :class="{open:isOpen}">
    <button class="WineFilters--ribbon" @click="(isOpen=isOpen?false:true)">
      <span>{{isOpen ? 'Close' : 'Filters'}}</span>
      <UiIcon name="CircleClose" width="1.66rem" height="1.66rem"></UiIcon>
    </button>
    <form class="WineFilters--inner">
      <header class="WineFilters--header">
        <UiHeading :level="4" v-text="'Sort & Filter'"/>
        <UiButton v-if="hasFilters()" class="UiTheme_rust" @click.native.prevent="clearFilters">Clear</UiButton>
      </header>
      <FiltersGroup
        @filtered="filterOpt"
        title="Varietal"
        term="varietals"
        :show="true"
        :wpx="wpapi=>wpapi
          .varietals()
          .exclude([62,5])
          .perPage(20)
        "/>
      <FiltersGroup
        @filtered="filterOpt"
        title="Vineyard"
        type="radio"
        :show="false"
        :wpx="wpapi=>wpapi
          .categories()
          .parent(73) // vineyards
          .exclude([25,26]) // growers + estate vineyards
          .perPage(50)
        "/>
      <FiltersGroup
        term="tags"
        title="Vintage"
        class="FiltersGroup_pills"
        :show="false"
        :wpx="wp=>wp
          .tags()
          .exclude([69,72]) // spring, port
          .perPage(80)
        "/>
    </form>
  </div>

  <UiBox @click.self.native="(isOpen=false)">
    <keep-alive>
      <router-view :wpx="wpx" paginate="12">
        <div slot="error" class="">
          <UiHeading :level="3" class="UiHeading_bold UiHeading_tighten">
            No Matches
          </UiHeading>
          <p>We don't have any wines that match those filters. Try clearing your filters to start over.</p>
          <UiButton class="UiTheme_rust" @click.native="clearFilters">Clear Filters</UiButton>
        </div>
      </router-view>
    </keep-alive>
  </UiBox>

</UiPanel>
</div>
</template>

<script>
import Vue from "vue"

import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiIcon from "@/components/UI/Icon"
import UiHeading from "@/components/UI/Heading"
import UiButton from "@/components/UI/Button"

import WineGrid from "@/components/modules/Wine/grid"
import FiltersGroup from "./filters/group"

export default {
  name: "WineFilters",
  props:["page"],
  components:{
    UiPanel,
    UiBox,
    UiIcon,
    UiHeading,
    UiButton,
    WineGrid,
    FiltersGroup
  },
  data:()=>({
    wpx(WP){
      return WP.param(this.$root.filters||{categories:[10]})
    }
  }),
  methods:{
    filterOpt(filters){
      this.wpx = wpt=> wpt.param(filters)
    },
    clearFilters(){
      Object.keys(this.$root.filters).map(k=>{
        var filter = this.$root.filters[k]
        filter.splice && filter.splice(0,filter.length) || this.$set(this.$root.filters,k,[])
      })
    },
    hasFilters(){
      var
      vals = Object.values(this.$root.filters)
      vals = vals.filter( v=> v.length | v )
      return vals.length ? true : false
    },
  },
  computed:{
    isOpen:{
      get(){
        return this.$root.showFilters
      },
      set(v){
        this.$root.showFilters = v ? true : false
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";

$topoff: 6rem;
$sidebar-width: 18rem;
$sidebar-pad:   2rem 1.5rem;
$ribbon-height: 2.25rem;

%rack {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * + * { margin-left: 1rem }
}

.WineGrid {
  flex: 1;
}
.WineFilters {

  $B: #{&};
  $OPEN: '.open';

  position: sticky;
  top: -1px;
  z-index: 20;

  justify-content: flex-start;
  flex: 0 1 $sidebar-width !important;
  align-self: flex-start;

  height: 100vh;
  max-height: 100vh;
  min-width: $sidebar-width;
  width: $sidebar-width;
  max-width: $sidebar-width;
  overflow: visible;
  margin: $topoff 0 0;
  margin: $topoff 0 1px;

  // border-right: 1px solid rgba(13,13,13,.13);
  box-shadow: -.5em 0 0 -1.5em rgba(black,0);
  
  transition: .38s ease-out;
  transition-property: opacity transform margin-left;
  
  &#{$OPEN} {
    // overflow: hidden;
    // box-shadow: 0 0 3em 0 rgba(black,.1);
    // box-shadow: 1.5em -1.5em 3em -1em rgba(black,.1);
  }
  &:not(#{$OPEN}) {
    transform: translateX(-100%);
    margin-left: -$sidebar-width;
  }

  @at-root .UiBox:last-child {
    #{$B} + & {
      opacity: 1;
      transition: .19s .19s ease-out;
    }
    #{$B}#{$OPEN} + & {
      @include Break( max-width Breaks(3) ){
        opacity: .5;
        > * { pointer-events: none !important }
      }
    }
  }

  &:after {
    $matte: Color(light);
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: -1px;
    left: 0;
    pointer-events: none;
    background: linear-gradient(
      to top,
      $matte 3px,
      rgba($matte,.3) 2em,
      rgba($matte,0) 3em
      );
    z-index: 2;
  }
  &--ribbon {
    // content: "Filters";
    cursor: pointer;
    appearance: none;
    user-select: none;

    z-index: 9;
    position: absolute;
    left: 100%;
    top: 0;
    
    @extend %rack;

    height: $ribbon-height;
    min-width: 5.5em;
    margin-left: $sidebar-width;
    padding: .1em nth($sidebar-pad,2);

    font: inherit;
    font-size: .9em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: Color(light);
    border-width: 0 !important;
    outline: none;
    background: Color(dark);
    box-shadow: .5em .25em 2em -.25em rgba(Color(dark),.3);

    transition: inherit;

    #{$B}#{$OPEN} & {
      // transition: .38s 0s ease-out;
      min-width: 100%;
      padding-left: nth($sidebar-pad,2);
      padding-right: nth($sidebar-pad,2);
      margin-left: -$sidebar-width;
      color: Color(silver);
      box-shadow: 2px 0 0 0 Color(dark);
      box-shadow: 0 0 0 0 Color(dark);
    }

    & .UiIcon {
      position: absolute;
      right: nth($sidebar-pad,2);
      margin-right: -5px;
      opacity: 0;
      transition: inherit;
    }
    #{$B}#{$OPEN} & .UiIcon {
      opacity: 1;
      transition-delay: 0s;
    }
    #{$B}#{$OPEN} &:hover .UiIcon {
      transition-delay: .38s;
      &:hover { transition-delay: .0s !important }
    }
    #{$B}#{$OPEN} &:not(:hover) .UiIcon { filter: invert(.75) }
    
  }
  &--header {
    @extend %rack;
    .UiButton {
      font-size: 0.7em;
      margin-top: -0.25 * nth($sidebar-pad,2);
      margin-right: -0.25 * nth($sidebar-pad,2);
    }
  }
  &--inner {
    z-index: 1;
    position: relative;
    width: 100%;
    max-height: 100%;
    max-height: calc( 100% - #{$ribbon-height});
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    margin-top: $ribbon-height;
    padding: 0 nth($sidebar-pad,2);
    background: transparent;
    background: Color(light);
    border-width: 0;

    box-shadow: 1.5em -2.5em 3em -1.25em rgba(Color(dark),.08);
    // box-shadow: 0 0 3em 0 rgba(black,.1);

    >:first-child { margin-top:    2rem }
    >:last-child  { margin-bottom: 2rem }
  }
  @include Break( max-width Breaks(3) ){
    margin-top: 6.45rem;
  }
  @include Break( max-width Breaks(3) ){
    & {
      // z-index: 8;
      // &#{$OPEN} { z-index: 9999 }
      // position: fixed;
      top: 0;
      // left: 0;
      // bottom: 0;
      box-shadow: 1em 0 4em -2em rgba(black,.63);
    }
    &#{$OPEN} {
      overflow: hidden;
      margin-right: -$sidebar-width;
    }
    &--inner {
      min-height: 100%;
      >:last-child { margin-bottom: 3rem }
    }
    + :last-child { padding-top: 12rem }
    @at-root #WineFiltersWrap > .UiPanel { flex-flow: nowrap row }
    /deep/ .UiHeading { text-align: left !important }
  }
}
</style>
