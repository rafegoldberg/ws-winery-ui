<template>
<form :class="{show}" class="FiltersGroup" v-if="!context.loading" @change="$emit('filtered',filters)">

  <header class="FiltersGroup--header UiHeading_push UiHeading_spaceHalf" v-if="title">
    <UiHeading class="UiHeading_sans UiHeading_expand" :level="5">
      <button @click.prevent="( show = show ? false : true )" v-html="title" style="all:unset"/>
    </UiHeading>
    <UiIcon :name="show ? 'CircleMinus' : 'CirclePlus'" width="1.3em" height="1.3em"/>
  </header>
  <FilterItem v-show="show" v-for="item in context" v-bind="item" :ref="item.slug" :key="item.slug"/>

</form>
</template>

<script>
import WP from "@/VuePress/mix/connect"
import UiHeading from "@/components/UI/Heading"
import UiList from "@/components/UI/List"
import UiIcon from "@/components/UI/Icon"
import FilterItem from "./item"

export default {
  name: "FiltersGroup",
  mixins:[ WP ],
  props:[ "wpx", "title" ],
  components:{ UiHeading, UiList, UiIcon, FilterItem },
  created(){
    this.$attrs.show && (this.show = this.$attrs.show)
  },
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
@import "~@/styles/theme/colors";
.FiltersGroup {
  display: flex;
  width: 100%;
  flex-flow: nowrap column;
  &:not(:last-child) {
    padding-bottom: .6rem;
    border-bottom: 1px solid Color(theme);
    &.show {
      padding-bottom: 1.25rem;
    }
  }
  &--header {
    z-index: 1;
    position: sticky;
    top: -1px;
    padding: 2px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: Color(light);

    .show > & .UiHeading { color: Color(theme); }
  }
}
</style>
