import { importAll } from '@/utils';

export default {
  methods: {
    /*
     * SIZES:
     * small: w => 200px
     * El nombres de los ficheros de thumbnais deben coincidir con las
     * propiedades de urlPhotos, ej:
     *  >> fichero: @/assets/img/works/photo/hdedon/hdedon_small_01.jpg
     *  thumbnails[0].name = 'hdedon_small_01'
     *  urlPhotos.hdedon_small_01 = 'http://kikepalacio.com/wp-content/uploads/2017/10/4.jpg'
     */
    loadAllImagesCollections() {
      return [
        {
          name: 'hdedon',
          thumbnails: importAll(
            require.context('@/assets/img/works/photo/hdedon/', false, /\.jpg$/)
          ),
          urlsPhotos: {
            hdedon_small_00:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_01.jpg',
            hdedon_small_01:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_02.jpg',
            hdedon_small_02:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_03.jpg',
            hdedon_small_03:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_04.jpg',
            hdedon_small_04:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_05.jpg',
            hdedon_small_05:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_07.jpg',
            hdedon_small_06:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_06.jpg',
            hdedon_small_07:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_08.jpg',
            hdedon_small_08:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_09.jpg',
            hdedon_small_09:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_010.jpg',
            hdedon_small_10:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_012.jpg',
            hdedon_small_11:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_013.jpg',
            hdedon_small_12:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_014.jpg',
            hdedon_small_13:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_015.jpg'
          },
          description: 'Hotel DEDON, Philippines'
        },
        {
          name: 'akelarre',
          thumbnails: importAll(
            require.context(
              '@/assets/img/works/photo/akelarre',
              false,
              /\.jpg$/
            )
          ),
          urlsPhotos: {
            akelarre_small_00:
              'http://kikepalacio.com/wp-content/uploads/2017/10/1.jpg',
            akelarre_small_01:
              'http://kikepalacio.com/wp-content/uploads/2017/10/2.jpg',
            akelarre_small_02:
              'http://kikepalacio.com/wp-content/uploads/2017/10/3.jpg',
            akelarre_small_03:
              'http://kikepalacio.com/wp-content/uploads/2017/10/4.jpg',
            akelarre_small_04:
              'http://kikepalacio.com/wp-content/uploads/2017/10/5.jpg',
            akelarre_small_05:
              'http://kikepalacio.com/wp-content/uploads/2017/10/6.jpg',
            akelarre_small_06:
              'http://kikepalacio.com/wp-content/uploads/2017/10/7.jpg',
            akelarre_small_07:
              'http://kikepalacio.com/wp-content/uploads/2017/10/8.jpg',
            akelarre_small_08:
              'http://kikepalacio.com/wp-content/uploads/2017/10/10.jpg',
            akelarre_small_09:
              'http://kikepalacio.com/wp-content/uploads/2017/10/11.jpg',
            akelarre_small_10:
              'http://kikepalacio.com/wp-content/uploads/2017/10/12.jpg',
            akelarre_small_11:
              'http://kikepalacio.com/wp-content/uploads/2017/10/13.jpg',
            akelarre_small_12:
              'http://kikepalacio.com/wp-content/uploads/2017/10/14.jpg',
            akelarre_small_13:
              'http://kikepalacio.com/wp-content/uploads/2017/10/21.jpg',
            akelarre_small_14:
              'http://kikepalacio.com/wp-content/uploads/2017/10/20.jpg',
            akelarre_small_15:
              'http://kikepalacio.com/wp-content/uploads/2017/10/23.jpg',
            akelarre_small_16:
              'http://kikepalacio.com/wp-content/uploads/2017/10/IMG_3354.jpg'
          },
          description: 'Hotel Akelarre, San Sebastián'
        },
        {
          name: 'arima',
          thumbnails: importAll(
            require.context('@/assets/img/works/photo/arima', false, /\.jpg$/)
          ),
          description: 'Hotel ARIMA, San Sebastían',
          urlsPhotos: {
            arima_small_00:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8821.jpg',
            arima_small_01:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8396.jpg',
            arima_small_02:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8315.jpg',
            arima_small_03:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8430.jpg',
            arima_small_04:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8451.jpg',
            arima_small_05:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_9115.jpg',
            arima_small_06:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8479.jpg',
            arima_small_07:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8679.jpg',
            arima_small_08:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8663.jpg',
            arima_small_09:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8605.jpg',
            arima_small_10:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8756.jpg',
            arima_small_11:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_9065.jpg',
            arima_small_12:
              'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8846.jpg'
          }
        },
        {
          name: 'gecko',
          thumbnails: importAll(
            require.context('@/assets/img/works/photo/gecko', false, /\.jpg$/)
          ),
          description: 'Gecko Hotel & Beach Club, Formentera',
          urlsPhotos: {
            gecko_small_00:
              'http://kikepalacio.com/wp-content/uploads/2017/10/01.jpg',
            gecko_small_01:
              'http://kikepalacio.com/wp-content/uploads/2017/10/02.jpg',
            gecko_small_02:
              'http://kikepalacio.com/wp-content/uploads/2017/10/03.jpg',
            gecko_small_03:
              'http://kikepalacio.com/wp-content/uploads/2017/10/04.jpg',
            gecko_small_04:
              'http://kikepalacio.com/wp-content/uploads/2017/10/05.jpg',
            gecko_small_05:
              'http://kikepalacio.com/wp-content/uploads/2017/10/09.jpg',
            gecko_small_06:
              'http://kikepalacio.com/wp-content/uploads/2017/10/010.jpg',
            gecko_small_07:
              'http://kikepalacio.com/wp-content/uploads/2017/10/011.jpg',
            gecko_small_08:
              'http://kikepalacio.com/wp-content/uploads/2017/10/014.jpg',
            gecko_small_09:
              'http://kikepalacio.com/wp-content/uploads/2017/10/015.jpg',
            gecko_small_10:
              'http://kikepalacio.com/wp-content/uploads/2017/10/016.jpg',
            gecko_small_11:
              'http://kikepalacio.com/wp-content/uploads/2017/10/06.jpg',
            gecko_small_12:
              'http://kikepalacio.com/wp-content/uploads/2017/10/19.jpg',
            gecko_small_13:
              'http://kikepalacio.com/wp-content/uploads/2017/10/023.jpg'
          }
        },
        {
          name: 'regis',
          thumbnails: importAll(
            require.context('@/assets/img/works/photo/regis', false, /\.jpg$/)
          ),
          description: 'Hotel St. Règis, Bora Bora',
          urlsPhotos: {
            regis_small_00:
              'http://kikepalacio.com/wp-content/uploads/2016/10/03-2.jpg',
            regis_small_01:
              'http://kikepalacio.com/wp-content/uploads/2016/10/10.jpg',
            regis_small_02:
              'http://kikepalacio.com/wp-content/uploads/2016/10/05.jpg',
            regis_small_03:
              'http://kikepalacio.com/wp-content/uploads/2016/10/04.jpg',
            regis_small_04:
              'http://kikepalacio.com/wp-content/uploads/2016/10/02-1.jpg',
            regis_small_05:
              'http://kikepalacio.com/wp-content/uploads/2016/10/09.jpg',
            regis_small_06:
              'http://kikepalacio.com/wp-content/uploads/2016/10/12.jpg',
            regis_small_07:
              'http://kikepalacio.com/wp-content/uploads/2016/10/06.jpg',
            regis_small_08:
              'http://kikepalacio.com/wp-content/uploads/2016/10/07.jpg',
            regis_small_09:
              'http://kikepalacio.com/wp-content/uploads/2016/10/11.jpg',
            regis_small_10:
              'http://kikepalacio.com/wp-content/uploads/2016/10/01-1.jpg'
          }
        },
        {
          name: 'torralbenc',
          thumbnails: importAll(
            require.context(
              '@/assets/img/works/photo/torralbenc',
              false,
              /\.jpg$/
            )
          ),
          description: 'Hotel Torralbenc, Menorca',
          urlsPhotos: {
            torralbenc_small_00:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_01.jpg',
            torralbenc_small_01:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_02.jpg',
            torralbenc_small_02:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_03.jpg',
            torralbenc_small_03:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_05.jpg',
            torralbenc_small_04:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_06.jpg',
            torralbenc_small_05:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_07.jpg',
            torralbenc_small_06:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_09.jpg',
            torralbenc_small_07:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_011.jpg',
            torralbenc_small_08:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_012.jpg',
            torralbenc_small_09:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_013.jpg',
            torralbenc_small_10:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_014.jpg',
            torralbenc_small_11:
              'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_015.jpg'
          }
        },
        {
          name: 'totem',
          thumbnails: importAll(
            require.context('@/assets/img/works/photo/totem', false, /\.jpg$/)
          ),
          description: 'Hotel TOTEM, Madrid',
          urlsPhotos: {
            totem_small_00:
              'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_04.jpg',
            totem_small_01:
              'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_05.jpg',
            totem_small_02:
              'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_03.jpg',
            totem_small_03:
              'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_06.jpg',
            totem_small_04:
              'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_08.jpg',
            totem_small_05:
              'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_010.jpg'
          }
        },
        {
          name: 'urso',
          thumbnails: importAll(
            require.context('@/assets/img/works/photo/urso', false, /\.jpg$/)
          ),
          description: 'Hotel Urso, Madrid',
          urlsPhotos: {
            urso_small_00:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_01.jpg',
            urso_small_01:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_02.jpg',
            urso_small_02:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_03.jpg',
            urso_small_03:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_05.jpg',
            urso_small_04:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_06.jpg',
            urso_small_05:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_07.jpg',
            urso_small_06:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_08.jpg',
            urso_small_07:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_09.jpg',
            urso_small_08:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_011.jpg',
            urso_small_09:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_012.jpg',
            urso_small_10:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_013.jpg',
            urso_small_11:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_014.jpg',
            urso_small_12:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_015.jpg',
            urso_small_13:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_016.jpg',
            urso_small_14:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_017.jpg',
            urso_small_15:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_018.jpg'
          }
        },
        {
          name: 'viura',
          thumbnails: importAll(
            require.context('@/assets/img/works/photo/viura', false, /\.jpg$/)
          ),
          description: 'Hotel VIURA, La Rioja',
          urlsPhotos: {
            viura_small_00:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_02.jpg',
            viura_small_01:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_01.jpg',
            viura_small_02:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_03.jpg',
            viura_small_03:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_04.jpg',
            viura_small_04:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_05.jpg',
            viura_small_05:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_06.jpg',
            viura_small_06:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_07.jpg',
            viura_small_07:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_09.jpg',
            viura_small_08:
              'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_010.jpg',
            viura_small_09:
              'http://kikepalacio.com/wp-content/uploads/2016/10/IMG_9336.jpg'
          }
        }
      ];
    },
    /*
     * Video de VIMEO: Solo hay que añadir el id en "videosInfo"
     */
    async loadAllVideoCollections() {
      return [
        {
          name: 'commercials',
          thumbnail: await import('@/assets/img/works/video/commercials/commercial_small_1.jpeg'),
          videosInfo: await this.loadVideoThumbs([
            '97311692',
            '97913211',
            '98528450'
          ]),
          description: 'Commercials'
        },
        {
          name: 'films_and_tv',
          thumbnail: await import('@/assets/img/works/video/films_and_tv/films_and_tv_small_1.jpeg'),
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
      const videoFetchs = ids.map(id =>
        fetch(
          `${process.env.VIMEO_API}/videos/${id}?access_token=${
            process.env.VIMEO_TOKEN
          }`,
          options
        )
      );
      return Promise.all(videoFetchs).then(responses => {
        return Promise.all(responses.map(k => k.json()));
      });
    }
  }
};
