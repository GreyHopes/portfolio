import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portfolio:null
  },
  mutations: {
    setportfoliodata(state,data)
    {
      state.portfolio = data;
    },
    setprojects(state,data){
      state.projects = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
