<template>
<div id="WineFiltersWrap">
<UiPanel class="UiTheme_light">

  <div class="WineFilters" :class="{open:sidebar}" off:mouseleave.self="(sidebar=false)">
    <button class="WineFilters--ribbon" @click="(sidebar=sidebar?false:true)">
      <span>{{sidebar ? 'Close' : 'Filters'}}</span>
      <UiIcon name="CircleClose" width="1.66rem" height="1.66rem"></UiIcon>
    </button>
    <div class="WineFilters--inner">
      <header class="WineFilters--header">
        <UiHeading :level="4" v-text="'Sort & Filter'"/>
        <UiButton @click.native="(sidebar=false)">Apply</UiButton>
      </header>
      <FiltersGroup ref="varietal" @filtered="filterCat" title="Varietal" :show="true" :wpx="wpapi=>wpapi
        .categories()
        .parent(10) // varietal
        .perPage(20)
        "/>
      <FiltersGroup ref="vineyard" @filtered="filterCat" title="Vineyard" :show="true" :wpx="wpapi=>wpapi
        .categories()
        .parent(73) // vineyards
        .exclude([25,26]) // growers + estate vineyards
        .perPage(50)
        "/>
      <FiltersGroup ref="vintage" @filtered="filterTag" title="Vintage" :show="true" :wpx="wpapi=>wpapi
        .tags()
        .exclude([69]) // spring
        .perPage(80)
        "/>
    </div>
  </div>

  <UiBox>
    <router-view :wpx="wpx" :page="page||1" paginate="12"/>
    <!-- <WineGrid :wpx="wpx" :page="page||1"/> -->
  </UiBox>

</UiPanel>
</div>
</template>

<script>
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
    wpx: wpapi=> wpapi.categories([10]),
    sidebar: true,
  }),
  methods:{
    filterCat(filters){
      // this.page = 1;
      this.wpx  = WP=>WP.categories( filters || [] )
    },
    filterTag(filters){
      // this.page = 1;
      this.wpx  = WP=>WP.tags( filters || [] )
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";

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
  top: 0;
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
  margin: 6rem 0 0;

  border-right: 1px solid rgba(13,13,13,.13);
  box-shadow: -.5em 0 0 -1.5em rgba(black,0);
  
  transition: .38s ease-out;
  transition-property: opacity transform margin-left;
  
  &#{$OPEN} {
    // overflow: hidden;
    box-shadow: 1.5em -1.5em 3em -1em rgba(black,.1);
  }
  &:not(#{$OPEN}) {
    transform: translateX(-100%);
    margin-left: -$sidebar-width;
  }

  @at-root .UiBox:last-child {
    #{$B} + & {
      transition: filter .19s .19s ease-out;
    }
    // #{$B}#{$OPEN} + & {}
  }

  &--ribbon {
    content: "Filters";
    cursor: pointer;
    appearance: none;
    user-select: none;

    z-index: 9;
    position: absolute;
    left: 100%;
    top: 5.5rem;
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
    border-width: 0 1px 1px 0;
    >:first-child { margin-top:    2rem }
    >:last-child  { margin-bottom: 2rem }
  }
  @include Break( max-width Breaks(3) ){
    & {
      // z-index: 8;
      // &#{$OPEN} { z-index: 9999 }
      // position: fixed;
      margin-top: 6.5rem;
      top: -1px;
      // left: 0;
      // bottom: 0;
      box-shadow: 1em 0 3em -1.5em rgba(black,.8);
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
