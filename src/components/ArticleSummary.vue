<template>
  <div class="container">
    <q-carousel
      v-model="slide"
      transition-prev="fade"
      transition-next="fade"
      dark
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      :infinite="true"
      class="bg-primary text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide v-for="(img, i) in imgs" :key="i"
        :name="`${i}`" :img-src="img"
        class="column no-wrap flex-center">
        <div class="q-mt-md text-center title">
          {{ title }}
        </div>
      </q-carousel-slide>
    </q-carousel> 
    <div class="flex content">
        <div :class="{'preview': isPreview}">
          <div class="line" v-for="(text, idx) in styledContent" :key="idx">
            {{ text }}
          </div>
        </div>
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
      default: () => ['statics/default_bk.jpg'],
    },
    title: {
      default: () => '',
    },
    content: {
      default: () => '',
    },
  },
  computed: {
    styledContent() {
      return this.content.split(/\n/g);
    },
  },
  data () {
    return {
      slide: '0',
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
    word-break: break-word
    .preview
      @include multiline-preview
    .line
      min-height: 1.6em

.go-btn
  margin-bottom: 20px

.title
  font-size: 1.6em

.q-carousel__slide
  box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.3)
</style>
