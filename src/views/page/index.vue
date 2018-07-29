<template>
  <main :id="$route.name" v-if="!page.loading">
    <UiPanel v-for="(panel,i) in acf.panels"
        v-if="panel.boxes"
        :connect="panel.connect || false"
        :class="panel.class||''"
        :key="panel.id"
        >
      <component v-for="(box,i) in panel.boxes" :key="box.id"
          :id="box.id"
          :class="[ ...(box.class||[]), box.theme ].join(' ')"
          :is="box.img ? 'UiBoxImage' : 'UiBox' "
          :img="box.img || ''"
          >
        
        <component v-if="!box.wrap"
          v-for="com in box.components"
          :key="`${box.id}--com${i}`"
          :is="com.acf_fc_layout"
          v-bind="com.props"
          />

        <div v-if="box.wrap" :class="wrapClass(box.wrap)">
          <component
            v-for="(com,i) in box.components"
            :key="`${box.id}--com${i}`"
            :is="com.acf_fc_layout"
            v-bind="com.props"
            />
        </div>

      </component>
    </UiPanel>
  </main>
</template>

<script>
import API from "@/VuePress/mix/API"

import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiBoxImage from "@/components/UI/Box/Image"

import UiHeading from "@/components/UI/Heading"
import UiList from "@/components/UI/List"
import MapBox from "@/components/modules/MapBox"
import ActionBox from "@/components/modules/ActionBox"
import DiscoverBox from "@/components/modules/DiscoverBox"
import Timeline from "@/components/modules/Timeline"
import FaqList from "@/components/modules/FaqList"
import IconList from "@/components/static/icon-list"
import ContactForm from "@/components/static/contact-form"

export default {
  name: "Beta",
  mixins:[ API ],
  components:{
    UiPanel,
    UiBox,
    UiBoxImage,

    UiHeading,
    UiList,
    MapBox,
    ActionBox,
    DiscoverBox,
    Timeline,
    FaqList,
    IconList,
    ContactForm,
  },
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
  methods:{
    wrapClass( size ){
      return size.replace( '_', "wrap_flex_" )
    },
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