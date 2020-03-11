<template>
  <div class="container">
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide v-for="(img, i) in imgs" :key="i"
        :name="`${i}`" :img-src="img" class="column no-wrap flex-center">
        <div class="q-mt-md text-center" v-if="isPreview">
          {{ title }}
        </div>
      </q-carousel-slide>
    </q-carousel> 
    <div class="flex content">
        <p :class="{'preview': isPreview}">{{ content }}</p>
    </div>
    <div class="column items-end go-btn" :v-if="isPreview">
        <q-btn class="col-1" color="primary" label="進入閱讀"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleSummary',
  props: {
    isPreview: {
      type: Boolean,
      default: true,
    },
    imgs: {
      default: () => ['statics/default_bk.jpg', 'aa', 'aa'],
    },
  },
  data () {
    return {
      slide: '0',
      title: 'Title Title Title...',
      content: '..............Lorem..................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................LoremLoremLoremLoremLorem...................Lorem...................Lorem...................Lorem...................Lorem.......... .........Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem...................Lorem......',
    };
  },
};
</script>
<style lang="sass" scoped>
@mixin multiline-preview
  word-wrap: break-word
  overflow: hidden
  text-overflow: ellipsis
  height: 100px
  @supports (display: -webkit-box)
    display: -webkit-box
    -webkit-box-orient: vertical
    -webkit-line-clamp: 4
    overflow: hidden

.container
  width: 100%
  .content
    margin-top: 12px
    font-size: 16px
    line-height: 1.6em
    word-break: break-word
    .preview
      @include multiline-preview

.go-btn
  margin-bottom: 20px
</style>
