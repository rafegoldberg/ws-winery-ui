<template>
<UiPanel id="HomePage" class="UiTheme_dark" :style="{
  position: 'relative',
  zIndex: 1,
}">

  <Slider
    v-if="!page.loading"
    :slides="acf.panels"
    :settings="{
      direction: 'vertical',
      lazy: true,
      preloadImages: false,
    }"/>

</UiPanel>
</template>

<script>
import API from "@/VuePress/mix/API"
import Slider from "@/components/modules/Slider"

import UiPanel from "@/components/UI/Panel"

export default {
  name: "HomePage",
  mixins:[ API ],
  components:{ UiPanel, Slider },
  asyncComputed:{
    page:{
      default:{ loading:true },
      async get(){
        if(!( this.API && this.endpoint )) return {loading:true}

        let
        err = false,
        xhr = await this.endpoint.get().catch(e=>( err = e ))

        if (err) return { error:err }
        return xhr
      }
    }
  },
  computed:{
    endpoint(){
      if( !this.API ) return false
      return this.API.namespace('ws/v1').front()
    },
    acf(){
      if( !this.page.loading )
        return this.page.acf
    }
  },
}
</script>

<style lang="scss">
/**
 * App Overrides
 */
#AppFooter {
  display: none;
}
</style>
<style lang="scss">
/**
 * Page Styles
 */
#HomePage {
}
</style>
