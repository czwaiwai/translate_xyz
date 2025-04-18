<script setup>
import { ref } from 'vue';
import {emnum} from '@/lib/api'
// 汇总表明细
defineOptions({
  name: "PreBetList"
});
// Define reactive state
const tableTitle = [
  { name: "orderNumber", value: "注单编号" },
  { name: "number", value: "号码" },
  { name: "amount", value: "金额" },
  { name: "odds", value: "赔率" },
  { name: "numberType", value: "号码类型" },
  { name: "submissionTime", value: "提交时间" },
  { name: "status", value: "状态" },
  { name: "actions", value: "操作" },
]
const tableData = ref([])
</script>

<template>
  <PageLay class="pre-bet-list">
    <CardBox title="搜索">
      <form>
        <SelectBox :options="[]"></SelectBox>
        <label class="ml10">查号码：<input class="w60"></label>
        <label class="ml10">投注状态：<SelectBox :options="emnum.betStatus"></SelectBox></label>
        <label class="ml10">取消状态：<SelectBox :options="emnum.cancelStatus"/></label>
        <label class="ml10">列出：<SelectBox :options="emnum.searchType"/></label>
        <label class="ml10"><input class="w60"> 至 <input class="w60"></label>
        <label class="ml10">分类 <SelectBox :options="emnum.frontCate"/></label>
        <button class="ml10 pri-btn">提交</button>
        <button class="ml10 pri-btn">打印</button>
      </form>
    </CardBox>
    <CardBox padding="0" >
      <TableBox :title="tableTitle" :data="tableData"></TableBox>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.pre-bet-list {
  /* Add your styles here */
}
</style>
