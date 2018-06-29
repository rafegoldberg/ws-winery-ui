import VuePressConnect from "./connect"
export default {
  mixins:[ VuePressConnect ],
  props: {
    type: { type: String, default: "posts" },
  },
  methods: {
    fetch() {
      if( this.id )
        return this.endpoint.id(this.id).embed()
      if( this.slug )
        return this.endpoint.slug(this.slug).embed()
      else
        return this.endpoint.embed()
    }
  },
  asyncComputed: {
    context: {
      default: { loading: true },
      async get() {
        if ( !this.API || !this.endpoint ) return { loading: true };

        let
        error = false,
        data  = await this.fetch()
            .get()
            .catch(e => (error = e));

        if (error) return { error };
        if (typeof data == "object" && Array.isArray(data)) return data[0];
        else return data;
      },
      watch() {
        this.$route.params;
      }
    }
  }
}