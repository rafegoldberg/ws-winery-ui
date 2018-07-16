<template>
<div id="WineFiltersWrap">
<UiPanel class="UiTheme_light">

  <div class="WineFilters UiTheme_light">
    <div class="WineFilters--inner">
      <UiHeading>Filters</UiHeading>
      <FiltersGroup @filtered="test" title="Vineyard" :show="false" :wpx="wpapi=>wpapi
        .categories()
        .parent(73) // [vineyards:#73|varietal:#10]
        .exclude([25,26]) // growers + estate vineyards
        .perPage(50)
        "/>
      <FiltersGroup @filtered="test" title="Varietal" :show="false" :wpx="wpapi=>wpapi
        .categories()
        .parent(10) // [vineyards:#73|varietal:#10]
        //.exclude([62,5])
        .perPage(50)
        "/>
    </div>
  </div>

  <UiBox class="UiTheme_cream">
    <router-view :wpx="wpx" :page="page||1" paginate="20"/>
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
    wpx: wpapi=> wpapi.categories([10])
  }),
  methods:{
    test(filters){
      this.page = 1;
      this.wpx  = WP=>WP.categories( filters || [] )
    }
  }
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
  margin: 0;

  position: sticky;
  top: 0;
  height: 100vh;
  height: 100vh;
  overflow: visible;

  align-self: flex-start;
  justify-content: flex-start;

  width: $sidebar-width;
  max-width: $sidebar-width;
  flex: 0 1 $sidebar-width !important;
  
  z-index: 20;

  transition: .38s ease-out;
  transition-property: opacity transform margin-left;

  &:before {
    content: "Filters";
    position: absolute;
    top: 5.5rem;
    left: 100%;
    margin-left: $sidebar-width;
    padding: 0 1em;
    background: #222;
    color: #fafafa;
    transition: inherit;
    z-index: 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 300;
  }
  &:hover:before {
    margin-left: -$sidebar-width;
    opacity: 0;
  }
  &:not(:hover){
    transform: translateX(-100%);
    margin-left: -$sidebar-width;
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
    &:before {
      top: 4rem;
    }
    + :last-child {
      padding-top: 12rem;
    }
  }
}
// .row 
</style>
