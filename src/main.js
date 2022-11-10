import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';

//for localstorage token set
require('@/store/subscriber');

//set baseurl of api
axios.defaults.baseURL = '';

Vue.config.productionTip = false

//get token from locastorage and authencate it
store.dispatch('auth/attempt', localStorage.getItem('token'))
// store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
//   new Vue({
//     router,
//     store,
//     vuetify,
//     render: h => h(App)
//   }).$mount('#app')

// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
