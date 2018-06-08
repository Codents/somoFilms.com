import Vue from 'vue';
import Router from 'vue-router';
import { responsive } from '@/utils';
import { SMALL, MEDIUM, LARGE, XXL } from '@/constants';

const MainMobile = () =>
  import(/* webpackChunkName: "smallHome" */ '@/views/small/Main.vue');
const mediumHome = () =>
  import(/* webpackChunkName: "mediumHome" */ '@/views/medium/Main.vue');
const largeHome = () =>
  import(/* webpackChunkName: "largeHome" */ '@/views/large/Main.vue');
const xxlHome = () =>
  import(/* webpackChunkName: "xxlHome" */ '@/views/xxl/Main.vue');

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
            case SMALL:
              return MainMobile();
            case MEDIUM:
              return mediumHome();
            case LARGE:
              return largeHome();
            case XXL:
              return xxlHome();
            default:
              return null;
          }
        }
      }
    }
  ]
});
