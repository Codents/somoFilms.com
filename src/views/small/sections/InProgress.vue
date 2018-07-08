<template>
  <section class="in-progress f f-column f-justify-start f-align-items-center">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title">{{ $t('inprogress.title') }}</span>
    </div>
    <div class="body f f-column f-justify-start f-align-items-center">
      <div class="carrusel f f-justify-center"
           ref="collectionContainer">
        <div class="track f f-row"
             ref="collectionTrack">
          <div class="square f-shrink-0"
               v-for="(item, index) in imagesCollections"
               :key="item.name">
            <div class="back-img"
                 :id="`${item.name}-${index}`"
                 :style="{ backgroundImage: `url('${item.pictures[0].thumb}')` }"
                 @click="showImageFullScreen(item.pictures[0])"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import workResources from '@/mixins/workResources';

export default {
  mixins: [workResources],
  mounted() {
    this.imagesCollections = this.loadAllImagesFromInProgress();
  },
  data: function() {
    return {
      imagesCollections: []
    };
  }
};
</script>


<style lang="postcss" scoped>
@import '../../../flex.scss';
@import '../../../base.scss';
.in-progress {
  position: relative;
  width: 100%;
  height: 100%;
  .header {
    height: 20%;
    .title {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 2.2rem;
      text-align: center;
    }
  }
  .body {
    height: 80%;
    width: 100%;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    .carrusel {
      width: 96%;
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      .track {
        overflow-x: auto;
        overflow-y: hidden;
        .square {
          width: $small-width-pic;
          height: $small-height-pic;
          background-color: #6c757d;
          margin-right: 0.2rem;
          .back-img {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 100%;
          }
          .first-child {
            background-color: white;
            text-align: center;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
