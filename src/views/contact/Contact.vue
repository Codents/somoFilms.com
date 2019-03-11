<template>
  <component :is="`contact-${$mq}`" />
</template>

<script>
export default {
  components: {
    'contact-sm': () => import('./ContactSm.vue'),
    'contact-md': () => import('./ContactMd.vue'),
    'contact-lg': () => import('./ContactLg.vue'),
  },
};
</script>
