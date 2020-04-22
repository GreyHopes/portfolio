<template>
  <div class="home">
    <v-container class="home-container">
      <v-row justify="center">
        <div class="title">{{title}}</div>
      </v-row>
      <v-row justify="center">
        <div class="subtitle">{{subtitle}}</div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    title:"",
    subtitle:"",
  }),
  methods:
  {
    retrieveDataFromState: function (state)
    {
      this.title = state.portfolio.main.title;
      this.subtitle = state.portfolio.main.subtitle;
    }
  },
  mounted:function () {
    if(this.$store.state.portfolio)
    {
      this.retrieveDataFromState(this.$store.state);
    }
    else
    {
      this.$store.subscribe((mutation,state) => {
        if(mutation.type === "setdata")
        {
          this.retrieveDataFromState(state);
        }
      },this);
    }
  },
}
</script>

<style lang="scss">
.home{
  background-image: url("/images/background.jpg");
  height:100%;
  position: relative;

  //TODO Add breakpoints for responsive font-size

  .title
  {
    font-size: 5rem!important; //add to overwrite vuetify style
    line-height: 5rem;
  }

  .subtitle
  {
    color: #A8A8A8;
  }
}
.home-container{
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>