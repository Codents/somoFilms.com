<template>
  <component :is="`inprogress-${$mq}`" />
</template>

<script>
export default {
  components: {
    'inprogress-sm': () => import('./InProgressSm.vue'),
    'inprogress-md': () => import('./InProgressMd.vue'),
    'inprogress-lg': () => import('./InProgressLg.vue'),
  },
};
</script>
