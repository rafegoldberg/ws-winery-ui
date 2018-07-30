<template>
  <component :is="tag">
    <UiPanel v-for="(panel,i) in panels"
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
  </component>
</template>

<script>
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
  name: "PageBuilder",
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
  methods:{
    wrapClass( size ){
      return size.replace( '_', "wrap_flex_" )
    },
  },
  props:{
    tag:{
      type: String,
      default: "div",
    },
    panels:{
      type: Array,
      required: true
    }
  },
}
</script>