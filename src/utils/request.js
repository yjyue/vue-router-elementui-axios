import axios from 'axios'

// 最基本的全局配置
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// Add a request interceptor， 发送请求之前
service.interceptors.request.use( (config) => {
    //请求拦截  添加请求头
    // if (store.getters.token) {
    //     config.headers['X-Token'] = getToken()
    // }
    return config;
},  (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use( (response) => {
    // 返回错误判断(服务器端定义的err code)
    //保存auth token
    const res = response.data

    return res;
},  (error) => {
    // 可以在后面的请求中catch
    return Promise.reject(error);
});

export default service