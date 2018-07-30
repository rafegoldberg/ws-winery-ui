<template>

<PageBuilder v-if="!page.loading" :panels="acf.panels" :id="$route.name"/>

</template>
<script>
import API from "@/VuePress/mix/API"
import PageBuilder from "@/components/PageBuilder"

export default {
  name: "Page",
  mixins:[ API ],
  components:{ PageBuilder },
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
  computed:{
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
  }
}
</script>