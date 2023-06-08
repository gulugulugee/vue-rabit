// 封装所有与用户相关的接口函数

import httpInstance from "@/utils/http"

//POST请求 Body请求，参数放在data中
export const loginAPI = ({account,password}) => {
    return httpInstance({
        url:'/login',
        method:'POST',
        //post请求中传给后端的参数
        data: {
            account,
            password
        }
    })
}