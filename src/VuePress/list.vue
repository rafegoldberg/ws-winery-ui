<template>
  <div v-if="!context.loading && !context.error">
    <slot v-for="item in context" :item="item">
      {{item}}
    </slot>
    <slot name="pagination" :paging="context._paging">

    </slot>
  </div>
</template>

<script>
import VpConnect from "./connect";
import LoadCase from "@/components/case/load";
import ErrorCase from "@/components/case/error";

export default {
  name: "VpList",

  loading: LoadCase,
  error: ErrorCase,

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
