import { createApp } from 'vue';

import router from '@/router';
import i18n from '@/i18n';
import '@/styles/styles.scss';

import App from './App.vue';

createApp(App).use(router).use(i18n).mount('#app');
