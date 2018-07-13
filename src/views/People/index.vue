<template>
<div id="StaffList">
  <UiPanel class="UiTheme_dark" connect="down">
    <UiBoxImage :img="imgs.cover" style="min-height:75vh"/>
    <UiBox>
      <div>
        <UiHeading :level="2" class="UiHeading_gold">Our People</UiHeading>
        <p>More than two decades after Williams Selyem Winery produced its first vintage of Pinot Noir in 1981, everyone at the winery, from the owners and winemaking team to the temporary crush help, is still as passionate about making the most luscious, flavorful wines as the crew who made that first vintage. Every person, no matter what his or her job, is truly proud to be a part of the creation of the most highly prized Pinot Noir, Chardonnay and Zinfandel.</p>
      </div>
    </UiBox>
  </UiPanel>
  <UiPanel id="theOwners">
    <UiBox class="UiBox_stack">
      <UiHeading :level="4" class="UiHeading_space">Proprietors</UiHeading>
      <img :src="imgs.proprietors">
      <label>John &amp; Kath Dyson</label>
    </UiBox>
  </UiPanel>
  <UiPanel id="StaffLists--group" v-for="(term) in context" :key="term.id">
    <UiBox>
      <img :src="imgs[term.slug]" :alt="term.slug">
    </UiBox>
    <UiBox class="UiBox_stack">
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
import RoleList from '@/views/DEMO/RoleList'

import cover from "./assets/cover.png"
import hospitality from "./assets/hospitality.png"
import operations from "./assets/operations.png"
import winemaking from "./assets/winemaking.png"
import proprietors from "./assets/proprietors.png"
let
imgs = {
  cover,
  hospitality,
  operations,
  winemaking,
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
  @include Break( min-width Breaks(4) ){
    .UiPanel:not(:nth-child(-n+2)) {
      &:nth-child(odd) {
        flex-direction: row-reverse;
        >.UiBox:first-child { padding-right: 0 }
        img:only-child { margin-right: 0 }
      }
      &:nth-child(even){
        > .UiBox:first-child { padding-left: 0 }
        img:only-child { margin-left: 0 }
      }
      > .UiBox > img:only-child {
        max-height: 32em;
        width: auto;
      }
    }
  }
  @include Break( max-width Breaks(4) ){
    .UiBox:first-child {
      width: 100vw;
      height: 18em;
      padding: 0;
      > .UiBox > img:only-child {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>

<style lang="scss">
@import "~@/styles/theme/colors";
#theOwners {
  label {
    color: Color(theme);
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1.5em;
  }
  /deep/ img {
    max-height: 80vh;
    width: auto;
  }
}
</style>

