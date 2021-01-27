// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'

import store from './store'

import './permission'//权限菜单

import 'element-ui/lib/theme-chalk/index.css'

import "./assets/css/base.css"
import "./assets/css/global.css"

Vue.prototype.$http = axios

//开发环境下才会引入mockjs
process.env.Mock && require('./mock/index.js')




Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  components: { App },
  template: '<App/>'
})
