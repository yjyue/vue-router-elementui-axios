import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/Login'
// import Home from '@/views/home/Home'
// const Home = resolve => require(['@/views/home/Home'], resolve);

Vue.use(Router)

export default new Router({
  // mode: 'history',  //去掉url中的#
  routes: [{
      path: '/',
      redirect: 'login'//路由重定向
    },
    {
      path: '/login',
      name: 'login',
      // component: Login
      component: resolve => require(['@/views/login/Login'], resolve)
    },

    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/home/Home'], resolve),
      redirect: 'users',
       children: [
        {
          path: '/users',
          name: 'users',
          component: resolve => require(['@/views/users/Users'], resolve)
        },

      ]
    }
  ]
})
