<template>
  <div class="medium">
    <section class="landscape"
             v-if="isLandscape"
             v-touch:swipe.left="moveRight"
             v-touch:swipe.right="moveLeft">
      <Menu ref="menu"
            @goOptionMenu="goOptionMenu" />
      <div class="track"
           ref="track">
        <Home id="home-section" :isLandscape="isLandscape" />
        <Team id="team-section" :isLandscape="isLandscape" />
      </div>
    </section>
    <section class="portrait"
             v-else></section>
  </div>
</template>

<script>
import { TweenLite, Power2 } from 'gsap/all';
import { getOrientation } from '@/utils';
import { LANDSCAPE } from '@/constants';
import Home from './sections/Home';
import Menu from './components/Menu';
import Team from './sections/Team';

export default {
  components: { Home, Menu, Team },
  computed: {
    isLandscape: function() {
      return this.orientation === LANDSCAPE;
    }
  },
  data: function() {
    return {
      orientation: getOrientation()
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleOrientationChange);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleOrientationChange);
  },
  methods: {
    handleOrientationChange() {
      this.orientation = getOrientation();
    },
    goOptionMenu(ev) {
      const activeMenu = this.$refs.menu.$el.querySelector('.selected');
      activeMenu.classList.remove('selected');
      ev.currentTarget.classList.add('selected');
      TweenLite.to(this.$refs.track, 1, {
        scrollTo: `#${ev.currentTarget.id}-section`,
        ease: Power2.easeOut
      });
    },
    moveRight() {
      const activeMenu = this.$refs.menu.$el.querySelector('.selected');
      const index = Number(activeMenu.getAttribute('data-index'));
      const newActiveMenu = this.$refs.menu.$el.querySelector(
        `[data-index="${index + 1}"]`
      );
      if (newActiveMenu) {
        activeMenu.classList.remove('selected');
        newActiveMenu.classList.add('selected');
        TweenLite.to(this.$refs.track, 1, {
          scrollTo: `#${newActiveMenu.id}-section`,
          ease: Power2.easeOut
        });
      }
    },
    moveLeft() {
      const activeMenu = this.$refs.menu.$el.querySelector('.selected');
      const index = Number(activeMenu.getAttribute('data-index'));
      if (index > 0) {
        activeMenu.classList.remove('selected');
        const newActiveMenu = this.$refs.menu.$el.querySelector(
          `[data-index="${index - 1}"]`
        );
        if (newActiveMenu) {
          newActiveMenu.classList.add('selected');
          TweenLite.to(this.$refs.track, 1, {
            scrollTo: `#${newActiveMenu.id}-section`,
            ease: Power2.easeOut
          });
        }
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.medium {
  height: 100%;
  font-size: 16px;
  font-size: 6.2vw;
  .landscape {
    height: 100%;
  }
  .portrait {
    height: 100%;
  }
  .track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
  }
}
</style>
