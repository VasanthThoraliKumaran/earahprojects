<template>
  <div class="max-width primary pa-2">
    <custom-header class="primary black--text" title="Our Services"></custom-header>
    <div class="transparent max-width primary">
      <v-sheet
        dark
        class="d-flex flex-column justify-center align-center max-width my-2 pa-3"
        v-for="(company, key) in serviceData.companies"
        :key="key"
      >
        <v-row dense no-gutters class="pa-2 my-2">
          <v-col cols="12" sm="6">
            <v-card tile elevation="0" class="max-width d-flex flex-column justify-center align-center my-10">
              <v-card-title
                class="text-wrap primary--text text-sm-h4 text-uppercase max-width d-flex justify-center spartan-bold"
                >{{ key }}</v-card-title
              >
              <v-card-text class="my-5 text-h6 spartan-regular"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore ea facere molestias non,
                praesentium assumenda incidunt odit ipsum explicabo saepe perspiciatis voluptatibus in fugiat vitae,
                beatae impedit dignissimos aperiam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel earum,
                voluptatem rem obcaecati eum necessitatibus aperiam quaerat. Labore pariatur quasi mollitia, non unde
                assumenda eius ratione harum totam excepturi officiis.
              </v-card-text>
              <v-card-text class="text-h6 spartan-regular"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore ea facere molestias non,
                praesentium assumenda incidunt odit ipsum explicabo saepe perspiciatis voluptatibus in fugiat vitae,
                beatae impedit dignissimos aperiam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel earum,
                voluptatem rem obcaecati eum necessitatibus aperiam quaerat. Labore pariatur quasi mollitia, non unde
                assumenda eius ratione harum totam excepturi officiis.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="grey darken-3 d-flex align-center">
            <v-card class="transparent" elevation="0">
              <v-row align="center" justify="center" justify-sm="start" no-gutters dense>
                <v-col class="mx-auto my-2" cols="auto" v-for="(data, index) in company.services" :key="index">
                  <v-card
                    light
                    elevation="0"
                    class="
                      flex-grow
                      grow
                      max-width
                      my-2
                      pa-2
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      transparent
                    "
                  >
                    <v-avatar class="pa-2" rounded color="primary" size="180">
                      <v-img :src="data.thumbnail" height="auto"></v-img>
                    </v-avatar>
                    <v-card-text class="spartan-bold text-caption primary--text text-center text-uppercase mt-2"
                      >{{ data.service }}
                    </v-card-text>
                    <v-divider inset dark></v-divider>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
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
</style>
