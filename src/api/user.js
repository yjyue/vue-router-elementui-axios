import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/userapi/app_services/userlogin',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/user/info',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
