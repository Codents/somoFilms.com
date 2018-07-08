import Vue from 'vue';
import Router from 'vue-router';
import { responsive } from '@/utils';
import { SMALL } from '@/constants';

const HomeSmall = () =>
  import(/* webpackChunkName: "smallHome" */ '@/views/small/sections/Home.vue');
const TeamSmall = () =>
  import(/* webpackChunkName: "smallTeam" */ '@/views/small/sections/Team.vue');
const WorksSmall = () =>
  import(/* webpackChunkName: "smallWotks" */ '@/views/small/sections/Works.vue');
const ClientsSmall = () =>
  import(/* webpackChunkName: "smallClients" */ '@/views/small/sections/Clients.vue');
const AboutSmall = () =>
  import(/* webpackChunkName: "smallClients" */ '@/views/small/sections/About.vue');
const ContactSmall = () =>
  import(/* webpackChunkName: "smallClients" */ '@/views/small/sections/Contact.vue');
const InProgressSmall = () =>
  import(/* webpackChunkName: "smallClients" */ '@/views/small/sections/InProgress.vue');

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
              return HomeSmall();
            default:
              return null;
          }
        }
      }
    },
    {
      name: 'team',
      path: '/team',
      components: {
        container: () => {
          const display = responsive();
          switch (display) {
            case SMALL:
              return TeamSmall();
            default:
              return null;
          }
        }
      }
    },
    {
      name: 'works',
      path: '/works',
      components: {
        container: () => {
          const display = responsive();
          switch (display) {
            case SMALL:
              return WorksSmall();
            default:
              return null;
          }
        }
      }
    },
    {
      name: 'clients',
      path: '/clients',
      components: {
        container: () => {
          const display = responsive();
          switch (display) {
            case SMALL:
              return ClientsSmall();
            default:
              return null;
          }
        }
      }
    },
    {
      name: 'about',
      path: '/about',
      components: {
        container: () => {
          const display = responsive();
          switch (display) {
            case SMALL:
              return AboutSmall();
            default:
              return null;
          }
        }
      }
    },
    {
      name: 'inprogress',
      path: '/inprogress',
      components: {
        container: () => {
          const display = responsive();
          switch (display) {
            case SMALL:
              return InProgressSmall();
            default:
              return null;
          }
        }
      }
    },
    {
      name: 'contact',
      path: '/contact',
      components: {
        container: () => {
          const display = responsive();
          switch (display) {
            case SMALL:
              return ContactSmall();
            default:
              return null;
          }
        }
      }
    }
  ]
});
