<template>
  <section class="home-container f f-column f-justify-start f-shrink-0">
    <div class="header">
      <span class="text f f-row f-justify-end f-align-items-end">{{ $t('app') }}</span>
    </div>
    <video id="background"
           class="video-bg"
           autoplay
           muted
           poster="../../assets/img/background-portrait-mobile.jpg"
           loop>
      <source src="/static/video/bg-md.mp4"
              type="video/mp4" />
    </video>
  </section>
</template>

<style lang="postcss" scoped>
@import '../../styles/flex.scss';
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
  .video-bg {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -100;
    background-size: cover;
  }
  .header {
    width: 100%;
    font-family: '28 Days Later';
    .text {
      font-size: 10rem;
      padding-right: 1rem;
      height: 100%;
    }
  }
}
</style>

