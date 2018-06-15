<template>
  <div class="VPConnect">
    <slot/>
  </div>
</template>

<script>
import WP from "@/includes/lib/WordpressAPI";
export default {
  name: "VpConnect",
  methods: {
    fetch(/*WP*/) {
      return this.endpoint;
    }
  },
  computed: {
    endpoint() {
      if (this.API && this.type) return this.API[this.type]();
    }
  },
  asyncComputed: {
    async API() {
      let API = await WP;
      this.$emit("vp.ready");
      return API;
    }
  }
};
</script>
