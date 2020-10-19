<template>
  <v-row no-gutters>
    <v-col offset-md="1" md="5">
      <h1 class="pa-2 ma-3">{{ currentItem.exerciseName }}</h1>
      <v-card class="pa-2 ma-3" height="600">
        <div class="ma-1">{{ currentItem.exerciseName }} exercises</div>
        <hr />
        <div id="exercise_container">
          <div id="exercise_btns" class="pa-4">
            <v-btn
              color="accent"
              href="/Indi_exercise"
              class="exe_btns pa-12"
              large
              >Squats</v-btn
            >

            <v-btn
              color="accent"
              href="/Indi_exercise"
              class="exe_btns pa-12"
              large
              >Squats</v-btn
            >

            <v-btn
              color="accent"
              href="/Indi_exercise"
              class="exe_btns pa-12"
              large
              >Squats</v-btn
            >
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  /* 
  "legs" er gemt i dette components pga din routing

  med "legs" kan vi bruge .filter() på exercisecategory fra din firestore collection som hedder "exercise". 
  Du skal hente den direkte ind i dette component
 

example på filter.
filterExercise() {
  return this.exerciseArray.filter(indiExercise => indiExercise.exercisecategory == "legs")
}  


*/
  data() {
    return {
      menuItems: [],
      currentItem: this.$route.params,
      computed: {
        showProducts() {
          const id = this.$route.params.id;
          const product = this.basketItems.find((p) => p.uuid == id);
          return product;
        },
      },
    };
  },
};
</script>

<style lang="scss">
#exercise_container {
  display: flex;
  align-content: center;
  justify-content: center;
}

#exercise_btns {
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: start;
  margin-top: 15px;
  width: 95%;
  height: 65vh;
}

.exe_btns {
  width: 100%;
  margin: 10px 0 10px 0;
}
</style>