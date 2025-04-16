<script setup>
import { ref } from 'vue';
// ReportClass is 分类账
defineOptions({
  name: "ReportClassDay"
});
const tableTitle = [
  { name: "shareholder", value: "大股东", width: "14%" },
  { name: "category", value: "类别", width: "14%" },
  { name: "count", value: "笔数", width: "14%" },
  { name: "betAmount", value: "下注金额", width: "14%" },
  { name: "rebate", value: "回水", width: "14%" },
  { name: "winning", value: "中奖", width: "14%" },
  { name: "profitLoss", value: "盈亏", width: "14%" }
];
const tableData = ref([])
</script>

<template>
  <PageLay class="report-class">
    <template #extra>
      <ReportSubTab></ReportSubTab>
    </template>
    <TableBox :data="tableData" :title="tableTitle" >
      <template #header="{title}">
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <th class="table-hd-th" colspan="5">分类账 期号25095</th>
            <th class="table-hd-th" colspan="2"></th>
          </tr>
          <tr class="table-hd-tr">
            <th class="table-hd-th2" :width="item.width" v-for="item in title" :key="item.name">{{ item.value }}</th>
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
