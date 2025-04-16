<script setup>
import { ref } from 'vue';
// HandicapLog is
defineOptions({
  name: "HandicapLog"
});
const handicapLog = ref();
console.log(handicapLog);
const tableTitle = [{
  name: 'no',
  value: '操作账号',
  width: '130',
},
{
  name: 'account',
  value: '被操作账号',
  width: '190'
},
{
  name: 'nextName',
  value: '操作内容',
},
{
  name: 'percentage',
  value: '操作时间',
  width: '130'
},
{
  name: 'ip',
  value: '操作Ip',
  width: '130'
},
]
const tableData = ref([])
</script>

<template>
  <PageLay ref="handicapLog" class="handicap-log">
    <template #extra>
      <LogSubTab></LogSubTab>
    </template>
    <TableBox class="mt10" :title="tableTitle" :data="tableData">
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.handicap-log {
  /* Add your styles here */
}
</style>
