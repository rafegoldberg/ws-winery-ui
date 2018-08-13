<template>

<img v-if="context.loading" src="@/assets/preloader.gif" alt="Loading..."  id="preload">

<ul v-else-if="context.length" class="RoleList">
  <router-link v-for="person in context"
      :to="`/people/${person.slug}`"
      :key="person.id"
      class="RoleList--item"
      tag="li">
    <a class="RoleList--itemDetails">
      <span class="RoleList--itemDetailsName">
        <b v-html="person.title.rendered"/>
        <UiIcon name="ArrowRight" width=".8em" height=".8em"/>
      </span>
      <small class="RoleList--itemDetailsTitle" v-html="person.acf.position"/>
    </a>
  </router-link>
</ul>

</template>

<script>
import WP from "@/VuePress/mix/connect"
import UiIcon from "@/components/UI/Icon"

const
termslug = 'staff_roles'

export default {
  name:"RoleList",
  props:["id","name"],
  mixins:[ WP ],
  computed:{
    endpoint(){
      if( this.API ) return this.API.posts().param(termslug,this.id)
    },
  },
  components:{ UiIcon }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
.RoleList {
  $color-universal: rgba(mix(Color(dark),Color(light),25%),.4);
  width: 100%;
  list-style: none;
  &--item {
    $E: &;
    padding: .7rem 0;
    line-height: 1.2;
    & + & {
      border-top: 1px solid $color-universal;
    }
    &Details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      &Name {
        display: inline-flex;
        align-items: center;
        color: Color(theme);
        font-size: 1.1em;
        /deep/ .UiIcon {
          [fill] { fill: Color(slate) !important }
          opacity: .25;
          transition: all .4s 1s ease-in-out;
          pointer-events: none;
          transform: translateX(2px) scale(1);
          #{$E}:not(:hover):not(:active) & {
            transform: translateX(-50%) scale(.15);
            opacity: 0;
            transition-delay: 0s;
          }
        }
      }
      &Title {
        margin-left: auto;
        padding-left: 0.5rem;
        font-weight: 600;
        text-align: right;
        color: Color(silver);
      }
      @include Break( max-width Breaks(3) ){
        flex-flow: nowrap column;
        align-items: flex-start;
        > * {
          margin: 0 !important;
          padding-left: 0 !important;
        }
        &Title { font-weight: normal }
      }
    }
  }
}
#preload {
  width: 3em;
  height: 3em;
  margin: 2em 0 0;
  opacity: 0.3;
}
</style>
