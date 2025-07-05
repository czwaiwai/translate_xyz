<script setup>
import { ref } from 'vue'
import api from '@/lib/api'
// HandicapLog is
defineOptions({
  name: 'HandicapLog',
})
const handicapLog = ref()
console.log(handicapLog)
const tableTitle = [
  {
    name: 'operator',
    value: '操作账号',
    width: '130',
  },
  {
    name: 'operatedAccount',
    value: '被操作账号',
    width: '190',
  },
  {
    name: 'content',
    value: '操作内容',
  },
  {
    name: 'operateTime',
    value: '操作时间',
    width: '130',
  },
  {
    name: 'ip',
    value: '操作Ip',
    width: '130',
  },
]
const tableData = ref([])
const getLogList = async () => {
  let res = await api.userLogSearch({
    pageSize: 20,
    pageNo: 1,
  })
  console.log(res)
  // 获取日志列表
  tableData.value = res.data.records
}
getLogList()
</script>

<template>
  <PageLay ref="handicapLog" class="handicap-log">
    <template #extra>
      <LogSubTab></LogSubTab>
    </template>
    <TableBox class="mt10" :title="tableTitle" :data="tableData"> </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.handicap-log {
  /* Add your styles here */
}
</style>
