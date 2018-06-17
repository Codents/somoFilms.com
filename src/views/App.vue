<template>
  <main id="main"
        class="main">
    <router-view name="container"
                 class="child-view"></router-view>
  </main>
</template>

<style>
/* poiret-one-regular - latin_cyrillic_latin-ext */
@font-face {
  font-family: 'Poiret One';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/poiret-one-v5-latin_cyrillic_latin-ext-regular.eot'); /* IE9 Compat Modes */
  src: local('Poiret One'), local('PoiretOne-Regular'),
    url('../assets/fonts/poiret-one-v5-latin_cyrillic_latin-ext-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */
      url('../assets/fonts/poiret-one-v5-latin_cyrillic_latin-ext-regular.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('../assets/fonts/poiret-one-v5-latin_cyrillic_latin-ext-regular.woff')
      format('woff'),
    /* Modern Browsers */
      url('../assets/fonts/poiret-one-v5-latin_cyrillic_latin-ext-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('../assets/fonts/poiret-one-v5-latin_cyrillic_latin-ext-regular.svg#PoiretOne')
      format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/MaterialIcons-Regular.eot'); /* For IE6-8 */
  src: local('Material Icons'), local('MaterialIcons-Regular'),
    url('../assets/fonts/MaterialIcons-Regular.woff2') format('woff2'),
    url('../assets/fonts/MaterialIcons-Regular.woff') format('woff'),
    url('../assets/fonts/MaterialIcons-Regular.ttf') format('truetype');
}

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
  font-family: 'Poiret One', serif;
  font-size: 16px;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
