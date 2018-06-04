import Vue from 'vue';
import Router from 'vue-router';
import { responsive } from '@/utils';
import { MOBILE, TABLET, DESKTOP, UHD } from '@/constants';

const MainMobile = () =>
  import(/* webpackChunkName: "HomeMobile" */ '@/views/mobile/Main.vue');
const HomeDesktop = () =>
  import(/* webpackChunkName: "HomeMobile" */ '@/views/desktop/Main.vue');
const HomeTablet = () =>
  import(/* webpackChunkName: "HomeMobile" */ '@/views/tablet/Main.vue');
const HomeUHD = () =>
  import(/* webpackChunkName: "HomeMobile" */ '@/views/uhd/Main.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'home',
      path: '/',
      components: {
        container: () => {
          const display = responsive();
          switch (display) {
            case MOBILE:
              return MainMobile();
            case TABLET:
              return HomeTablet();
            case DESKTOP:
              return HomeDesktop();
            case UHD:
              return HomeUHD();
            default:
              return null;
          }
        }
      }
    }
  ]
});
