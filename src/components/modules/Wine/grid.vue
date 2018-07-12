<template>
<div id="WineGrid" class="WineGrid UiTheme_light" v-if="!context.loading">

  <router-link v-for="item in context" :to="`/wines/${item.slug}`" :key="item.id" class="WineGrid--item">
    <WineWidget
      :name="item.title.rendered"
      :image="media(item)"
      :vintage="'Release-Date' in item['ws:fields'] && item['ws:fields']['Release-Date'][0]"
      :price="'Release-Price' in item['ws:fields'] && item['ws:fields']['Release-Price'][0]"
      />
  </router-link>

</div>
</template>

<script>
import WpConnect from "@/VuePress/mix/connect"

import UiList from "@/components/UI/List"
import WineWidget from "@/components/modules/Wine"

export default {
  name: "WineGrid",
  mixins:[ WpConnect ],
  computed:{
    endpoint(){
      if( !this.API ) return
      return this.API
        .posts()
        .category(['wine',this.category])
        .embed()
    }
  },
  components:{ UiList, WineWidget },
  methods:{
    media(item){
      if( this.context.loading ) return
      if( "wp:featuredmedia" in item._embedded ){
        let
        src = item._embedded["wp:featuredmedia"][0].source_url
        return src.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
.WineGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  &--item {
    display: flex;
    flex-flow: nowrap column;
    justify-content: flex-end;
    height: 100%;
  }
  
  a { text-decoration: none }
  
  @include Break( max-width Breaks(3) ){
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  @include Break( max-width Breaks(2) ){
    /deep/ .WineWidget--detail td:not(:first-child) { display: none }
  }
}
</style>
