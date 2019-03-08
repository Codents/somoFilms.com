<template>
  <component :is="`clients-${$mq}`" />
</template>

<script>
export default {
  components: {
    'clients-sm': () => import('./ClientsSm.vue'),
    'clients-md': () => import('./ClientsMd.vue'),
    'clients-lg': () => import('./ClientsLg.vue'),
  },
};
</script>
