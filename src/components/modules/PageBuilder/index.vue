<template>
  <component :is="tag">
    <UiPanel v-for="(panel,i) in panels"
        v-if="panel.boxes"
        :connect="panel.connect || false"
        :class="panel.class||''"
        :key="panel.id"
        :id="panel.id"
        >
      <component v-for="(box,i) in panel.boxes"
          :test="box.doubleBoxed && $log(classList(box)) || ''"
          :id="box.id"
          :class="(box.doubleBoxed
            ? ['UiBox_doubled',...box.class]
            : classList(box)
          ).join(' ')"
          :is="box.img ? 'UiBoxImage' : 'UiBox'"
          :img="box.img || ''"
          :key="box.id"
          >
          <component
              v-if="box.doubleBoxed || box.wrap"
              :is="box.doubleBoxed ? 'UiBox' : 'div'"
              :class="[
                wrapClass(box.wrap),
                box.doubleBoxed ? classList(box).join(' ') : ''
              ]">
            <component
              v-for="(com,i) in box.components"
              v-bind="com.props"
              :is="com.acf_fc_layout"
              :key="`com-${i}`"
              />
          </component>
          <component v-else
            v-for="(com,i) in box.components"
            v-bind="com.props"
            :is="com.acf_fc_layout"
            :key="`com-${i}`"
            />

      </component>
    </UiPanel>
    <slot/>
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
import AvaList from "@/components/static/ava-list"

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
    AvaList,
  },
  methods:{
    wrapClass( size ){
      return size.replace( '_', "wrap_flex_" )
    },
    classList( box ){
      let
      hiders  = box.hide  || [],
      classes = box.class && !box.doubleBoxed ? box.class : [],
      order   = box.order || '',
      theme   = box.theme || ''
      return [ ...classes, ...hiders, order, theme ]
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
    },
  },
}
</script>
