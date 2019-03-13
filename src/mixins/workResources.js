export default {
  methods: {
    showImageFullScreen(image) {      
      this.$root.$data.showImageFullScreen = true;
      const lazyImage = new Image();
      const $fullImg = document.querySelector('.full-screen-image .image-full');
      $fullImg.src = image.thumb;
      lazyImage.addEventListener('load', () => {
        $fullImg.src = image.full;
        setTimeout(() => window.scrollTo(0, 0), 300);
      });
      lazyImage.src = image.full;
    },
    loadAllImagesFromInProgress() {
      return [
        {
          name: 'inprogress-1',
          description: 'Creacion ( a proposito del Arte )',
          pictures: [
            {
              thumb: '/inprogress/in-progress-1-small.jpg',
              full: '/inprogress/in-progress-1-big.jpg',
            },
          ],
        },
        {
          name: 'inprogress-2',
          description: 'Creacion ( a proposito del Arte )',
          pictures: [
            {
              thumb: '/inprogress/in-progress-2-small.jpg',
              full: '/inprogress/in-progress-2-big.jpg',
            },
          ],
        },
      ];
    },
    loadAllImagesCollections(mq) {
      return [
        {
          name: 'hdedon',
          description: 'Hotel DEDON, Philippines',
          pictures: [
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_00.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_01.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_01.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_02.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_02.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_03.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_03.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_04.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_04.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_05.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_05.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_07.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_06.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_06.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_07.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_08.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_08.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_09.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_09.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_010.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_10.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_012.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_11.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_013.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_12.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_014.jpg',
            },
            {
              thumb: `/works/photo/hdedon/hdedon_${mq}_13.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hdedon_015.jpg',
            },
          ],
        },
        {
          name: 'akelarre',
          description: 'Hotel Akelarre, San Sebastián',
          pictures: [
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_00.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/1.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_01.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/2.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_02.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/3.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_03.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/4.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_04.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/5.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_05.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/6.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_06.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/7.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_07.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/8.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_08.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/10.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_09.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/11.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_10.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/12.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_11.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/13.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_12.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/14.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_13.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/21.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_14.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/20.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_15.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/23.jpg',
            },
            {
              thumb: `/works/photo/akelarre/akelarre_${mq}_16.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2017/10/IMG_3354.jpg',
            },
          ],
        },
        {
          name: 'arima',
          description: 'Hotel ARIMA, San Sebastían',
          pictures: [
            {
              thumb: `/works/photo/arima/arima_${mq}_00.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8821.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_01.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8396.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_02.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8315.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_03.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8430.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_04.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8451.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_05.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_9115.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_06.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8479.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_07.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8679.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_08.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8663.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_09.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8605.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_10.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8756.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_11.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_9065.jpg',
            },
            {
              thumb: `/works/photo/arima/arima_${mq}_12.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2018/01/IMG_8846.jpg',
            },
          ],
        },
        {
          name: 'gecko',
          description: 'Gecko Hotel & Beach Club, Formentera',
          pictures: [
            {
              thumb: `/works/photo/gecko/gecko_${mq}_00.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/01.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_01.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/02.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_02.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/03.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_03.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/04.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_04.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/05.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_05.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/09.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_06.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/010.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_07.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/011.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_08.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/014.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_09.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/015.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_10.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/016.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_11.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/06.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_12.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/19.jpg',
            },
            {
              thumb: `/works/photo/gecko/gecko_${mq}_13.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2017/10/023.jpg',
            },
          ],
        },
        {
          name: 'regis',
          description: 'Hotel St. Règis, Bora Bora',
          pictures: [
            {
              thumb: `/works/photo/regis/regis_${mq}_00.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/03-2.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_01.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/10.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_02.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/05.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_03.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/04.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_04.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/02-1.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_05.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/09.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_06.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/12.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_07.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/06.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_08.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/07.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_09.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/11.jpg',
            },
            {
              thumb: `/works/photo/regis/regis_${mq}_10.jpg`,
              full: 'http://kikepalacio.com/wp-content/uploads/2016/10/01-1.jpg',
            },
          ],
        },
        {
          name: 'torralbenc',
          description: 'Hotel Torralbenc, Menorca',
          pictures: [
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_00.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_01.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_01.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_02.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_02.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_03.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_03.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_05.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_04.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_06.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_05.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_07.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_06.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_09.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_07.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_011.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_08.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_012.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_09.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_013.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_10.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_014.jpg',
            },
            {
              thumb: `/works/photo/torralbenc/torralbenc_${mq}_11.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/09/hTorralbenc_015.jpg',
            },
          ],
        },
        {
          name: 'totem',
          description: 'Hotel TOTEM, Madrid',
          pictures: [
            {
              thumb: `/works/photo/totem/totem_${mq}_00.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_04.jpg',
            },
            {
              thumb: `/works/photo/totem/totem_${mq}_01.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_05.jpg',
            },
            {
              thumb: `/works/photo/totem/totem_${mq}_02.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_03.jpg',
            },
            {
              thumb: `/works/photo/totem/totem_${mq}_03.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_06.jpg',
            },
            {
              thumb: `/works/photo/totem/totem_${mq}_04.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_08.jpg',
            },
            {
              thumb: `/works/photo/totem/totem_${mq}_05.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/htotem_010.jpg',
            },
          ],
        },
        {
          name: 'urso',
          description: 'Hotel Urso, Madrid',
          pictures: [
            {
              thumb: `/works/photo/urso/urso_${mq}_00.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_01.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_01.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_02.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_02.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_03.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_03.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_05.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_04.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_06.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_05.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_07.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_06.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_08.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_07.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_09.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_08.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_011.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_09.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_012.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_10.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_013.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_11.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_014.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_12.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_015.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_13.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_016.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_14.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_017.jpg',
            },
            {
              thumb: `/works/photo/urso/urso_${mq}_15.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hUrso_018.jpg',
            },
          ],
        },
        {
          name: 'viura',
          description: 'Hotel VIURA, La Rioja',
          pictures: [
            {
              thumb: `/works/photo/viura/viura_${mq}_00.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_02.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_01.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_01.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_02.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_03.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_03.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_04.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_04.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_05.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_05.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_06.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_06.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_07.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_07.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_09.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_08.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/hviura_010.jpg',
            },
            {
              thumb: `/works/photo/viura/viura_${mq}_09.jpg`,
              full:
                'http://kikepalacio.com/wp-content/uploads/2016/10/IMG_9336.jpg',
            },
          ],
        },
      ];
    },
    /*
     * Video de VIMEO: Solo hay que añadir el id en "videoIds"
     */
    loadAllVideoCollections(mq) {
      return [
        {
          name: 'commercials',
          thumbnail: `/works/video/commercials/commercial_${mq}_1.jpeg`,
          videoIds: ['97311692', '97913211', '98528450'],
          description: 'Commercials',
        },
        {
          name: 'films_and_tv',
          thumbnail:
            `/works/video/films_and_tv/films_and_tv_${mq}_1.jpeg`,
          videoIds: ['159331129', '56424750'],
          description: 'Film+Tv',
        },
      ];
    },
    loadVideoThumbs(ids) {
      const bearerAuth = token => ({ Authorization: `Bearer ${token}` });
      const options = {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          ...bearerAuth(process.env.VUE_APP_VIMEO_TOKEN),
        },
        method: 'GET',
      };
      const videoFetchs = ids.map(id => fetch(
        `${process.env.VUE_APP_VIMEO_API}/videos/${id}?access_token=${
          process.env.VUE_APP_VIMEO_TOKEN
        }`,
        options,
      ));
      return Promise.all(videoFetchs).then(responses => Promise.all(responses.map(k => k.json())));
    },
  },
};
