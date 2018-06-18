<template>
<div class="UiBox">
  <slot/>
</div>
</template>
<script>
export default {
  name: "UiBox"
}
</script>
<style lang="scss" scoped>
.UiBox {
  align-self: center;
  padding: 4em 3em;
}
</style>
