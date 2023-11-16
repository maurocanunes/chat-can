import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chatcan.android',
  appName: 'chat-can',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
