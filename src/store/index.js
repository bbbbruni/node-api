import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import Users from './Users/index';

const store = new Vuex.Store({
  strict: true,
  modules: {
    Users
  }
})

export default store;