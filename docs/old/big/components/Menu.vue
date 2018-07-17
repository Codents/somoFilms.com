<template>
  <div class="container-menu">
    <i :class="['material-icons', 'icon-launcher', isLandscape ? 'landscape' : 'portrait']"
       @click="show = !show">menu</i>
    <transition enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOutLeft">
      <nav class="menu"
           v-show="show">
        <span v-for="(menu, index) in menus"
              :key="index"
              :id="menu.id"
              :data-index="index"
              v-if="menu.active"
              :class="['item', index === 0 ? 'selected' : '']"
              @click="handleClick">{{ $t(menu.text) }}</span>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['isLandscape'],
  data: function() {
    return {
      show: false,
      menus: [
        {
          id: 'home',
          active: true,
          text: 'menu.home'
        },
        {
          id: 'team',
          active: true,
          text: 'menu.team'
        },
        {
          id: 'works',
          active: true,
          text: 'menu.works'
        },
        {
          id: 'about',
          active: true,
          text: 'menu.about'
        },
        {
          id: 'clients',
          active: true,
          text: 'menu.clients'
        },
        {
          id: 'contacts',
          active: true,
          text: 'menu.contacts'
        },
        {
          id: 'inprogress',
          active: true,
          text: 'menu.inprogress'
        }
      ]
    };
  },
  methods: {
    handleClick(ev) {
      this.show = false;
      this.$emit('goOptionMenu', ev);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import 'animate.css/animate.min.css';
@font-face {
  font-family: '28 Days Later';
  font-style: normal;
  font-weight: normal;
  src: local('28 Days Later'),
    url('../../../assets/fonts/28_Days_Later.woff') format('woff');
}
.container-menu {
  height: fit-content !important;
  .icon-launcher {
    position: absolute;
    z-index: 18;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 0.2rem;
    top: 2rem;
    left: 2rem;
    &.landscape {
      font-size: 3rem;
    }
    &.portrait {
      font-size: 3.5rem;
    }
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
    font-size: 4.5rem;
    font-family: '28 Days Later';
  }
  .item {
    margin-bottom: 0.2em;
    &.selected {
      color: #2196f3;
    }
  }
}
</style>
