<template>

  <AppLoad
    v-if="context.loading"
    />
  <main id="VineyardPage" class="UiTheme_light" v-else>

    <UiPanel id="VineyardPage-overview">
      <UiBoxImg id="VineyardPage-overviewMedia" :img="media" class="UiTheme_cream" style="background-position: center 25%" />
      <UiBox id="VineyardPage-overviewContent" class="UiTheme_light wrap_mid">
        <div id="VineyardPage-overviewContent-inner" v-if="text">

          <header>
            <AdjacentNav all="/vineyards" v-bind="adjacent"/>
            <UiHeading
              id="VineyardPage-overviewHeader"
              class="UiHeading_contract UiHeading_space÷2"
              :level="2"
              :scale="3"
              v-html="context.title.rendered"
              />
          </header>

          <aside id="VineyardPage-overviewSidebar">
            <StatGroup
              v-if="Array.isArray(context.acf.vineyardStats)"
              v-for="(stats,i) in context.acf.vineyardStats"
              v-bind="stats"
              :key="`statGroup-${i}`"
              />
            <div
              v-if="!Array.isArray(context.acf.vineyardStats)"
              v-for="tbl in tables"
              v-html="tbl"
              />
          </aside>

          <div id="VineyardPage-overviewText">
            <blockquote v-html="text[0]" />
            <p v-html="text[1]" />
            <ReadMore id="VineyardPage-overviewKick" v-if="text.length>2" href="#content" />
          </div>

        </div>
      </UiBox>
    </UiPanel>

    <UiPanel id="content" v-if="text.length>2" class="UiTheme_cream" style="flex-direction: row-reverse">
      <UiBox class="UiBox_stack">
        <div id="VineyardPage--media" class="wrap_mid">
          <span class="iframeWrap" v-if="iframe.length" v-html="iframe[0]" />
        </div>
        <article id="VineyardPage--text" class="wrap_mid" style="columns: 18em; column-gap: 2rem;">
          <p v-for="p in text.slice(2)" v-html="p" />
        </article>
      </UiBox>
    </UiPanel>

    <UiPanel class="UiTheme_light">
      <UiBox class="UiBox_stack">
        <UiHeading :level="2" :scale="3" class="UiHeading_space">
          Our
          <span v-html="context.title.rendered"/> Wines
        </UiHeading>
        <WineGrid class="wrap" :category="slug" :paginate="4"/>
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
import WpConnect from '@/VuePress/mix/item'
import * as computed from './computed'
import loThrottle from 'lodash/throttle'

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiBoxImg from '@/components/UI/Box/Image'
import UiHeading from '@/components/UI/Heading'

import StatGroup from '@/components/modules/StatGroup'
import ReadMore from '@/components/modules/ReadMore'
import WineGrid from '@/views/Wine/grid'
import StaticIconList from '@/components/static/icon-list'

import AdjacentNav from '@/components/modules/AdjacentNav'

export default {
  name: 'VineyardPage',
  mixins: [WpConnect],
  props: ['type', 'category', 'slug'],
  created(){
    this.$set(this.$root.filters, 'page', 1)
    
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.handleResize)
  },
  data: ()=>({
    useLandscape: false
  }),
  methods: {
    handleResize: loThrottle(function(){
      this.$log(window.matchMedia("(max-width: 832px)").matches)
      this.$set(this,'useLandscape',window.matchMedia("(max-width: 832px)").matches);
    },250),
  },
  computed: {
    ...computed,

    endpoint() {
      if (this.API)
        return this.API['posts']()
          .slug(this.slug)
          .embed()
    },

    adjacent(){
      if (this.context.loading) false
      return this.context.adjacent
    },

    embedded() {
      if (this.context.loading) return
      return this.context._embedded
    }
  },
  components: {
    UiPanel,
    UiBox,
    UiBoxImg,
    UiHeading,

    StatGroup,
    ReadMore,
    AdjacentNav,
    WineGrid,
    StaticIconList
  }
}
</script>

<style lang="scss">
@import '~@/styles/theme/colors';
@import '~@/styles/theme/breaks';
@import '~@/styles/theme/fonts';

@import '~@/styles/extend/text.label';

#VineyardPage {
  &-overview {
    $sidebar-width: 42%;

    &Content {
      flex-basis: 33%;
      @include Break(max-width Breaks(4)) {
        &-inner {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &Header {
      margin: 0 0 1rem;
      @include Break(max-width Breaks(4)) {
        margin: 0.5em auto;
        text-align: center;
        line-height: 1.1;
      }
    }

    &Sidebar {
      float: left;
      width: $sidebar-width;
      margin: 0 1.4rem 0 -.4rem;
      border-right: 1px solid Color(theme);

      > :first-child caption {
        padding-top: 0.3rem;
      }
      > :not(:first-child) caption {
        border-top: 1px solid;
        margin-top: 0.7rem;
        @include Break(max-width Breaks(4)) {
          border-top: 3px solid;
        }
      }

      @include Break(max-width Breaks(4)) {
        float: none;
        width: 100%;
        border-right: none;
        margin: 0;
        padding: 0;
      }
    }
    &Sidebar:not(:empty) + &Text {
      @include Break(min-width Breaks(4)) {
        margin-left: $sidebar-width + 3%;
      }
    }

    &Kick {
      @extend %text-label;
    }
  }
  &--media {
    margin-bottom: 1.5rem;
    @include Break(max-width Breaks(4)) {
      margin-top: -3rem;
    }
    @include Break(max-width Breaks(2)) {
      min-width: 100vw;
      margin-top: -6rem;
      margin-left: -2.5rem;
    }
    .iframeWrap {
      position: relative;
      display: block;
      padding-bottom: 55%; /* 16:9 */
      padding-top: 25px;
      height: 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

#VineyardPage > .UiPanel:first-child {
  @include Break(min-width Breaks(4)) {
    & {
      min-height: 100vh;
      max-height: unset;
    }
    > .UiBoxImage:first-child {
      max-height: 100vh;
      position: sticky;
      top: 0;
      @include Break(min-width Breaks(3)) {
        background-position: center !important;
      }
    }
  }
}
</style>

<style lang="scss">
@import '~@/styles/theme/colors';
@import '~@/styles/theme/fonts';

#VineyardPage {
  blockquote {
    font-family: $ff-alt;
    font-style: italic;
    color: Color(theme);
    border-left: 0 solid transparent;
    margin-left: 0;
    padding-left: 0;
  }

  hr {
    border-width: 1px 0 0;
    border-style: solid;
    border-color: Color(theme);
    margin: 1rem 0;
  }

  &-overview table {
    margin: 0;
    font-size: 0.8rem;
    * {
      font-size: inherit;
      border: none;
    }
    caption {
      border: none;
      font-weight: 900;
      letter-spacing: 0;
      margin: 0;
      padding: 0.8em 0.4em;
      font-size: 1.2em;
    }
  }
} // #VineyardPage
</style>