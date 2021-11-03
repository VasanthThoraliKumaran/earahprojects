<template>
  <v-sheet class="max-width primary">
    <custom-header class="primary--text" :size="100" title="Our Team"></custom-header>
    <v-row no-gutters dense align="center" justice="center" class="primary pa-5">
      <v-col cols="auto" v-for="i in 6" :key="i" class="mx-auto my-4 d-flex justify-center align-center">
        <v-card
          max-width="400"
          dark
          elevation="10"
          class="text-center max-height d-flex flex-column justify-center align-center pa-3 rounded-lg"
        >
          <v-avatar size="150" class="mt-5">
            <v-img src="https://cdn-icons-png.flaticon.com/512/147/147140.png"></v-img>
          </v-avatar>

          <v-card-text class="text-body-1">Lorem, ipsum dolor</v-card-text>

          <v-card-text class="text-justify text-body-2"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis est pariatur ea deleniti unde quasi
            amet nulla ad consectetur ab rerum, minima.</v-card-text
          >

          <v-card-actions class="text-caption my-2 d-flex flex-column">
            <v-btn text class="my-1" dark link><v-icon class="mx-1">mdi-phone</v-icon> 9786443314</v-btn>
            <v-btn text class="my-1 text-lowercase" dark link
              ><v-icon class="mx-1">mdi-gmail</v-icon> earahprojects@gmail.com</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CustomHeader from '../components/CustomHeader.vue';
@Component({
  components: {
    CustomHeader,
  },
})
export default class Team extends Vue {}
</script>
<style lang="scss" scoped></style>
