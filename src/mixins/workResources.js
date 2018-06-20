import { importAll } from '@/utils';
export default {
  methods: {
    /*
    * El nombres de las thumbnais, los nombre de los ficheros, deben coincidir con las
    * propiedades de urlPhotos, ej:
    *  thumbnails[0].name = 'hdedon_small_01'
    *  urlPhotos.hdedon_small_01 = 'http://kikepalacio.com/wp-content/uploads/2017/10/4.jpg'
    */
    loadAllImagesCollections() {
      return [
        {
          name: 'hdedon',
          thumbnails: importAll(
            require.context('@/assets/img/works/hdedon/', false, /\.jpg$/)
          ),
          urlsPhotos: {
            hdedon_small_1:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_01.jpg',
            hdedon_small_2:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_02.jpg',
            hdedon_small_3:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_03.jpg'
          },
          description: 'Hotel DEDON, Philippines'
        },
        {
          name: 'akelarre',
          thumbnails: importAll(
            require.context('@/assets/img/works/akelarre', false, /\.jpg$/)
          ),
          urlsPhotos: {
            akelarre_small_1:
              'http://kikepalacio.com/wp-content/uploads/2017/10/1.jpg',
            akelarre_small_2:
              'http://kikepalacio.com/wp-content/uploads/2017/10/2.jpg',
            akelarre_small_3:
              'http://kikepalacio.com/wp-content/uploads/2017/10/3.jpg'
          },
          description: 'Hotel Akelarre, San Sebastián'
        }
      ];
    },
    async loadAllVideoCollections() {
      return [
        {
          name: 'commercials',
          thumbnail: await import('@/assets/img/works/commercials/commercial_small_1.jpeg'),
          videosInfo: await this.loadVideoThumbs(['97311692', '97913211']),
          description: 'Commercials'
        },
        {
          name: 'films_and_tv',
          thumbnail: await import('@/assets/img/works/films_and_tv/films_and_tv_small_1.jpeg'),
          videosInfo: await this.loadVideoThumbs(['159331129', '56424750']),
          description: 'Film+Tv'
        }
      ];
    },
    loadVideoThumbs(ids) {
      const bearerAuth = token => ({ Authorization: `Bearer ${token}` });
      const options = {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          ...bearerAuth(process.env.VIMEO_TOKEN)
        },
        method: 'GET'
      };
      const videoFetchs = ids.map(id => fetch(`${process.env.VIMEO_API}/videos/${id}?access_token=${process.env.VIMEO_TOKEN}`, options));
      return Promise.all(videoFetchs).then(responses => {
        return Promise.all(responses.map(k => k.json()));
      });
    }
  }
};
