<template>
<div class="WineSearch">
  <UiHeading v-if="$root.filters.search && results">
    {{results && results._paging.total}} Results
  </UiHeading>
  <slot/>
  <input
    type="search"
    :value="$root.filters.search"
    @change="setSearchFilter"
    placeholder="Search">
</div>
</template>

<script>
import UiHeading from "@/components/UI/Heading"
export default {
  name: "WineSearch",
  data:()=>({
    results: false
  }),
  components: { UiHeading },
  methods:{
    setSearchFilter(e){
      this.$set(this.$root.filters,'search',e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  margin-left: 1.5rem;
  box-sizing: border-box;
  background: Color(light);
  border: 1px solid Color(silver);
  padding: 5px;
  line-height: 1.3;
  min-width: 12rem;
  border-radius: 1px;
  &:focus {
    border-color: Color(theme);
  }
}
</style>
