<template>
<div id="WineArchive" class="WineArchive" v-if="!context.loading">

  <div class="WineArchive--grid" v-for="item in context">
    <WineWidget
      :name="item.title.rendered"
      :image="media(item)"
      :vintage="item['ws:fields']['Release-Date'][0]"
      :price="item['ws:fields']['Release-Price'][0]"
      />
  </div>

</div>
</template>

<script>
import WpConnect from "@/VuePress/mix/connect"

import UiList from "@/components/UI/List"
import WineWidget from "@/components/modules/Wine"

export default {
  name: "WineArchive",
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
      let
      src = item._embedded["wp:featuredmedia"][0].source_url
      return src.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
    }
  }
}
</script>

<style lang="scss" scoped>
.WineArchive {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: ". . .";
  grid-gap: 2em
}
</style>
