// styles
import './assets/styles/main.scss'

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {routes} from './routes';
import {store} from './store/store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.afterEach((from,to) => {
  store.commit('toggleMenu');
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})