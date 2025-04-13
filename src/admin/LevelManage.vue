<script setup>
import { ref } from 'vue';
// LevelManage is 下级管理
defineOptions({
  name: "LevelManage"
});
const message = ref("level-manage");
</script>

<template>
  <PageLay class="level-manage">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.level-manage {
  /* Add your styles here */
}
</style>
