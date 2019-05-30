import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './views/Home'
import About from './views/About'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
