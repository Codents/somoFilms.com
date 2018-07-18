<template>
  <component :is="`works-${$mq}`" />
</template>

<script>
export default {
  components: {
    "works-sm": () => import("./WorksSm.vue")
  }
};
</script>
