// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './store'



import 'element-ui/lib/theme-chalk/index.css'

import "./assets/css/base.css"
import "./assets/css/global.css"

Vue.prototype.$http = axios

axios.defaults.baseURL  =  '/api' //上线注释

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
