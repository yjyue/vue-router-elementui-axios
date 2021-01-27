import { login, logout, getInfo } from '@/api/user'
import router, { resetRouter } from '@/router'

const state = {
  token: sessionStorage.getItem('token')||"",
  userName: sessionStorage.getItem('userName')||'',
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME:(state, username)=>{
    state.userName = username
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
const actions = {
  login({ commit }, userInfo) {
    const { userName, password } = userInfo
      return new Promise((resolve, reject) => {
      // 登录 获取token
      login({ userName: userName.trim(), password: password }).then(response => {
        const { msg } = response
        console.log(msg)
        commit('SET_TOKEN', msg.token)
        commit('SET_USERNAME', userName)
        sessionStorage.setItem('token',msg.token)
        sessionStorage.setItem('userName',userName)
        // setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取登录用户权限信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // 调getInfo方法（接口）  获取用户权限信息
      getInfo({ token: state.token,userName:state.userName}).then(response => {
        const { data } = response
        console.log(data)
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { roles, name, avatar, introduction } = data
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        // 返回得用户信息 存入vuex
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)

        resolve(data)
      }).catch(error => {
        reject(error)
        console.log(12)
      })
    })
  },
    // 退出登录
    logout({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          sessionStorage.removeItem('token')
          // removeToken()
          resetRouter()
  
          // reset visited views and cached views
          // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
          // dispatch('tagsView/delAllViews', null, { root: true })
  
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  
   
  // 删除令牌 删除token 
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      sessionStorage.removeItem('token')
      // removeToken()删除cookies
      resolve()
    })
  },

}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
