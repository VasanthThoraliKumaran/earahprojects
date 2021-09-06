<template>
  <div class="max-height max-width">
    <v-app-bar class="primary nav" elevate-on-scroll app>
      <v-row
        dense
        no-gutters
        justify="center"
        justify-lg="start"
        align-content="center"
        class="overflow-hidden ml-lg-12"
      >
        <v-list-item-avatar color="black" tile>
          <v-img :lazy-src="navBarData.companyLogo" :src="navBarData.companyLogo"> </v-img>
        </v-list-item-avatar>
        <v-toolbar-title class="pl-sm-1" style="line-height: 1px">
          <span class="novaSlim-regular text-h5"> {{ navBarData.companyName }}</span>
          <br />
          <span class="text-caption">{{ navBarData.tagLine }}</span></v-toolbar-title
        >
      </v-row>

      <v-btn-toggle mandatory tile group class="overflow-hidden nav-btn-bg-none" v-if="!isMobile">
        <v-btn
          text
          depressed
          :value="option"
          v-for="(option, i) in navBarData.navItems"
          :key="i"
          class="text-sm-caption text-uppercase spartan-regular"
          active-class="text-decoration-underline rounded-lg"
          @click="goTo(option.name)"
        >
          {{ option }}
        </v-btn>
        <v-btn value="theme" icon><v-icon>mdi-menu</v-icon></v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <v-card elevation="0" height="700" color="primary" dark flat tile>
      <v-window v-model="onboarding">
        <v-window-item v-for="n in length" :key="`card-${n}`">
          <v-card class="transparent">
            <v-row class="fill-height max-width" align="center" justify="center">
              <v-col cols="6">
                <v-img
                  :src="require(`@/assets/images/${homeData.banner.image}`)"
                  :lazy-src="require(`@/assets/images/${homeData.banner.image}`)"
                  height="600"
                >
                </v-img>
              </v-col>
              <v-col>
                <v-card elevation="0" class="transparent pl-10" height="500">
                  <v-card-text class="text-sm-h2 notoSansJP-bold black--text text-uppercase">{{
                    navBarData.companyName
                  }}</v-card-text>
                  <v-card-text class="text-sm-h4 spartan-regular black--text"
                    >{{ parsedTagLine.phrase1 }}
                    <div class="spartan-bold">{{ parsedTagLine.phrase2 }}</div></v-card-text
                  >

                  <v-card-text class="spartan-regular black--text mt-sm-5">
                    {{ homeData.banner.shortDescription }}
                  </v-card-text>

                  <v-card-actions class="mt-10">
                    <v-btn small light rounded outlined>Explore more</v-btn>
                    <v-btn small light rounded outlined class="ml-5">
                      <v-icon class="ma-1" small>mdi-phone-classic</v-icon>Schedule a meeting</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-center">
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
            <v-btn small :input-value="active" icon @click="toggle" class="ma-1">
              <v-icon color="secondary" small>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
      </v-card-actions>
    </v-card>
    <about></about>
    <project></project>
  </div>
</template>
<script lang="ts">
import { appService } from '@/app.service';
import Vue from 'vue';
import Component from 'vue-class-component';
import { navBarData, homeData } from '../data-mappings/home.data';
import About from './About.vue';
import Project from './Project.vue';
@Component({
  components: {
    About,
    Project,
  },
})
export default class Home extends Vue {
  onboarding = 0;
  length = 5;
  navBarData = navBarData;
  homeData = homeData;

  interval: any;
  timeout = 3000;

  startWindowSlider() {
    this.interval = setInterval(() => {
      this.onboarding += 1;
    }, this.timeout);
  }

  stopWindowSlider() {
    clearInterval(this.interval);
  }

  next() {
    this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
  }
  prev() {
    this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
  }

  get isMobile() {
    return this.$vuetify.breakpoint.mdAndDown;
  }

  get isDarkTheme() {
    return appService.getDarkTheme();
  }

  get parsedTagLine() {
    const tagLineIntoPhrases = homeData.banner.tagLine.split(' ');
    const length = tagLineIntoPhrases.length;
    return {
      phrase1: tagLineIntoPhrases.splice(0, length / 2).join(' '),
      phrase2: tagLineIntoPhrases.splice(length / 2 - 2, length).join(' '),
    };
  }

  async goTo(route: string) {
    console.log(route);
    const res = await this.$vuetify.goTo('#' + route, {
      duration: 700,
      offset: 50,
      easing: 'easeInOutCubic',
    });

    console.log('goto resp: ', res);
  }

  switchTheme() {
    appService.switchTheme();
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
