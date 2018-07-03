<template>
<main id="VineyardsList" v-if="!context.loading">

  <!-- <UiHeading style="text-align: center; text-transform: capitalize">
    {{(this.category || this.type).split(/-/g).join(' ')}}
  </UiHeading> -->
  
  <UiBox>
    <UiList :list="context">
      <router-link :to="item.slug"
                    append
                    slot-scope="{item}">
        {{item.name || item.title.rendered}}
        {{$log(item)}}
      </router-link>
    </UiList>
  </UiBox>


</main>
<UiBox v-else style="text-align: center">Loading...</UiBox>
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

<style lang="scss" scoped>
#VineyardsList {
  pre {
    max-width: 72rem;
    white-space: pre;
    max-height: 80vh;
    overflow: scroll;
    margin: 12vh auto 4vh;
    padding: .8rem 1rem;
    border-radius: 5px;
    background: rgba(0,0,0,.05);
  }
}
</style>