<script setup>
import { ref } from 'vue';
// AdminOpera is
defineOptions({
  name: "AdminOpera"
});
const adminOpera = ref();
console.log(adminOpera);
</script>

<template>
  <PageLay ref="adminOpera" class="admin-opera">
    <CardBox title="信息提示" blue></CardBox>
    <CardBox title="级别查询" blue></CardBox>
    <TableBox class="mt10"></TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-opera {
  /* Add your styles here */
}
</style>
