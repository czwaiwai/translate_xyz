<script setup>
import { ref } from 'vue';
// TxtImportView is 文本导入
defineOptions({
  name: "TxtImportView"
});
const message = ref("txt-import-view");
</script>

<template>
  <PageLay class="txt-import-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.txt-import-view {
  /* Add your styles here */
}
</style>
