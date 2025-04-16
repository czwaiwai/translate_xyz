<script setup>
import { ref } from 'vue';
// ReportClassMonth is 月分类账
defineOptions({
  name: "ReportClassMonth"
});
const reportClassMonth = ref();
console.log(reportClassMonth);
const tableTitle = ref([
  { name: 'date', value: '日期', width: '14%' },
  { name: 'category', value: '类别', width: '14%' },
  { name: 'count', value: '笔数', width: '14%' },
  { name: 'betAmount', value: '下注金额', width: '14%' },
  { name: 'rebate', value: '回水', width: '14%' },
  { name: 'winning', value: '中奖', width: '14%' },
  { name: 'profitLoss', value: '盈亏', width: '14%' },
]);
const tableData = ref([])
</script>

<template>
  <PageLay ref="reportClassMonth" class="report-class-month">
    <template #extra>
      <ReportSubTab></ReportSubTab>
    </template>
    <TableBox :data="tableData" :title="tableTitle" >
      <template #header="{title}">
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <th class="table-hd-th" colspan="5">
              <a-space size="mini" fill>
                <div>月分类账</div>
                <a-link href="javascript:void(0)" >【2025年02月】</a-link>
                <a-link href="javascript:void(0)" >【2025年03月】</a-link>
                <a-link href="javascript:void(0)" >【2025年04月】</a-link>
                <a-link href="javascript:void(0)" >【全部】</a-link>
              </a-space>
            </th>
            <th class="table-hd-th" colspan="2"></th>
          </tr>
          <tr class="table-hd-tr">
            <th class="table-hd-th2" :width="item.width" v-for="item in title" :key="item.name">{{ item.value }}</th>
          </tr>
        </thead>
      </template>
      <template #footer>
        <tfoot class="table-ft">
          <tr>
            <td class="red">总合计</td>
            <td>总货合计</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td></td>
            <td>实货合计</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tfoot>
      </template>
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.report-class-month {
  /* Add your styles here */
}
</style>
