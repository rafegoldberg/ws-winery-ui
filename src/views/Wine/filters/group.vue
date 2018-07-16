<template>
<form class="FiltersGroup" v-if="!context.loading" @change="$emit('filtered',filters)">

  <header v-if="title">
    <UiHeading class="UiHeading_bold UiHeading_push UiHeading_spaceHalf" :level="5">
      <button @click.prevent="( show = show ? false : true )" v-html="title" style="all:unset"/>
    </UiHeading>
  </header>
  <FilterItem v-show="show" v-for="item in context" v-bind="item" :ref="item.slug" :key="item.slug"/>

</form>
</template>

<script>
import WP from "@/VuePress/mix/connect"
import UiHeading from "@/components/UI/Heading"
import UiList from "@/components/UI/List"
import FilterItem from "./item"

export default {
  name: "FiltersGroup",
  mixins:[ WP ],
  props:[ "wpx", "title" ],
  components:{ UiHeading, UiList, FilterItem },
  data:()=>({
    filters:[],
    show: false,
  }),
  computed:{
    endpoint(){
      if(!( this.API && this.wpx )) return
      return this.wpx(this.API)
    },
  },
}
</script>

<style lang="scss" scoped>
.FiltersGroup {
  display: flex;
  width: 100%;
  flex-flow: nowrap column;
}
</style>
