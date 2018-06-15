<template>
  <pre>{{context}}</pre>
</template>

<script>
import VpConnect from "./connect";

export default {
  name: "VpItem",
  extends: VpConnect,
  props: {
    type: { type: String, default: "posts" }
  },
  asyncComputed: {
    context: {
      default: { loading: true },
      async get() {
        if (!this.API) return { loading: true };

        let error = false,
          data = await this.fetch(this.API)
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
};
</script>
