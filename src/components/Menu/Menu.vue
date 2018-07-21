<template>
  <component :is="`menu-${$mq}`" />
</template>

<script>
export default {
  components: {
    'menu-sm': () => import('./MenuSm.vue')
  }
};
</script>
