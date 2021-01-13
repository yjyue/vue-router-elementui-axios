import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state: {
    userName: sessionStorage.getItem('userName') || '',//用户名
    menusList: JSON.parse(sessionStorage.getItem('menusList') || '[]'), //rightList.
    menuRouteLoaded:false
  },
  mutations: {
    setMenuList(state, data) {
      state.menusList = data
      sessionStorage.setItem('menusList', JSON.stringify(data))
    },
    menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
      state.menuRouteLoaded = menuRouteLoaded;
    },
    setUsername(state, data) {
      state.userName = data
      sessionStorage.setItem('userName', data)
    }
  },
  actions: {

  },
  getters: {

  }

})

export default store
