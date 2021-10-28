<template>
  <div class="ma-5">
    <v-row no-gutters dense class="max-width">
      <v-col cols="12" sm="5" v-if="!invert || isMobile">
        <slot name="posterImage">
          <v-img
            v-if="posterImage"
            :src="require(`@/assets/images/${posterImage}`)"
            :lazy-src="require(`@/assets/images/${posterImage}`)"
            contain
          >
          </v-img>
        </slot>
      </v-col>
      <v-col>
        <slot name="posterContent">
          <v-card elevation="0" class="transparent pa-10 pl-sm-10" v-if="posterTitle && descriptions">
            <v-card-text class="text-sm-h2 notoSansJP-bold black--text text-uppercase">{{ posterTitle }}</v-card-text>

            <v-card-text
              v-for="desc in descriptions"
              :key="desc"
              class="text-caption text-sm-body-1 spartan-regular black--text mt-sm-5"
            >
              {{ desc }}
            </v-card-text>

            <v-card-actions class="mt-sm-10 pl-sm-4">
              <v-btn class="black accent--text text-capitalize text-caption" rounded outlined>explore more</v-btn>
            </v-card-actions>
          </v-card>
        </slot>
      </v-col>
      <v-col cols="12" sm="5" v-if="!isMobile && invert">
        <slot name="posterImage">
          <v-img v-if="posterImage"
            :src="require(`@/assets/images/${posterImage}`)"
            :lazy-src="require(`@/assets/images/${posterImage}`)"
            aspect-ratio
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
