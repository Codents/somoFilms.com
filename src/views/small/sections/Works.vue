<template>
  <section class="works-container">
    <div class="header">
      <span class="title-header">Works</span>
    </div>
    <div class="works-body">
      <section class="collection-container">
        <div class="collection-title"
             @click="toggleExpand({ collectionName: 'photos'})">
          <span class="title">Photos</span>
          <i class="material-icons icon-launcher"
             ref="menuIcon">{{ iconExpand.photos ? 'expand_less' : 'expand_more' }}</i>
        </div>
        <Carrusel :items="imagesCollections"
                  :noIndex="true"
                  :noControls="true"
                  class="carrusel">
          <template slot-scope="slot">
            <div class="square"
                 @click="expandByIndex({ collectionName: 'photos', collectionIndex: slot.item })">
              <span class="child">{{ slot.item }}</span>
            </div>
          </template>
        </Carrusel>
        <div class="collection-detail"
             v-if="iconExpand.photos">
          <Carrusel :items="imagesCollection"
                    :noIndex="true"
                    :noControls="true"
                    class="carrusel">
            <template slot-scope="slot">
              <div class="square">
                <span class="first-child"
                      v-if="slot.item[2]==='0'">Descripcion de Coleccion {{ slot.item[0] }}</span>
                <span class="child"
                      v-else>{{ slot.item }}</span>
              </div>
            </template>
          </Carrusel>
        </div>
      </section>
      <section class="collection-container">
        <div class="collection-title"
             @click="toggleExpand({ collectionName: 'films'})">
          <span class="title">Films</span>
          <i class="material-icons icon-launcher"
             ref="menuIcon">{{ iconExpand.photos ? 'expand_less' : 'expand_more' }}</i>
        </div>
        <Carrusel :items="videoCollections"
                  :noIndex="true"
                  :noControls="true"
                  class="carrusel">
          <template slot-scope="slot">
            <div class="square"
                 @click="expandByIndex({ collectionName: 'films', collectionIndex: slot.item })">
              <span class="child">{{ slot.item }}</span>
            </div>
          </template>
        </Carrusel>
        <div class="collection-detail"
             v-if="iconExpand.films">
          <Carrusel :items="videoCollection"
                    :noIndex="true"
                    :noControls="true"
                    class="carrusel">
            <template slot-scope="slot">
              <div class="square">
                <span class="first-child"
                      v-if="slot.item[2]==='0'">Descripcion de Coleccion {{ slot.item[0] }}</span>
                <span class="child"
                      v-else>{{ slot.item }}</span>
              </div>
            </template>
          </Carrusel>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Carrusel from '@/components/Carrusel';

const PHOTOS = 'photos';
const FILMS = 'films';

export default {
  components: { Carrusel },
  data: function() {
    return {
      iconExpand: { [PHOTOS]: false, [FILMS]: false },
      imagesCollections: Array.from({ length: 8 }, (k, i) => i),
      imagesCollection: Array.from({ length: 9 }, (k, i) => `0.${i}`),
      videoCollections: Array.from({ length: 8 }, (k, i) => i),
      videoCollection: Array.from({ length: 9 }, (k, i) => `0.${i}`)
    };
  },
  methods: {
    toggleExpand({ collectionName }) {
      this.iconExpand[collectionName] = !this.iconExpand[collectionName];
    },
    expandByIndex({ collectionName, collectionIndex = 0 }) {
      this.iconExpand[collectionName] = true;
      if (collectionName === PHOTOS) {
        this.imagesCollection = this.selectedImageCollection(collectionIndex);
      } else {
        this.videoCollection = this.selectedVideoCollection(collectionIndex);
      }
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
        .image {
        }
      }
      .collection-detail {
      }
    }
  }
}
.square {
  width: 200px;
  height: 150px;
  background-color: #6c757d;
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
    font-size: 5em;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
