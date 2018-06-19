<template>

  <div class="UiPanel">
    <slot/>
  </div>

</template>
<script>
export default {
  name: "UiPanel"
}
</script>
<style lang="scss" scoped>
@import "~@/styles/config/scale";
.UiPanel {

  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-flow: nowrap row;
  @media ( min-width:1015px ) {
    > * { flex: 1 }
    > :only-child {
      flex: 0 $legible;
      margin: 0 auto
    }
  }
  @media ( max-width:1015px ) {
    flex-flow: nowrap column;
    > * {
      width: 100%;
    }
  }
  // display: grid;
  // grid-template-columns: repeat(2,1fr);
  // grid-gap: 0;
}
</style>
