import { createRouter, createWebHistory } from 'vue-router'
//createRouter： 创建router实例对象
//createWebHistory： 创建history模式的路由
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import detail from '@/views/detail/index.vue'
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
        },
        {
          //：id占位符
          path:'category/sub/:id',
          component: subCategory
        },
        {
          path: 'detail/:id',
          component: detail
        }
      ]
    },
    {
      path:'/login',
      component: login
    }
  ],


  //路由行为定制 切换路由时自动定位到最顶层
  scrollBehavior(){
    return {
      top: 0
    }
  }
})

export default router
