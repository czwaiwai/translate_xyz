<script setup>
import { ref } from 'vue';
// TwoPackageView is 二字定包牌汇总表
defineOptions({
  name: "TwoPackageView"
});
const message = ref("two-package-view");
</script>

<template>
  <PageLay class="two-package-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.two-package-view {
  /* Add your styles here */
}
</style>
