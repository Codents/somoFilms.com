<template>
  <section class="about f f-column f-justify-start f-align-items-center">
    <div class="head f f-column f-justify-center">
      <span class="title">{{ $t('about.title') }}</span>
    </div>
    <div class="body f f-column f-justify-start f-align-items-center">
      <span class="text">{{ $t('about.text') }}</span>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
@import "../../../styles/flex.scss";
.about {
  height: 100%;
  width: 100%;
  .head {
    height: 20%;
    .title {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 2.2rem;
      text-align: center;
    }
  }
  .body {
    height: 80%;
    overflow-y: auto;
    .text {
      font-size: 1.5rem;
      text-align: justify;
      padding: 1rem;
    }
  }
}
</style>
