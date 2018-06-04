<template>
  <div class="tablet">
    <section class="landscape"
             v-if="isLandscape"></section>
    <section class="portrait"
             v-else></section>
  </div>
</template>

<script>
import { getOrientation } from '@/utils';
import { LANDSCAPE } from '@/constants';

export default {
  computed: {
    isLandscape: function() {
      return getOrientation() === LANDSCAPE;
    }
  }
};
</script>
