<script setup>
import { ref } from 'vue';
// 规则说明
defineOptions({
  name: "RulesView"
});
// Define reactive state
const message = ref("rules-view");
</script>

<template>
  <PageLay class="rules-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.rules-view {
  /* Add your styles here */
}
</style>
