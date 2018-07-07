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
          description: 'Hotel DEDON, Philippines',
          pictures: [
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_00.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_01.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_01.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_02.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_02.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_03.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_03.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_04.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_04.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_05.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_05.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_07.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_06.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_06.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_07.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_08.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_08.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_09.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_09.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_010.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_10.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_012.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_11.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_013.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_12.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_014.jpg'
            },
            {
              thumb: '/static/works/photo/hdedon/hdedon_small_13.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_015.jpg'
            }
          ]
        },
        {
          name: 'akelarre',
          description: 'Hotel Akelarre, San Sebastián',
          pictures: [
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_00.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/1.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_01.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/2.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_02.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/3.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_03.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/4.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_04.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/5.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_05.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/6.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_06.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/7.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_07.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/8.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_08.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/10.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_09.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/11.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_10.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/12.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_11.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/13.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_12.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/14.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_13.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/21.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_14.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/20.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_15.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/23.jpg'
            },
            {
              thumb: '/static/works/photo/akelarre/akelarre_small_16.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2017/10/IMG_3354.jpg'
            }
          ]
        },
        {
          name: 'arima',
          description: 'Hotel ARIMA, San Sebastían',
          pictures: [
            {
              thumb: '/static/works/photo/arima/arima_small_00.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8821.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_01.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8396.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_02.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8315.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_03.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8430.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_04.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8451.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_05.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_9115.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_06.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8479.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_07.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8679.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_08.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8663.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_09.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8605.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_10.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8756.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_11.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_9065.jpg'
            },
            {
              thumb: '/static/works/photo/arima/arima_small_12.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8846.jpg'
            }
          ]
        },
        {
          name: 'gecko',
          description: 'Gecko Hotel & Beach Club, Formentera',
          pictures: [
            {
              thumb: '/static/works/photo/gecko/gecko_small_00.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/01.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_01.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/02.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_02.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/03.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_03.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/04.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_04.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/05.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_05.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/09.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_06.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/010.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_07.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/011.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_08.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/014.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_09.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/015.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_10.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/016.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_11.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/06.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_12.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/19.jpg'
            },
            {
              thumb: '/static/works/photo/gecko/gecko_small_13.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/023.jpg'
            }
          ]
        },
        {
          name: 'regis',
          description: 'Hotel St. Règis, Bora Bora',
          pictures: [
            {
              thumb: '/static/works/photo/regis/regis_small_00.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/03-2.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_01.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/10.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_02.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/05.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_03.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/04.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_04.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/02-1.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_05.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/09.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_06.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/12.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_07.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/06.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_08.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/07.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_09.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/11.jpg'
            },
            {
              thumb: '/static/works/photo/regis/regis_small_10.jpg',
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/01-1.jpg'
            }
          ]
        },
        {
          name: 'torralbenc',
          description: 'Hotel Torralbenc, Menorca',
          pictures: [
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_00.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_01.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_01.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_02.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_02.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_03.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_03.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_05.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_04.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_06.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_05.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_07.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_06.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_09.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_07.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_011.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_08.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_012.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_09.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_013.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_10.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_014.jpg'
            },
            {
              thumb: '/static/works/photo/torralbenc/torralbenc_small_11.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_015.jpg'
            }
          ]
        },
        {
          name: 'totem',
          description: 'Hotel TOTEM, Madrid',
          pictures: [
            {
              thumb: '/static/works/photo/totem/totem_small_00.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_04.jpg'
            },
            {
              thumb: '/static/works/photo/totem/totem_small_01.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_05.jpg'
            },
            {
              thumb: '/static/works/photo/totem/totem_small_02.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_03.jpg'
            },
            {
              thumb: '/static/works/photo/totem/totem_small_03.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_06.jpg'
            },
            {
              thumb: '/static/works/photo/totem/totem_small_04.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_08.jpg'
            },
            {
              thumb: '/static/works/photo/totem/totem_small_05.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_010.jpg'
            }
          ]
        },
        {
          name: 'urso',
          description: 'Hotel Urso, Madrid',
          pictures: [
            {
              thumb: '/static/works/photo/urso/urso_small_00.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_01.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_01.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_02.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_02.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_03.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_03.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_05.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_04.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_06.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_05.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_07.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_06.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_08.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_07.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_09.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_08.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_011.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_09.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_012.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_10.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_013.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_11.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_014.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_12.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_015.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_13.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_016.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_14.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_017.jpg'
            },
            {
              thumb: '/static/works/photo/urso/urso_small_15.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_018.jpg'
            }
          ]
        },
        {
          name: 'viura',
          description: 'Hotel VIURA, La Rioja',
          pictures: [
            {
              thumb: '/static/works/photo/viura/viura_small_00.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_02.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_01.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_01.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_02.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_03.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_03.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_04.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_04.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_05.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_05.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_06.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_06.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_07.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_07.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_09.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_08.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_010.jpg'
            },
            {
              thumb: '/static/works/photo/viura/viura_small_09.jpg',
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/IMG_9336.jpg'
            }
          ]
        }
      ];
    },
    /*
     * Video de VIMEO: Solo hay que añadir el id en "videoIds"
     */
    loadAllVideoCollections() {
      return [
        {
          name: 'commercials',
          thumbnail: '/static/works/video/commercials/commercial_small_1.jpeg',
          videoIds: [
            '97311692',
            '97913211',
            '98528450'
          ],
          description: 'Commercials'
        },
        {
          name: 'films_and_tv',
          thumbnail: '/static/works/video/films_and_tv/films_and_tv_small_1.jpeg',
          videoIds: ['159331129', '56424750'],
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
