import httpInstance from "@/utils/http"

//获取分类的接口函数 在layout中使用
export function getCategoryAPI (){
    return httpInstance({
        //向该地址请求参数
        url:'/home/category/head'
    })
}