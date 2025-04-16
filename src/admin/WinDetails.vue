<script setup>
import { ref } from 'vue';
import {emnum} from '@/lib/api'
// WinDetails is 中奖明细
defineOptions({
  name: "WinDetails"
});
const winDetails = ref();
console.log(winDetails);
const selectAll = ref('0')
const dateOpt = ref([
 { label: "04-14(25094)", value: "25094" },
  { label: "04-13(25093)", value: "25093" },
  { label:"04-12(25092)", value: "25092" },
])
const tableTitle = ref([
  { value: "小票编号", name: "orderNumber", width: "10%" },
  { value: "会员", name: "member", width: "8%" },
  { value: "下单时间", name: "orderTime", width: "8%" },
  { value: "号码", name: "number", width: "5%" },
  { value: "下注金额", name: "betAmount", width: "10%" },
  { value: "赔率", name: "odds", width: "5%" },
  { value: "中奖", name: "winning", width: "8%" },
  { value: "下线回水", name: "downlineRebate", width: "6%" },
  { value: "实收下线", name: "actualDownline", width: "6%" },
  { value: "自己回水", name: "selfRebate", width: "6%" },
  { value: "实付上线", name: "actualUpline", width: "6%" },
  { value: "赚水", name: "profitRebate", width: "6%" },
  { value: "包牌", name: "package", width: "9%" },
  { value: "路径", name: "path", width: "6%" },
  { value: "IP", name: "ip", width: "4%" },
]);
const tableData = ref([])
const selectDate = ref("25093")
</script>

<template>
  <PageLay ref="winDetails" class="win-details">
    <template #extra>
      <TotalSubTab></TotalSubTab>
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
            <th class="table-hd-th" colspan="11"></th>
            <th class="table-hd-th tr" colspan="2">
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
            <td></td>
            <td></td>
            <td></td>
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
.win-details {
  /* Add your styles here */
}
</style>
