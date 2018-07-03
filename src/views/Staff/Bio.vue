<template>
<main v-if="!context.loading" id="StaffBio" class="wrap">

  <div class="wrap_min">
    <UiBox :style="{ justifyContent:'left', padding:0 }">
      <UiHeading :level="3" :scale="2">
        {{context.title.rendered}}
      </UiHeading>
    </UiBox>  
    <article  v-if="context.content"
              v-html="context.content.rendered"/>
  </div>

</main>
<div v-else style="text-align: center">Loading...</div>
</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiHeading from '@/components/UI/Heading'

export default {
  name: "StaffBio",
  props:[ 'slug', 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel,
    UiBox,
    UiHeading,
  },
}
</script>

<style lang="scss">
article {
  img { display: none }
}
</style>