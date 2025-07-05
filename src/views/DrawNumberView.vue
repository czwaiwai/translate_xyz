<script setup>
import { ref } from 'vue'
import api from '@/lib/api'
// DrawNumberView is 开奖号码
defineOptions({
  name: 'DrawNumberView',
})
const tableTitle = [
  {
    name: 'openTime',
    value: '开奖时间',
    width: '13%',
  },
  {
    name: 'drawNo',
    value: '期号',
    width: '10%',
  },
  {
    name: 'qian',
    value: '仟',
    width: '10%',
  },
  {
    name: 'bai',
    value: '佰',
    width: '10%',
  },
  {
    name: 'shi',
    value: '拾',
    width: '10%',
  },
  {
    name: 'ge',
    value: '个',
    width: '10%',
  },
  {
    name: 'ball5',
    value: '球5',
    width: '10%',
  },
]
const tableData = ref([])
const getList = async () => {
  const res = await api.lotterySearch({
    pageSize: 100,
    pageNo: 1,
  })
  tableData.value = res.data.records
}
getList()
</script>

<template>
  <PageLay class="draw-number-view">
    <CardBox title="开奖号码" padding="0">
      <TableBox :title="tableTitle" :data="tableData" center>
        <template #qian="{ item, index }">
          <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
        </template>
        <template #bai="{ item, index }">
          <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
        </template>
        <template #shi="{ item, index }">
          <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
        </template>
        <template #ge="{ item, index }">
          <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
        </template>
        <template #ball5="{ item }">
          <Ball>{{ item.value }}</Ball>
        </template>
      </TableBox>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.draw-number-view {
  /* Add your styles here */
}
</style>
