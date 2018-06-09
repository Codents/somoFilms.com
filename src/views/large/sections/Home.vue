<template>
  <section class="home-container">
    <div class="title">
      <span :class="['text', isLandscape ? 'landscape' : 'portrait']">somoFilms</span>
    </div>
    <video id="background"
           class="video-bg"
           autoplay
           muted
           loop>
      <source src="../../../assets/video/bg_large_1280x720.mp4"
              type="video/mp4" />
    </video>
  </section>
</template>

<script>
export default {
  props: ['isLandscape']
};
</script>

<style lang="postcss" scoped>
@font-face {
  font-family: '28 Days Later';
  font-style: normal;
  font-weight: normal;
  src: local('28 Days Later'),
    url('../../../assets/fonts/28_Days_Later.woff') format('woff');
}
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: flex-start;
  video {
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
  .title {
    width: 100%;
    font-family: '28 Days Later';
    .text {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 2rem;
      height: 100%;
      align-items: flex-end;
      &.landscape {
        font-size: 7rem;
      }
      &.portrait {
        font-size: 7rem;
      }
    }
  }
}
</style>

