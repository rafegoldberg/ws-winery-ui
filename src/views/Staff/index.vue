<template>
<main id="StaffList">

  <UiBox v-if="!context.loading">
    <UiList :list="context">
      <router-link slot-scope="employee" :to="employee.slug">
        {{employee.title.rendered}}
      </router-link>
    </UiList>
  </UiBox>
  <span v-else>Loading...</span>

</main>
</template>

<script>
import WpConnect from "@/VuePress/mix/connect"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiHeading from '@/components/UI/Heading'
import UiList from '@/components/UI/List'

export default {
  name: "StaffList",
  props:[ 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel, UiBox,
    UiList, UiHeading
  },
  methods: {
    fetch() {
      return this.endpoint.categories(this.category)
    }
  },
}
</script>

<style lang="scss" scoped>
#StaffList {
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