// 封装购物车模块
import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useCartStore =  defineStore('cartStore',()=>{
    // 1.定义购物车列表 cartlist
    const cartlist = ref([])
    // 2.定义action
    const addCart = (newGoods) => {
        // 添加购物车操作
        // 已添加过count+ 没添加过直接push
        // skuid在cartlist中有就说明添加过  否则没添加过
        const item = cartlist.value.find ((item) => newGoods.skuId === item.skuId)
        if(item){
            // 找到了
            item.count = item.count + newGoods.count
        }else{
            cartlist.value.push(newGoods)
        }
    }
    return{
        cartlist,
        addCart
    }
},
{
    // pinia数据与本地数据双向同步
    persist: true
})