<template>
  <div id="Home" class="max-height max-width">
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

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="isMobile"></v-app-bar-nav-icon>

      <v-btn-toggle mandatory tile group class="overflow-hidden nav-btn-bg-none" v-if="!isMobile">
        <v-btn
          text
          depressed
          :value="option"
          v-for="(option, i) in navBarData.navItems"
          :key="i"
          class="text-sm-caption text-uppercase notoSansJP-regular font-weight-thin"
          active-class="text-decoration-underline rounded-lg"
          @click="goTo(option)"
        >
          {{ option }}
        </v-btn>
        <v-btn value="theme" icon><v-icon>mdi-menu</v-icon></v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <v-navigation-drawer bottom dark v-model="drawer" fixed temporary v-if="isMobile">
      <v-list nav dense>
        <v-list-item-group active-class="primary">
          <v-list-item v-for="(option, i) in navBarData.navItems" :key="i" @click="goTo(option)">
            <v-list-item-title>{{ option }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="switchTheme">
            <v-list-item-icon
              ><v-icon>{{ isDarkTheme ? 'mdi-lightbulb-off' : 'mdi-lightbulb-on' }} </v-icon></v-list-item-icon
            >
            <v-list-item-title>Switch Theme</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card elevation="0" color="primary" dark flat tile>
      <v-window v-model="onboarding">
        <v-window-item v-for="n in length" :key="`card-${n}`">
          <v-card class="transparent primary">
            <v-row class="fill-height max-width" align="center" justify="center">
              <v-col cols="12" sm="6">
                <v-img
                  :src="require(`@/assets/images/${homeData.banner.image}`)"
                  :lazy-src="require(`@/assets/images/${homeData.banner.image}`)"
                  max-height="600"
                  height="600"
                >
                </v-img>
              </v-col>
              <v-col>
                <v-card elevation="0" class="transparent pl-10">
                  <v-card-text class="text-sm-h2 text-h4 notoSansJP-bold black--text text-uppercase">{{
                    navBarData.companyName
                  }}</v-card-text>
                  <v-card-text class="text-sm-h4 text-h6 spartan-regular black--text"
                    >{{ parsedTagLine.phrase1 }}
                    <div class="spartan-bold">{{ parsedTagLine.phrase2 }}</div></v-card-text
                  >

                  <v-card-text class="spartan-regular black--text mt-sm-5 text-caption text-sm-h6">
                    {{ homeData.banner.shortDescription }}
                  </v-card-text>

                  <v-row no-gutters dense align="center" class="pa-1">
                    <v-col cols="auto" class="mr-3 mb-3">
                      <v-btn class="text-caption" light rounded outlined>Explore more</v-btn>
                    </v-col>
                    <v-col class="mr-3 mb-3">
                      <v-btn class="text-caption" light rounded outlined>
                        <v-icon class="ma-1" small>mdi-phone-classic</v-icon>Schedule a meeting</v-btn
                      >
                    </v-col>
                  </v-row>
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
              <v-icon @click="stopWindowSlider" color="secondary" small>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
      </v-card-actions>
    </v-card>
    <about id="About"></about>
    <service id="OurServices"></service>
    <project id="Projects"></project>
  </div>
</template>
<script lang="ts">
import { appService } from '@/app.service';
import Vue from 'vue';
import Component from 'vue-class-component';
import { navBarData, homeData } from '../data-mappings/home.data';
import About from './About.vue';
import Project from './Project.vue';
import Service from './Service.vue';
@Component({
  components: {
    About,
    Project,
    Service,
  },
})
export default class Home extends Vue {
  onboarding = 0;
  length = 5;
  navBarData = navBarData;
  homeData = homeData;
  drawer = false;

  interval: any;
  timeout = 3000;

  mounted() {
    this.startWindowSlider();
  }

  startWindowSlider() {
    this.interval = setInterval(() => {
      this.onboarding += 1;
    }, this.timeout);
  }

  stopWindowSlider() {
    if (this.interval) {
      clearInterval(this.interval);
    }
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
    const res = await this.$vuetify.goTo('#' + route.split(' ').join(''), {
      duration: 700,
      offset: 0,
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
.nav-btn-bg-none {
  ::v-deep .v-btn:before {
    background-color: transparent !important;
  }
}
</style>
