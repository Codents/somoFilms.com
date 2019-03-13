<template>
  <section ref="worksContainer"
           class="works-container f f-column">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title-header">Works</span>
    </div>
    <div class="works-body f f-column">
      <section class="collection-container f-shrink-0">
        <div class="collection-title f f-row"
             @click="toggleExpand({ collectionName: 'collectionImageDetailContainer', section: 'photos'})">
          <span class="title">Photos</span>
          <i v-if="iconExpand.photos"
             ref="menuIcon"
             class="icon-launcher icon-small-expand-less" />
          <i v-else
             ref="menuIcon"
             class="icon-launcher icon-small-expand-more" />
        </div>
        <div ref="collectionContainer"
             class="carrusel f f-justify-center">
          <div ref="collectionTrack"
               class="track f f-row">
            <div v-for="item in imagesCollections"
                 :key="item.name"
                 class="square f-shrink-0"
                 @click="expandByIndex({ collectionName: 'collectionImageDetailContainer', section: 'photos', collection: item })">
              <div class="back-img"
                   :style="{ backgroundImage: `url('${item.pictures[0].thumb}')` }" />
            </div>
          </div>
        </div>
        <div class="collection-detail">
          <div ref="collectionImageDetailContainer"
               class="carrusel f f-justify-center closed">
            <div ref="collectionImageDetailTrack"
                 class="track f f-row">
              <div v-for="(item, index) in imagesCollection"
                   :key="index"
                   class="square f-shrink-0">
                <span v-if="index === 0"
                      :id="item.id"
                      class="first-child f f-column f-justify-center f-align-items-center">{{ item.description }}</span>
                <div v-else
                     :id="`${item.name}-${index}`"
                     class="back-img"
                     :style="{ backgroundImage: `url('${item.thumb}')` }"
                     @click="showImageFullScreen(item)" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- FILMS -->
      <section class="collection-container">
        <div class="collection-title f f-row"
             @click="toggleExpand({ collectionName: 'collectionVideoDetailContainer', section: 'films'})">
          <span class="title">Films</span>
          <i v-if="iconExpand.films"
             ref="menuIcon"
             class="icon-launcher icon-small-expand-less" />
          <i v-else
             ref="menuIcon"
             class="icon-launcher icon-small-expand-more" />
        </div>
        <div ref="collectionContainer"
             class="carrusel f f-justify-center">
          <div ref="collectionTrack"
               class="track f f-row">
            <div v-for="item in videoCollections"
                 :key="item.name"
                 class="square f-shrink-0"
                 @click="expandByIndex({ collectionName: 'collectionVideoDetailContainer', section: 'films', collection: item })">
              <div :id="item.name"
                   class="back-img"
                   :data-alt="item.description"
                   :style="{ backgroundImage: `url('${item.thumbnail}')` }" />
            </div>
          </div>
        </div>
        <div class="collection-detail">
          <div ref="collectionVideoDetailContainer"
               class="carrusel f f-justify-center closed">
            <div ref="collectionVideoDetailTrack"
                 class="track f f-row">
              <div v-for="(item, index) in videoCollection"
                   :key="index"
                   class="square f-shrink-0">
                <span v-if="index === 0"
                      class="first-child f f-column f-justify-center f-align-items-center">{{ item.description }}</span>
                <div v-else-if="item.resource_key"
                     :id="item.resource_key"
                     class="back-img"
                     :data-alt="item.name"
                     :style="{ backgroundImage: `url('${getBySize(200, item.pictures.sizes)}')` }"
                     @click="showVideoFullScreen(item)" />
                <div v-else
                     class="spinner f f-column f-justify-center f-align-items-center">
                  <img :src="spinnerIcon"
                       alt="Loadig....">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { TweenLite, Power2 } from 'gsap/umd/TweenLite';
import TweenMax from 'gsap/umd/TweenMax';
import 'gsap/umd/ScrollToPlugin';
import workResources from '@/mixins/workResources';
import spinner from '@/assets/img/spinner.gif';
import { setTimeout } from 'timers';

const PHOTOS = 'photos';
const FILMS = 'films';

export default {
  mixins: [workResources],
  data: function () {
    return {
      spinnerIcon: spinner,
      tt: '@/assets/img/works/hdedon/',
      iconExpand: { [PHOTOS]: false, [FILMS]: false },
      imagesCollections: [],
      imagesCollection: [],
      collectionFiles: [],
      videoCollections: [],
      videoCollection: [],
    };
  },
  async mounted() {
    this.imagesCollections = this.loadAllImagesCollections(this.$mq);
    this.videoCollections = this.loadAllVideoCollections(this.$mq);
    this.loadImageCollection(this.imagesCollections[0]);
    this.loadVideoCollection(this.videoCollections[0]);
  },
  updated: function () {
    this.$nextTick(function () {
      const lockContainerWidth = this.$refs.worksContainer.offsetWidth;
      this.$refs.worksContainer.style.width = `${lockContainerWidth}px`;
      const lockTrackWidth = this.$refs.collectionContainer.offsetWidth;
      this.$refs.collectionImageDetailContainer.style.width = `${lockTrackWidth}px`;
      this.$refs.collectionVideoDetailContainer.style.width = `${lockTrackWidth}px`;
    });
  },
  methods: {
    moveToTag(id) {
      TweenLite.to(this.$refs.imageTrack, 1, {
        scrollTo: `#${id}`,
        ease: Power2.easeOut,
      });
    },
    moveToPosX(track, x) {
      TweenLite.to(track, 1, {
        scrollTo: { x },
        ease: Power2.easeOut,
      });
    },
    showVideoFullScreen(video) {
      window.scrollTo(0, 0);
      const $iframe = document.querySelector(
        '.full-screen-video .embed-container iframe',
      );
      const id = video.uri.substr(video.uri.lastIndexOf('/') + 1);
      $iframe.src = `https://player.vimeo.com/video/${id}`;
      setTimeout(() => {
        this.$root.$data.showVideoFullScreen = true;
      }, 175);
    },
    loadImageCollection(collection) {
      this.imagesCollection = collection.pictures.map(k => ({
        ...k,
        name: collection.name,
      }));
      this.imagesCollection.unshift({
        id: -1,
        description: collection.description,
      });
    },
    toggleExpand({ collectionName, section }) {
      const $container = this.$refs[collectionName];
      if ($container.classList.contains('closed')) {
        this.expandCollection({ $container, collectionName, section });
      } else {
        this.collapseCollection({ $container, collectionName, section });
      }
    },
    expandCollection({ $container, section }) {
      console.log(section)
      if ($container.classList.contains('closed')) {
        this.iconExpand[section] = true;
        $container.classList.remove('closed');
        TweenMax.set($container, {
          height: 'auto',
          opacity: 1,
        });
        TweenMax.from($container, 0.8, {
          height: 0,
          opacity: 0,
          onComplete: () => {
            if (section === 'films') {
              window.scrollTo(0, document.body.scrollHeight);
            }
          },
        });
      }
    },
    collapseCollection({ $container, section }) {
      this.iconExpand[section] = false;
      $container.classList.add('closed');
      TweenMax.to($container, 0.8, {
        height: 0,
        opacity: 0,
      });
    },
    expandByIndex({ collectionName, section, collection }) {
      this.iconExpand[section] = true;
      const $container = this.$refs[collectionName];
      this.expandCollection({ $container, section });
      if (section === PHOTOS) {
        this.loadImageCollection(collection);
        this.$nextTick(() => {
          this.moveToPosX(this.$refs.collectionImageDetailTrack, 0);
        });
      } else {
        this.loadVideoCollection(collection);
        this.$nextTick(() => {
          this.moveToPosX(this.$refs.collectionVideoDetailTrack, 0);
        });
      }
    },
    loadVideoCollection(collection) {
      const current = this.videoCollections.find(
        k => k.name === collection.name,
      );
      if (!current.cache) {
        this.videoCollection = Array.from(
          { length: collection.videoIds.length },
          k => ({ name: k }),
        );
        this.videoCollection.unshift({
          id: -1,
          description: collection.description,
        });
        this.loadVideoThumbs(collection.videoIds).then(videos => {
          current.cache = videos;
          this.videoCollection = videos;
          this.videoCollection.unshift({
            id: -1,
            description: collection.description,
          });
        });
      } else {
        this.videoCollection = current.cache;
      }
    },
    getBySize(width, sizes) {
      return sizes.find(k => k.width === width).link_with_play_button;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/flex.scss';
@import '@/styles/base.scss';
.photos {
  margin-top: 0.5rem;
}
.spinner {
  width: 100%;
  height: 100%;
  background-color: white;
}
.works-container {
  position: relative;
  width: 100%;
  height: 100%;
  .header {
    height: 20%;
    .title-header {
      padding: 0.3rem 0.5rem 0.3rem 0.5rem;
      font-size: 2.2rem;
      text-align: center;
    }
  }
  .works-body {
    -webkit-overflow-scrolling: touch;
    .collection-container {
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      .collection-title {
        margin-top: 1rem;
        margin-left: 0.5rem;
        align-items: flex-end;
      }
      .collection-detail {
        margin-bottom: 0.5rem;
      }
      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .carrusel {
        margin: 0.5rem 0.5rem 0 0.5rem;
        &.closed {
          height: 0;
        }
        .track {
          overflow-x: auto;
          overflow-y: hidden;
          .square {
            width: $sm-width-pic;
            height: $sm-height-pic;
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
}
</style>
