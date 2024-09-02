<template>

    <v-row class="ma-6 px-4" align="center">
      <v-col cols="7" class="pat-5">
        <h1>Level up with the largest AI & ML community</h1>
        <p>Join over 19M+ machine learners to share, stress test, and stay up-to-date on all the latest ML techniques and technologies. Discover a huge repository of community-published models, data & code for your next project.</p>
        <br>
        <v-row justify="space-around">
          <v-col cols="4">
            <v-btn><v-icon icon="mdi-brain" ></v-icon>some to do</v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn><v-icon icon="mdi-brain" ></v-icon>some to do</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <img src="../assets/main-image.png" alt="" width="90%">
      </v-col>
      <v-col cols="12">
        <h2>Who's on Kaggle?</h2>
      </v-col>
      <v-col cols="4">
        <CardRightImage/>
      </v-col>
      <v-col cols="4">
        <CardRightImage/>
      </v-col>
      <v-col cols="4">
        <CardRightImage/>
      </v-col>
      <v-col cols="6">
        <v-card
          title="Card title"
          text="Lorem ipsum dolor sit amet, adipiscing elit."
          variant="tonal"
        ></v-card>
      </v-col>
      <v-col cols="6" >
        <div width="100%">
          <div>
            <!-- <img src="@/assets/type1-bottom-right.svg"  alt=""  class="wrap"> -->
            <img src="@/assets/type1-top-left.svg" alt=""  class="wrap2">
          </div>
          <div>
            <img src="@/assets/datasets-landing.png" alt=""  class="wrap">
          </div>

        </div>
      </v-col>
    </v-row>
</template>

<script lang="ts" setup>
  //
</script>
<style scoped>
@media (min-width:400px)  {
/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .wrap{
    margin-top: -150%;
  }
}
@media (min-width:700px)  {
/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .wrap{
    margin-top: -130%;
  }
}
@media (min-width:1180px)  {
/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .wrap{
    margin-top: -80%;
  }
}
@media (min-width:1480px)  {
/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .wrap{
    margin-top: -75%;
  }
}
.wrap {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: left top;
  margin-left: 7%;
  border-radius: 4px;
}
.wrap2 {
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: left top;
}
.lt {
  width: 100%;
  height: 400px;
  object-fit: cover;
  z-index: 300;
  object-position: right bottom;
}
.ter{
  margin: 0 0;
}
</style>
