import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
Vue.use(Router)
export default [
        {
            path : '/base',
            component: App,
            children: [
                {
                    name:'hotels',
                    path: 'hotels', 
                    component: resolve => require(['../hotels/index.vue'], resolve)
                },
                {
                    name:'order',
                    path: 'order/:id', 
                    component: resolve => require(['../order/index.vue'], resolve)
                },
                {
                    name:'ordershow',
                    path: 'ordershow', 
                    component: resolve => require(['../ordershow/index.vue'], resolve)
                },
                {
                    name:'login',
                    path: 'login', 
                    component: resolve => require(['../login/index.vue'], resolve)
                },
                {
                    path: '*', //其他页面，强制跳转到登录页面
                    redirect: '/login'
                }
            ]
        },{
            path:"*",
            redirect:'/base/login'
        }
    ]
