<template>
  <section class="works-container">
    <div class="picture-header">
      <span class="title-header">Works</span>
    </div>
    <section class="photos">
      <span class="title"
            @click="imagesCollection=null">Photos</span>
      <Carrusel :items="imagesCollections"
                :noIndex="true"
                :noControls="true"
                class="carrusel">
        <template slot-scope="slot">
          <div class="square"
               @click="selectedImageCollection(slot.item)">
            <span class="child">{{ slot.item }}</span>
          </div>
        </template>
      </Carrusel>
      <div class="collection-detail"
           v-if="imagesCollection">
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
    <section class="photos">
      <span class="title"
            @click="videoCollection=null">Videos</span>
      <Carrusel :items="videoCollections"
                :noIndex="true"
                :noControls="true"
                class="carrusel">
        <template slot-scope="slot">
          <div class="square"
               @click="selectedVideoCollection(slot.item)">
            <span class="child">{{ slot.item }}</span>
          </div>
        </template>
      </Carrusel>
      <div class="collection-detail"
           v-if="videoCollection">
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
  </section>
</template>

<script>
import Carrusel from '@/components/Carrusel';

export default {
  components: { Carrusel },
  data: function() {
    return {
      imagesCollections: Array.from({ length: 8 }, (k, i) => i),
      imagesCollection: [],
      videoCollections: Array.from({ length: 8 }, (k, i) => i),
      videoCollection: []
    };
  },
  methods: {
    selectedImageCollection(item) {
      this.imagesCollection = Array.from({ length: 9 }, (k, i) => `${item}.${i}`);
    },
    selectedVideoCollection(item) {
      this.videoCollection = Array.from({ length: 9 }, (k, i) => `${item}.${i}`);
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
  .picture-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-image: url('../../../assets/img/works_header_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    .title-header {
      font-size: 3rem;
      padding-right: 0.5rem;
    }
  }
  .title {
    margin-top: 1rem;
    margin-left: 0.5rem;
    font-size: 2rem;
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
