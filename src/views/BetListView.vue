<script setup>
import { ref } from 'vue';
// 下注明细
defineOptions({
  name: "BetListView"
});
const message = ref("bet-list-view");
</script>

<template>
  <PageLay class="bet-list-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.bet-list-view {
  /* Add your styles here */
}
</style>
