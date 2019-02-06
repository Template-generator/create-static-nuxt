<template>
  <div class="container">
    <section class="section">
      <div class="content">
        <h1>{{ fields.title }}</h1>
        <h5>{{ fields.description }}</h5>
        <div 
          :class="$style.information" 
          v-html="render(fields.body)"/>
      </div>
    </section>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  async asyncData({ app, params, query }) {
    const result = await app.$contentful.getEntries({
      content_type: 'blogPost',
      'fields.slug': params.slug
    })

    if (result.total === 1) {
      return result.items[0]
    }
    return
  },
  methods: {
    render(document) {
      return documentToHtmlString(document)
    }
  }
}
</script>

<style lang="scss" scoped module>
.information {
  margin-top: 30px;
}
</style>
