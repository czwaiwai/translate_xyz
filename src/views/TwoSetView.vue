<script setup>
import { ref } from 'vue';
// TwoSetView is 二字定
defineOptions({
  name: "TwoSetView"
});
const message = ref("two-set-view");
</script>

<template>
  <PageLay class="two-set-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.two-set-view {
  /* Add your styles here */
}
</style>
