import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import app from './App.vue'
import router from './router'
import store from './store/index';

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app')
