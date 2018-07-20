<template>
<div id="WineGrid">

  <img v-if="context.loading" src="@/assets/preloader.gif" alt="Loading...">

  <div v-else-if="context.error || !context.length" class="WineGrid--slot-error">
    <slot name="error" v-bind="context.error"/>
  </div>
  
  <template v-else>
    <div class="WineGrid">
      <router-link v-for="item in context" :to="`/wines/${item.slug}`" :key="item.id" class="WineGrid--item">
        <WineWidget
          :name="item.title ? item.title.rendered : 'Shitpoopfuck'"
          :image="media(item)"
          :vintage="'Release-Date' in item['ws:fields'] && item['ws:fields']['Release-Date'][0]"
          :price="'Release-Price' in item['ws:fields'] && item['ws:fields']['Release-Price'][0]"
          />
      </router-link>
    </div>

    <div class="WineGridPagination" :class="{ WineGridPagination_sticky: sticky }" v-if="paginate && !context.loading && context.length">
      <span @click="( page = parseInt(page||1)>1 ? parseInt(page||1)-1 : pages.totalPages )">
        <UiIcon name="ArrowLeft" width="1rem" height="1rem"/>
      </span>
      <span>
        <input
            v-model="page"
            type="number"
            :max="pages.totalPages"
            :min="1"
            :placeholder="1"
            :step="1"
            :style="{
              appearance: 'none',
              border: 'none',
              font: 'inherit',
              direction: 'rtl',
              textAlign: 'center',
              width: 'min-content',
              maxWidth: 'max-content',
              display: 'inline-block',
              outline: 'none',
              background: 'rgba(50,50,50,.07)',
              borderRadius: '3px',
              lineHeight: 1.6,
              marginLeft: '-.5rem'
            }"
            />
        <span :style="{ margin:[0,'.5em'] }">of</span>
        <span v-text="pages.totalPages"/>
      </span>
      <span @click="( page = parseInt(page||1)<pages.totalPages ? parseInt(page||1)+1 : 1 )">
        <UiIcon name="ArrowRight" width="1rem" height="1rem"/>
      </span>
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

export default {
  name: "WineGrid",
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
  inheritAttrs: true,
  mixins:[ WpConnect ],
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
      per = this.paginate || 9,
      off = this.paginate  % 3
      per = per - off
      
      return endpoint.perPage(per).embed()
    }
  },
  components:{ UiList, UiIcon, UiHeading, WineWidget },
  methods:{
    media(item){
      if( this.context.loading || !this.context.length ) return
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
@import "~@/styles/theme/colors";
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
    >.WineWidget:only-child { height: 100% }
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

  &--slot {
    &-error {
      .UiHeading { color: Color(alt) }
    }
    // &-nullset {}
  }

  &Pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    > * {
      padding: 0.5rem
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
</style>
