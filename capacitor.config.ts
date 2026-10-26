import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.halabacityfc.app',
  appName: 'Halaba City FC',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  android: {
    allowMixedContent: true,
  },
  plugins: {
    CapacitorUpdater: {
      autoUpdate: 'onLaunch',
      // Point to a free static update-check file hosted on Firebase
      updateUrl: 'https://halaba-fc.web.app/update-check.json',
      statsUrl: '',
    },
  },
};

export default config;
