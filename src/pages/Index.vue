<template>
  <q-page padding class="flex flex-center content-start">
    <div v-for="(article, idx) in articles" :key="idx">
      <article-summary :title="article.title" :content="article.content" :imgs="imgs"/>
      <div class="column items-end go-btn">
          <q-btn class="col-1" color="primary" @click="gotoArticle(article.id)" label="進入閱讀"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import ArticleSummary from 'components/ArticleSummary';

export default {
  name: 'PageIndex',
  components: {
    ArticleSummary,
  },
  data() {
    return {
      articles: [],
      imgs: [],
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const articles = await this.$axios.get('/api/article/vegan/data');
      this.imgs = ['/api/img/article/vegan/0', '/api/img/article/vegan/1', '/api/img/article/vegan/2'];
      this.articles = articles.data;
    },
    gotoArticle(id) {
      this.$router.push(`article/${id}`);
    },
  },
};
</script>
