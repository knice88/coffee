<script setup>
import Mask from './Mask.vue'
</script>
<template>
  <div class="container">
    <div class="mask">
      <Mask />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #111315;
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/bg-cafe.jpg');
  background-repeat: no-repeat;
  /* 不重复图片 */
  background-position: top;
  /* 背景图像设置为顶部 */
  background-size: contain;
  /* 使背景图像等比例缩放 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.mask {
  width: 90%;
  margin: 6% 0;
  z-index: 1000;
  background-color: #1B1D1F;
  border-radius: 10px;
}
</style>
