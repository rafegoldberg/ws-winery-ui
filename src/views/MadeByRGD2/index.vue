<template>
  <div id="MadeBy" class="MadeBy">
    <UiPanel class="UiTheme_dark">
      <UiBox class="UiBox" :img="dataImg">
        <img :src="dataImg" style="height:300px">
      </UiBox>
      <UiBox class="UiBox_stack UiBox_tall  UiTheme_cream">
        <small style="margin-top: auto; letter-spacing: .8em">BUILT BY</small>
        <UiHeading
          :level="1"
          style="margin-bottom: auto;"
          >
          <b style="letter-spacing: -.05em">RGD2</b>
        </UiHeading>
      </UiBox>
    </UiPanel>
  </div>
</template>

<script>
  import UiHeading from "@/components/UI/Heading"
  import UiBox from "@/components/UI/Box"
  import UiBoxImage from "@/components/UI/Box/Image"
  import UiPanel from "@/components/UI/Panel"
  import dataImg from "./RGD2.png"

  export default {
    name:"MadeByRGD2",
    components:{ UiHeading, UiPanel, UiBox },
    data:()=>({ dataImg })
  }
</script>