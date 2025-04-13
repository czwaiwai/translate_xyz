<script setup>
import { ref } from 'vue';
// AdminLog is 日志
defineOptions({
  name: "AdminLog"
});
const form = ref({
  account: "",
  startdate: "",
  enddate: ""
})
const tableTitle = ""
const tableData = ref([])
</script>

<template>
  <PageLay class="admin-log">
    <CardBox title="越级操作日志" blue>
      <a-form :model="form" layout="inline" size="small">
        <a-form-item field="account" label="被操作账号">
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
    <TableBox class="mt10" title="" data=""></TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-log {
  /* Add your styles here */
}
</style>
