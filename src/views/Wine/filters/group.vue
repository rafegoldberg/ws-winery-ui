<template>
<div
    :class="{
      show,
      active: term && $root.filters[term].length | $root.filters[term],
    }"
    class="FiltersGroup"
    @change="($set($root.filters,'page',1)) | $emit('filtered',$root.filters)"
    >
  <button v-if="title" class="FiltersGroup--header" @click.prevent="(show=show?false:true)">
    <UiHeading class="UiHeading_sans" :level="5">
      <span v-html="title"/>
    </UiHeading>
    <UiIcon :name="show ? 'CircleMinus' : 'CirclePlus'" width="1.3em" height="1.3em"/>
  </button>

  <slot>
    <FilterItem v-if="!context.loading && item.count>0"
      v-show="show"
      v-for="item in context"
      v-bind="item"
      :ref="item.slug"
      :key="item.slug"/>
  </slot>

</div>
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
  props:{
    wpx:{ type:Function },
    title:{ type:String },
    type:{ type:String, default:'checkbox' },
    term:{ type:[String,Boolean], default:"categories" },
  },
  components:{ UiHeading, UiList, UiIcon, FilterItem },
  created(){
    this.$attrs.show && (this.show = this.$attrs.show)
      this.context = { loading:true }
  },
  data:()=>({
    show: false
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

  $B: #{&};
  
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
  &--header {
    $size: .4rem;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      display: inline-block;
      width: $size;
      height: $size;
      margin-top: .025em;
      margin-right: .42rem;
      background: Color(brand);
      border-radius: 100%;
      opacity: 0;
      transition: .3s ease;
    }
  }
  &.active &--header:before {
    opacity: 1;
  }
  &.show.active &--header:before {
    background: Color(theme);
  }
  &:not(.show) > *:not(#{$B}--header) { display: none }
}
</style>
