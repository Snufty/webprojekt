<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
    <navigation />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation,
  },

  name: "app",
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="scss">
main {
  background-color: map-get($colorz, info);
}

h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, hvid),
    10px,
    5px,
    map-get($colorz, hvid)
  );
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