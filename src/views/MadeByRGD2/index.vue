<template>
  <div id="MadeBy" class="MadeBy">
    <UiPanel class="UiTheme_dark" style="text-decoration: none">
      <UiBox tag="a" href="http://rgd2.co/next/about">
        <img :src="dataImg">
      </UiBox>
      <UiBox class="UiBox_stack UiBox_tall  UiTheme_cream" style="justify-content: center; text-align: center">
        <hr style="margin: auto 0 2em">
        <small style="letter-spacing: .75em; font-weight: 100">
          DEVELOPED B<span style="letter-spacing: 0">Y</span>
        </small>
        <UiHeading
          :level="1"
          style="margin-bottom: 0; position: relative;"
          >
          <b style="letter-spacing: -.05em">RGD2</b>
          <small style="font-size: .8rem; font-weight: 900; position: absolute; top: 100%; right: 0; margin-top: -1.3em; opacity: .4">Co.</small>
        </UiHeading>
        <hr style="margin: 2em 0">
        <small style="margin-bottom: auto; font-weight: 600; color: #BA9454">
          <a href="http://rgd2.co/next/about">Portfolio</a>  •  
          <a href="https://www.linkedin.com/in/rafegoldberg">LinkedIn</a>  •  
          <a href="https://dribbble.com/rgd2">Dribbble</a>
          <br>
          <span style="font-weight: 400; letter-spacing: .1em;">BUILT WITH LOVE &amp; CALIFORNIA SUNSHINE</span>
        </small>
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

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";

hr {
  min-width: 100%;
  height: 1px;
  background-color: Color(theme);
  opacity: .4;
}

.UiBox:first-child {
  img {
    height: 300px;
  }
}

@include Break( (min-width Breaks(3)) (max-width Breaks(4)) ){
  .UiBox {
    min-height: 100vh;
  }
}
@include Break( max-width Breaks(3) ){
  hr:first-child { display: none }
  .UiBox:first-child {
    order: 1;
    padding: 2rem;
    min-height: 36vh;
    flex: 0;
    img {
      width: auto;
      max-width: unset;
      max-height: 25vh;
    }
  }
}
@include Break( max-width Breaks(1) ){
  .UiBox:first-child img {
    width: 100%;
    max-width: 12em;
    height: auto;
    max-height: unset;
  }
}
</style>
