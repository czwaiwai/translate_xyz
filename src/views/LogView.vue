<script setup>
import { ref } from 'vue';
// LogView is 日志
defineOptions({
  name: "LogView"
});
const message = ref("log-view");
</script>

<template>
  <PageLay class="log-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.log-view {
  /* Add your styles here */
}
</style>
