<template>
<div id="WineFiltersWrap">
<UiPanel class="UiTheme_light">

  <UiBox class="WineFilters  UiBox_stack  wrap_flex_min">
    <div style="width: 100%" class="UiTheme_light">
      <UiHeading>Filters</UiHeading>
      <FilterGroup @filtered="test" title="Vineyard" :show="false" :wpx="WP=>WP
        .categories()
        .parent(73) // [vineyards:#73|varietal:#10]
        .perPage(50)
        "/>
      <FilterGroup @filtered="test" title="Varietal" :show="false" :wpx="WP=>WP
        .categories()
        .parent(10) // [vineyards:#73|varietal:#10]
        //.exclude([62,5])
        .perPage(50)
        "/>
    </div>
  </UiBox>

  <UiBox class="UiTheme_cream">
    <WineGrid :wpx="wpx"/>
  </UiBox>

</UiPanel>
</div>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiHeading from "@/components/UI/Heading"

import WineGrid from "@/components/modules/Wine/grid"
import FilterGroup from "./filter/group"

export default {
  name: "WineFilters",
  props:[],
  components:{
    UiPanel,
    UiBox,
    UiHeading,
    WineGrid,
    FilterGroup
  },
  data:()=>({
    wpx: WP=> WP.categories([])
  }),
  methods:{
    test(filters){
      this.wpx = WP=>WP.categories([ ...(filters||[]) ])
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";

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
  padding: 2rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: scroll;

  align-self: flex-start;
  justify-content: flex-start;

  max-width: 20em;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  flex: 0 1 50vw !important;
}
// .row 
</style>
