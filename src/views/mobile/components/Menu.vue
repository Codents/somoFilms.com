<template>
  <div class="container-menu">
    <i class="material-icons icon-launcher" @click="show = !show">menu</i>
    <transition enter-active-class="animated zoomInLeft"
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
          id: 'contacts',
          active: true,
          text: 'menu.contacts'
        },
        {
          id: 'development',
          active: true,
          text: 'menu.development'
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
  src: local('28 Days Later'), url('../../../assets/fonts/28_Days_Later.woff') format('woff');
}
.container-menu {
  height: fit-content !important;
  .icon-launcher {
    position: absolute;
    z-index: 18;
    background-color: white;
    border-radius: 5px;
    padding: 0.2em;
    top: 0.5em;
    left: 0.5em;
    opacity: 0.8;
  }
  .menu {
    z-index: 9;
    color: #4e4045;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: white;
    opacity: 0.75;
    min-height: 100%;
    min-width: 100%;
    font-size: 2em;
    font-family:'28 Days Later';
  }
  .item {
    margin-bottom: 0.2em;
    &.selected {
      color: #2196f3;
    }
  }
}
</style>
