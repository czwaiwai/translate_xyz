<script setup>
import { ref } from 'vue';
// ReportSubTab is
defineOptions({
  name: "ReportSubTab"
});
const reportSubTab = ref();
console.log(reportSubTab);
</script>

<template>
  <a-space class="report-sub-tab " size="mini" fill >
    <template #split>
      <a-divider direction="vertical" :margin="2" />
    </template>
    <RouterLink to="/report-class/contribution">
      <a-link href="javascript:void(0)" >贡献度</a-link>
    </RouterLink>
    <RouterLink  to="/report-class/report-class-day">
      <a-link href="javascript:void(0)" >日分类账</a-link>
    </RouterLink>
    <RouterLink  to="/report-class/report-class-month">
      <a-link href="javascript:void(0)" >月分类账</a-link>
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
