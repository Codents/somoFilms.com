<template>
  <div class="container-menu">
    <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
    >
      <i
        v-if="!show"
        ref="menuIcon"
        key="closed"
        class="icon-launcher p-absolute border-r icon-medium-menu"
        @click="show = !show"
      />
      <i
        v-else
        ref="menuIcon"
        key="opened"
        class="icon-launcher p-absolute border-r icon-medium-close"
        @click="show = !show"
      />
    </transition>
    <transition
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOutLeft"
    >
      <nav
        v-show="show"
        class="menu p-absolute f f-column f-justify-center f-align-items-center min-h-100 min-w-100"
      >
        <router-link
          v-for="(menu, index) in activeMenus"
          :key="index"
          class="link"
          :to="menu.route"
        >
          <span
            :id="menu.id"
            ref="link"
            :data-index="index"
            :class="{ 'selected' : menu.route === $route.path }"
            @click="handleNav(menu)"
          >{{ $t(menu.text) }}</span>
        </router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
import { menus } from '@/constants';

export default {
  data: function () {
    return {
      show: false,
      menus,
    };
  },
  computed: {
    activeMenus: function () {
      return this.menus.filter(m => m.active);
    },
  },
  methods: {
    handleNav(menu) {
      this.show = !this.show;
      this.menus = this.menus.map(k => ({ ...k, selected: k.id === menu.id }));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/animate.scss';
@import '@/styles/base.scss';
@import '@/styles/flex.scss';

.container-menu {
  height: fit-content !important;
  .icon-launcher {
    z-index: 99 !important;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.2rem;
    top: 0.6rem;
    left: 0.6rem;
  }
  .menu {
    z-index: 97;
    color: #4e4045;
    background-color: white;
    font-size: 4rem;
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
