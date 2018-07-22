import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueMq from 'vue-mq';
import * as location from '@/assets/location';
import App from '@/views/App';
import router from './router';
import { breakpoints } from './constants';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueMq, { breakpoints });

const i18n = new VueI18n(location);
const store = {
  showImageFullScreen: false,
  showVideoFullScreen: false
};

const app = new Vue({
  data: store,
  i18n,
  router,
  ...App
});

app.$mount('#app');
