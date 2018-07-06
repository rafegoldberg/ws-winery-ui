import WP from "../WP";

export default {
  asyncComputed: {
    async API() {
      let API = await WP;
      this.$emit("vp.ready");
      return API;
    }
  }
}