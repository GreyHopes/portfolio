<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      temporary
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="name">{{name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/about'}">
          <v-list-item-action>
            <v-icon>mdi-face</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/projects'}">
          <v-list-item-action>
            <v-icon>mdi-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/resume'}">
          <v-list-item-action>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-row justify="center">
              <v-btn v-for="(item,index) in socials" :key="index" :href="item.url" icon large>
                <v-icon class="social-icon">mdi-{{item.name}}</v-icon>
              </v-btn>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <router-link :to="{path: '/'}">
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <v-row justify="center"><span>{{footer}}</span></v-row>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    props: {
      source: String,
      test:String
    },
    data: () => ({
      drawer: null,
      title: "",
      footer:"",
      name:"",
      socials:[]
    }),
    methods:{
      retrieveDataFromState: function (state)
      {
        this.title = state.portfolio.title;
        this.footer = state.portfolio.footer;
        this.name = state.portfolio.name;
        this.socials = state.portfolio.socials;
      }
    },
    created () {
      this.$vuetify.theme.dark = true;
      this.drawer = false;
      if(this.$store.state.portfolio)
      {
        this.retrieveDataFromState(this.$store.state);
      }
      else
      {
        this.$store.subscribe((mutation,state) => {
          if(mutation.type === "setportfoliodata")
          {
            this.retrieveDataFromState(state);
          }
        },this);
      }
    },
    computed: {
      portfolioData () {
        return this.$store.state.portfolioData
      }
  }
  }
</script>

<style lang="scss">
.v-toolbar__content
{
  .router-link-active{
    text-decoration: none;
    color:white
  }
}
</style>