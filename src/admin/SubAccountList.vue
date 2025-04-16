<script setup>
import { ref } from 'vue';
// SubAccountList is 子账号列表
defineOptions({
  name: "SubAccountList"
});
const subAccountList = ref();
console.log(subAccountList);
</script>

<template>
  <PageLay ref="subAccountList" class="sub-account-list">
    <template #extra>
      <RouterLink to="/admin-setting/create-sub-account">
        <a-link href="javascript:void(0)">新增子账号</a-link>
      </RouterLink>
    </template>
  </PageLay>
</template>

<style lang="less" scoped>
.sub-account-list {
  /* Add your styles here */
}
</style>
