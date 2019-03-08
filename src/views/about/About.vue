<template>
  <component :is="`about-${$mq}`" />
</template>

<script>
export default {
  components: {
    'about-sm': () => import('./AboutSm.vue'),
  },
};
</script>
