<template>
  <component
      :is="tag || isRelative(url)
        ? 'router-link'
        : 'a'"
      :to="url"
      :href="url"
      :target="target"
      id="AppNav-menuJoin"
      >
    <slot>
      <div v-html="title || 'Join'"/>
    </slot>
  </component>
</template>

<script>
import isRelative from '@/includes/mixins/link.isRelative'

export default {
  mixins:[ isRelative ],
  props:[
    'tag',
    'url',
    'title',
    'target',
  ]
}
</script>