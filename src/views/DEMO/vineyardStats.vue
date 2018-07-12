<template>
<div id="Demo">

  <UiPanel class="UiTheme_dark">
    <UiBox>
      <UiHeading>Demo Page</UiHeading>
    </UiBox>
  </UiPanel>

  <UiBox v-if="context.acf.vineyardStats" v-for="stats in context.acf.vineyardStats">
  <div>
    <UiHeading :level="5">{{stats.title}}</UiHeading>
    <div v-if="context.acf.vineyardStats" v-for="item in stats.content">
      <b>{{item.label}}</b>
      <span>{{item.text}}</span>
    </div>
  </div>
  </UiBox>

</div>
</template>

<script>
import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiHeading from "@/components/UI/Heading"

let
context = {
  acf: {
    vineyardStats:[
      {
        "title": "Grape Stats",
        "content": [
          {
            "label": "Varietal",
            "text": "Pinot Noir"
          },
          {
            "label": "Clones",
            "text": "Pommard, Dijon 115 & 777, Rochioli, DRC Suitcase Clone"
          },
          {
            "label": "RootStocks",
            "text": "5BB, 140R, 1103R, 3309C"
          }
        ],
        "layout": "column"
      },
      {
        "title": "Vineyard Stats",
        "content": [
          {
            "label": "Acreage",
            "text": "7"
          },
          {
            "label": "Positioning",
            "text": "Various. North and Northeast"
          },
          {
            "label": "Topography",
            "text": "Sloping hillside"
          },
          {
            "label": "Elevation",
            "text": "600'"
          },
          {
            "label": "Soil",
            "text": "Sandy loam with clay and sandstone"
          },
          {
            "label": "Trellising",
            "text": "Bi-lateral cordon"
          },
          {
            "label": "Irrigated",
            "text": "Yes"
          },
          {
            "label": "Cover",
            "text": "Vetch, peas, and oats"
          }
        ],
        "layout": "column"
      }
    ]
  }
}

export default {
  name:"Demo",
  components:{
    UiPanel,
    UiBox,
    UiHeading,
  },
  data:()=>( {context} ),
}
</script>

<style lang="scss" scoped>
</style>
