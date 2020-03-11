<template>
  <q-layout view="lhh LpR lff" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-page-container>
      <q-drawer
        :v-model="true"
        show-if-above
        :mini="miniDraw"
        :width="drawWidth"
        :breakpoint="drawBreakWidth"
        transition="fade"
        :class="{'mini-drawer': miniDraw, 'normal-drawer': !miniDraw}"
      >
        <q-scroll-area class="drawer-scroll" style="border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple class="drawer-item">
              <q-item-section avatar>
                <q-icon name="las la-home" />
              </q-item-section>
              <q-item-section class="drawer-text">
                Home
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="drawer-item">
              <q-item-section avatar>
                <q-icon name="las la-seedling"/>
              </q-item-section>
              <q-item-section class="drawer-text">
                Vegan Life
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="drawer-item">
              <q-item-section avatar>
                <q-icon name="las la-paper-plane" />
              </q-item-section>
              <q-item-section class="drawer-text">
                Something
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="drawer-item">
              <q-item-section avatar>
                <q-icon name="las la-laptop-code" />
              </q-item-section>
              <q-item-section class="drawer-text">
                Tech Life
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top avatar-bk" :src="avatarBk">
          <div class="bg-transparent" style="text-align: right"
           :class="{'absolute-center': miniDraw, 'absolute-bottom-right': !miniDraw}">
            <q-avatar size="66px" class="q-mb-sm avatar-img">
              <img :src="avatar">
            </q-avatar>
            <div class="text-weight-bold avatar-name">{{ person.name }}</div>
            <div class="avatar-id">
              {{ person.linkId && person.linkId.length > 0 ? `@{person.linkId}` : '' }}
            </div>
          </div>
        </q-img>
      </q-drawer>
      
      <router-view />
      <q-page-sticky position="top-right" :offset="fabPos" v-if="hideDraw">
        <q-fab v-model="isFabOpen" label="" vertical-actions-align="right" color="purple"
              icon="keyboard_arrow_down" direction="down">
          <q-fab-action color="primary" @click="onClick" icon="mail" label="" />
          <q-fab-action color="secondary" @click="onClick" icon="alarm" label="" />
          <q-fab-action color="orange" @click="onClick" icon="airplay" label="" />
          <q-fab-action color="accent" @click="onClick" icon="room" label="" />
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import _ from 'lodash';
import Person from 'models/person';

export default {
  name: 'MainLayout',
  components: {},
  data() {
    return {
      miniDraw: false,
      drawBreakWidth: 320,
      hideDraw: false,
      drawWidth: 250,
      isFabOpen: false,
      fabPos: [20, 20],
      avatar: null,
      avatarBk: null,
      person: {},
    };
  },
  computed: {
    drawerIcon() {
      return this.isDrawerOpen ? 'lar la-caret-square-left' : 'lar la-caret-square-right';
    },
  },
  watch: {
    miniDraw: {
      immediate: true,
      handler(newValue, oldValue) {
        if (!oldValue) {
          this.updateView();
        }
      },
    },
  },
  mounted() {
    window.addEventListener('resize', _.debounce(this.updateView, 300));
    this.person = new Person('Hope');
  },
  methods: {
    onClick() {
    },
    updateView() {
      this.miniDraw = window.innerWidth <= 768;
      this.drawWidth = window.innerWidth <= 960 ? 180 : 300;
      this.hideDraw = window.innerWidth <= this.drawBreakWidth;
    },
  },
};

</script>
<style lang="sass" scoped>
$avatar-bk-height: 250px
$avatar-bk-mini-height: 63px

.avatar-bk
  background: steelblue
.avatar-img
  padding-top: 3px
  img
    background: #feffd9
.normal-drawer
  .drawer-scroll
    height: calc(100% - #{$avatar-bk-height})
    margin-top: $avatar-bk-height
  .avatar-bk
    height: $avatar-bk-height

.mini-drawer
  .drawer-scroll
    height: calc(100% - #{$avatar-bk-mini-height})
    margin-top: $avatar-bk-mini-height
    transition: width 2s, height 4s
  .avatar-bk
    height: $avatar-bk-mini-height
  .avatar-img
    img
      width: 50px
      height: 50px
  .avatar-name,.avatar-id
    display: none
</style>
