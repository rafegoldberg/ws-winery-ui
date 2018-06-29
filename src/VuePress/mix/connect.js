import WP from "../WP";
export default {
  methods: {
    fetch() {
      return this.endpoint
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
}