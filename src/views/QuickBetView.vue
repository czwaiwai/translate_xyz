<script setup>
import { ref } from 'vue';
// QuickBetView is 快打
defineOptions({
  name: "QuickBetView"
});
const select = ref('1')
const options = ref([
  { label: '25100', value: '1' },
  { label: '25099', value: '2' },
  { label: '25098', value: '3' }
])
const tableTitle = ref([
  { value: '彩种', name: 'lotteryType', width: '8%' },
  { value: '注单编号', name: 'betId', width: '20%' },
  { value: '号码', name: 'number', width: '10%' },
  { value: '赔率', name: 'odds', width: '9%' },
  { value: '金额', name: 'amount', width: '9%' },
  { value: '状态', name: 'status', width: '9%' },
  { value: '操作', name: 'actions', width: '15%' }
])
const tableData = ref([])
</script>

<template>
  <PageLay class="quick-bet-view" isBox >
    <div class="page-view flex-item">
      <CardBox title="下注框" padding="0" >
        <TableBox :title="tableTitle" :data="tableData">
          <template #title_actions>
            <label>全选<input type="checkbox"></label>
            <button class="ml10 pri-btn">退码</button>
          </template>
        </TableBox>
      </CardBox>
      <CardBox>
        <template #header>
          <label>四字现 <input type="checkbox" /></label>
          <label class="ml10">全转 <input type="checkbox" /></label>
        </template>
        <form>
          <label class="ml10" >号码 <input type="text" class="w60" /></label>
          <label class="ml10">金额 <input type="text" class="w60" /></label>
          <button class="ml20 pri-btn">确认下注</button>
          <button class="ml10 pri-btn">极速快打</button>
        </form>
      </CardBox>
    </div>
    <div class="page-view wp200">
      <CardBox  padding="0" >
        <template #header>
          <div class="card-box-hd flex-box">
            <div class="flex-item tc bold">目前停押号码</div>
            <div class="card-box-hd-right" >
              <SelectBox v-model="select" :options="options"></SelectBox>
            </div>
          </div>
        </template>
        <TableBox class="table-form-green" center>
          <template #header>
            <thead class="subhead">
              <tr>
                <th>号码</th>
                <th>金额</th>
                <th>全选</th>
              </tr>
            </thead>
          </template>
          <template #footer>
            <tfoot>
              <tr>
                <td colspan="3" class="tc">
                  <span class="bold">笔数：0</span>
                  <span class="ml10 bold">总金额：0</span>
                </td>
              </tr>
            </tfoot>
          </template>
        </TableBox>
      </CardBox>
      <CardBox title="删除停押号码保留区" padding="0" center>
        <TableBox class="table-form-green" center>
          <template #header>
            <thead class="subhead">
              <tr>
                <th>号码</th>
                <th>金额</th>
              </tr>
            </thead>
          </template>
          <template #footer>
            <tfoot>
              <tr>
                <td colspan="2" class="tc">
                  <span class="bold">笔数：0</span>
                  <span class="ml10 bold">总金额：0</span>
                </td>
              </tr>
            </tfoot>
          </template>
        </TableBox>
      </CardBox>
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.quick-bet-view {
  overflow: hidden;

}
</style>
