<template>
<section class="iconList">
  
  <div class="iconList--item">
    <UiIcon name="bottles" width="3rem" height="3rem"/>
    <p>
      <span class="iconList--item--label">All Our Wines</span>
      <br>
      <small>Visit our wine library to find a specific bottle or peruse our full collection.</small>
    </p>
    <router-link class="UiButton" to="/wines">Library</router-link>
  </div>
  <div class="iconList--item">
    <UiIcon name="barrels" width="3rem" height="3rem"/>
    <p>
      <span class="iconList--item--label">How To Purchase</span>
      <br>
      <small>Our wines are available twice a year for purchase.</small>
    </p>
    <router-link class="UiButton" to="/beta/purchase">Purchasing</router-link>
  </div>
  <div class="iconList--item">
    <UiIcon name="glasses" width="3rem" height="3rem"/>
    <p>
      <span class="iconList--item--label">Visit The Winery</span>
      <br>
      <small>Arrange a private tour and tasting tailored specifically for you.</small>
    </p>
    <router-link class="UiButton" to="/beta/visit">Visiting</router-link>
  </div>

</section>
</template>

<script>
import UiIcon from "@/components/UI/Icon"
import UiButton from "@/components/UI/Button"

export default {
  name: "StaticIconList",
  components:{ UiIcon, UiButton }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";

@import "~@/components/UI/Box/style";

.iconList {
  min-width: 68%;
  margin: 0 auto;
  &--item {
    margin: 0 auto;
    display: flex;
    align-items: center;
    & + & {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid Color(theme);
    }
    > * {
      margin: .5rem 2rem;
      &:last-child { margin: .5rem 0 .5rem auto }
    }
    &--label {
      text-transform: uppercase;
      font-weight: 600;
      color: Color(theme);
      letter-spacing: 0.1em;
    }
  }
  /deep/ .UiIcon {
    margin: 0;
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    .icon { fill: Color(theme) !important }
    // /deep/ &, /deep/ &.icon { fill: currentColor !important }
  }
  &Box { @extend %UiBox_compact; }
}

.iconList {
  @include Break( max-width Breaks(2) ){
    &--item {
      flex-flow: wrap row;
      >svg {
        align-self: flex-start !important;
        flex: 1 0 2.5rem;
        width: 2.5rem !important;
        height: 2.5rem !important;
      }
      >p {
        margin: 0;
        flex: 1 calc(100% - 2.5rem);
        padding: 0 0 0 1rem;
      }
      >button {
        margin: 1rem auto 0 3.5rem !important;
        font-size: 0.7rem !important;
      }
    }
  }
}
</style>

