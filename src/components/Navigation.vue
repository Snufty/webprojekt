<template>
    <div>
        <v-navigation-drawer v-model="drawer" app>
            
            <ul>
                <router-link tag="li" to="/"><v-icon>home</v-icon>Home</router-link>
                <router-link tag="li" to="/about"><v-icon>info</v-icon>About</router-link>
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

</style>