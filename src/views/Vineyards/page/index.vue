<template>

<main id="VineyardPage" v-if="!context.loading" tag="main">

  <UiPanel id="VineyardPage-overview">
    <UiBoxImg id="VineyardPage-overviewMedia" :img="media" class="UiTheme_cream">
    </UiBoxImg>
    <UiBox id="VineyardPage-overviewContent" class="UiTheme_light wrap_mid">
      <div id="VineyardPage-overviewContent-inner" v-if="text">

        <header style="order: 1">
          <DevCom></DevCom>
          <UiHeading id="VineyardPage-overviewHeader" :level="2" :scale="3" v-html="context.title.rendered"/>
        </header>

        <aside id="VineyardPage-overviewSidebar" v-if="tables.length">
          <div v-for="tbl in tables" v-html="tbl"/>
        </aside>

        <div id="VineyardPage-overviewText">
          <blockquote v-html="text[0]"/>
          <p v-html="text[1]"/>
          <a id="VineyardPage-overviewKick" v-if="text.length>2" href="#VineyardsPage--text">
            <div>Read More</div>
            <UiIcon name="arrow-down" height="1em" width="1em"></UiIcon>
          </a>
        </div>

      </div>
    </UiBox>
  </UiPanel>
  
  <UiPanel v-if="text.length>2" class="UiTheme_cream" style="flex-direction: row-reverse">
    <UiBox v-if="iframe.length" v-html="iframe[0]" style="padding-right: 0; position: sticky; top: 0; max-height: 100vh; align-items: flex-start"/>
    <UiBox style="align-items: stretch; padding-right: 0">
      <article id="VineyardsPage--text" class="wrap_min" style="margin-right: auto">
        <p v-for="p in text.slice(2)" v-html="p"/>
      </article>
    </UiBox>
  </UiPanel>

  <UiPanel>
    <UiBox>
      <WineArchive class="wrap" :category="slug"/>
    </UiBox>
  </UiPanel>

  <UiPanel class="UiTheme_dark">
    <UiBox class="iconListBox">
      <StaticIconList/>
    </UiBox>
  </UiPanel>
  
</main>
<UiBox v-else style="text-align: center; min-height: 68vh">Loading...</UiBox>

</template>

<script>
import WpConnect from "@/VuePress/mix/item"
import * as computed from './computed'

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImg from '@/components/UI/Box/Image'
import UiIcon from '@/components/UI/Icon'
import UiHeading from '@/components/UI/Heading'

import WineArchive from "@/components/modules/Wine/archive";
import StaticIconList from '@/components/static/icon-list'

//==TEMP=>
// 
import DevCom from "@/components/modules/dev"

export default {
  name: "VineyardPage",
  mixins:[ WpConnect ],
  props:[
    'type',
    'category',
    'slug'
  ],
  computed:{

    ...computed,
    
    endpoint(){
      if( this.API )
        return this.API["posts"]().slug(this.slug).embed()
    },
    embedded(){
      if( this.context.loading ) return
      return this.context._embedded
    }
  },
  components:{
    UiPanel,
    UiBox,
    UiBoxImg,
    UiHeading,
    UiIcon,

    DevCom,
    WineArchive,
    StaticIconList,
  },
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/fonts";

@import "~@/styles/extend/text.label";

#VineyardPage {
  &-overview {
    $sidebar-width: 42%;

    &Content {
      flex-basis: 33%;
      @include Break( max-width Breaks(4) ){
        &-inner {
          display: flex;
          flex-direction: column-reverse;
        }
      }
    }
    
    &Header {
      margin: 0 0 1rem;
      @include Break( max-width Breaks(4) ){
        margin: .5em auto;
        text-align: center;
        max-width: 92%;
        line-height: 1.2;
      }
    }

    &Sidebar {
      float: left;
      width: $sidebar-width;
      margin: 0 1.4rem 0 -.4rem;
      border-right: 1px solid Color(theme);
      @include Break( max-width Breaks(4) ){
        float: none;
        width: 100%;
        border-right: none;
      }
    }
    &Sidebar + &Text {
      @include Break( min-width Breaks(4) ){
        margin-left: $sidebar-width + 2%;
      }
    }
    
    &Kick {
      display: block;
      @extend %text-label;
    }
  }
}

#VineyardPage > .UiPanel:first-child {
  @include Break( min-width Breaks(4) ){
    & {
      min-height: 100vh;
      max-height: unset;
    }
    > .UiBoxImage {
      max-height: 100vh;
      position: sticky;
      top: 0;
    }
  }
}
</style>

<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";

blockquote {
  font-family: $ff-alt;
  font-style: italic;
  color: Color(theme);
}

hr {
  border-width: 1px 0 0;
  border-style: solid;
  border-color: Color(theme);
  margin: 1rem 0;
}

table {
  margin: 0;
  font-size: .8rem;
  * {
    font-size: inherit;
    border: none;
  }
  caption {
    border: none;
    font-weight: 900;
    letter-spacing: 0;
    margin: 0;
    padding: .8em .4em;
    font-size: 1.2em;
    #VineyardPage-overviewSidebar >:first-child & { padding-top: .3rem }
    #VineyardPage-overviewSidebar >:not(:first-child) & {
      border-top: 1px solid;
      margin-top: 0.7rem;
    }
  }
}
</style>
