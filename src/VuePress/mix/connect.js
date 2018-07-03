import WP from "../WP";
export default {
  props: {
    type: {
      default: "posts",
      type: String,
    },
  },
  methods: {
    fetch() {
      return this.endpoint
    }
  },
  computed: {
    endpoint(){
      if (this.API && this.type) return this.API[this.type]();
    }
  },
  asyncComputed: {
    async API() {
      let API = await WP;
      this.$emit("vp.ready");
      return API;
    },
    context: {
      default: {loading:true},
      async get() {
        if ( !this.API || !this.endpoint )
          return {loading:true}

        let
        error = false,
        data  = await this
          .fetch()
          .get()
          .catch(e=>( error = e ))

        if (error) return {error}
        return data
      },
      // watch() { this.$route.params }
    }
  }
}