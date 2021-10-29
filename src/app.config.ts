import { colors } from 'vuetify/lib';
import { VuetifyThemeVariant } from 'vuetify/types/services/theme';

export const appConfig = {
  title: 'EarahProjects',
  version: process.env.VERSION,
  versionCode: process.env.VERSION_CODE,
  port: {
    dev_server: 8080,
  },
  mode: {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
  },
};

export const lightTheme: Partial<VuetifyThemeVariant> = {
  primary: '#FFD02A', // #E53935
  secondary: '#F3F3F3', // #FFCDD2
  accent: colors.shades.white, // #3F51B5
};

export const darkTheme: Partial<VuetifyThemeVariant> = {
  primary: colors.grey.darken1, // #E53935
  secondary: colors.shades.white, // #FFCDD2
  accent: colors.grey.base, // #3F51B5
};
