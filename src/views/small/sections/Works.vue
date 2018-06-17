<template>
  <section class="works-container"
           ref="worksContainer">
    <div class="header">
      <span class="title-header">Works</span>
    </div>
    <div class="works-body">
      <section class="collection-container">
        <div class="collection-title"
             @click="toggleExpand({ collectionName: 'photos'})">
          <span class="title">Photos</span>
          <i class="icon-launcher icon-small-expand-less"
             ref="menuIcon"
             v-if="iconExpand.photos" />
          <i class="icon-launcher icon-small-expand-more"
             ref="menuIcon"
             v-else/>
        </div>
        <div class="carrusel"
             ref="collectionContainer">
          <div class="track"
               ref="collectionTrack">
            <div class="square"
                 v-for="item in imagesCollections"
                 :key="item.name"
                 @click="expandByIndex({ section: 'photos', item: item })">
              <img class="child"
                   :alt="item.thumbnail.description"
                   :src="item.thumbnail.src"
                   :id="item.thumbnail.name" />
            </div>
          </div>
        </div>
        <div class="collection-detail"
             v-show="iconExpand.photos">
          <div class="carrusel"
               ref="collectionDetailContainer">
            <div class="track"
                 ref="collectionImageDetailTrack">
              <div class="square"
                   v-for="(item, index) in imagesCollection"
                   :key="item.id">
                <span class="first-child"
                      v-if="index === 0">{{ item.description }}</span>
                <img class="child"
                     :alt="item.name"
                     :src="item.src"
                     :id="item.name"
                     @click="showImageFullScreen(item)"
                     v-else />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- FILMS -->
      <section class="collection-container">
        <div class="collection-title"
             @click="toggleExpand({ collectionName: 'films'})">
          <span class="title">Films</span>
          <i class="icon-launcher icon-small-expand-less"
             ref="menuIcon"
             v-if="iconExpand.films" />
          <i class="icon-launcher icon-small-expand-more"
             ref="menuIcon"
             v-else/>
        </div>
        <div class="carrusel"
             ref="collectionContainer">
          <div class="track"
               ref="collectionTrack">
            <div class="square"
                 v-for="item in videoCollections"
                 :key="item.name"
                 @click="expandByIndex({ section: 'films', item: item })">
              <img class="child"
                   :alt="item.description"
                   :src="item.thumbnail"
                   :id="item.name" />
            </div>
          </div>
        </div>
        <div class="collection-detail"
             v-show="iconExpand.films">
          <div class="carrusel"
               ref="collectionDetailContainer">
            <div class="track"
                 ref="collectionVideoDetailTrack">
              <div class="square"
                   v-for="(item, index) in videoCollection"
                   :key="item.id">
                <span class="first-child"
                      v-if="index === 0">{{ item.description }}</span>
                <img class="child"
                     :alt="item.name"
                     :src="getBySize(200, item.pictures.sizes)"
                     :id="item.resource_key"
                     @click="showVideoFullScreen(item)"
                     v-else />
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
import 'gsap/umd/ScrollToPlugin';
import workResources from '@/mixins/workResources';

const PHOTOS = 'photos';
const FILMS = 'films';

export default {
  mixins: [workResources],
  data: function() {
    return {
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
    this.collectionFiles = this.loadAllImagesCollections();
    this.videoCollections = await this.loadAllVideoCollections();
    this.imagesCollections = this.collectionFiles.map((k, i) => ({
      name: k.name,
      id: `${k.name}-${i}`,
      thumbnail: k.thumbnails[0],
      description: k.description,
      urlsPhotos: k.urlsPhotos
    }));
    this.loadImageCollection(this.collectionFiles[0]);
  },
  updated: function() {
    this.$nextTick(function() {
      const lockContainerWidth = this.$refs.worksContainer.offsetWidth;
      this.$refs.worksContainer.style.width = `${lockContainerWidth}px`;
      const lockTrackWidth = this.$refs.collectionContainer.offsetWidth;
      this.$refs.collectionContainer.style.width = `${lockTrackWidth}px`;
      this.$refs.collectionDetailContainer.style.width = `${lockTrackWidth}px`;
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
    showImageFullScreen(image) {
      this.$root.$data.showImageFullScreen = true;
      const img = new Image();
      const $fullImg = document.querySelector('.full-screen .image-full');
      const collection = this.imagesCollections.find(
        k => k.name === image.collectionName
      );
      const fullImgSrc = collection.urlsPhotos[image.id];
      $fullImg.src = image.src;
      img.addEventListener('load', () => {
        $fullImg.src = fullImgSrc;
      });
      img.src = fullImgSrc;
    },
    showVideoFullScreen(video) {
      this.$root.$data.showVideoFullScreen = true;
      const $iframe = document.querySelector('.full-screen-video .embed-container iframe');
      const id = video.uri.substr(video.uri.lastIndexOf('/') + 1);
      $iframe.src = `https://player.vimeo.com/video/${id}`;
    },
    loadImageCollection({ thumbnails, description, name }) {
      this.imagesCollection = thumbnails.map(img => ({
        id: img.name,
        src: img.src,
        collectionName: name
      }));

      this.imagesCollection.unshift({
        id: -1,
        description
      });
    },
    toggleExpand({ collectionName }) {
      this.iconExpand[collectionName] = !this.iconExpand[collectionName];
    },
    expandByIndex({ section, item }) {
      this.iconExpand[section] = true;
      if (section === PHOTOS) {
        const collection = this.collectionFiles.find(i => i.name === item.name);
        this.loadImageCollection(collection);
        this.$nextTick(() => {
          this.moveToPosX(this.$refs.collectionImageDetailTrack, 0);
        });
      } else {
        this.videoCollection = this.videoCollections.find(
          i => i.name === item.name
        ).videosInfo.map(k => k);
        this.videoCollection.unshift({
          id: -1,
          description: item.description
        });
        this.$nextTick(() => {
          this.moveToPosX(this.$refs.collectionVideoDetailTrack, 0);
        });
      }
    },
    getBySize(width, sizes) {
      return sizes.find(k => k.width === width).link_with_play_button;
    },
    selectedImageCollection(item) {
      return Array.from({ length: 9 }, (k, i) => `${item}.${i}`);
    },
    selectedVideoCollection(item) {
      return Array.from({ length: 9 }, (k, i) => `${item}.${i}`);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import '../../../base.scss';
.photos {
  margin-top: 0.5rem;
}
.works-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #d6e6f3;
    height: 3.5rem;
    .title-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 2rem;
      padding-right: 0.5rem;
      font-weight: bold;
    }
  }
  .works-body {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .collection-container {
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      .collection-title {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        margin-left: 0.5rem;
        align-items: flex-end;
      }
      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .carrusel {
        display: flex;
        justify-content: center;
        margin: 0.5rem 0.5rem 0 0.5rem;
        .track {
          overflow-y: auto;
          display: flex;
          flex-direction: row;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: none;
          overflow: -moz-scrollbars-none;
          &::-webkit-scrollbar {
            display: none;
          }
          .square {
            width: 200px;
            height: 150px;
            background-color: #6c757d;
            flex-shrink: 0;
            margin-right: 0.2rem;
            .first-child {
              background-color: white;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              height: 100%;
            }
            .child {
              font-size: 0.6rem;
              color: white;
              font-weight: bold;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
