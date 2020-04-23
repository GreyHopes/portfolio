import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import xssFilter from 'showdown-xss-filter'
import VueShowdown from 'vue-showdown'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
  extensions:[[xssFilter]]
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.get('/portfolioData.json')
.then(function(response)
{
  store.commit('setportfoliodata',response.data)
  store.commit('setprojects',response.data.projects)
},store)
.catch(function(error){
  console.log(error)
})


