<template>
<div id="StaffList">
  <UiPanel id="StaffLists--group">
    <UiBox class="UiBox_stack" v-for="(term) in context" :key="id">
      <UiHeading v-html="term.name"/>
      <RoleList v-if="!context.loading" v-bind="term"/>
    </UiBox>
  </UiPanel>
</div>
</template>

<script>
import WP from "@/VuePress/mix/connect"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiHeading from '@/components/UI/Heading'
import RoleList from '@/views/DEMO/RoleList'

export default {
  name:"StaffList",
  mixins:[ WP ],
  computed:{
    endpoint(){
      if( this.API ) return this.API.staff_roles().embed()
    },
  },
  components:{
    UiPanel,
    UiBox,
    UiHeading,
    RoleList
  }
}
</script>

<style lang="scss" scoped>
#StaffList {
  list-style-type: none;
}
</style>
