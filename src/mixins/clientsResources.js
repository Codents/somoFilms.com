import vogue from '@/assets/img/logos/vogue.jpg';
import akerare from '@/assets/img/logos/akerare.jpg';
import arima from '@/assets/img/logos/arima.png';
import chic from '@/assets/img/logos/chic.jpg';
import city from '@/assets/img/logos/city_zen_k.jpg';
import dedon from '@/assets/img/logos/dedon_island.jpg';
import delta from '@/assets/img/logos/delta.png';
import dolce from '@/assets/img/logos/dolce.jpg';
import pais from '@/assets/img/logos/el_pais.png';
import elle_korea from '@/assets/img/logos/elle_korea.jpg';
import elle from '@/assets/img/logos/elle.png';

const textures = [
  {
    src: vogue,
    w: 150,
    h: 67
  },
  {
    src: akerare,
    w: 150,
    h: 152
  },
  {
    src: arima,
    w: 150,
    h: 27
  },
  {
    src: chic,
    w: 150,
    h: 72
  },
  {
    src: city,
    w: 150,
    h: 142
  },
  {
    src: dedon,
    w: 150,
    h: 150
  },
  {
    src: delta,
    w: 150,
    h: 23
  },
  {
    src: dolce,
    w: 150,
    h: 137
  },
  {
    src: pais,
    w: 150,
    h: 33
  },
  {
    src: elle_korea,
    w: 150,
    h: 150
  },
  {
    src: elle,
    w: 150,
    h: 61
  }
];

export default {
  methods: {
    loadTextures() {
      return textures;
    }
  }
};
