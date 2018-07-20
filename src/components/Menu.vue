<template>
  <div class="container-menu">
    <transition enter-active-class="animated rotateIn"
                leave-active-class="animated rotateOut">
      <i class="icon-launcher p-absolute border-r icon-small-menu"
         ref="menuIcon"
         v-if="!show"
         key="closed"
         @click="show = !show" />
      <i class="icon-launcher p-absolute border-r icon-small-close"
         ref="menuIcon"
         v-else
         key="opened"
         @click="show = !show" />
    </transition>
    <transition enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOutLeft">
      <nav class="menu p-absolute f f-column f-justify-center f-align-items-center min-h-100 min-w-100"
           v-show="show">
        <router-link v-for="(menu, index) in menus"
                     :key="index"
                     v-if="menu.active"
                     class="link"
                     :to="menu.route">
          <span :id="menu.id"
                :data-index="index"
                ref="link"
                :class="{ 'selected' : menu.route === $route.path }"
                @click="handleNav(menu)">{{ $t(menu.text) }}</span>
        </router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
import { menus } from '@/constants';

export default {
  data: function() {
    return {
      show: false,
      menus
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
@import '../styles/base.scss';
@import '../styles/flex.scss';

.container-menu {
  font-size: 16px;
  height: fit-content !important;
  .icon-launcher {
    z-index: 99 !important;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 0.2rem;
    top: 0.5rem;
    left: 0.5rem;
  }
  .menu {
    z-index: 97;
    color: #4e4045;
    background-image: radial-gradient(#ffffff, #eaf5fd);
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
