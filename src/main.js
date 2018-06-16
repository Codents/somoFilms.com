import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vue2TouchEvents from 'vue2-touch-events';
import * as location from '@/assets/location';
import App from '@/views/App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(Vue2TouchEvents);

const i18n = new VueI18n(location);
const store = {
  showFullScreen: false
};

const app = new Vue({
  data: store,
  i18n,
  router,
  ...App
});

app.$mount('#app');
