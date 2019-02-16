<template>
  <div class="container">
    <section class="section">
      <div class="content">
        <h1 class="title is-1">
          Blog list
        </h1>
        <h2 class="subtitle">
          This should be a list of my blog
        </h2>
      </div>
      <div class="columns is-multiline">
        <div 
          v-for="article in items" 
          :key="article.sys.id"
          class="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
          <div class="card">
            <div class="card-image">
              <a :href="'blogs/' + article.fields.slug">
                <figure class="image is-4by3">
                  <img 
                    :src="article.fields.heroImage.fields.file.url" 
                    :alt="article.fields.heroImage.fields.description">
                </figure>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <h1 class="title is-4 has-text-black">{{ article.fields.title }}</h1>
                <h5 class="subtitle is-6 has-text-grey">{{ article.fields.description }}</h5>

                <a 
                  v-for="tag in article.fields.tags"
                  :key="tag" 
                  :class="$style.tag" 
                  class="tag">#{{ tag }}</a>.
                <br>
                <time 
                  :datetime="article.fields.publishDate" 
                  class="has-text-grey-light">{{ formatDate(article.fields.publishDate) }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  async asyncData({ app }) {
    const result = await app.$contentful.getEntries({
      content_type: 'blogPost'
    })

    return result
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD MMM YYYY HH:mm:ss')
    }
  }
}
</script>

<style lang="scss" scoped module>
.tag {
  margin: 5px;
}
</style>
