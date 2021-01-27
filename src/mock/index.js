// src/mock.js
const Mock = require('mockjs')
const Random = Mock.Random

const getResource = () => {
  let resources = []
  for (let i = 0; i < 10; i++) {
    resources.push({
      id: Random.date() + ' ' + Random.time(),
      label: '一级' + Random.csentence(2, 5),
      children: [{
        label: '二级 1-1-1'
      }]
    })
  }
  return resources
}
/**
 * 格式： Mock.mock(url, post/get , 返回的数据)；
 * 当post或get请求到路由的时候mock会拦截并返回
 * 注意写全路径
 **/
Mock.mock('/getResource', 'get', getResource());

/**
 * 获取用户权限
 */
const users = {
  'admin': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}


const userInfo = function (req) {
  const { token, userName } = JSON.parse(req.body)
  console.log(userName)
  const info = users[userName]
  if (!info) {
    return {
      code: 50008,
      message: 'Login failed, unable to get user details.'
    }
  }

  return {
    code: 20000,
    data: info
  }
}

Mock.mock("/user/info", "post",userInfo)



/**
 * 获取菜单
 */
const getMenulist = {
  code: 200,
  msg: "请求成功",
  menu: [{
      authName: '用户管理',
      id: '@increment',
      children: [{
        authName: '用户列表',
        id: '@increment',
        path: '/users'
      }]
    },
    {
      authName: '角色管理',
      id: '@increment',
      children: [{
        authName: '角色列表',
        id: '@increment',
        path: '/roles'
      }]
    }
  ]
}
Mock.mock('/getMenus', 'post', getMenulist);


const loginData = function (req) {
  const {username} = JSON.parse(req.body)
 if(username=='xmyfsj'){
   return {
        result: 200,
       data: {
          uid:Random.id(),
          type: 1,
          username:username,
          expire_in: "63666",
          token: Random.guid(),
          logintime: Random.now()
       }
  }
}else{
return {
   result: 0,
  data: {
    uid:Random.id(),
    type: 1,
    username:username,
    expire_in: "63666",
    token: Random.guid(),
    logintime: Random.now()
     }
   }
 }
}

Mock.mock('/news/login', 'post', loginData);

/**
 * 退出登录
 */
Mock.mock('/user/logout', 'post', {code: 20000, data: 'success'});