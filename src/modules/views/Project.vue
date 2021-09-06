<template>
  <div class="primary">
    <v-row no-gutters dense align="center" justify="end">
      <v-card tile elevation="0" class="transparent d-flex justify-center align-center">
        <v-spacer></v-spacer>
        <v-btn-toggle mandatory tile group class="overflow-hidden nav-btn-bg-none pr-10">
          <v-btn
            text
            depressed
            :value="option"
            v-for="(option, i) in companies"
            :key="i"
            class="text-sm-caption text-uppercase spartan-regular"
            active-class="text-decoration-underline rounded-lg"
          >
            {{ option }}
          </v-btn>
        </v-btn-toggle>
      </v-card>
    </v-row>
    <v-row no-gutters align="center" justify="center" dense>
      <v-col cols="2">
        <v-row dense no-gutters align="center">
          <v-col cols="8" class="d-flex justify-end">
            <v-sheet class="d-flex flex-column align-center justify-center transparent">
              <span
                v-for="(char, index) in title"
                :key="index"
                class="d-flex justify-center align-center text-h2 spartan-bold"
                >{{ char }}</span
              >
            </v-sheet>
          </v-col>
          <v-card tile height="300" width="10" class="ml-3"></v-card>
        </v-row>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 d-flex justify-center align-center overflow-auto" max-height="600" height="600">
          <v-card ref="gallery" tile elevation="0" class="max-height max-width overflow-auto">
            <v-row no-gutters dense class="max-width">
              <v-col v-for="j in 30" :key="j" class="d-flex child-flex ma-1 red">
                <v-img :src="`https://picsum.photos/${random().w}/${random().h}`" class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Ref } from 'vue-property-decorator';
import CustomHeader from '../components/CustomHeader.vue';
@Component({
  components: {
    CustomHeader,
  },
})
export default class Project extends Vue {
  @Ref()
  gallery!: HTMLElement;

  get title() {
    return ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'];
  }

  random() {
    return {
      h: this.getRandomInt(100, 200),
      w: this.getRandomInt(200, 400),
    };
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  get companies() {
    return ['All', 'EerahHomes', 'EerahZone'];
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/fonts.scss';
@import '@/scss/globals.scss';

.nav-btn-bg-none {
  ::v-deep .v-btn:before {
    background-color: transparent !important;
  }
}
</style>
