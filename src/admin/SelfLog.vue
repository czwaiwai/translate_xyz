<script setup>
import { ref } from 'vue';
// SelfLog is
defineOptions({
  name: "SelfLog"
});
const selfLog = ref();
console.log(selfLog);
const form = ref({
  account: "",
  startdate: "",
  enddate: ""
})
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
  <PageLay ref="selfLog" class="self-log">
    <template #extra>
      <LogSubTab></LogSubTab>
    </template>
    <CardBox title="自己操作日志" blue>
      <a-form :model="form" layout="inline" size="small">
        <a-form-item class="w90" field="account" label="被操作账号">
          <a-input v-model="form.account" />
        </a-form-item>
        <a-form-item field="startdate" label="起始日期">
          <a-date-picker v-model="form.startdate" />
        </a-form-item>
        <a-form-item field="enddate" label="结束日期">
          <a-date-picker v-model="form.enddate" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </CardBox>
    <TableBox class="mt10" :title="tableTitle" :data="tableData">
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.self-log {
  /* Add your styles here */
}
</style>
