<script setup>
import { ref } from 'vue';
// TotalDetails is 总货明细
defineOptions({
  name: "TotalDetails"
});
const message = ref("total-details");
</script>

<template>
  <PageLay class="total-details">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.total-details {
  /* Add your styles here */
}
</style>
