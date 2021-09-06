<template>
  <div class="max-width secondary">
    <custom-header class="secondary" title="Who We Are?"></custom-header>
    <div class="d-flex flex-column justify-center align-center max-width">
      <v-card tile elevation="0" class="transparent" width="60%">
        <v-card-text v-for="data in aboutData.aboutEerahProjects" :key="data">
          {{ data }}
        </v-card-text>
      </v-card>

      <v-sheet width="90%" class="primary mt-10 mb-10 rounded-lg">
        <div v-for="(company, key, index) in aboutData.companies" :key="index">
          <poster
            :posterImage="company.image"
            :posterTitle="key"
            :descriptions="company.description"
            :invert="index % 2 != 0 ? true : false"
          ></poster>
        </div>
      </v-sheet>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CustomHeader from '../components/CustomHeader.vue';
import Poster from '../components/Poster.vue';
import { aboutData } from '../data-mappings/about.data';
@Component({
  components: {
    CustomHeader,
    Poster,
  },
})
export default class About extends Vue {
  aboutData = aboutData;
}
</script>
<style lang="scss" scoped>
@import '@/scss/fonts.scss';
@import '@/scss/globals.scss';
</style>
