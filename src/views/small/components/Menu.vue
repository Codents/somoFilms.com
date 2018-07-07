<template>
  <div class="container-menu">
    <i class="icon-launcher icon-small-menu"
       ref="menuIcon"
       @click="show = !show" />
    <transition enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOutLeft">
      <nav class="menu"
           v-show="show">
        <router-link v-for="(menu, index) in menus"
                     :key="index"
                     v-if="menu.active"
                     class="link"
                     :to="menu.route">
          <span :id="menu.id"
                :data-index="index"
                ref="link"
                :class="{ 'selected' : menu.selected }"
                @click="handleNav(menu)">{{ $t(menu.text) }}</span>
        </router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false,
      menus: [
        {
          id: 'home',
          active: true,
          selected: true,
          route: '/',
          text: 'menu.home'
        },
        {
          id: 'team',
          active: true,
          selected: false,
          route: '/team',
          text: 'menu.team'
        },
        {
          id: 'works',
          active: true,
          selected: false,
          route: '/works',
          text: 'menu.works'
        },
        {
          id: 'about',
          active: true,
          selected: false,
          route: '/about',
          text: 'menu.about'
        },
        {
          id: 'clients',
          active: true,
          selected: false,
          route: '/clients',
          text: 'menu.clients'
        },
        {
          id: 'contacts',
          active: true,
          selected: false,
          route: '/contacts',
          text: 'menu.contacts'
        },
        {
          id: 'inprogress',
          active: true,
          selected: false,
          route: '/inprogress',
          text: 'menu.inprogress'
        }
      ]
    };
  },
  methods: {
    handleNav(menu) {
      this.show = !this.show;
      this.menus = this.menus.map(k => ({ ...k, selected: k.id === menu.id }));
    }
  }
};
</script>

<style lang="postcss" scoped>
@import 'animate.css/animate.min.css';
@import '../../../base.scss';

.container-menu {
  font-size: 16px;
  height: fit-content !important;
  .icon-launcher {
    position: absolute;
    z-index: 18;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 0.2rem;
    top: 0.5rem;
    left: 0.5rem;
  }
  .menu {
    z-index: 9;
    color: #4e4045;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.75);
    min-height: 100%;
    min-width: 100%;
    font-size: 3rem;
    font-family: '28 Days Later';
  }
  .link {
    text-decoration: none;
    color: black;
  }
  .selected {
    color: #2196f3;
  }
}
</style>
