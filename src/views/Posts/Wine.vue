<template>
<UiPanel>

  <UiBox class="UiTheme_cream">
    hi world
  </UiBox>
  <UiBox>
    <VpItem :id="id" class="WinePost">    
    <template slot-scope="WP" v-if="!WP.loading">
      <UiHeading :level="1" :scale="2">{{WP.title.rendered}}</UiHeading>
      <hr>
      <div>
        <UiHeading :level="3" :scale="5">Hierarchy:</UiHeading>
        <ul class="WinePost--hierarchy" style="margin:0">
          <li class="WinePost--category" v-for="cat in [...((category+'/'+hierarchy).replace(/-/g,' ').split('/'))]">{{cat}}</li>
        </ul>
      </div>
      <!-- <pre>{{WP}}</pre> -->
    </template>
    </VpItem>
  </UiBox>

</UiPanel>
</template>

<script>
import UiBox from '@/components/UI/Box';
import UiPanel from '@/components/UI/Panel';
import UiHeading from '@/components/UI/Heading';

import WineParser from "@/includes/wine/parse.wpContent"
import WineGetTerm from "@/includes/wine/get.wpTerm"
window.WineParser  = WineParser
window.WineGetTerm = WineGetTerm

export default {
  name: "WinePost",
  props:['id','category','hierarchy'],
  components:{
    UiHeading, UiBox, UiPanel,
    VpItem:()=> import( /* webpackChunkName: "VuePress" */ '@/VuePress/item')
  },
};
</script>

<style lang="scss" scoped>
.WinePost {
  &--hierarchy {
    list-style: none;
  }
  &--category {
    display: inline-block;
    text-transform: capitalize;

    font-size: .88em;
    font-weight: 100;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    & + &:before {
      content: "/";
      display: inline-block;
      margin: 0 .3em;
    }
  }
}
</style>
<style lang="scss">
.WinePost {
  box-sizing: border-box;
  max-width: 100vw;
  padding: 1.5rem 0;
  > *:not(hr) {
    margin: 1.5rem;
    &:first-child {
      margin-top: 0;
    }
    &:last-child { margin-bottom: 0 }
  }
  > hr {
    margin-left: 1.5rem;
    opacity: .25;
  }
  pre {
    display: block;
    overflow: scroll;
    max-width: 100%;
    white-space: pre;
    padding: .8em 1em;
    margin-right: 0;
    background-color: rgba(#BDBDBD,.1);
    max-height: 63vh;
    border-radius: .5em 0 0 .5em;
  }
}
</style>
