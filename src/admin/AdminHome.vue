<script setup>
import { ref } from 'vue';
// AdminHome is 首页
defineOptions({
  name: "AdminHome"
});
const message = ref("admin-home");
</script>

<template>
  <PageLay class="admin-home">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-home {
  /* Add your styles here */
}
</style>
