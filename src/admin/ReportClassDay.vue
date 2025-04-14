<script setup>
import { ref } from 'vue';
// ReportClass is 分类账
defineOptions({
  name: "ReportClassDay"
});
const tableTitle = [
  {
    name: 'date',
    value: '日期',
    width: '30',
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
    <TableBox :data="tableData" :title="tableTitle" >
      <template #header>
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <th class="table-hd-th" colspan="5">分类账 期号25095</th>
            <th class="table-hd-th" colspan="2"></th>
          </tr>
        </thead>
      </template>
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.report-class {
  /* Add your styles here */
}
</style>
