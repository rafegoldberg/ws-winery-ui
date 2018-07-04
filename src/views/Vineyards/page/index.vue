<template>

<main id="VineyardPage" v-if="!context.loading" tag="main" class="UiTheme_cream">
  <UiPanel id="VineyardPage-overview">
    <UiBoxImg  id="VineyardPage-overviewMedia" class="UiTheme_light">
    </UiBoxImg>
    <UiBox id="VineyardPage-overviewContent" class="wrap_mid">
      <article v-if="text">

        <UiHeading id="VineyardPage-overviewHeader" :level="2" v-html="context.title.rendered" style="order: 1"/>

        <aside id="VineyardPage-overviewSidebar" v-if="tables">
          <div v-for="tbl in tables" v-html="tbl"/>
        </aside>

        <blockquote v-html="text[0]"/>

      </article>
    </UiBox>
  </UiPanel>
  <UiPanel class="UiTheme_light">
    <UiBox style="justify-content: left">
      <article class="wrap_mid" style="margin: 1rem 0"><p v-for="p in text" v-html="p"/></article>
    </UiBox>
  </UiPanel>
</main>

<UiBox v-else style="text-align: center; min-height: 68vh">
  Loading...
</UiBox>

</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImg from '@/components/UI/Box/Image'
import UiHeading from '@/components/UI/Heading'

import * as computed from './computed'

export default {
  name: "VineyardPage",
  mixins:[WpConnect],
  props:[
    'type',
    'category',
    'slug'
  ],
  computed:{
    ...computed,
    endpoint(){
      if( this.API )
        return this.API["posts"]().slug(this.slug)
    },
  },
  components:{
    UiPanel,
    UiBox,
    UiBoxImg,
    UiHeading,
  },
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/fonts";
#VineyardPage {
  > .UiPanel:first-child {
    min-height: 100vh;
    max-height: unset;
    > .UiBoxImage {
      @include Break( min-width Breaks(3) ){
        max-height: 100vh;
        position: sticky;
        top: 0;
      }
    }
  }
  &-overview {
    &Content {
      flex-basis: 33%;
      @include Break( max-width Breaks(4) ){
        article {
          display: flex;
          flex-direction: column-reverse;
        }
      }
    }
    &Header {
      max-width: 80%;
      margin: .5em 0 1em;
      @include Break( max-width Breaks(3) ){
        margin: .5em 0;
      }
    }
    &Sidebar {
      float: left;
      width: 38%;
      margin: 0 1.4rem 0 -.4rem;
      border-right: 1px solid Color(theme);
      @include Break( max-width Breaks(4) ){
        float: none;
        width: 100%;
        border-right: none;
      }
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
table {
  margin: 0;
  font-size: .9rem;
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
    #VineyardPage-sidebar >:first-child & { padding-top: .3rem }
    #VineyardPage-sidebar >:not(:first-child) & {
      border-top: 1px solid;
      margin-top: 0.7rem;
    }
  }
}
</style>
