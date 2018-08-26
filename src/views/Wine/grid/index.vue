<template>
  <img v-if="context.loading | loading" src="@/assets/preloader.gif" alt="Loading...">
  <div id="WineGrid" v-else>


    <div v-if="context.error || !context.length" class="WineGrid--slot-error">
      <slot name="error" v-bind="context.error"/>
    </div>
    
    <template v-else>
      <div class="WineGrid">
        <router-link
            v-if="item.categories.indexOf(10)>=0 /*extra check to only show wines!*/"
            v-for="item in context"
            :to="`/wine/${item.slug}`"
            :key="item.id"
            class="WineGrid--item"
            >
          <WineWidget
            :id="item.id"
            :name="item.title ? item.title.rendered : ''"
            :image="item.acf._thumbnail_id"
            :price="'Release-Price' in item.acf && item.acf['Release-Price']"
            :date="item.date"
            />
        </router-link>
      </div>

      <div class="WineGridPagination" :class="{ WineGridPagination_sticky: sticky }" v-if="paginate && !context.loading && context.length">
        <div style="margin-right:auto">
          <slot name="pagination-first"/>
        </div>
        <span @click="( page = getPrevPage() )" :class="{ disabled: page==1 }">
          <UiIcon name="ArrowLeft" width="1rem" height="1rem"/>
        </span>

        <span class="pageChit" v-text="'…'" v-if="page > 3"/>
        <span class="pageChit" v-for="i in [2,1]" v-if="page-i > 0" @click="(page = getPrevPage(i))">
          {{page-i}}
        </span>
        <b class="pageChit" v-text="page"/>
        <span class="pageChit" v-for="i in [1,2]" v-if="page+i <= pages.totalPages" @click="(page = getNextPage(i))">
          {{page+i}}
        </span>
        <span class="pageChit" v-text="'…'" v-if="page < pages.totalPages - 2"/>
        
        <span class="pageChit" @click="( page = getNextPage() )" :class="{ disabled: page==pages.totalPages }">
          <UiIcon name="ArrowRight" width="1rem" height="1rem"/>
        </span>
        <div style="margin-left:auto">
          <slot name="pagination-last"/>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import WpConnect from "@/VuePress/mix/connect"

import UiList from "@/components/UI/List"
import UiIcon from "@/components/UI/Icon"
import UiHeading from "@/components/UI/Heading"

import WineWidget from "@/components/modules/Wine"
// import fallback from "@/assets/bottles/default.png"

export default {
  name: "WineGrid",
  mixins:[ WpConnect ],
  components:{ UiList, UiIcon, UiHeading, WineWidget },

  inheritAttrs: true,
  props:{
    wpx:{
      type: Function
    },
    paginate:{
      type:[ Boolean, Number, String ],
      default: 10,
    },
    sticky:{
      type: Boolean,
      default: false,
    },
  },
  computed:{
    page:{
      get(){
        return parseInt(this.$root.filters.page) || 1
      },
      set(v){
        this.$set( this.$root.filters, 'page', parseInt(v) || 1 )
      },
    },
    pages(){
      if( !this.API && this.context.loading ) return
      return this.context._paging
    },
    endpoint(){
      if( !this.API ) return

      let endpoint = this.API.posts().page(this.page||1)

      if( typeof this.wpx == 'function' )
        endpoint = this.wpx( endpoint )
      else 
        endpoint = endpoint
          .category([this.category||'wine'])

      let
      per = this.paginate || 12,
      off = this.paginate  % 4
      per = per - off
      
      return endpoint.perPage(per)//.embed()
    },
  },

  methods:{
    getNextPage( i=1 ){
      let
      page = this.page,
      pages = this.pages
      return parseInt(page||1)<pages.totalPages ? parseInt(page||1)+i : 1
    },
    getPrevPage( i=1 ){
      let
      page = this.page,
      pages = this.pages
      return parseInt(page||1)>1 ? parseInt(page||1)-i : pages.totalPages
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
#WineGrid {
  width: 100%;
}
.WineGrid {
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2em;
  }
  &--item {
    display: flex;
    flex-flow: nowrap column;
    justify-content: flex-end;
    height: 100%;
    >.WineWidget:only-child { height: 100% }
  }
  
  a { text-decoration: none }
  
  @include Break( max-width Breaks(4) ){
    /deep/ .WineWidget--detail { font-size: .8em; }
  }
  @include Break( max-width Breaks(4) ){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
  }
  @include Break( max-width Breaks(3) ){
    grid-template-columns: 1fr 1fr;
  }
  @include Break( max-width Breaks(2) ){
    // /deep/ .WineWidget--detail td:not(:first-child) { display: none }
  }

  &--slot {
    &-error {
      .UiHeading { color: Color(alt) }
    }
    // &-nullset {}
  }

  &Pagination {
    color: Color(theme);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    user-select: none;
    > * {
      padding: 0.5rem
    }
    .disabled {
      color: Color(silver);
      opacity: 0.5;
      cursor: default;
    }
    &_sticky {
      z-index: 9;
      position: sticky;
      bottom: -1px;
      margin-bottom: -2rem;
      background: rgba(Color(light),.95);
    }
  }  
}
.pageChit {
  width: 2rem;
  text-align: center;
}
</style>
