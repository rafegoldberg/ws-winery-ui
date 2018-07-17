<template>
<main v-if="!context.loading" id="Bio" class="UiTheme_cream">

  <UiPanel class="UiTheme_cream wrap_mid" connect="down">
    <UiBox>
      <div :style="{
        flex:[ 0, '50%' ],
        }">
        <img :src="featured_img"
          :alt="context.title.rendered"
          :style="{
            objectFit: 'cover',
            width:  '100%',
            height: '32em',
          }">
      </div>
      <div :style="{
          flex:[ 0, '50%' ],
          paddingLeft: '2em',
          }">
        <UiHeading :level="2" :scale="3" class="UiHeading_gold">
          {{context.title.rendered}}
        </UiHeading>
        <b class="Bio--position">{{context.acf.position}}</b>
        <p>{{context.acf.intro}}</p>
        <ReadMore href="#content" class="ReadMore_gold" :icon="false"/>
      </div>
    </UiBox>
    <!-- <span slot="connect">
        <ReadMore href="#content" class="ReadMore_gold" :icon="false"/>
    </span> -->
  </UiPanel>

  <UiPanel id="content" class="UiTheme_light">
    <UiBox class="UiBox_stack wrap_flex_min">
      <div>
        <article v-html="context.acf.content"/>
        <br>
        <router-link to="/people" style="text-decoration: none">
          <UiButton class="UiButton_outline UiButton_gold UiButton_flex">
            <UiIcon name="ArrowRight" width="1em" height="1em"/>&nbsp; All Our People
          </UiButton>
        </router-link>
      </div>
    </UiBox>
  </UiPanel>
  
  
</main>
<UiBox v-else style="text-align: center; min-height: 68vh">Loading...</UiBox>
</template>

<script>
import WpConnect from "@/VuePress/mix/item"

import UiPanel from '@/components/UI/Panel'
import UiBox from '@/components/UI/Box'
import UiHeading from '@/components/UI/Heading'
import UiButton from '@/components/UI/Button'
import UiIcon from '@/components/UI/Icon'

import ReadMore from '@/components/modules/ReadMore'

export default {
  name: "Bio",
  props:[ 'slug', 'category' ],
  mixins:[ WpConnect ],  
  components:{
    UiPanel,
    UiBox,
    UiButton,
    UiHeading,
    UiIcon,
    ReadMore,
  },
  computed:{
    featured_img(){
      if( this.context.loading ) return
      if( 'wp:featuredmedia' in this.context._embedded ){
        let
        src = this.context._embedded['wp:featuredmedia'][0].source_url
        src = src.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
        return src
      }
      else return ""
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
.Bio {
  &--position {
    text-transform: capitalize;
  }
}
</style>