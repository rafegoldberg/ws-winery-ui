<template>
<AppLoad
  v-if="context.loading"
  />
<div id="StaffList" v-else>
  <UiPanel class="UiTheme_dark" connect="down" :connectText="''">
    <UiBoxImage :img="imgs.cover"/>
    <UiBox class="UiBox_tall">
      <div class="wrap_tiny">
        <UiHeading :level="2" class="UiHeading_gold">Our People</UiHeading>
        <p>More than two decades after Williams Selyem Winery produced its first vintage of Pinot Noir in 1981, everyone at the winery, from the owners and winemaking team to the temporary crush help, is still as passionate about making the most luscious, flavorful wines as the crew who made that first vintage. Every person, no matter what his or her job, is truly proud to be a part of the creation of the most highly prized Pinot Noir, Chardonnay and Zinfandel.</p>
      </div>
    </UiBox>
  </UiPanel>
  <UiPanel id="theOwners" class="UiTheme_cream">
    <UiBox class="UiBox_stack">
      <UiHeading :level="3" class="UiHeading_space">
        <router-link to="john-and-kathe-dyson" append>Proprietors</router-link>
      </UiHeading>
      <router-link to="john-and-kathe-dyson" append>
        <img :src="imgs.proprietors">
      </router-link>
      <label>
        <router-link to="john-and-kathe-dyson" append>John &amp; Kath Dyson</router-link>
      </label>
    </UiBox>
  </UiPanel>
  <UiPanel id="StaffLists--group" v-for="(term) in context" :key="term.id">
    <UiBox>
      <img :src="term.acf.image" :alt="term.slug">
    </UiBox>
    <UiBox class="UiBox_stack" style="padding-bottom: 0; padding-top: 0">
        <UiHeading v-html="term.name" style="width: 100%"/>
        <RoleList v-if="!context.loading" v-bind="term"/>
    </UiBox>
  </UiPanel>
</div>
</template>

<script>
import WP from "@/VuePress/mix/connect"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImage from '@/components/UI/Box/Image'
import UiHeading from '@/components/UI/Heading'
import RoleList from '@/components/modules/RoleList'

import cover from "./assets/cover.png"
import proprietors from "./assets/proprietors.png"

let
imgs = {
  cover,
  proprietors,
}

export default {
  name:"StaffList",
  mixins:[ WP ],
  data:()=>({ imgs }),
  computed:{
    endpoint(){
      if( this.API ) return this.API.staff_roles().embed()
    },
  },
  components:{
    UiPanel,
    UiBox,
    UiBoxImage,
    UiHeading,
    RoleList
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
#StaffList {
  @include Break( min-width Breaks(2) ){
    .UiPanel:not(:nth-child(-n+2)) {
      &:nth-child(odd) {
        flex-direction: row-reverse;
        >.UiBox { padding-right: 0 !important }
        img:only-child { margin-right: 0 }
      }
      &:nth-child(even){
        flex-direction: row;
        > .UiBox { padding-left: 0 !important }
        img:only-child { margin-left: 0 }
      }
      > .UiBox > img:only-child {
        // max-height: 32em;
        width: 100%;
        max-width: 50vw;
        align-self: flex-start;
      }
    }
    .UiPanel:last-child > .UiBox {
      padding-bottom: 0 !important;
    }
  }
  @include Break( max-width Breaks(2) ){
    .UiPanel:not(:nth-child(-n+2)) .UiBox:first-child {
      width: 100vw;
      height: 18em;
      margin-bottom: 1.5rem;
      padding: 0;
      > img:only-child {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
      }
    }
  }
  .UiPanel:nth-child(3) .UiBox:first-child {
    padding-top: 0;
  }
}
</style>

<style lang="scss">
@import "~@/styles/theme/colors";
#theOwners {
  * {
    text-decoration: none;
  }
  label {
    color: Color(theme);
    // font-weight: bold;
    // text-transform: uppercase;
    margin-top: 1.5em;
  }
  img {
    max-height: 80vh;
    width: auto;
  }
}
</style>

