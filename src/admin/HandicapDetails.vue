<script setup>
import { ref } from 'vue';
import {emnum} from '@/lib/api'
// HandicapDetails is 拦货明细
defineOptions({
  name: "HandicapDetails"
});
const handicapDetails = ref();
console.log(handicapDetails);
const selectAll = ref('0')
const tableTitle = ref([
  { name: 'ticketNumber', value: '小票编号', width: '10%' },
  { name: 'member', value: '会员', width: '8%' },
  { name: 'ticketTime', value: '小票时间', width: '10%' },
  { name: 'number', value: '号码', width: '5%' },
  { name: 'betAmount', value: '下注金额', width: '9%' },
  { name: 'share', value: '占成', width: '5%' },
  { name: 'shareAmount', value: '占成金额', width: '9%' },
  { name: 'odds', value: '赔率', width: '9%' },
  { name: 'rebate', value: '回水', width: '9%' },
  { name: 'winning', value: '中奖', width: '9%' },
  { name: 'profitLoss', value: '盈亏', width: '9%' },
  { name: 'package', value: '包牌', width: '6%' },
]);
const dateOpt = ref([
 { label: "25094", value: "25094" },
  { label: "25093", value: "25093" },
  { label:"25092", value: "25092" },
])
const tableData = ref([])
const selectDate = ref("25093")
</script>

<template>
  <PageLay ref="handicapDetails" class="handicap-details">
    <template #extra>
      <TotalSubTab>
      </TotalSubTab>
    </template>
    <TotalSearch>
      <button class="sub-btn mr10" type="submit">汇总</button>
      <SelectBox v-model="selectAll" :options="emnum.category"></SelectBox>
    </TotalSearch>
    <TableBox class="mt10" :title="tableTitle" :data="tableData">
      <template #header="{title}">
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <th class="table-hd-th" colspan="2">中奖明细</th>
            <th class="table-hd-th" colspan="9"></th>
            <th class="table-hd-th tr" >
              <SelectBox v-model="selectDate" :options="dateOpt"></SelectBox>
            </th>
          </tr>
          <tr class="table-hd-tr">
            <th class="table-hd-th2" :width="item.width" v-for="item in title" :key="item.name">{{ item.value }}</th>
          </tr>
        </thead>
      </template>
      <template #footer>
        <tfoot class="table-ft">
          <tr>
            <td class="tc" colspan="2">合计</td>
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
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
    <div class="flex-box flex-center-h ">
      <a-pagination :total="50" size="small" show-total show-jumper />
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.handicap-details {
  /* Add your styles here */
}
</style>
