<template>
  <section class="in-progress f f-column f-justify-start f-align-items-center w-100 h-100">
    <div class="head f f-column f-justify-center">
      <span class="title">{{ $t('inprogress.title') }}</span>
    </div>
    <div class="body f f-column f-justify-start f-align-items-center w-100">
      <span class="text">{{ $t('inprogress.text') }}</span>
      <div class="img-container w-100 f f-row f-justify-center f-align-items-center f-wrap">
        <div class="img-wrapper f f-row f-justify-center f-align-items-center">
          <img alt="Work in progress 1"
               class="img w-100"
               :src="`${publicPath}inprogress/in-progress-sm-1.jpg`">
        </div>
        <div class="img-wrapper f f-row f-justify-center f-align-items-center">
          <img alt="Work in progress 2"
               class="img w-100"
               :src="`${publicPath}inprogress/in-progress-sm-2.jpg`">
        </div>
        <div class="img-wrapper f f-row f-justify-center f-align-items-center">
          <img alt="Work in progress 3"
               class="img w-100"
               :src="`${publicPath}inprogress/in-progress-sm-3.jpg`">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/flex.scss';
.in-progress {
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
    .img-container {
      .img-wrapper {
        padding: 1rem;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
}
</style>
