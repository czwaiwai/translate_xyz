<script setup>
import { ref } from 'vue';
// ReportInfoWeek is
defineOptions({
  name: "ReportInfoWeek"
});
const reportInfoWeek = ref();
console.log(reportInfoWeek);
const message = ref('Hello, ReportInfoWeek');
</script>

<template>
  <PageLay ref="reportInfoWeek" class="report-info-week">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.report-info-week {
  /* Add your styles here */
}
</style>
