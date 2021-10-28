<template>
  <div class="max-width primary" style="position: relative">
    <custom-header class="primary" title="Our Services"></custom-header>
    <div style="padding-top: 5%" class="transparent max-width">
      <v-sheet
        class="d-flex flex-column justify-center align-center max-width"
        height="auto"
        v-for="(service, key) in serviceData.allServices"
        :key="key"
      >
        <v-card tile elevation="0" class="max-height max-width d-flex flex-column justify-center align-center pa-5">
          <v-card-title class="text-h4 text-uppercase max-width d-flex justify-center spartan-bold">{{
            key
          }}</v-card-title>
          <v-card-text style="width: 60%" class="pa-5"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore ea facere molestias non,
            praesentium assumenda incidunt odit ipsum explicabo saepe perspiciatis voluptatibus in fugiat vitae, beatae
            impedit dignissimos aperiam.</v-card-text
          >
        </v-card>
        <v-card elevation="0" class="ma-5 max-width d-flex flex-column justify-center align-center primary">
          <v-row no-gutters dense class="max-height d-flex justify-center pa-5" style="max-width: 60%">
            <v-col
              cols="auto"
              class="ma-3 d-flex flex-column justify-center align-center"
              v-for="(data, index) in service.services"
              :key="index"
            >
              <v-card
                elevation="0"
                class="grow mx-auto d-flex flex-column max-width max-height justify-space-between align-center pa-3"
              >
                <v-avatar size="100" tile><v-img :src="data.thumbnail"></v-img></v-avatar>
                <v-card-title class="spartan-bold text-body-2 text-uppercase mt-2">{{ data.service }} </v-card-title>
                <v-divider inset dark></v-divider>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-sheet>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import Component from 'vue-class-component';
import CustomHeader from '../components/CustomHeader.vue';
import Poster from '../components/Poster.vue';
import { serviceData } from '../data-mappings/service.data';
@Component({
  components: {
    CustomHeader,
    Poster,
  },
})
export default class Service extends Vue {
  serviceData = serviceData;

  findObjectSize(obj: any) {
    const res = _.size(obj);
    console.log(res);
    return Math.floor(res);
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/fonts.scss';
@import '@/scss/globals.scss';

.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.1);
}
</style>
