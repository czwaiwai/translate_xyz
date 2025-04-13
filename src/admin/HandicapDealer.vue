<script setup>
import { ref } from 'vue';
// HandicapDealer is 拦货盘
defineOptions({
  name: "HandicapDealer"
});
const message = ref("handicap-dealer");
</script>

<template>
  <PageLay class="handicap-dealer">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.handicap-dealer {
  /* Add your styles here */
}
</style>
