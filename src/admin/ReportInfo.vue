<script setup>
import { ref } from 'vue';
// ReportInfo is 报表
defineOptions({
  name: "ReportInfo"
});
const message = ref("report-info");
</script>

<template>
  <PageLay class="report-info">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.report-info {
  /* Add your styles here */
}
</style>
