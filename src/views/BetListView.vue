<script setup>
import { ref } from 'vue';
import {emnum} from '@/lib/api'
// 下注明细
defineOptions({
  name: "BetListView"
});
const tableTitle = [
  { value: "彩种", name: "lotteryType" },
  { value: "注单编号", name: "orderNumber" },
  { value: "下单时间", name: "orderTime" },
  { value: "号码", name: "number" },
  { value: "金额", name: "amount" },
  { value: "赔率", name: "odds" },
  { value: "中奖", name: "winning" },
  { value: "回水", name: "rebate" },
  { value: "盈亏", name: "profitLoss" },
  { value: "状态", name: "status" },
  { value: "操作", name: "actions" }
]
const tableData = []
</script>

<template>
  <PageLay class="bet-list-view">
    <CardBox title="搜索">
      <form>
        <label class="mr10">查号码 <input class="w60"></label>
        <label class="mr10">现 <input class="w60"></label>
        <label class="mr10">列出 <SelectBox :options="emnum.searchType2"></SelectBox></label>
        <label class="mr10"><input class="w60"> 至 <input class="w60"></label>
        <label class="mr10">分类 <SelectBox :options="emnum.category"></SelectBox></label>
        <label class="mr10">类型 <SelectBox :options="emnum.packageSmall"></SelectBox></label>
        <label class="mr10">打印编号： <input class="w60"></label>
        <button class="ml10 pri-btn">提交</button>
        <button class="ml10 pri-btn">打印</button>
        <button class="ml10 pri-btn">中奖明细</button>
      </form>
    </CardBox>
    <CardBox padding="0">
      <TableBox :title="tableTitle" :data="tableData" center>
        <template #footer>
          <tfoot class="table-ft">
            <tr>
              <td colspan="2">合计</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </template>
      </TableBox>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.bet-list-view {
  /* Add your styles here */
}
</style>
