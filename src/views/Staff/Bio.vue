<template>
<main v-if="!context.loading" id="StaffBio" class="wrap" style="text-align: center">

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