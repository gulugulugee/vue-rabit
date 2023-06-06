
//封装分类数据业务代码

import {ref,onMounted} from 'vue'
import { getCategoryAPI } from '@/apis/category'
import {useRoute} from 'vue-router'
import {onBeforeRouteUpdate} from 'vue-router'


export function useCategory () {

    //目标：路由参数变化的时候 可以把分类数据接口重新发送(重新执行个体CategoryData)
//onBeforeRouteUpdate监听变化
onBeforeRouteUpdate((to) => {
    //存在问题：使用最新的路由参数
    //to为最新数据  逻辑为：不更新时使用默认的（12行的数据）
    // 更新时将to.params.id传给getCategoryData（），
    // 进而将数据传给getCategoryAPI（），调用最新的数据
  
    getCategoryData(to.params.id)
  })
  
    const categoryData = ref({})
const route = useRoute()
const getCategoryData = async (id = route.params.id) => {
    //获取路由参数
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
}

onMounted(() => getCategoryData())



return{
    categoryData
}
}