<script setup>
import { ref } from 'vue';
// 汇总表明细
defineOptions({
  name: "PreBetList"
});
// Define reactive state
const message = ref("pre-bet-list");
</script>

<template>
  <PageLay class="pre-bet-list">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.pre-bet-list {
  /* Add your styles here */
}
</style>
