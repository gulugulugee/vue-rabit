<script setup>
import {getCategoryFilterAPI} from '@/apis/category'
import {ref,onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {getSubCategoryAPI} from '@/apis/category'
import GoodsItem from '../home/components/GoodsItem.vue'

//获取面包屑导航数据
const subCategoryData = ref({})
const route = useRoute()

const getSubCategoryData = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    subCategoryData.value = res.result
}

onMounted(() => getSubCategoryData())

//获取基础列表数据渲染
const subGoodsList = ref([])

//请求参数
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

const getSubGoodsList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  subGoodsList.value = res.result.items
}
onMounted(() => getSubGoodsList())

//tab切换回调
const TabChange = () =>{
  reqData.value.page = 1
  getSubGoodsList()
}

//无限滚动
const load = async () => {
  reqData.value.page++
  const res = await getSubCategoryAPI(reqData.value)

  //新老页面拼接
  subGoodsList.value = [...subGoodsList.value,...res.result.items]

  //加载完毕 结束监听

  const disabled = ref(false)
  if(res.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCategoryData.parentid}` }">
          {{ subCategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change = "TabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll ='load' :infinite-scroll-disable = "disabled">
         <!-- 商品列表-->
         <GoodsItem v-for="goods in subGoodsList" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>