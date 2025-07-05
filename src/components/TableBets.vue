<script setup>
import { onMounted, toRaw } from 'vue'
// 定包牌汇总历史
defineOptions({
  name: 'TableBets',
})
// const props = defineProps({
//   list: {
//     type: Array,
//     default: () => []
//   },
// })
const list = defineModel({
  default: () => [],
})
// onMounted(() => {
//   console.log(props.list)
//   model.value = toRaw(props.list)
// })
defineEmits('change')
const clickHandle = (betNo) => {
  let index = list.value.findIndex((item) => item.betNo === betNo)
  list.value.splice(index, 1)
}
</script>

<template>
  <div class="bet-confirm-list">
    <table class="table-bets tc" cellpadding="0" cellspacing="0">
      <thead>
        <!-- <tr class="hide">
        <td colspan="10" class="tr"> <input type="button" value="全部删除" class="fn-del-all" data-type="20"> </td>
      </tr> -->
        <tr>
          <td width="35%">号码</td>
          <td width="35%">金额</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <template v-if="list.length">
          <tr v-for="(item, index) in list" :key="index">
            <td>{{ item.betNo }}</td>
            <td>{{ item.value }}</td>
            <td><button @click="clickHandle(betNo)">删除</button></td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="7">暂无数据!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less" scoped>
.bet-confirm-list {
  height: 400px;
  overflow: auto;
}
.table-bets {
  width: 100%;
  background: #fff;
  border: 1px solid #f6d3bc;
  border-width: 1px 0 0 1px;
  margin: 0px;
  padding: 0px;
  thead {
    background-color: #fff5f5;
  }
  td {
    border: 1px solid #f6d3bc;
    height: 22px;
    border-width: 0 1px 1px 0;
    padding: 2px 4px;
    margin: 0px;
    font-size: 12px;
  }
}
</style>
