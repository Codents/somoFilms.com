<template>
  <component :is="`home-${$mq}`" />
</template>

<script>
export default {
  components: {
    'home-sm': () => import('./HomeSm.vue'),
    'home-md': () => import('./HomeMd.vue'),
    'home-lg': () => import('./HomeLg.vue'),
  },
};
</script>
