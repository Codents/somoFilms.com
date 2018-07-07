<template>
  <main id="main"
        class="main">
    <Menu />
    <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <router-view name="container"
                   class="child-view"></router-view>
    </transition>
    <footer>
      <transition enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut">
        <div class="full-screen-image"
             v-show="$root.$data.showImageFullScreen"
             @click="$root.$data.showImageFullScreen = !$root.$data.showImageFullScreen">
          <img class="image-full" />
        </div>
      </transition>
      <transition enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut">
        <div class="full-screen-video"
             v-show="$root.$data.showVideoFullScreen"
             @click="$root.$data.showVideoFullScreen = !$root.$data.showVideoFullScreen">
          <div class="embed-container">
            <iframe src=""
                    frameborder="0"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen></iframe>
          </div>
        </div>
      </transition>
    </footer>
  </main>
</template>
<script>
import Menu from '@/views/small/components/Menu';

export default {
  components: { Menu }
};
</script>


<style lang="postcss">
@import 'animate.css/animate.min.css';
@import '../base.scss';
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

.full-screen-image {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 20;
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
  z-index: 20;
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
