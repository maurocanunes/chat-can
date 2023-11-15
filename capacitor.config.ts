import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chatcam',
  appName: 'chat-can',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
