<template>
<main id="StaffBio">

  <pre v-if="!context.loading">{{context}}</pre>
  <span v-else>Loading...</span>

</main>
</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiButton from '@/components/UI/Button'
import UiHeading from '@/components/UI/Heading'

export default {
  name: "StaffBio",
  props:[ 'slug', 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel, UiBox,
    UiButton, UiHeading
  },
  methods:{
    fetch() {
      return this.endpoint
    }
  }
}
</script>

<style lang="scss" scoped>
#StaffBio {
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