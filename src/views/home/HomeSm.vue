<template>
  <section class="home-container f f-column f-justify-start f-shrink-0">
    <div class="header">
      <span class="text f f-row f-justify-end f-align-items-end">{{ $t('app') }}</span>
    </div>
  </section>
</template>

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
}
</style>
