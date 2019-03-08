<template>
  <section class="in-progress f f-column f-justify-start f-align-items-center w-100 h-100">
    <div class="head f f-column f-justify-center">
      <span class="title">{{ $t('inprogress.title') }}</span>
    </div>
    <div class="body f f-row f-justify-start f-align-items-center w-100">
      <div class="block-container f f-row h-100">
        <div class="block-wrapper f f-row f-justify-center f-align-items-center f-shrink-0">
          <span class="text">{{ $t('inprogress.text') }}</span>
        </div>
        <div class="block-wrapper f f-row f-justify-center f-align-items-center f-shrink-0">
          <img alt="Work in progress 1"
               class="img w-100"
               :src="`${publicPath}inprogress/in-progress-sm-1.jpg`">
        </div>
        <div class="block-wrapper f f-row f-justify-center f-align-items-center f-shrink-0">
          <img alt="Work in progress 2"
               class="img w-100"
               :src="`${publicPath}inprogress/in-progress-sm-2.jpg`">
        </div>
        <div class="block-wrapper f f-row f-justify-center f-align-items-center f-shrink-0">
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
      font-size: 4rem;
      text-align: center;
    }
  }
  .body {
    height: 80%;
    overflow-y: auto;
    .text {
      width: 600px;
      font-size: 2rem;
      text-align: justify;
      padding: 1rem;
    }
    .block-container {
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      margin-bottom: 2rem;
      .block-wrapper {
        padding: 1rem;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
}
</style>
