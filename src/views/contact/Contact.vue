<template>
  <component :is="`contact-${$mq}`" />
</template>

<script>
export default {
  components: {
    'contact-sm': () => import('./ContactSm.vue'),
  },
};
</script>
