<script setup>
import { ref } from 'vue';
// CreateSubAccount is 新增子账号
defineOptions({
  name: "CreateSubAccount"
});
const createSubAccount = ref();
console.log(createSubAccount);
</script>

<template>
  <PageLay ref="createSubAccount" class="create-sub-account">
    <template #extra>
      <RouterLink to="/admin-setting/sub-account-list">
        <a-link href="javascript:void(0)">子账号列表</a-link>
      </RouterLink>
    </template>
    <AdmInfoBox></AdmInfoBox>
    <CardBox class="mt10" title="新增" blue></CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.create-sub-account {
  /* Add your styles here */
}
</style>
