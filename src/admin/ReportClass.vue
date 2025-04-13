<script setup>
import { ref } from 'vue';
// ReportClass is 分类账
defineOptions({
  name: "ReportClass"
});
const tableTitle = [
  {
    name: 'date',
    value: '日期',
    width: '12%',
  },
  {
    name: 'shareholder',
    value: '股东',
    width: '12%'
  },
  {
    name: 'amount',
    value: '占成金额',
    width: '12%'
  },
  {
    name: 'totalAmount',
    value: '占成总金额',
    width: '12%'
  },
  {
    name: 'totalProfitLoss',
    value: '占成总盈亏',
    width: '12%'
  },
  {
    name: 'percentageProfitLoss',
    value: '百分比占成盈亏',
    width: '12%'
  },
  {
    name: 'actualProfitLoss',
    value: '实际占成盈亏',
    width: '12%'
  },
  {
    name: 'percentage',
    value: '占成百分比',
    width: '12%'
  },
  {
    name: 'contribution',
    value: '贡献度',
    width: '4%'
  },
]
const tableData = ref([])
</script>

<template>
  <PageLay class="report-class">
    <CardBox title="贡献度" blue>
      <TableBox :data="tableData" :title="tableTitle"></TableBox>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.report-class {
  /* Add your styles here */
}
</style>
