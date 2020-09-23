<template>
  <v-container class="pa-0 ma-0" style="max-width: 100vw">
    <v-row no-gutters>
      <v-col>
        <v-bottom-navigation
          id="bottom_nav"
          class="pa-0"
          height="100"
          depressed
          align-end
        >
          <v-btn href="/admin" class="mt-7">
            <span>Exercise</span>
            <v-icon>mdi-run</v-icon>
          </v-btn>

          <v-btn href="/" class="mt-7 mr-5 ml-5">
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
          </v-btn>

          <v-btn href="/" class="mt-7">
            <span>Meal Plan</span>
            <v-icon>mdi-food</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-col>
    </v-row>
  </v-container>

  <!--
    <v-navigation-drawer v-model="drawer" app color="primary">
      <div v-if="currentUser">
        <v-card class="mx-auto" max-width="250" tile>
          <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="65" tile>
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">{{currentUser.email}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </div>
      <ul>
        <router-link tag="li" to="/">
          <v-icon color="orange">home</v-icon>Home
        </router-link>
        <router-link tag="li" to="/Menu">
          <v-icon color="orange">restaurant_menu</v-icon>Menu
        </router-link>
        <router-link tag="li" to="/about">
          <v-icon color="orange">info</v-icon>About
        </router-link>
        <router-link tag="li" to="/Login">
          <v-icon color="orange">info</v-icon>Login
        </router-link>
        <router-link tag="li" to="/admin">
          <v-icon color="orange">lock</v-icon>Admin
        </router-link>
      </ul>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span>BAGELS BY</span>
        <span class="font-weight-light">Jerry McBAGEL</span>
      </v-toolbar-title>
    </v-app-bar>
    -->
</template>

<script>
/*eslint-disable*/
import { db } from "../../firebase";
import firebase from "firebase";
import "firebase/firestore";
import store from "../store/index";

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});

export default {
  data: () => ({
    drawer: null,
  }),
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
/*
nav ul {
  padding: 0;
  margin-top: 20px;
  text-decoration: none;
}

nav li {
  color: map-get($colorz, error);
  margin-left: 15%;
  padding: 5px 20px;
  list-style-type: none;
  cursor: pointer;
}

nav li i {
  margin-right: 10px;
}

nav li:last-child {
  position: absolute;
  bottom: 40px;
  color: map-get($colorz, accent);
}
*/
</style>