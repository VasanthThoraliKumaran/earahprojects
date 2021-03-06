<template>
  <div class="primary">
    <custom-header :size="100" class="primary black--text" title="Projects"></custom-header>

    <v-toolbar dark>
      <v-btn-toggle mandatory tile group class="overflow-hidden nav-btn-bg-none max-width justify-center">
        <v-btn
          text
          depressed
          :value="option"
          v-for="(option, i) in companies"
          :key="i"
          @click="gallerySize(option)"
          class="text-sm-caption text-uppercase spartan-regular"
          active-class="text-decoration-underline rounded-lg primary--text"
        >
          {{ option }}
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>

    <v-sheet height="auto" max-heght="600" class="primary pa-5 d-flex justify-center align-center overflow-auto">
      <v-card ref="gallery" tile elevation="0" class="transparent max-height max-width overflow-auto scroll">
        <v-row no-gutters dense>
          <v-col v-for="j in currentGallerySize" :key="j" class="d-flex child-flex ma-1">
            <v-card dark class="pa-2">
              <v-img
                aspect-ratio
                @click="viewImage(`https://picsum.photos/${random().w}/${random().h}`)"
                src="https://picsum.photos/id/100/200"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-sheet>

    <v-dialog v-model="viewImageDialog" class="primary">
      <v-toolbar class="primary">
        <v-spacer></v-spacer>
        <v-btn @click="toggleViewImageDialog" icon><v-icon>mdi-close</v-icon></v-btn>
      </v-toolbar>
      <v-card dark>
        <v-img height="500" contain :src="imgSrc" :lazy-src="imgSrc"></v-img>
      </v-card>
    </v-dialog>
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

  eerahHomeImagesLength = 5;
  eerahZoneImagesLength = 5;
  viewImageDialog = false;

  currentGallerySize = 0;
  imgSrc = '';

  mounted() {
    this.currentGallerySize = this.eerahHomeImagesLength + this.eerahZoneImagesLength;
  }

  viewImage(src: string) {
    this.imgSrc = src;
    this.toggleViewImageDialog();
  }

  toggleViewImageDialog() {
    if (this.viewImageDialog) {
      this.imgSrc = '';
    }
    this.viewImageDialog = !this.viewImageDialog;
  }

  gallerySize(company: string) {
    if (company == this.companies[1]) {
      this.currentGallerySize = this.eerahHomeImagesLength;
      return;
    } else if (company == this.companies[2]) {
      this.currentGallerySize = this.eerahZoneImagesLength;
      return;
    }
    this.currentGallerySize = this.eerahHomeImagesLength + this.eerahZoneImagesLength;
  }

  get title() {
    return ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'];
  }

  random() {
    return {
      h: this.getRandomInt(100, 200),
      w: this.getRandomInt(200, 400),
    };
  }

  get isMobile() {
    return this.$vuetify.breakpoint.mdAndDown;
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

.scroll {
  width: 200px;
  height: 400px;
  overflow: scroll;
}
.scroll::-webkit-scrollbar {
  width: 10px;
}

.scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px transparent;
  box-shadow: inset 0 0 2px transparent;
  border-radius: 10px;
  padding: 5px;
}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px transparent;
  -webkit-box-shadow: inset 0 0 6px transparent;
  background: #c5bebe !important;
  border: 1px solid black;
}
</style>
