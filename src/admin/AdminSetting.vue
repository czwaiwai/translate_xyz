<script setup>
import { ref } from 'vue';
// AdminSetting is 设置
defineOptions({
  name: "AdminSetting"
});
const message = ref("admin-setting");
</script>

<template>
  <PageLay class="admin-setting">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-setting {
  /* Add your styles here */
}
</style>
