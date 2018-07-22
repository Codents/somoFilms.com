<template>
  <component :is="`team-${$mq}`" />
</template>

<script>
export default {
  components: {
    'team-sm': () => import('./TeamSm.vue'),
    'team-md': () => import('./TeamMd.vue'),
    'team-lg': () => import('./TeamLg.vue')
  }
};
</script>
