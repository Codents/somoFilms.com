<template>
  <component :is="`menu-${$mq}`" />
</template>

<script>
export default {
  components: {
    'menu-sm': () => import('./MenuSm.vue'),
    'menu-md': () => import('./MenuMd.vue'),
    'menu-lg': () => import('./MenuLg.vue'),
  },
};
</script>
