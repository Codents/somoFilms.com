<template>
  <section class="works-container f f-column"
           ref="worksContainer">
    <div class="header f f-column f-justify-center f-align-items-center f-shrink-0">
      <span class="title-header">Works</span>
    </div>
    <div class="works-body f f-column">
      <section class="collection-container f-shrink-0">
        <div class="collection-title f f-row"
             @click="toggleExpand({ collectionName: 'collectionImageDetailContainer', section: 'photos'})">
          <span class="title">Photos</span>
          <i class="icon-launcher icon-small-expand-less"
             ref="menuIcon"
             v-if="iconExpand.photos" />
          <i class="icon-launcher icon-small-expand-more"
             ref="menuIcon"
             v-else/>
        </div>
        <div class="carrusel f f-justify-center"
             ref="collectionContainer">
          <div class="track f f-row"
               ref="collectionTrack">
            <div class="square f-shrink-0"
                 v-for="item in imagesCollections"
                 :key="item.name"
                 @click="expandByIndex({ collectionName: 'collectionImageDetailContainer', section: 'photos', collection: item })">
              <div class="back-img"
                   :style="{ backgroundImage: `url('${item.pictures[0].thumb}')` }"></div>
            </div>
          </div>
        </div>
        <div class="collection-detail">
          <div class="carrusel f f-justify-center closed"
               ref="collectionImageDetailContainer">
            <div class="track f f-row"
                 ref="collectionImageDetailTrack">
              <div class="square f-shrink-0"
                   v-for="(item, index) in imagesCollection"
                   :key="index">
                <span class="first-child f f-column f-justify-center f-align-items-center"
                      :id="item.id"
                      v-if="index === 0">{{ item.description }}</span>
                <div class="back-img"
                     :id="`${item.name}-${index}`"
                     :style="{ backgroundImage: `url('${item.thumb}')` }"
                     v-else
                     @click="showImageFullScreen(item)"></div>
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
          <i class="icon-launcher icon-small-expand-less"
             ref="menuIcon"
             v-if="iconExpand.films" />
          <i class="icon-launcher icon-small-expand-more"
             ref="menuIcon"
             v-else/>
        </div>
        <div class="carrusel f f-justify-center"
             ref="collectionContainer">
          <div class="track f f-row"
               ref="collectionTrack">
            <div class="square f-shrink-0"
                 v-for="item in videoCollections"
                 :key="item.name"
                 @click="expandByIndex({ collectionName: 'collectionVideoDetailContainer', section: 'films', collection: item })">
              <div class="back-img"
                   :id="item.name"
                   :data-alt="item.description"
                   :style="{ backgroundImage: `url('${item.thumbnail}')` }"></div>
            </div>
          </div>
        </div>
        <div class="collection-detail">
          <div class="carrusel f f-justify-center closed"
               ref="collectionVideoDetailContainer">
            <div class="track f f-row"
                 ref="collectionVideoDetailTrack">
              <div class="square f-shrink-0"
                   v-for="(item, index) in videoCollection"
                   :key="index">
                <span class="first-child f f-column f-justify-center f-align-items-center"
                      v-if="index === 0">{{ item.description }}</span>
                <div class="back-img"
                     :data-alt="item.name"
                     :id="item.resource_key"
                     :style="{ backgroundImage: `url('${getBySize(200, item.pictures.sizes)}')` }"
                     v-else-if="item.resource_key"
                     @click="showVideoFullScreen(item)"></div>
                <div class="spinner f f-column f-justify-center f-align-items-center"
                     v-else><img :src="spinnerIcon"
                       alt="Loadig...." /></div>
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

const PHOTOS = 'photos';
const FILMS = 'films';

export default {
  mixins: [workResources],
  data: function() {
    return {
      spinnerIcon: spinner,
      tt: '@/assets/img/works/hdedon/',
      iconExpand: { [PHOTOS]: false, [FILMS]: false },
      imagesCollections: [],
      imagesCollection: [],
      collectionFiles: [],
      videoCollections: [],
      videoCollection: []
    };
  },
  async mounted() {
    this.imagesCollections = this.loadAllImagesCollections();
    this.videoCollections = this.loadAllVideoCollections();
    this.loadImageCollection(this.imagesCollections[0]);
    this.loadVideoCollection(this.videoCollections[0]);
  },
  updated: function() {
    this.$nextTick(function() {
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
        ease: Power2.easeOut
      });
    },
    moveToPosX(track, x) {
      TweenLite.to(track, 1, {
        scrollTo: { x },
        ease: Power2.easeOut
      });
    },
    showVideoFullScreen(video) {
      const $iframe = document.querySelector(
        '.full-screen-video .embed-container iframe'
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
        name: collection.name
      }));
      this.imagesCollection.unshift({
        id: -1,
        description: collection.description
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
      if ($container.classList.contains('closed')) {
        this.iconExpand[section] = true;
        $container.classList.remove('closed');
        TweenMax.set($container, {
          height: 'auto',
          opacity: 1
        });
        TweenMax.from($container, 0.8, {
          height: 0,
          opacity: 0
        });
      }
    },
    collapseCollection({ $container, section }) {
      this.iconExpand[section] = false;
      $container.classList.add('closed');
      TweenMax.to($container, 0.8, {
        height: 0,
        opacity: 0
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
        k => k.name === collection.name
      );
      if (!current.cache) {
        this.videoCollection = Array.from(
          { length: collection.videoIds.length },
          k => ({ name: k })
        );
        this.videoCollection.unshift({
          id: -1,
          description: collection.description
        });
        this.loadVideoThumbs(collection.videoIds).then(videos => {
          current.cache = videos;
          this.videoCollection = videos;
          this.videoCollection.unshift({
            id: -1,
            description: collection.description
          });
        });
      } else {
        this.videoCollection = current.cache;
      }
    },
    getBySize(width, sizes) {
      return sizes.find(k => k.width === width).link_with_play_button;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../../flex.scss';
@import '../../../base.scss';
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
    overflow-y: auto;
    overflow-x: hidden;
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
}
</style>
