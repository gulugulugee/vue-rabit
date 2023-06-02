
//封装banner轮播图相关业务代码

import { ref,onMounted } from "vue"
import { getBannerAPI } from "@/apis/home"

export function useBanner() {
    //获取banner
const bannerList = ref([])

const getBanner = async () => {

    //参数distributionSite赋值为2，此时为商品轮播图

    const res = await getBannerAPI({
        distributionSite : '2'
    })
    console.log(res)
    bannerList.value = res.result
}

onMounted(() => getBanner())

//返回组件需要的数据
return{
    bannerList
}

}