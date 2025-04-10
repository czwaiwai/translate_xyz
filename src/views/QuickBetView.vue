<script setup>
import { ref } from 'vue';
// QuickBetView is 快打
defineOptions({
  name: "QuickBetView"
});
const message = ref("quick-bet-view");
</script>

<template>
  <PageLay class="quick-bet-view">
    <div>
      <CardBox title="下注框"></CardBox>
    </div>
    <div>
      <CardBox title="目前停押号码"></CardBox>
      <CardBox title="删除停押号码保留区"></CardBox>
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.quick-bet-view {
  overflow: hidden;
  /* Add your styles here */
}
</style>
