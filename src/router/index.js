import { createRouter, createWebHistory } from 'vue-router'
//createRouter： 创建router实例对象
//createWebHistory： 创建history模式的路由
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: layout,
      children:[
        {
          path:'',
          component: home
        },
        {
          //：id占位符
          path:'category/:id',
          component: category
        }
      ]
    },
    {
      path:'/login',
      component: login
    }
  ]
})

export default router
