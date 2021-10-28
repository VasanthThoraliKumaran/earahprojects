<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { appService } from './app.service';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  public static instance: App;

  constructor() {
    super();
    App.instance = this;
    appService.setDarkTheme(false);
  }

  public getVuetifyInstance() {
    return this.$vuetify;
  }
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/fonts.scss';
@import '@/scss/globals.scss';
</style>

<style lang="scss" scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 100% !important;
  min-height: 100% !important;
  min-width: 300px !important;
  scroll-behavior: smooth;
}
</style>
