<template>

  <main class="alt">
    <img src="../assets/logo.png">
    <article>
      <VPList>
        <template slot-scope="item">
          <h2>{{item.title && item.title.rendered}}</h2>
          <pre>{{item}}</pre>
        </template>
      </VPList>
    </article>
  </main>

</template>

<script>
export default {
  components: {
    VPList: () => import(
      /* webpackChunkName: "VPList" */
      "@/VuePress/list"
    )
  }
};
</script>

<style lang="scss" scoped>
.alt {
  text-align: left;
  img {
    --offset-l: calc((100vw - 63rem) / 2);
    margin-left: var(--offset-l);
  }
  pre {
    margin: 2em auto;
    font-family: Source Code Pro, monospace;
    max-width: 63rem;
    overflow: scroll;
    max-height: 33vh;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 1em;
  }
}
</style>
