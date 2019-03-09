<template>
  <section class="home-container f f-column f-justify-start f-shrink-0">
    <div class="header">
      <span class="text f f-row f-justify-end f-align-items-end">{{ $t('app') }}</span>
    </div>
    <div class="fullscreen-bg">
      <video
        v-if="isVisible"
        id="background"
        ref="video"
        class="fullscreen-bg__video"
        autoplay
        muted
        poster="../../assets/img/background-portrait-mobile.jpg"
        @pause="stopVideo"
      >
        <source src="/video/trailer_2019.mp4" type="video/mp4">
      </video>
    </div>
    <i
      v-if="isVisible"
      :class="[{ 'icon-medium-mute': mute }, { 'icon-medium-unmute': !mute }, 'volume']"
      @click="handleVolClick"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      mute: true,
      isVisible: true,
    };
  },
  methods: {
    handleVolClick() {
      this.mute = !this.mute;
      this.$refs.video.muted = this.mute;
    },
    stopVideo() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/flex.scss';
@font-face {
  font-family: '28 Days Later';
  font-style: normal;
  font-weight: normal;
  src: local('28 Days Later'),
    url('../../assets/fonts/28_Days_Later.woff') format('woff');
}
.home-container {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/background-portrait-mobile.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    width: 100%;
    font-family: '28 Days Later';
    height: 3.5rem;
    .text {
      font-size: 3rem;
      padding-right: 0.4rem;
      height: 100%;
    }
  }
  .fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 10;
  }

  .fullscreen-bg__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .volume {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    z-index: 100;
    background-color: #fffdfd63;
    border-radius: 50px;
    width: 36px;
    height: 36px;
  }
}
</style>
