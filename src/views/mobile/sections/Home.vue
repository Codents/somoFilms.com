<template>
  <section class="home-container">
    <div class="title">
      <span class="text">somoFilms</span>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
@font-face {
  font-family: '28 Days Later';
  font-style: normal;
  font-weight: normal;
  src: local('28 Days Later'), url('../../../assets/fonts/28_Days_Later.woff') format('woff');
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
  .title {
    width: 100%;
    background-color: white;
    opacity: 0.8;
    height: 5rem;
    font-family:'28 Days Later';
    .text {
      font-size: 2em;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 0.2em;
      height: 100%;
      align-items: flex-end;
    }
  }
}
</style>

