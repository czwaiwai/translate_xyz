<script setup>
import { ref } from 'vue';
// SettingSubTab is
defineOptions({
  name: "SettingSubTab"
});
const settingSubTab = ref();
console.log(settingSubTab);
</script>

<template>
  <a-space class="report-sub-tab " size="mini" fill >
    <template #split>
      <a-divider direction="vertical" :margin="2" />
    </template>
    <RouterLink to="/admin-setting/sub-account-list">
      <a-link href="javascript:void(0)" >子账号</a-link>
    </RouterLink>
    <RouterLink  to="/admin-setting/admin-info">
      <a-link href="javascript:void(0)" >基本资料</a-link>
    </RouterLink>
    <RouterLink  to="/admin-setting/admin-change-pwd">
      <a-link href="javascript:void(0)" >修改密码</a-link>
    </RouterLink>
  </a-space>
</template>

<style lang="less" scoped>
.report-sub-tab {
  :deep(.link-active-sub) {
    .arco-link {
      color: #f00;
    }
  }
}
</style>
