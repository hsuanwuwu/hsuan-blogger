<template>
  <q-page padding class="flex flex-center content-start">
    <article-summary
      :title="article.title" :content="article.content" :imgs="imgs" :isPreview="false"/>
  </q-page>
</template>

<script>
import ArticleSummary from 'components/ArticleSummary';

export default {
  name: 'PageArticle',
  components: {
    ArticleSummary,
  },
  data() {
    return {
      article: {},
      imgs: [],
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const articles = await this.$axios.get('/api/article/vegan/data');
      this.article = { ...articles.data[0] };
      this.imgs = ['/api/img/article/vegan/0', '/api/img/article/vegan/1', '/api/img/article/vegan/2'];
    },
  },
};
</script>
