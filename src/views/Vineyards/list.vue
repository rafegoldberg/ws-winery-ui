<template>
  <main id="VineyardsList" v-if="!context.loading">
    
    <UiBox>
      <UiList :list="context">
        <router-link :to="item.slug"
                      append
                      slot-scope="{item}">
          {{ item.name || item.title.rendered }}
          {{$log(item)}}
        </router-link>
      </UiList>
    </UiBox>


  </main>
  <UiBox v-else style="text-align: center; min-height: 68vh">
    Loading...
  </UiBox>
</template>

<script>
import WpConnect from "@/VuePress/mix/connect"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiHeading from '@/components/UI/Heading'
import UiList from '@/components/UI/List'

export default {
  name: "VineyardsList",
  props:[
    'type',
    'category',
    'parent',
    'include',
    'exclude',
  ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel, UiBox,
    UiList, UiHeading
  },
  methods: {
    fetch() {
      let ep = this.endpoint
      
      if( this.parent )
        ep = ep.parent(this.parent)
      if( this.category )
        ep = ep.category(this.category)
      if( this.include )
        ep = ep.include(this.include)
      if( this.exclude )
        ep = ep.exclude(this.exclude)

      return ep
    }
  },
}
</script>
