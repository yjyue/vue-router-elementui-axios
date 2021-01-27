import router from './router'
import store from './store'


//// 没有重定向白名单
const whiteList = ['/login', '/auth-redirect'] 

// 挂载路由导航守卫
router.beforeEach(async (to, from, next) => {
    const tokenStr = sessionStorage.getItem('token');
    // 获取token
    const hasToken = store.getters.token
    console.log(store.getters.token)
    if (hasToken) {
      if (to.path === '/login') {
        next({ path: '/home' })
      }else{
        //判断用户是否获得了权限角色
        const hasRoles = store.getters.roles && store.getters.roles.length > 0
        if(hasRoles){
          next()
        }else{
          console.log('没有权限')
          try {
            // 通过getInfo获取权限角色
            const { roles } = await store.dispatch('user/getInfo')
            //根据角色生成可访问路由图
            const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
            console.log(accessRoutes)
            // 动态添加可访问路由
            router.addRoutes(accessRoutes);

            next({ ...to, replace: true })

          } catch (e) {
            
          }
        }
      }
    }else{
      console.log('wu')
      if (whiteList.indexOf(to.path) !== -1) {
        // 在免费登录白名单中，直接进入
        next()
      } else {
        // 其他没有访问权限的页面被重定向到登录页面
        // next(`/login?redirect=${to.path}`)
        next(`/login`)
      }
    }

  
    // if (to.path === '/login') {
    //   next()
    // } else {
    //   if (!tokenStr) {
    //     next({
    //       path: '/login'
    //     })
    //   } else {
    //     next()
    //   }
    // }
  
  })