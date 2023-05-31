
<!-- 新鲜好物和人气推荐部分很相似，使用组件封装的形式进行复用 -->
<!-- 文本抽象成props  复杂部分封装成插槽 -->

<script setup>

//定义props
defineProps({
    //主标题
    title:{
        type:String
    },
    //副标题
    subTitle:{
        type:String
    }
})
</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
        <h3>
            <!-- 将主副标题封装成props -->
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <!-- 定义插槽（slot） -->
      <div> <slot /> </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>