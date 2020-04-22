import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.get('/portfolioData.json')
.then(function(response)
{
  store.commit('setdata',response.data)
},store)
.catch(function(error){
  console.log(error)
})


