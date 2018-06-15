<template>
  <ul v-if="!context.loading && !context.error">
    <slot name="item" v-for="item in context">
      {{item}}
    </slot>
  </ul>
</template>

<script>
import VpConnect from "./connect";
import MediaBox from "@/components/MediaBox";

export default {
  name: "VpList",
  extends: VpConnect,
  components: { MediaBox },
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
            .then()
            .catch(e => (error = e));

        if (error) return { error };
        if (typeof data == "object" && !Array.isArray(data)) return [data];
        else return data;
      },
      watch() {
        this.$route.params;
      }
    }
  }
};
</script>
