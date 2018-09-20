<template>

  <AppLoad
    v-if="page.loading"
    />
  <PageBuilder
    v-else
    :panels="acf.panels"
    :id="$route.name"
    >
    <DiscoveryBoxes v-if="acf.showDiscoveryBoxes" v-bind="zip(acf.discoveryBoxes,[true,true,true,true])"/>
    {{pageStyles}}
  </PageBuilder>

</template>
<script>
import API from "@/VuePress/mix/API"

import navTheme from "@/includes/NavTheme/mixin"
import loZip from "lodash/zipObject"

import PageBuilder from "@/components/modules/PageBuilder"
import DiscoveryBoxes from "@/components/static/discovery-boxes"

export default {
  name: "Page",
  mixins:[ API, navTheme ],
  components:{ PageBuilder, DiscoveryBoxes },
  props:{
    slug: "",
    fetch:{
      type: Function,
      default(WP){
        let ept = WP.pages()
        if( this.slug )
          ept = ept.slug(this.slug)
        return ept
      }
    }
  },
  destroyed(){
    this.customPageStyles.remove()
  },
  methods:{
    zip: loZip,
    // zip(unpaired){ return loZip(unpaired) },
  },
  computed:{
    pageStyles(){
      if( this.page.loading ) return
      if(!( 'css' in this.page.acf )) return ''

      var
      link = this.customPageStyles = document.createElement('style')

      link.type      = 'text/css'
      link.innerHTML = this.page.acf.css

      document.head.appendChild(link)
      console.log('appended',this.customPageStyles)
    },
    endpoint(){
      if(!( this.API && this.fetch )) return false
      else return this.fetch(this.API)
    },
    acf(){
      if( this.page.loading ) return
      return this.page.acf
    },
    title(){
      if( this.page.loading ) return ''
      return this.page.title.rendered
    },
    excerpt(){
      if( this.page.loading ) return ''
      return this.page.excerpt.rendered
    },
    content(){
      if( this.page.loading ) return ''
      return this.page.content.rendered
    },
  },
  asyncComputed:{
    page:{
      default:{ loading:true },
      async get(){
        if(!( this.API && this.endpoint )) return {loading:true}
        let
        err = false,
        xhr = await this.endpoint.get().catch(e=>( err = e ))

        if (err) return { error:err }
        else return xhr[0]
      }
    }
  },
  watch:{
    page(){
      //
      // TODO: move defaults + merge logic in to NavTheme mixin
      //
      if( this.page.loading ) return

      this.navTheme_update(this.page.acf.AppNav)
      setTimeout(()=>{
        let
        hash = this.$route.hash,
        $ref = document.querySelectorAll(hash)

        if( $ref = $ref[0] ){
          $ref.scrollIntoView()
          window.scrollBy(0, -(document.querySelectorAll('#AppNav')[0].offsetHeight))
        }
      })
    },
  },
}
</script>

<style>
#map, [id^="map"], [id$="map"] {
  min-height: 66vmin !important;
}
</style>
