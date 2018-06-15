<template>
  <img
    :src="url"
    :alt="alt"
    :class="{ 
      loading: acf.loading,
      [`layout--${acf.layout}`]: acf.layout,
    }"
    class="VpImg"
  >
</template>

<script>
import VpConnect from "./connect";
export default {
  name: "vp-img",
  extends: VpConnect,
  props: ["id", "alt", "url"],
  asyncComputed: {
    acf: {
      watch() {
        this.id;
      },
      default: { loading: true },
      async get() {
        if (!this.API || !this.id) return { loading: true };

        let XHR = await this.API.namespace("acf/v3")
          .media()
          .id(this.id)
          .get()
          .then(rsp => rsp.acf);

        return XHR;
      }
    }
  }
};
</script>

<style lang="scss">
.VpImg {
  &.loading {
    display: none;
  }
  &.layout {
    &--right {
      float: right;
      clear: left;
      max-width: 42vw;
      margin: 0 1em 1em;
      margin-right: 0;
    }
    &--left {
      float: left;
      clear: right;
      max-width: 12em;
      margin: 0 1em 1em;
      margin-left: 0;
    }
  }
}
</style>
