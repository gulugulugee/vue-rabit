import httpInstance from '@/utils/http'

//获取一级商品分类
export function getCategoryAPI (id)  {
    return httpInstance ({
      //请求地址
        url: '/category',
        //请求参数  params对应放到query位置
        params: {
            id
        }
    })
}


//获取二级商品分类
export function getCategoryFilterAPI  (id)  {
    return httpInstance({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
   export const getSubCategoryAPI = (data) => {
    return httpInstance({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }