<template>
<div class="WineSearch">
  <UiHeading v-if="$root.filters.search && results">
    {{results && results._paging.total}} Results
  </UiHeading>
  <slot/>
  <span class="WineSearch--inputWrap">
    <input
      ref="search"
      type="search"
      :value="$root.filters.search"
      @change="setSearchFilter"
      placeholder="Search for your bottle...">
    <span class="WineSearch--icon" @click="$refs.search.focus()">
      <UiIcon name="search" width=".9em" height=".9em"/>
    </span>
  </span>
</div>
</template>

<script>
import UiHeading from "@/components/UI/Heading"
import UiIcon from "@/components/UI/Icon"
export default {
  name: "WineSearch",
  data:()=>({
    results: false
  }),
  components: { UiHeading, UiIcon },
  methods:{
    setSearchFilter(e){
      this.$set(this.$root.filters,'search',e.target.value)
      this.$refs.search.value = e.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/fonts";
@import "~@/styles/theme/colors";
.WineSearch {
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
}
input {
  all: unset;
  // margin-left: 1.5rem;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid;
  padding: 5px;
  line-height: 1.3;
  min-width: 12rem;
  border-radius: 1px 0 0 1px;
  cursor: text;
}
.WineSearch {
  &--inputWrap {
    $edge-color: mix(Color(slate),Color(silver),33%);
    position: relative;
    display: inline-flex;
    align-items: stretch;
    align-content: center;
    * { border-color: $edge-color }
    &:focus-within {
      cursor: pointer;
      * { border-color: Color(theme) }
    }
    &:after {
      content: "hit Return to search.";
      pointer-events: none;

      position: absolute;
      top: 100%;
      right: 0;
      
      font-size: .75rem;
      font-family: $ff-serif;
      font-style: italic;
      color: $edge-color;
      
      opacity: 0;
      transition: .3s ease;
    }
    &:focus-within:after {
      opacity: 1;
    }
  }
  .UiTheme_dark &--inputWrap * {
    border-color: Color(theme) !important;
  }
  &--icon {
    display: inline-block;
    margin-left: -1px;
    padding: 5px 10px;
    border-style: solid;
    border-width: 1px;
    border-radius: 0 1px 1px 0;
    line-height: 1;
    color: Color(theme);
    background: transparent;
    transition: .2s ease;
  }
  &:focus-within &--icon {
    pointer-events: none;
  }
  &:active &--icon {
    box-shadow: inset 1px 1px 6px -1px rgba(Color(dark),.2);
  }
  &--icon,
  &:focus-within &--icon {
    background: Color(theme);
    color: Color(light);
    border-color: rgba(Color(dark),.1);
  }
}
</style>
