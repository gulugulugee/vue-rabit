//使用pinia对layout中的组件进行状态管理

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {

    //导航列表的数据管理
    //创建响应式对象用来接受get到的参数，渲染到页面上
    //state 导航列表数据
const CategoryList = ref([])


//action 获取导航数据的方法
//创建函数
//利用之前创建的getCategoryAPI向地址请求参数（get）
const getCategory =async() =>{
    //发送数据请求前的处理

    const res = await getCategoryAPI()
    //接收到数据的处理

    // console.log(res)
    //将收到的参数赋值给存储变量
    CategoryList.value = res.result
}
//将方法和变量暴露出去供组件使用
return{
    CategoryList,
    getCategory
}
})

