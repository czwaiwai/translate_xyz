import axios from 'axios'
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
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
    const userStore = useUserStore()
    const token = userStore.token
    // const token = localStorage.getItem('token')
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
    console.log('Response Data:', response.data)
    let { success, message, code } = response.data
    // success = false
    // code = 401
    if (!success) {
      if (code === 401) {
        return axios({
          baseURL: import.meta.env.VITE_API_BASE_URL,
          timeout: parseInt(import.meta.env.VITE_TIMEOUT, 10),
          url: '/token/refresh',
          method: 'post',
          data: {
            refreshToken: useUserStore().refreshToken,
          },
        }).then((res) => {
          console.log(res)
          let { data } = res
          if (data.success && data.data) {
            useUserStore().setUserInfo(data.data)
            return request(response.config)
          } else {
            useUserStore().logout()
            useRouter().replace({ name: 'LoginView' })
          }
        })
      }
      message && Message.error(message)
      return Promise.reject(response.data)
    }
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    console.error('Request Error:', error)
    return Promise.reject(error)
  },
)

export default request
