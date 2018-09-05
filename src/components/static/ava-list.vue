<template>
  <ol class="targetList" v-if="!context.loading">
    <li
      v-for="(term, index) in context"
      :key="index"
      :id="term.slug"
      >
      {{$log(term)}}
      <UiHeading :level="4" v-text="term.name" class="UiHeading_gold UiHeading_bold UiHeading_sans UiHeading_scale5 UiHeading_space÷2"/>
      <br>
      {{term.description}}
    </li>
  </ol>
</template>

<script>
import WP from "@/VuePress/mix/connect"
import UiHeading from "@/components/UI/Heading"

export default {
  name:"AvaList",
  props:["id","name"],
  mixins:[ WP ],
  computed:{
    endpoint(){
      if( this.API ) return this.API.AVA()
    },
  },
  components:{ UiHeading }
}
</script>