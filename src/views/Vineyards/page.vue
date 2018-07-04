<template>
  <main v-if="!context.loading" id="VineyardPage" class="UiTheme_cream">

    <div class="wrap"><div class="wrap_min">
      <UiBox :style="{ justifyContent:'left', paddingLeft:0 }">
        <UiHeading :level="3">
          {{context.title.rendered}}
        </UiHeading>
      </UiBox>
      <article
        v-if="context.content"
        v-html="context.content.rendered"/>
    </div></div>

  </main>
  <UiBox v-else style="text-align: center; min-height: 68vh">Loading...</UiBox>
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
        return this.API["posts"]().slug(this.slug)
    }
  }
}
</script>