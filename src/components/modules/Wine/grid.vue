<template>
<div id="WineGrid">

  <img v-if="context.loading" src="@/assets/preloader.gif" alt="Loading...">
  <div v-else class="WineGrid">
    <router-link v-for="item in context" :to="`/wines/${item.slug}`" :key="item.id" class="WineGrid--item">
      <WineWidget
        :name="item.title ? item.title.rendered : 'Shitpoopfuck'"
        :image="media(item)"
        :vintage="'Release-Date' in item['ws:fields'] && item['ws:fields']['Release-Date'][0]"
        :price="'Release-Price' in item['ws:fields'] && item['ws:fields']['Release-Price'][0]"
        />
    </router-link>
  </div>

  <div class="WineGridPagination" v-if="paginate && !context.loading">
    <router-link :to="`/wine/${ parseInt(page||1)>1 ? parseInt(page||1)-1 : pages.totalPages}`">
      <UiIcon name="ArrowLeft" width="1rem" height="1rem"/>
    </router-link>
    <span>{{page||1}} of {{pages.totalPages}}</span>
    <router-link :to="`/wine/${ parseInt(page||1)<pages.totalPages ? parseInt(page||1)+1 : 1 }`">
      <UiIcon name="ArrowRight" width="1rem" height="1rem"/>
    </router-link>
  </div>

</div>
</template>

<script>
import WpConnect from "@/VuePress/mix/connect"

import UiList from "@/components/UI/List"
import UiIcon from "@/components/UI/Icon"
import WineWidget from "@/components/modules/Wine"

export default {
  name: "WineGrid",
  props:{
    wpx:{
      type: Function
    },
    paginate:{
      type:[ Boolean, Number ],
      default: 10,
    },
    page:{
      type:[ Number, String ],
    }
  },
  inheritAttrs: true,
  mixins:[ WpConnect ],
  computed:{
    pages(){
      if( !this.API && this.context.loading ) return
      return this.context._paging
    },
    endpoint(){
      if( !this.API ) return

      let endpoint = this.API.posts().category([this.category||'wine','wine'])

      if( typeof this.wpx == 'function' )
        endpoint = this.wpx( endpoint )

      let
      per = this.paginate || 9,
      off = this.paginate  % 3
      per = per - off
      
      return endpoint
        .perPage(per)
        .page(this.page||1)
        .embed()
    }
  },
  components:{ UiList, UiIcon, WineWidget },
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
#WineGrid {
  width: 100%;
}
.WineGrid {
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
  }
  &--item {
    display: flex;
    flex-flow: nowrap column;
    justify-content: flex-end;
    height: 100%;
  }
  
  a { text-decoration: none }
  
  @include Break( max-width Breaks(4) ){
    /deep/ .WineWidget--detail { font-size: .8em; }
  }
  @include Break( max-width Breaks(4) ){
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  @include Break( max-width Breaks(2) ){
    /deep/ .WineWidget--detail td:not(:first-child) { display: none }
  }

  &Pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    > * {
      padding: 0.5rem
    }
  }
  
}
</style>
