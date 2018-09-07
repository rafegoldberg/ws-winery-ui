<template>
  <div id="AppLoad">
    <UiPanel :class="{
        [`UiTheme_${theme}`]: theme
        }">
      <UiBox class="UiBox_stack">
        <img :src="spinner">
        <!-- Loading... -->
      </UiBox>
    </UiPanel>
  </div>
</template>
<script>
import UiPanel from '@/components/UI/Panel'
import UiBox   from '@/components/UI/Box'
import spinner from '@/assets/preloader.gif'
export default {
  name: "Loading",
  components:{ UiPanel, UiBox },
  data:()=>({ spinner }),
  props:[ 'theme' ]
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
#AppLoad {
  .UiBox {
    min-height: 100vh;
    @include Break( max-width Breaks(4) ){
      margin-top: -4rem;
      padding-top: 9rem;
    }
    justify-content: center;
    align-self: stretch;
  }
}
</style>
