<template>
  <div class="small">
    <section class="portrait">
      <Menu ref="menu"
            @goOptionMenu="goOptionMenu" />
      <div class="track"
           ref="track">
        <Home id="home-section" />
        <Team id="team-section" />
        <Works id="works-section" />
      </div>
    </section>
    <div class="landscape"
         v-show="isLandscape">
      <img src="@/assets/img/orientation-locked.png"
           alt="Landscape no supported" />
    </div>
    <div class="full-screen"
         v-show="$root.$data.showFullScreen"
         @click="$root.$data.showFullScreen = !$root.$data.showFullScreen">
      <img class="image-full" />
    </div>
  </div>
</template>

<script>
import { getOrientation } from '@/utils';
import { LANDSCAPE } from '@/constants';
import menuMotion from '@/mixins/menuMotion';
import Home from './sections/Home';
import Menu from './components/Menu';
import Team from './sections/Team';
import Works from './sections/Works';

export default {
  mixins: [menuMotion],
  components: { Home, Menu, Team, Works },
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
.small {
  height: 100%;
  font-size: 16px;
  font-size: 6.2vw;
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
  .landscape {
    top: 0;
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    z-index: 18;
    width: 100%;
    height: 100%;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img {
      margin-left: 3rem;
      width: 8rem;
      opacity: 0.2;
    }
  }
  .full-screen {
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    z-index: 20;
    top: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .image-full {
      width: 100%;
      height: 100%;
    }
    .close-icon {
      position: absolute;
      z-index: 999999;
      bottom: 2rem;
      right: 2rem;
      font-size: 2rem;
    }
  }
}
</style>
