import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import order from './store/order'

export default new Vuex.Store({
    modules: {order}
})


