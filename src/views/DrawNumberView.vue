<script setup>
import { ref } from 'vue';
// DrawNumberView is 开奖号码
defineOptions({
  name: "DrawNumberView"
});
const message = ref("draw-number-view");
</script>

<template>
  <PageLay class="draw-number-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.draw-number-view {
  /* Add your styles here */
}
</style>
