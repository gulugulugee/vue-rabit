

//吸顶导航交互组件

<script setup>
//调用pinia中定义的的获取数据方法
import { useCategoryStore } from '@/stores/category';

// 利用vueUse 一种在vue3推出后基于组合式api封装好的函数
import { useScroll } from '@vueuse/core'
//usescroll函数返回当前滚动距离，存储在y中，当y>80时显示吸顶导航
const { y } = useScroll(window)

//使用pinia中的数据
const CategoryStore = useCategoryStore()

</script>

<template>
  <!-- 当滚动距离>80时赋予show类型，显示吸顶导航 -->
  <div class="app-header-sticky" :class="{show: y > 80}">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <!-- v-for将get到的数据渲染到head上 -->
        <li class="home" v-for="item in CategoryStore.CategoryList" :key="item.id">

          <!-- 每个一级分类页面有唯一的id，以id为基准申请数据 -->
          <RouterLink :to="`/category/${item.id}`">{{item.name}}</RouterLink>

        </li>
      </ul>

      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二（被赋予show类型时）：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>