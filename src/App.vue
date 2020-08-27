<template>
  <v-app id="app">
    <navigation />
    

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>   
      </v-container>
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
</style>