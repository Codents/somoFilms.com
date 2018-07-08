<template>
  <section class="home-container">
    <div class="header">
      <span class="text">{{ $t('app') }}</span>
    </div>
  </section>
</template>

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
  background-image: url('../../../assets/img/background-portrait-mobile.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    width: 100%;
    // background-color: rgba(255, 255, 255, 0.8);
    font-family: '28 Days Later';
    height: 3.5rem;
    .text {
      font-size: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 0.4rem;
      height: 100%;
      align-items: flex-end;
    }
  }
}
</style>

