<template>
  <v-container>
    
    <v-row align-center class="info_box">
      <v-col cols="3" xs="12" offset-sm="9" no>
        <h1>
          Bagel Shop
        </h1>
        <div>
          <p>
            Buy our Bagels
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row align-center class="info_box" row wrap no-gutters>
      <v-col cols="3"  xs="12" offset-sm="1">
        <h1>
          Bagel Shop
        </h1>
        <div>
          <p>
            Buy our Bagels
          </p>
        </div>
      </v-col>

      <v-col cols="3" xs="12">
        <h1>
          Bagel Shop
        </h1>
        <div>
          <p>
            Buy our Bagels
          </p>
        </div>
      </v-col>

      <v-col cols="3" xs="12">
        <h1>
          Bagel Shop
        </h1>
        <div>
          <p>
            Buy our Bagels
          </p>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  components: {
    
  }
}
</script>

<style lang="scss">

  .info_box .col h1 {
    @include infobox_mixin(5px, map-get($colorz, hvid), 10px, 5px, map-get($colorz, hvid));
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
  }
  
  .info_box .col div {
    background-color: white;
    padding: 20px;
  }

  .row:first-child {
    height: 25vh;
  }

</style>
