<template>
  <component :is="`team-${$mq}`" />
</template>

<script>
export default {
  components: {
    'team-sm': () => import('./TeamSm.vue')
  }
};
</script>
