<template>
  <component :is="`clients-${$mq}`" />
</template>

<script>
export default {
  components: {
    "clients-sm": () => import("./ClientsSm.vue")
  }
};
</script>
