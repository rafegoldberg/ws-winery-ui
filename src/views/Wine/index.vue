<template>
<div id="WineFiltersWrap">
<UiPanel class="UiTheme_cream">

  <div class="WineFilters UiTheme_light" :class="{open:sidebar}" @mouseleave.self="(sidebar=false)">
    <div class="WineFilters--ribbon" v-text="'Filters'" @click="(sidebar=true)"/>
    <div class="WineFilters--inner">
      <UiHeading @click="(sidebar=false)">Filter</UiHeading>
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

  <UiBox class="UiTheme_cream">
    <router-view :wpx="wpx" :page="page||1" paginate="5"/>
    <!-- <WineGrid :wpx="wpx" :page="page||1"/> -->
  </UiBox>

</UiPanel>
</div>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiHeading from "@/components/UI/Heading"

import WineGrid from "@/components/modules/Wine/grid"
import FiltersGroup from "./filters/group"

export default {
  name: "WineFilters",
  props:["page"],
  components:{
    UiPanel,
    UiBox,
    UiHeading,
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

$sidebar-width: 16rem;

%rack {
  display: flex;
  justify-content: space-around;
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

  align-self: flex-start;
  justify-content: flex-start;
  height: 100vh;
  height: 100vh;
  margin: 0;
  overflow: visible;

  width: $sidebar-width;
  max-width: $sidebar-width;
  flex: 0 1 $sidebar-width !important;
  box-shadow: 1em 0 0 -1.5em rgba(black,0);
  
  z-index: 20;

  transition: .38s ease-out;
  transition-property: opacity transform margin-left;
  
  &#{$OPEN} {
    box-shadow: .5em 0 3em -1.5em rgba(black,.3);
  }
  &:not(#{$OPEN}) {
    transform: translateX(-100%);
    margin-left: -$sidebar-width;
  }

  &--ribbon {
    content: "Filters";
    z-index: 0;
    position: absolute;
    top: 5.5rem;
    left: 100%;
    margin-left: $sidebar-width;
    padding: 0 1em;
    background: Color(dark);
    color: Color(light);
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    user-select: none;
    transition: inherit;
    #{$B}#{$OPEN} & {
      margin-left: -$sidebar-width;
      opacity: 0;
    }
  }
  &--inner {
    position: relative;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding: 2rem;
    z-index: 1;
    background: transparent;
  }
  @include Break( max-width Breaks(3) ){
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    box-shadow: 1em 0 3em -1.5em rgba(black,.8);
    /deep/ .UiHeading { text-align: left !important }
    &--ribbon {
      top: 4rem;
    }
    + :last-child {
      padding-top: 12rem;
    }
  }
}
// .row 
</style>
