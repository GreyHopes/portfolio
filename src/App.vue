<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      temporary
    >
      <v-list dense>
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
      <span>&copy; 2019</span>
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
      title: ""
    }),
    created () {
      this.$vuetify.theme.dark = true;
      this.drawer = false;
        this.$store.subscribe((mutation,state) => {
      if(mutation.type === "setportfoliodata")
      {
        this.title = state.portfolio.title;
      }
    },this);
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