<script setup>

//引用home内部的组件
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
// import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试面板组件 -->
  <!-- <HomePanel title="xinxianhaowu" sub-title="222">\
    <div>
      chacao1
    </div>
  </HomePanel>
  <HomePanel title="renqii " sub-title="3333">
    <div>
      chacao2
    </div>
  </HomePanel> -->
</template>