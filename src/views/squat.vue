<template>
  <v-row no-gutters>
    <v-col offset-md="1" md="5">
      <h1 class="pa-2 ma-3">Leg Day</h1>
      <v-card class="pa-3 ma-3" height="600" style="overflow: auto">
        <v-btn href="/Legs" fab depressed outlined>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="ma-1 font-weight-bold">Squats:</div>
        <hr />
        <div id="exercise_container">
            <iframe id="video" width="350px" height="300px" src="https://www.youtube.com/embed/q1fCgfieNEs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Starting Position</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">Middle Position</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3">Middle Position</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content class="pa-2" step="1">
              <div id="step_btns">
                <v-btn fab depressed outlined class="ma-2" @click="e1=2">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn fab depressed outlined class="ma-2" @click="e1=2">
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <v-card height="200px" color="red">
                  <div id="img_1"></div>
              </v-card>
            </v-stepper-content>
            <v-stepper-content class="pa-2" step="2">
              <div id="step_btns">
                <v-btn fab depressed outlined class="ma-2" @click="e1=3">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn fab depressed outlined class="ma-2" @click="e1=3">
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <v-card height="200px" color="red"></v-card>
            </v-stepper-content>
            <v-stepper-content class="pa-2" step="3">
              <div id="step_btns">
                <v-btn fab depressed outlined class="ma-2" @click="e1=1">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn fab depressed outlined class="ma-2" @click="e1=1">
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <v-card height="200px" color="red"></v-card>
            </v-stepper-content>
            
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style lang="scss">
#video {
  width: 100vw;
  height: 30vh;
  margin: 10px 0 10px 0;
  
}

#step_btns {
    display: flex;
    justify-content: center;
}

#img_1 {
    width: 100vw;
    height: 100vh;
    
}
</style>