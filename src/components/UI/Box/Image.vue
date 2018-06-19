<template>
<UiBox class="UiBoxImage" :style="{backgroundImage:src}">

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
    src(){ return `linear-gradient(
      to bottom,
      rgba(0,0,0,.0) 15%,
      rgba(0,0,0,.6) 85%, 
      rgba(0,0,0,.7) 95%
    ), url(${this.img})` }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
.UiBoxImage {
  min-height: 50vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  flex-flow: nowrap column;
  justify-content: flex-end;
  align-items: center;
}
</style>
