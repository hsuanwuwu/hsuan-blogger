
<template>
  <q-page padding class="content-start">
    <div class="flex flex-start lincense">
      用的套件是這個：
      <a href="https://quasar.dev/"  target="_blank">Quasar</a>
    </div>
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
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const articles = await this.$axios.get('/api/article/vegan/data.json');
      this.article = { ...articles.data[0] };
    },
  },
};
</script>
<style lang="sass" scoped>
.lincense
  height: 40px
  font-size: 10px
  .lincense-img
    align-self: center
</style>
