import { importAll } from '@/utils';

/*
 * El nombres de las thumbnais, los nombre de los ficheros, deben coincidir con las
 * propiedades de urlPhotos, ej:
 *  thumbnails[0].name = 'hdedon_small_01'
 *  urlPhotos.hdedon_small_01 = 'http://kikepalacio.com/wp-content/uploads/2017/10/4.jpg'
 */

export default {
  methods: {
    loadAllImagesCollections() {
      return [
        {
          name: 'hdedon',
          thumbnails: importAll(
            require.context('@/assets/img/works/hdedon/', false, /\.jpg$/)
          ),
          urlsPhotos: {
            hdedon_small_1: 'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_01.jpg',
            hdedon_small_2: 'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_02.jpg',
            hdedon_small_3: 'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_03.jpg'
          },
          description: 'Hotel DEDON, Philippines'
        },
        {
          name: 'akelarre',
          thumbnails: importAll(
            require.context('@/assets/img/works/akelarre', false, /\.jpg$/)
          ),
          urlsPhotos: {
            akelarre_small_1: 'http://kikepalacio.com/wp-content/uploads/2017/10/1.jpg',
            akelarre_small_2: 'http://kikepalacio.com/wp-content/uploads/2017/10/2.jpg',
            akelarre_small_3: 'http://kikepalacio.com/wp-content/uploads/2017/10/3.jpg'
          },
          description: 'Hotel Akelarre, San Sebastián'
        }
      ];
    }
  }
};
