//axios基础的封装
//关于axios的配置一般单独封装在1个文件中，便于维护
import axios from 'axios'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //发生请求前的处理
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
  })
export default httpInstance
