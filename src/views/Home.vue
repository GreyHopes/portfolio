<template>
  <div class="home">
    <v-container class="home-container">
      <v-row justify="center">
        <div>TEST</div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
.home{
  background-image: url("/images/background.jpg");
  height:100%;
  position: relative;
}
.home-container{
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>