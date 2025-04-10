<script setup>
import { ref } from 'vue';
// OddsMoveView is
defineOptions({
  name: "OddsMoveView"
});
const message = ref("odds-move-view");
</script>

<template>
  <PageLay class="odds-move-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.odds-move-view {
  /* Add your styles here */
}
</style>
