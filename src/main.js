import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import routes from './router'
Vue.use(VueRouter)



const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
