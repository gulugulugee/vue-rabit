<script setup>
import{onMounted} from 'vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触发获取导航列表的action函数
import { useCategoryStore } from '@/stores/category'
//执行方法，得到一个实例对象 通过这个实例对象调用内部函数
const CategoryStore = useCategoryStore()

//调用内部方法
onMounted(() => CategoryStore.getCategory())

</script>

<template>
  <LayoutNav />
  <!-- <RouterView /> -->
  <LayoutHeader />
  <LayoutFooter />
  <LayoutFixed />
</template>