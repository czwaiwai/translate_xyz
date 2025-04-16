<script setup>
import { ref } from 'vue';
// LogSubTab is 日志
defineOptions({
  name: "LogSubTab"
});
const logSubTab = ref();
console.log(logSubTab);
</script>

<template>
  <a-space class="report-sub-tab " size="mini" fill >
    <template #split>
      <a-divider direction="vertical" :margin="2" />
    </template>
    <RouterLink to="/admin-log/log">
      <a-link href="javascript:void(0)" >越级操作日志</a-link>
    </RouterLink>
    <RouterLink  to="/admin-log/self-log">
      <a-link href="javascript:void(0)" >自己操作日志</a-link>
    </RouterLink>
    <RouterLink  to="/admin-log/handicp-log">
      <a-link href="javascript:void(0)" >拦货金额日志</a-link>
    </RouterLink>
    <RouterLink  to="/admin-log/vip-quick-log">
      <a-link href="javascript:void(0)" >会员快选日志</a-link>
    </RouterLink>
  </a-space>
</template>

<style lang="less" scoped>
:deep(.link-active-sub) {
  .arco-link {
    color: #f00;
  }
}
</style>
