import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)
// 静态路由
export const fixedRouter = [{
    path: '/',
    redirect: '/login' //路由重定向
  },
  {
    path: '/login',
    component: resolve => require(['@/views/login/Login'], resolve)
  },
  {
    path: '/home',
    component: resolve => require(['@/views/home/Home'], resolve),
    redirect: 'users',
    children: [{
        path: '/users',
        meta: {
          title: "用户列表",
          roles: ['user', 'admin']
        },
        component: resolve => require(['@/views/users/Users'], resolve)
      },
      {
        path: '/roles',
        meta: {
          title: "角色管理"
        },
        component: resolve => require(['@/views/roles/Roles'], resolve)
      },

    ]
  },
  {
    path: '/404',
    name: 'notFound',
    component: resolve => require(['@/views/Error/404'], resolve)
  }
]
/**
 * 需要动态添加的路由
 */
export const asyncRouterMap= [
  {
	  path: '/educate',
	  name: 'Educate',
	  component: Layout,
	  meta: {
	    title: '教务管理'
	  },
	  children: [
	    {
	      path: 'student',
	      name: 'Student',
	      component: "",
	      meta: {
	        keepAlive: true,
	        title: '学员中心-桃李云帮'
	      }
      },
    ]
  }
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: fixedRouter
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  const tokenStr = sessionStorage.getItem('token');
  let userName = sessionStorage.getItem('ussetUsernameer')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    // if(tokenStr) {
    //   // next({ path: '/' })
    // } else {
    //   next()
    // }
    next()
  } else {
    if (!tokenStr) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({
        path: '/login'
      })
    } else {
      // 加载动态菜单和路由
      addDynamicMenuAndRoutes(userName, to, from)
      next()
    }
  }


})

const menuList = [

  {
    "id": "1",
    "pid": "0",
    "name": "工作台",
    "url": "/dashboard",
    "icon": "el-icon-s-platform",
    "children": []
  },
  {
    "id": "2",
    "pid": "0",
    "name": "教务管理",
    "icon": "el-icon-s-opportunity",
    "children": [{
        "id": "21",
        "pid": "2",
        "name": "学员中心",
        "url": "/educate/student"
      },
      {
        "id": "22",
        "pid": "2",
        "name": "班级管理",
        "url": "/educate/class"
      },
      {
        "id": "23",
        "pid": "2",
        "name": "课程管理",
        "url": "/educate/course"
      },
      {
        "id": "24",
        "pid": "2",
        "name": "课表管理",
        "url": "/educate/table"
      }
    ]
  },
  {
    "id": "3",
    "pid": "0",
    "name": "系统设置",
    "icon": "el-icon-s-opportunity",
    "children": [{
        "id": "31",
        "pid": "3",
        "name": "基础信息",
        "url": "/setting/base"
      },
      {
        "id": "32",
        "pid": "3",
        "name": "职员管理",
        "url": "/setting/user"
      },
      {
        "id": "33",
        "pid": "3",
        "name": "岗位管理",
        "url": "/setting/role"
      }
    ]
  },

]

/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes(userName, to, from) {

 

}


/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicRoutes(menuList = [], routes = []) {

}


export default router
