<script setup>
import { ref, h, inject, computed } from 'vue'
import { dialog } from '@/lib/dialog.js'
import SmallQuickBox from '@/components/SmallQuickBox.vue'
// QuickBetView is 快打
defineOptions({
  name: 'QuickBetView',
})
const select = ref('1')
const options = ref([
  { label: '25100', value: '1' },
  { label: '25099', value: '2' },
  { label: '25098', value: '3' },
])
const tableTitle = ref([
  { value: '彩种', name: 'lotteryType', width: '8%' },
  { value: '注单编号', name: 'betId', width: '20%' },
  { value: '号码', name: 'number', width: '10%' },
  { value: '赔率', name: 'odds', width: '9%' },
  { value: '金额', name: 'amount', width: '9%' },
  { value: '状态', name: 'status', width: '9%' },
  { value: '操作', name: 'actions', width: '15%' },
])
const tableData = ref([
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
  {
    lotteryType: '--',
    betId: '--',
    number: '--',
    odds: '--',
    amount: '--',
    status: '--',
    actions: '--',
  },
])
const quickHandle = () => {
  dialog({
    title: '极速快打',
    content: () => h(SmallQuickBox),
    footer: false,
  })
}
const betType = inject('betType', '')
const isMobile = inject('isMobile', false)
const betBtnText = computed(() => {
  if (betType.value === 'bet') {
    return '下单'
  }
  if (betType.value === 'eat') {
    return '挂单'
  }
  return '确认下注'
})
const submitHandle = () => {}
</script>

<template>
  <PageLay class="quick-bet-view" isBox>
    <div class="page-view flex-item">
      <CardBox title="下注框" padding="0">
        <TableBox :title="tableTitle" :data="tableData" center>
          <template #title_actions>
            <label>全选<input type="checkbox" /></label>
            <button class="ml10 pri-btn">退码</button>
          </template>
        </TableBox>
      </CardBox>
      <CardBox>
        <template #header>
          <label>四字现 <input type="checkbox" /></label>
          <label class="ml10">全转 <input type="checkbox" /></label>
        </template>
        <form
          @submit.prevent="submitHandle"
          class="flex-inline gap10"
          :class="isMobile ? 'flex-flow' : ''"
        >
          <div class="flex-inline gap10">
            <label class="fs22"
              >赔率 <input name="betNo" type="text" class="w60 input-h36"
            /></label>
            <label class="fs22"
              >号码 <input name="betNo" type="text" class="w60 input-h36"
            /></label>
            <label class="fs22"
              >金额 <input name="money" type="text" class="w60 input-h36"
            /></label>
          </div>
          <div class="flex-inline gap10">
            <button type="submit" class="pri-btn-h36">{{ betBtnText }}</button>
            <button type="button" @click="quickHandle" class="">取消</button>
          </div>
          <!-- <button type="button" @click="quickHandle" class="ml10 pri-btn-h36">极速快打</button> -->
        </form>
      </CardBox>
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.quick-bet-view {
  overflow: hidden;
}
</style>
