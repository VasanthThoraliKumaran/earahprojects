<template>
  <div class="ma-5">
    <v-row no-gutters dense class="max-width">
      <v-col v-if="!invert || isMobile" class="pa-3">
        <slot name="posterImage">
          <v-img
            v-if="posterImage"
            :src="require(`@/assets/images/${posterImage}`)"
            :lazy-src="require(`@/assets/images/${posterImage}`)"
            max-width="600"
            aspect-ratio
          >
          </v-img>
        </slot>
      </v-col>
      <v-col>
        <slot name="posterContent">
          <v-card
            light
            elevation="0"
            class="transparent pt-4 pl-sm-10 d-flex flex-column align-center rounded-lg"
            v-if="posterTitle && descriptions"
          >
            <v-card-text class="black--text text-sm-h2 text-center notoSansJP-bold text-uppercase">{{ posterTitle }}</v-card-text>

            <v-card-text
              v-for="desc in descriptions"
              :key="desc"
              class="text-caption text-sm-body-1 spartan-regular mt-sm-5"
            >
              {{ desc }}
            </v-card-text>

            <v-card-actions class="mt-2">
              <v-btn class="black accent--text text-capitalize text-caption" rounded outlined>explore more</v-btn>
            </v-card-actions>
          </v-card>
        </slot>
      </v-col>
      <v-col v-if="!isMobile && invert" class="pa-3">
        <slot name="posterImage">
          <v-img
            v-if="posterImage"
            :src="require(`@/assets/images/${posterImage}`)"
            :lazy-src="require(`@/assets/images/${posterImage}`)"
            aspect-ratio
            max-width="600"
          >
          </v-img>
        </slot>
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
  @Prop({
    default: '',
  })
  posterImage!: string;

  @Prop({
    default: '',
  })
  posterTitle!: string;

  @Prop({
    default: '',
  })
  descriptions!: string[];

  @Prop({ default: false })
  invert!: boolean;

  get isMobile() {
    return this.$vuetify.breakpoint.mdAndDown;
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/fonts.scss';
@import '@/scss/globals.scss';
</style>
