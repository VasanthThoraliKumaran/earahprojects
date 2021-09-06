<template>
  <div class="ma-5">
    <v-row no-gutters dense class="max-width">
      <v-col cols="5" v-if="!invert">
        <v-img
          :src="require(`@/assets/images/${posterImage}`)"
          :lazy-src="require(`@/assets/images/${posterImage}`)"
          contain
        >
        </v-img>
      </v-col>
      <v-col class="pl-10">
        <v-card elevation="0" class="transparent pa-10">
          <v-card-text class="text-sm-h2 notoSansJP-bold black--text text-uppercase">{{ posterTitle }}</v-card-text>

          <v-card-text v-for="desc in descriptions" :key="desc" class="spartan-regular black--text mt-sm-5">
            {{ desc }}
          </v-card-text>

          <v-card-actions class="mt-10 pl-4">
            <v-btn class="black accent--text text-capitalize text-body-2 pa-4" rounded outlined>explore more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="5" v-if="invert">
        <v-img :src="require(`@/assets/images/${posterImage}`)" :lazy-src="require(`@/assets/images/${posterImage}`)">
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
@Component({})
export default class Poster extends Vue {
  @Prop()
  posterImage!: string;

  @Prop()
  posterTitle!: string;

  @Prop()
  descriptions!: string[];

  @Prop({ default: false })
  invert!: boolean;
}
</script>
<style lang="scss" scoped>
@import '@/scss/fonts.scss';
@import '@/scss/globals.scss';
</style>
