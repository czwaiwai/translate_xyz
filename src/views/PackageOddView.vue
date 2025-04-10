<script setup>
import { ref } from 'vue';
// PackageOddView is 包牌赔率
defineOptions({
  name: "PackageOddView"
});
const message = ref("package-odd-view");
</script>

<template>
  <PageLay class="package-odd-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.package-odd-view {
  /* Add your styles here */
}
</style>
