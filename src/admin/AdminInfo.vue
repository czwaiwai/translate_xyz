<script setup>
import { ref } from 'vue';
// AdminInfo is 设置-基本资料
defineOptions({
  name: "AdminInfo"
});
const adminInfo = ref();
console.log(adminInfo);

</script>

<template>
  <PageLay ref="adminInfo" class="admin-info">
    <template #extra>
      <SettingSubTab></SettingSubTab>
    </template>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-info {
  /* Add your styles here */
}
</style>
