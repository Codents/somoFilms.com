<template>
  <component :is="`inprogress-${$mq}`" />
</template>

<script>
export default {
  components: {
    "inprogress-sm": () => import("./InProgressSm.vue")
  }
};
</script>
