import Vue from 'vue';
import Router from 'vue-router';

const App = () => import(/* webpackChunkName: "Home" */ '@/views/App.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'App',
      component: { container: App }
    }
  ]
});
