<template>
  <main id="main"
        class="main">
    <Menu />
    <transition :duration="{ enter: 500, leave: 500 }" enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <router-view name="container"
                   class="child-view" />
    </transition>
    <footer>
      <transition enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut">
        <div v-show="$root.$data.showImageFullScreen"
             class="full-screen-image"
             @click="$root.$data.showImageFullScreen = !$root.$data.showImageFullScreen">
          <i class="icon-close icon-small-close p-absolute border-r icon-small-menu" />
          <img class="image-full">
        </div>
      </transition>
      <transition enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut">
        <div v-show="$root.$data.showVideoFullScreen"
             class="full-screen-video"
             @click="$root.$data.showVideoFullScreen = !$root.$data.showVideoFullScreen">
          <i class="icon-close icon-small-close p-absolute border-r icon-small-menu" />
          <div class="embed-container">
            <iframe src=""
                    frameborder="0"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen />
          </div>
        </div>
      </transition>
    </footer>
  </main>
</template>
<script>
import Menu from '@/components/Menu/Menu.vue';

export default {
  components: { Menu },
};
</script>


<style lang="scss">
@import '@/styles/animate.scss';
@import '@/styles/base.scss';
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body,
input,
textarea {
  font-family: 'Poiret One', serif;
  font-size: 16px;
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
}

.icon-close {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.2rem;
  right: 1rem;
  top: 1rem;
  z-index: 999;
}

.full-screen-image {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .image-full {
    width: 100%;
    max-height: 100%;
  }
}
.full-screen-video {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
