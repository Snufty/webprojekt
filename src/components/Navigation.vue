<template>
    <div>
        <v-navigation-drawer v-model="drawer" app color="primary">
          
            
            <ul>
                <router-link tag="li" to="/"><v-icon color="orange">home</v-icon>Home</router-link>
                <router-link tag="li" to="/Menu"><v-icon color="orange">restaurant_menu</v-icon>Menu</router-link>
                <router-link tag="li" to="/about"><v-icon color="orange">info</v-icon>About</router-link>
            </ul>


        </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline">
                <span>BAGELS BY</span>
                <span class="font-weight-light">Jerry McBAGEL</span>
            </v-toolbar-title>
    </v-app-bar>
    </div>
</template>

<script>
    export default {
    data: () => ({
    drawer: null
  })
    }
</script>

<style lang="scss" scoped>
    nav ul {
        padding: 0;
        margin-top: 20px;
        text-decoration: none;
    }

    nav li {
        color:map-get($colorz, error);
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
        color:map-get($colorz, accent);
    }
</style>