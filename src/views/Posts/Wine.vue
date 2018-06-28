<template>
<VPItem :id="id" class="WinePost UiTheme_dark">
    
  <template slot-scope="WP" v-if="!WP.loading">
    
      <header>
        <UiHeading :level="2">Wine Post</UiHeading>
        <UiHeading :level="3" :scale="4">{{WP.title.rendered}}</UiHeading>
      </header>
      <hr>
      <div>
        {{category}}{{hierarchy && "/" + hierarchy.replace('-',' ')}}
      </div>
    
    <pre>{{WP}}</pre>
    {{$log({WP})}}
    
  </template>

</VPItem>
</template>

<script>
import UiHeading from '@/components/UI/Heading';
export default {
  name: "WinePost",
  props:['id','category','hierarchy'],
  components:{
    UiHeading,
    VPItem:()=> import(
      /* webpackChunkName: "VuePress" */
      "@/VuePress/item"
      ),
  },
};
</script>

<style lang="scss" scoped>
.WinePost {
  max-width: 100vw;
  min-height: 100vh;
  /deep/ > *:not(hr) {
    margin: 1.5rem;
    &:first-child {
      margin-top: 0;
      padding-top: 1.5rem;
    }
    &:last-child { margin-bottom: 0 }
  }
  > hr { margin-left: 1.5rem }
  /deep/ pre {
    display: block;
    overflow: scroll;
    max-width: 100%;
    white-space: pre;
    padding: .8em 1em;
    margin-right: 0;
    background-color: rgba(#fff,.063);
    max-height: 68vh;
  }
}
</style>
