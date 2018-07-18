<template>
<form :class="{show}" class="FiltersGroup" v-if="!context.loading" @change="$emit('filtered',filters)">

    <button v-if="title" class="FiltersGroup--header" @click.prevent="(show=show?false:true)">
      <UiHeading class="UiHeading_sans UiHeading_expand" :level="5">
        <span v-html="title"/>
      </UiHeading>
      <small v-if="filters.length" style="margin: -2px .5rem 0 auto; font-family: Georgia, serif; color: #BBB;">
        {{filters.length}}
      </small>
      <UiIcon :name="show ? 'CircleMinus' : 'CirclePlus'" width="1.3em" height="1.3em"/>
    </button>
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
    $bgc: rgba(Color(light),.9);
    
    all: unset;

    z-index: 1;
    position: sticky;
    top: -1px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1.5em 0 .5em;
    padding: 2px 0;

    background: $bgc;
    box-shadow: 0 2px 0 0 $bgc;

    .show > & .UiHeading { color: Color(theme); }
  }
}
</style>
