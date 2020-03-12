<template>
  <q-page padding class="flex flex-center content-start">
    <article-summary/>
    <article-summary/>
    <article-summary/>
  </q-page>
</template>

<script>
import ArticleSummary from 'components/ArticleSummary';

export default {
  name: 'PageIndex',
  components: {
    ArticleSummary,
  },
};
</script>
