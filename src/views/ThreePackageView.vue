<script setup>
import { ref } from 'vue';
// ThreePackageView is 三字定包牌汇总表
defineOptions({
  name: "ThreePackageView"
});
const message = ref("three-package-view");
</script>

<template>
  <PageLay class="three-package-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.three-package-view {
  /* Add your styles here */
}
</style>
