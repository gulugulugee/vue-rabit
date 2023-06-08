// 管理用户数据相关


import { defineStore } from "pinia";
import {loginAPI} from '@/apis/user'
import {ref} from 'vue'

// （模块名，回调函数（在内部编写逻辑））
export const useUserStore = defineStore('user',() => {
    // 1.定义管理用户数据的state
    const userinfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({account,password}) => {
        const res = await loginAPI({account,password})
        userinfo.value = res.result
    }
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userinfo.value = {}
    }

    // 3.以对象的形式把state和action return
    return {
        userinfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true
})