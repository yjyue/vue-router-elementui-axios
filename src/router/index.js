import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/home/Home'], resolve)

Vue.use(Router)
// 静态路由
export const constantRoutes = [
 
  {
    path: '/login',
    hidden: true,
    component: resolve => require(['@/views/login/Login'], resolve)
  },
  {
    path: '/',
    component: Home,
    redirect: '/users',
    name:'用户管理',
    children: [{
        path: '/users',
        name:'用户列表',
        meta: {
          title: "用户列表"
        },
        component: resolve => require(['@/views/users/Users'], resolve)
      },
      
    ]
  }
]


/**
 * 异步挂载的路由
 * 动态需要根据权限加载的路由表 
 * 
 */

export const asyncRoutes = [
  {
    path: '/roles',
    component: Home,
    name: '权限管理',
    meta: {role: ['admin', 'editor']}, //页面需要的权限
    children: [{
      path: '/role',
      component: resolve => require(['@/views/roles/Roles'], resolve),
      name: '角色列表',
      meta: {
        role: ['admin', 'editor']
      } //页面需要的权限
    }]
  },
  {
    path: '/modules',
    component: Home,
    name: '组件demo',
    meta: {role: ['admin', 'editor']}, //页面需要的权限
    children: [{
      path: '/echarts',
      component: resolve => require(['@/views/components-demo/Echarts'], resolve),
      name: 'Echart图表',
      meta: {
        role: ['admin', 'editor']
      } //页面需要的权限
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];



const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router

//解决 vue路由跳转错误：Error: Redirected when going from “/login” to “/home” via a navigation guard.
const originalPush = Router.prototype.push;
Router.prototype.push =function push(location, onResolve, onReject) {
  if (onResolve || onReject)return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
}