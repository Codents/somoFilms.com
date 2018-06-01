<template>
  <main id="main"
        class="main">
    <router-view name="container"
                 class="child-view"></router-view>
  </main>
</template>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body,
input,
textarea {
  font-family: 'Open Sans', sans-serif;
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
