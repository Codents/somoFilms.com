<template>
  <component :is="`home-${$mq}`" />
</template>

<script>
export default {
  components: {
    "home-sm": () => import("./HomeSm.vue")
  }
};
</script>
