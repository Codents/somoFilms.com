import Vue from 'vue';
import Router from 'vue-router';

const Home = () =>
  import(/* webpackChunkName: "HomeHub" */ '@/views/home/Home.vue');
const Team = () =>
  import(/* webpackChunkName: "TeamHub" */ '@/views/team/Team.vue');
const Works = () =>
  import(/* webpackChunkName: "WorksHub" */ '@/views/works/Works.vue');
const Clients = () =>
  import(/* webpackChunkName: "Clientshub" */ '@/views/clients/Clients.vue');
const About = () =>
  import(/* webpackChunkName: "AboutHub" */ '@/views/about/About.vue');
const Contact = () =>
  import(/* webpackChunkName: "ContactHub" */ '@/views/contact/Contact.vue');
const InProgress = () =>
  import(/* webpackChunkName: "InProgressHub" */ '@/views/inprogress/InProgress.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'home',
      path: '/',
      components: { container: Home }
    },
    {
      name: 'team',
      path: '/team',
      components: { container: Team }
    },
    {
      name: 'works',
      path: '/works',
      components: { container: Works }
    },
    {
      name: 'clients',
      path: '/clients',
      components: { container: Clients }
    },
    {
      name: 'about',
      path: '/about',
      components: { container: About }
    },
    {
      name: 'contact',
      path: '/contact',
      components: { container: Contact }
    },
    {
      name: 'inprogress',
      path: '/inprogress',
      components: { container: InProgress }
    }
  ]
});
