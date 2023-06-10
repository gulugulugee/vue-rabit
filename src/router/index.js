import { createRouter, createWebHistory } from 'vue-router'
//createRouter： 创建router实例对象
//createWebHistory： 创建history模式的路由


// import layout from '@/views/layout/index.vue'
// import login from '@/views/login/index.vue'
// import home from '@/views/home/index.vue'
// import category from '@/views/category/index.vue'
// import subCategory from '@/views/subCategory/index.vue'
// import detail from '@/views/detail/index.vue'

// maybe 更好的路由写法？
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: () => import('@/views/layout/index.vue'),
      children:[
        {
          path:'',
          // component: home
          component: () => import('@/views/home/index.vue')
        },
        {
          //：id占位符
          path:'category/:id',
          // component: category
          component: () => import('@/views/category/index.vue')
        },
        {
          //：id占位符
          path:'category/sub/:id',
          // component: subCategory
          component: () => import('@/views/subCategory/index.vue')
        },
        {
          path: 'detail/:id',
          // component: detail
          component: () => import('@/views/detail/index.vue')
        }
      ]
    },
    {
      path:'/login',
      // component: login
      component: () => import('@/views/login/index.vue')
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
