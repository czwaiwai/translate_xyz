<script setup>
import { ref } from 'vue';
// DrawNum is 开奖号码
defineOptions({
  name: "DrawNum"
});
const tableTitle = [{
  name: 'openTime',
  value: '开奖时间',
  width: '13%',
},
{
  name: 'issue',
  value: '期号',
  width: '10%'
},
{
  name: 'qian',
  value: '仟',
  width: '10%'
},
{
  name: 'bai',
  value: '佰',
  width: '10%'
},
{
  name: 'shi',
  value: '拾',
  width: '10%'
},
{
  name: 'ge',
  value: '个',
  width: '10%'
},
{
  name: 'ball5',
  value: '球5',
  width: '10%'
}]
const tableData = [
  {
    openTime: '2023-10-01 12:00:00',
    issue: '20231001',
    qian: '1',
    bai: '2',
    shi: '3',
    ge: '4',
    ball5: '5'
  },
  {
    openTime: '2023-10-02 12:00:00',
    issue: '20231002',
    qian: '2',
    bai: '3',
    shi: '4',
    ge: '5',
    ball5: '6'
  },
  {
    openTime: '2023-10-03 12:00:00',
    issue: '20231003',
    qian: '3',
    bai: '4',
    shi: '5',
    ge: '6',
    ball5: '7'
  }]
</script>

<template>
  <PageLay class="draw-num">
    <TableBox :title="tableTitle" :data="tableData">
      <template #title="{ item }">
        <div class="table-title">
          {{ item.value }}
        </div>
      </template>
      <template #data="{ item, index }">
        <template v-if="['qian', 'bai', 'shi', 'ge'].includes(item.name)">
          <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
        </template>
        <template v-else-if="item.name === 'ball5'">
          <Ball>{{ item.value }}</Ball>
        </template>
        <template v-else>
          {{ item.value }}
        </template>
      </template>
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.draw-num {
  /* Add your styles here */
}
</style>
