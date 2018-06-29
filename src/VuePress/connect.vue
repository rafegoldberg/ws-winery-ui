<template>
<div class="VPConnect">

  <em v-if="context.loading">
    <img style="width: 3em; height: auto; opacity: .5;" src="@/assets/preloader.gif" alt="Loading...">
  </em>
  <slot v-else v-bind="context"/>

</div>
</template>

<script>
import VuePressConnect from '@/VuePress/mix/connect';

export default {
  name: "VpConnect",
  mixins:[ VuePressConnect ]
  // methods: {
  //   fetch(/*WP*/) {
  //     return this.endpoint;
  //   }
  // },
  // computed: {
  //   endpoint() {
  //     if (this.API && this.type) return this.API[this.type]();
  //   }
  // },
  // asyncComputed: {
  //   async API() {
  //     let API = await WP;
  //     this.$emit("vp.ready");
  //     return API;
  //   }
  // }
};
</script>
