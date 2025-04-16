<script setup>
import { ref } from 'vue';
// ReportInfoTab is
defineOptions({
  name: "ReportInfoTab"
});
const reportInfoTab = ref();
console.log(reportInfoTab);
</script>

<template>
  <a-space class="report-sub-tab " size="mini" fill >
    <template #split>
      <a-divider direction="vertical" :margin="2" />
    </template>
    <RouterLink to="/report-info/report-info-day">
      <a-link href="javascript:void(0)" >日报表</a-link>
    </RouterLink>
    <RouterLink  to="/report-info/report-info-month">
      <a-link href="javascript:void(0)" >月报表</a-link>
    </RouterLink>
    <RouterLink  to="/report-info/report-info-week">
      <a-link href="javascript:void(0)" >周报表</a-link>
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
