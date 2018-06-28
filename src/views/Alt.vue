<template>

  <main class="alt">
    <VPItem></VPItem>
    <!-- <article>
      <VPList>
        <template slot-scope="item">
          <h2>{{item.title && item.title.rendered}}</h2>
          <pre>{{item}}</pre>
        </template>
      </VPList>
    </article> -->
  </main>

</template>

<script>
export default {
  components: {
    VPList:()=> import(
      /* webpackChunkName: "VuePress" */
      "@/VuePress/list"
    ),
    VPItem:()=> import(
      /* webpackChunkName: "VuePress" */
      "@/VuePress/item"
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
    max-height: 75vh;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 1em;
  }
}
</style>
