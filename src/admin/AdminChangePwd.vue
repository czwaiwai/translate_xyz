<script setup>
import { ref } from 'vue';
// AdminChangePwd is 修改密码
defineOptions({
  name: "AdminChangePwd"
});
const adminChangePwd = ref();
console.log(adminChangePwd);
const message = ref('Hello, AdminChangePwd');
</script>

<template>
  <PageLay ref="adminChangePwd" class="admin-change-pwd">
    <template #extra>
      <SettingSubTab></SettingSubTab>
    </template>
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-change-pwd {
  /* Add your styles here */
}
</style>
