<template>
  <q-page padding class="flex flex-center content-start">
    <ArticleSummary/>
    <ArticleSummary/>
    <ArticleSummary/>
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
