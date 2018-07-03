import WP from "../WP";
export default {
  props: {
    type: {
      type: String,
      default: "posts",
    },
    category: {
      type: [Number,String],
    },
    parent: {
      type: [Number,String],
    },
    include: {
      type: [Number,String,Array],
    },
    exclude: {
      type: [Number,String,Array],
    },
  },
  methods: {
    fetch() {
      return this.endpoint
    }
  },
  computed: {
    endpoint(){
      let type = this.type || 'posts'
      if( this.API ) return this.API[type]()
    }
  },
  asyncComputed: {
    async API() {
      let API = await WP;
      this.$emit("vp.ready");
      return API;
    },
    context: {
      default:{ loading:true },
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
      watch() { return this.$route.params }
    }
  }
}