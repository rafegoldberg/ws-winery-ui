<template>
<UiBox class="UiBoxImage" :style="{ backgroundImage:src }">

  <slot/>

</UiBox>
</template>

<script>
import UiBox from '.';
export default {
  name: "UiBoxImage",
  props:[ 'img' ],
  components:{ UiBox },
  computed:{
    src(){ return `url(${this.img})` }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
.UiBoxImage {
  position: relative;
  z-index: 1;
  
  flex: 1 100%;
  flex-flow: nowrap column;
  justify-content: flex-end;
  align-items: center;

  min-height: 50vh;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  color: #FFF;

  &:before {
    content: " ";

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0,0,0,.0) 15%,
      rgba(0,0,0,.6) 85%, 
      rgba(0,0,0,.7) 95%
    );    
  }
}
</style>
