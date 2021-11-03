<template>
  <v-card tile dark class="max-width d-flex flex-column align-center justify-center pt-3">
    <v-card-text class="text-body-2 text-center spartan-bold">GET IN TOUCH</v-card-text>

    <v-row
      align="center"
      justify="center"
      no-gutters
      dense
      class="my-2 novaSlim-regular text-subtitle-2 pa-2 max-width"
    >
      <v-col cols="auto">
        <span class="mx-4" dark link><v-icon>mdi-phone</v-icon> 9786443314</span>
      </v-col>
      <v-col cols="auto">
        <span class="mx-4" dark link><v-icon>mdi-gmail</v-icon>earahprojects@gmail.com</span>
      </v-col>
    </v-row>
    <div class="text-center d-flex flex-column flex-sm-row mt-5 max-width">
      <v-row dense no-gutters class="max-width">
        <v-col v-for="(link, key) in contactData" :key="key">
          <v-card-text class="text-uppercase spartan-bold">
            {{ key }}

            <v-list expand class="d-flex flex-column justify-center align-center pa-2">
              <v-list-item
                link
                class="text-center my-2 spartan-regular text-capitalize text-subtitle-2"
                v-for="(item, index) in link"
                :key="index"
              >
                {{ item }}</v-list-item
              >
            </v-list>
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
    </div>
    <v-list class="d-flex align-center justify-center mt-4">
      <v-list-item-icon class="mx-4" link v-for="app in socialMedia" :key="app">
        <v-btn icon>
          <v-icon>{{ `mdi-${app}` }}</v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list>

    <v-card-text class="text-center my-4">@copyright 2021 earahprojects.in. All Rights Reserverd</v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { contactData } from '../data-mappings/contact.data';
@Component({})
export default class Contact extends Vue {
  contactData = contactData;

  get socialMedia() {
    return ['facebook', 'instagram', 'gmail', 'whatsapp'];
  }

  get mb() {
    return this.$vuetify.breakpoint;
  }

  @Watch('mb', { deep: true })
  onUpdate() {
    console.log('bk ', this.mb);
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/fonts.scss';
</style>
