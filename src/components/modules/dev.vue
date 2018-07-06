<template>
<nav id="VineyardsPage--overviewNav">

  <UiIcon name="arrow-left" width=".75em" height=".75em"></UiIcon>
  <a href="#prior">Prior</a>

  <a href="#all">All</a>

  <a href="#next">Next</a>
  <UiIcon name="arrow-right" width=".75em" height=".75em"></UiIcon>
  
</nav>
</template>

<script>
import UiIcon from "@/components/UI/Icon"
export default {
  name: "DevCom",
  components:{ UiIcon },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";

#VineyardsPage--overviewNav {

  padding: 0.5em 0;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: Color(theme);

display: inline-flex;
align-items: center;

  > * + * {
    margin-left: 1rem;
  }
  
  a {
    &:not(:hover) { text-decoration: none }
  }

}
</style>
