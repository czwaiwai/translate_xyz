<script setup>
import { ref } from 'vue';
// LastBillView is 历史账单
defineOptions({
  name: "LastBillView"
});
const tableTitle = [
  { value: '日期', name: 'openTime', width: '14%' },
  { value: '期号', name: 'issue', width: '14%' },
  { value: '笔数', name: 'qian', width: '14%' },
  { value: '金额', name: 'bai', width: '14%' },
  { value: '回水', name: 'shi', width: '14%' },
  { value: '中奖', name: 'ge', width: '14%' },
  { value: '盈亏', name: 'ball5', width: '14%' }
]
const tableData = ref([])
</script>

<template>
  <PageLay class="last-bill-view">
    <CardBox title="历史账单" padding="0">
      <TableBox :title="tableTitle" :data="tableData" center>
        <template #footer>
          <tfoot class="table-ft">
            <tr>
              <td>合计</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tfoot>
        </template>
      </TableBox>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.last-bill-view {
  /* Add your styles here */
}
</style>
