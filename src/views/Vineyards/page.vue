<template>

<main v-if="!context.loading" id="VineyardPage" class="wrap" style="text-align: center">
  <UiHeading :level="3">
    {{context.title.rendered}}
  </UiHeading>
  <article  v-if="context.content"
            v-html="context.content.rendered"
            class="wrap_mid"
            style="text-align: initial; margin: 2rem auto"/>
</main>
<div v-else style="text-align: center">Loading...</div>

</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiHeading from '@/components/UI/Heading'

export default {
  name: "VineyardPage",
  props:[ 'type', 'category', 'slug' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel,
    UiBox,
    UiHeading,
  },
  computed:{
    endpoint() {
      if( this.API )
        return this.API[this.type]().slug(this.slug)
    }
  }
}
</script>