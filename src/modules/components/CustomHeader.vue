<template>
  <v-sheet :height="size" dark class="d-flex align-center justify-center pt-3">
    <v-row class="max-height" no-gutters dense align="center" justify="center">
      <span class="text-sm-h3 text-h4 pa-2 spartan-bold text-uppercase">{{ title }}</span>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
@Component({})
export default class CustomHeader extends Vue {
  @Prop()
  title!: string;

  @Prop()
  size!: string | number;
}
</script>
<style lang="scss" scoped>
@import '@/scss/fonts.scss';
</style>
