<script setup>
import { ref } from 'vue';
// SubAccountList is 子账号列表
defineOptions({
  name: "SubAccountList"
});
const subAccountList = ref();
console.log(subAccountList);
const tableTitle = ref([
  { value: "选择", name: "select" },
  { value: "序号", name: "index" },
  { value: "账号", name: "account" },
  { value: "代号", name: "code" },
  { value: "修改时间", name: "modifiedTime" },
  { value: "修改者", name: "modifier" },
  { value: "IP", name: "ip" },
  { value: "启/停用", name: "status" },
  { value: "内容", name: "content" },
]);
const tableData = ref([]);
</script>

<template>
  <PageLay ref="subAccountList" class="sub-account-list">
    <template #extra>
      <RouterLink to="/admin-setting/create-sub-account">
        <a-link href="javascript:void(0)">新增子账号</a-link>
      </RouterLink>
    </template>
    <TableBox class="mt10" :title="tableTitle" :data="tableData">
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.sub-account-list {
  /* Add your styles here */
}
</style>
