<script setup>
import { ref } from 'vue';
// FourPackageView is  四字定包牌汇总表
defineOptions({
  name: "FourPackageView"
});
const message = ref("four-package-view");
</script>

<template>
  <PageLay class="four-package-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.four-package-view {
  /* Add your styles here */
}
</style>
