<script setup>
import { ref } from 'vue';
// LastBillView is 历史账单
defineOptions({
  name: "LastBillView"
});
const message = ref("last-bill-view");
</script>

<template>
  <PageLay class="last-bill-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.last-bill-view {
  /* Add your styles here */
}
</style>
