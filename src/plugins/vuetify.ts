import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { lightTheme, darkTheme } from './../app.config';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
});
