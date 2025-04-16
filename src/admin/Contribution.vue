<script setup>
import { ref } from 'vue';
// Contribution is 贡献度
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contribution"
});
const contribution = ref();
console.log(contribution);

const tableTitle = ref([
  { name: "date", value: "日期", width: "12%" },
  { name: "shareholder", value: "股东", width: "12%" },
  { name: "amount", value: "占成金额", width: "12%" },
  { name: "totalAmount", value: "占成总金额", width: "12%" },
  { name: "totalProfitLoss", value: "占成总盈亏", width: "12%" },
  { name: "percentageProfitLoss", value: "百分比占成盈亏", width: "12%" },
  { name: "actualProfitLoss", value: "实际占成盈亏", width: "12%" },
  { name: "percentage", value: "占成百分比", width: "12%" },
  { name: "contribution", value: "贡献度", width: "12%" }
]);
const tableData = ref([])
const selectDate = ref("25093")
const dateOpt = ref([
  { label: "04-14(25094)", value: "25094" },
  { label: "04-13(25093)", value: "25093" },
  { label: "04-12(25092)", value: "25092" },
])
</script>

<template>
  <PageLay ref="contribution" class="contribution">
    <template #extra>
      <ReportSubTab></ReportSubTab>
    </template>
    <a-space size="mini" fill>
      <a-link>【2025年02月】</a-link>
      <a-link>【2025年03月】</a-link>
      <a-link>【2025年04月】</a-link>
      <a-link>【周】</a-link>
      <a-link>【本期】</a-link>
      <a-link>【全部】</a-link>
    </a-space>
    <TableBox :data="tableData" :title="tableTitle" >
      <template #header="{title}">
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <th class="table-hd-th" colspan="8">贡献度</th>
            <th class="table-hd-th" >
              <SelectBox v-model="selectDate" :options="dateOpt"></SelectBox>
            </th>
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
.contribution {
  /* Add your styles here */
}
</style>
