<template>

<img v-if="context.loading" src="@/assets/preloader.gif" alt="Loading..."  id="preload">

<div v-else-if="context.length" class="RoleList">
  <ul>
    <router-link v-for="person in context" :key="person.id" :to="`/people/${person.slug}`" tag="li">
      <a v-html="person.title.rendered"/>
    </router-link>
  </ul>
</div>
</template>

<script>
import WP from "@/VuePress/mix/connect"

const
termslug = 'staff_roles'

export default {
  name:"RoleList",
  props:["id","name"],
  mixins:[ WP ],
  computed:{
    endpoint(){
      if( this.API ) return this.API.posts().param(termslug,this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
#RoleList {
  list-style-type: none;
}
#preload {
  width: 3em;
  height: 3em;
  margin: 2em 0 0;
  opacity: 0.3;
}
</style>
