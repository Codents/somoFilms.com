<template>
  <div class="big">
    <section class="landscape"
             v-if="isLandscape"
             v-touch:swipe.left="moveRight"
             v-touch:swipe.right="moveLeft">
      <Menu ref="menu"
            :isLandscape="isLandscape"
            @goOptionMenu="goOptionMenu" />
      <div class="track"
           ref="track">
        <Home id="home-section"
              :isLandscape="isLandscape" />
      </div>
    </section>
    <section class="portrait"
             v-else
             v-touch:swipe.left="moveRight"
             v-touch:swipe.right="moveLeft">
      <Menu ref="menu"
            :isLandscape="isLandscape"
            @goOptionMenu="goOptionMenu" />
      <div class="track"
           ref="track">
        <Home id="home-section"
              :isLandscape="isLandscape" />
      </div>
    </section>
  </div>
</template>

<script>
import { getOrientation } from '@/utils';
import { LANDSCAPE } from '@/constants';
import menuMotion from '@/mixins/menuMotion';
import Home from './sections/Home';
import Menu from './components/Menu';

export default {
  mixins: [menuMotion],
  components: { Home, Menu },
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
  }
};
</script>

<style lang="postcss" scoped>
.big {
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
