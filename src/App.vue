<template>
  
  <div id="app">
    <AppNav/>
    <router-view/>
  </div>
  
</template>

<script>
import AppNav from "@/components/nav";
export default {
  components: { AppNav }
};
</script>


<style lang="scss">
#app {
  text-align: center;
  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
