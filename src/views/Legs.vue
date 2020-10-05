<template>
  <v-row no-gutters>
    <v-col offset-md="1" md="5">
      <h1 class="pa-2 ma-3">Leg Day</h1>
      <v-card class="pa-2 ma-3" height="600">
        <div class="ma-1">Leg day exercises:</div>
        <hr />
        <div id="exercise_container">
          <div id="exercise_btns" class="pa-4">
            <v-btn color="accent" href="/squat" class="exe_btns pa-12" large>Squats</v-btn>
            <v-btn color="accent" class="exe_btns pa-12" large>Leg Extension</v-btn>
            <v-btn color="accent" class="exe_btns pa-12" large>Deadlift</v-btn>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
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