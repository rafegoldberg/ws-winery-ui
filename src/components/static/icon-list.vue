<template>

  <section class="iconList">

    <div class="iconList--item" v-for="(item, key) in items" :key="key">
      {{$log({item,key})}}
      <UiIcon :name="item.icon || key" width="3rem" height="3rem"/>
      <div class="iconList--item--text">
        <span class="iconList--item--label" v-html="item.title"/>
        <div v-html="item.text"/>
      </div>
      <router-link class="UiButton" :to="item.URL" v-text="item.CTA"/>
    </div>

    <!-- 
      <div class="iconList--item">
        <UiIcon name="bottles" width="3rem" height="3rem"/>
        <div class="iconList--item--text">
          <span class="iconList--item--label">All Our Wines</span>
          <div>Visit our wine library to find a specific bottle or peruse our full collection.</div>
        </div>
        <router-link class="UiButton" to="/wine#all">Wine Library</router-link>
      </div>
      <div class="iconList--item">
        <UiIcon name="barrels" width="3rem" height="3rem"/>
        <div class="iconList--item--text">
          <span class="iconList--item--label">How To Purchase</span>
          <div>Our wines are available twice a year for purchase.</div>
        </div>
        <router-link class="UiButton" to="/purchase">How to Buy</router-link>
      </div>
      <div class="iconList--item">
        <UiIcon name="glasses" width="3rem" height="3rem"/>
        <div class="iconList--item--text">
          <span class="iconList--item--label">Visit The Winery</span>
          <div>Arrange a private tour and tasting tailored specifically for you.</div>
        </div>
        <router-link class="UiButton" to="/visit">Visit Us</router-link>
      </div>
    -->
  </section>

</template>

<script>
import UiIcon from "@/components/UI/Icon"
import UiButton from "@/components/UI/Button"

export default {
  name: "StaticIconList",
  created(){
    if( Object.keys(this.list).length )
      this.items = Object.assign({}, this.items, this.list)
  },
  props:{
    list: {
      type: Object,
      default:()=>({
        glasses: {
          title:"Visit The Winery",
          text: "Arrange a private tour and tasting tailored specifically for you.",
          CTA:  "Visit Us",
          URL:  '/visit',
        }
      })
    }
  },
  data:()=>({
    items: {
      bottles: {
        title:"All Our Wines",
        text: "Visit our wine library to find a specific bottle or peruse our full collection.",
        CTA:  "Wine Library",
        URL:  '/wine#all',
      },
      barrels: {
        title:"How To Purchase",
        text: "Our wines are available twice a year for purchase.",
        CTA:  "How to Buy",
        URL:  '/purchase',
      },
      /* glasses: {
        title:"Visit The Winery",
        text: "Arrange a private tour and tasting tailored specifically for you.",
        CTA:  "Visit Us",
        URL:  '/visit',
      } */
    }
  }),
  components:{ UiIcon, UiButton }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";

@import "~@/components/UI/Box/style";

.iconList {
  min-width: 66%;
  margin: 0 auto;
  &--item {
    margin: 0 auto;
    display: flex;
    align-items: center;
    & + & {
      margin-top: 1.9rem;
      padding-top: 1.9rem;
      border-top: 1px solid rgba(Color(theme),.5);
    }
    > * {
      margin: .5rem 2rem;
      &:last-child { margin: .5rem 0 .5rem auto }
    }
    &--label {
      text-transform: uppercase;
      font-weight: 900;
      color: Color(theme);
      letter-spacing: .05em;
    }
  }
  .UiButton {
    white-space: nowrap;
    text-align: center;
    @include Break( min-width Breaks(2) ){
      min-width: 145px;
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
  @include Break( min-width Breaks(3) ){
    &--item--label {
      display: block;
      font-size: 1.15em;
      margin-bottom: -0.3em;
    }
  }
  @include Break( max-width Breaks(2) ){
    &--item {
      flex-flow: wrap row;
      >svg {
        align-self: flex-start !important;
        flex: 1 0 2.6rem;
        width: 2.6rem !important;
        height: 2.6rem !important;
      }
      &--label {
        display: block;
        margin: .5rem 0;
      }
      &--text {
        flex: 1 calc(100% - 2.6rem);
        margin: 0;
        line-height: 1.75;
        padding: 0 0 0 1rem;
      }
      .UiButton {
        margin: 1rem auto .3rem 3.5rem !important;
        font-size: .75rem !important;
      }
    }
  }
}
</style>

