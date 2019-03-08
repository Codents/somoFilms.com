<template>
  <component :is="`works-${$mq}`" />
</template>

<script>
export default {
  components: {
    'works-sm': () => import('./WorksSm.vue'),
    'works-md': () => import('./WorksMd.vue'),
    'works-lg': () => import('./WorksLg.vue'),
  },
};
</script>
