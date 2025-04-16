<script setup>
import { ref,computed } from 'vue';
// ReportInfoWeek is
defineOptions({
  name: "ReportInfoWeek"
});
const reportInfoWeek = ref();
console.log(reportInfoWeek);
const tableTitle = ref([
  { name: 'shareholder',  value: '股东', class: 'bg-blue'},
  { name: 'count', value: '笔数', class: 'bg-yellow' },
  { name: 'totalInvestment', value: '总投', class: 'bg-yellow' },
  { name: 'profitLoss', value: '盈亏', class: 'bg-yellow' },
  { name: 'totalInvestmentPink', value: '总投', class: 'bg-pink' },
  { name: 'profitLossPink', value: '盈亏', class: 'bg-pink' },
  { name: 'shareAmount', value: '占成金额', class: 'bg-orange' },
  { name: 'shareProfitLoss', value: '占成盈亏', class: 'bg-orange' },
  { name: 'welfare', value: '福利', class: 'bg-deeporg' },
  { name: 'totalProfitLoss', value: '总盈亏', class: 'bg-deeporg' },
  { name: 'totalInvestmentPink2', value: '总投', class: 'bg-pink' },
  { name: 'profitLossPink2', value: '盈亏', class: 'bg-pink' }
]);
const tableData = ref([])
const tableTitleFormat = computed(() => {
  return tableTitle.value.filter(item => item.name!=='shareholder')
})
</script>

<template>
  <PageLay ref="reportInfoWeek" class="report-info-week">
    <template #extra>
      <ReportInfoTab></ReportInfoTab>
    </template>
    <TableBox :title="tableTitle" :data="tableData">
      <template #header>
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <th class="table-hd-th" colspan="8">周报表</th>
            <th class="table-hd-th" colspan="3"></th>
            <th class="table-hd-th" ><a>打印</a></th>
          </tr>
          <tr class="tc">
            <td rowspan="2" class="bg2" width="150">股东</td>
            <td colspan="3" class="bg-yellow">会员</td>
            <td colspan="2" class="bg-pink">股东</td>
            <td colspan="4" class="bg-orange">大股东</td>
            <td colspan="2" class="bg-pink">总监</td>
          </tr>
          <tr class="table-hd-tr">
            <th class="table-hd-th2" v-for="item in tableTitleFormat" :key="item.name">{{ item.value }}</th>
          </tr>
        </thead>
      </template>
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.report-info-week {
  /* Add your styles here */
}
</style>
