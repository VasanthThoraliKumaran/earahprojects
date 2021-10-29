<template>
  <div class="max-width">
    <custom-header dark title="Who We Are?" class="pt-5"></custom-header>
    <v-sheet dark class="d-flex flex-column justify-center align-center max-width">
      <v-card dark tile elevation="0" max-width="80%">
        <v-card-text
          v-html="data"
          class="text-h6 text-wrap spartan-regular"
          v-for="data in aboutData.aboutEerahProjects"
          :key="data"
        >
        </v-card-text>
      </v-card>

      <v-sheet dark width="90%" class="primary mb-5 mt-5 mb-sm-10 mt-sm-10 rounded-lg">
        <div v-for="(company, key, index) in aboutData.companies" :key="index">
          <poster
            :posterImage="company.image"
            :posterTitle="key"
            :descriptions="company.description"
            :invert="index % 2 != 0 ? true : false"
          ></poster>
        </div>
      </v-sheet>
    </v-sheet>
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
</style>
