<script setup>
import { ref } from 'vue';
// RuleSeq is 规则说明
defineOptions({
  name: "RuleSeq"
});
const message = ref("rule-seq");
</script>

<template>
  <PageLay class="rule-seq">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.rule-seq {
  /* Add your styles here */
}
</style>
