<script setup>
import { ref } from 'vue';
// UpdateSubLevel is 用户编辑
defineOptions({
  name: "UpdateSubLevel"
});
const updateSubLevel = ref();
console.log(updateSubLevel);
const message = ref('Hello, UpdateSubLevel');
</script>

<template>
  <PageLay ref="updateSubLevel" class="update-sub-level">
    <template #extra>
      <OperaSubTab></OperaSubTab>
    </template>
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.update-sub-level {
  /* Add your styles here */
}
</style>
