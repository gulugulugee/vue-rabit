//axios基础的封装
//关于axios的配置一般单独封装在1个文件中，便于维护
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 拦截器携带token，目的是在接口中不用重复书写,请求需要携带token才能得到数据
    // 1.从pinia中获取token数据
    const useStore = useUserStore()
    const token = useStore.userinfo.token
    // 2.按后端要求拼接token数据
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    //发生请求前的处理
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
    return Promise.reject(e)
  })
export default httpInstance
