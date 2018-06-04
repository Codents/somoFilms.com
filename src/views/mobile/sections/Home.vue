<template>
  <section :class="[isLandscape ? 'landscape' : 'portrait', 'home']">
    <div class="title">
      <span class="text">somoFilms</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ['isLandscape']
};
</script>

<style lang="postcss" scoped>
.portrait {
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    background-image: url('../../../assets/img/home-portrait-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .title {
      width: 100%;
      background-color: white;
      opacity: 0.8;
      .text {
        font-size: 2em;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 0.2em;
      }
    }
  }
}
.landscape {
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: flex-end;
    background-image: url('../../../assets/img/home-landscape-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .title {
      width: 40%;
      height: 33%;
      .text {
        font-size: 1em;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-right: 0.2em;
        background-color: white;
        opacity: 0.8;
        padding-left: 0.2em;
        border-radius: 0 5px 5px 0;
      }
    }
  }
}
</style>

