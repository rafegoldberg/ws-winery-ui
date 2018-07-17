<template>
<div id="WineFiltersWrap">
<UiPanel class="UiTheme_light">

  <div class="WineFilters" :class="{open:sidebar}" off:mouseleave.self="(sidebar=false)">
    <div class="WineFilters--ribbon" v-text="sidebar ? 'Close' : 'Filters'" @click="(sidebar=sidebar?false:true)"/>
    <div class="WineFilters--inner">
      <header class="WineFilters--header">
        <UiHeading :level="4" v-text="'Filter Results'"/>
        <small><UiButton>Apply</UiButton></small>
      </header>
      <FiltersGroup ref="vineyard" @filtered="test" title="Vineyard" :show="false" :wpx="wpapi=>wpapi
        .categories()
        .parent(73) // vineyards
        .exclude([25,26]) // growers + estate vineyards
        .perPage(50)
        "/>
      <FiltersGroup ref="varietal" @filtered="test" title="Varietal" :show="true" :wpx="wpapi=>wpapi
        .categories()
        .parent(10) // wine/:varietal*
        //.exclude([62,5])
        .perPage(20)
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
    UiHeading,
    UiButton,
    WineGrid,
    FiltersGroup
  },
  data:()=>({
    wpx: wpapi=> wpapi.categories([10]),
    sidebar: false,
  }),
  methods:{
    test(filters){
      this.page = 1;
      this.wpx  = WP=>WP.categories( filters || [] )
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";

$sidebar-width: 18rem;
$sidebar-pad:   2rem 1.5rem;

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
    box-shadow: 1.5em 0 3em -1.5em rgba(black,.15);
  }
  &:not(#{$OPEN}) {
    transform: translateX(-100%);
    margin-left: -$sidebar-width;
  }

  @at-root .UiBox:last-child {
    #{$B} + & {
      transition: filter .19s .19s ease-out;
      &:before {
        content: " ";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, .15);
        z-index: 8;
        opacity: 0;
        transition: .38s ease;
        pointer-events: none;
      }
    }
    // #{$B}#{$OPEN} + & {
    //   mix-blend-mode: multiply;
    //   /deep/ .WineWidget { filter: saturate(.2) opacity(.5); }
    //   &:before {
    //     opacity: .25;
    //     pointer-events: auto;
    //   }
    // }
  }

  &--ribbon {
    content: "Filters";
    cursor: pointer;
    user-select: none;

    z-index: 9;
    position: absolute;
    left: 100%;
    top: 5.5rem;
    top: 0;
    
    min-width: 5.5em;
    margin-left: $sidebar-width;
    padding: .1em nth($sidebar-pad,2);

    background: Color(dark);
    color: Color(light);
    font-size: .9em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .1em;

    transition: inherit;

    @extend %rack;
    // transition: .375s .05s ease-out;
    #{$B}#{$OPEN} & {
      // transition: .38s 0s ease-out;
      min-width: 100%;
      padding-left: nth($sidebar-pad,2);
      padding-right: nth($sidebar-pad,2);
      margin-left: -$sidebar-width;
      box-shadow: 2px 0 0 0 Color(dark);
    }
  }
  &--header {
    @extend %rack;
  }
  &--inner {
    z-index: 1;
    position: relative;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    margin-top: 2rem;
    padding: $sidebar-pad;
    background: transparent;
    background: Color(light);
    border-width: 0 1px 1px 0;
  }
  @include Break( max-width Breaks(3) ){
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    box-shadow: 1em 0 3em -1.5em rgba(black,.8);
    /deep/ .UiHeading { text-align: left !important }
    &--ribbon {
      // top: 4rem;
    }
    + :last-child {
      padding-top: 12rem;
    }
  }
}
</style>
