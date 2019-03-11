<template>
  <component :is="`about-${$mq}`" />
</template>

<script>
export default {
  components: {
    'about-sm': () => import('./AboutSm.vue'),
    'about-md': () => import('./AboutMd.vue'),
    'about-lg': () => import('./AboutLg.vue'),
  },
};
</script>
