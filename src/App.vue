<template>
  <v-app id="app">
    <navigation />
    <v-main>
        <router-view></router-view>   
    </v-main>
  </v-app>
</template>

<script>

import Navigation from './components/Navigation';

export default {
  components: {
    Navigation
  },

  name: "app",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
main {
  background-image: url('./assets/montreal_bagels.jpg');
  background-size: cover;
}

h1 {
    @include infobox_mixin(5px, map-get($colorz, hvid), 10px, 5px, map-get($colorz, hvid));
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    text-align: right;
    }

    .col:last-child h1 {
      text-align: left;
    }

    #info {
      background-color: white;
    }
</style>