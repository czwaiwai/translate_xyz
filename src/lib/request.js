import axios from 'axios'

// import api from '@/api/index.js'
// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 使用环境变量
  timeout: parseInt(import.meta.env.VITE_TIMEOUT, 10), // 使用环境变量
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，比如添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    console.error('Request Error:', error)
    return Promise.reject(error)
  },
)

export default request
