<script setup>
import { ref } from 'vue';
// FormTwoP is
defineOptions({
  name: "FormTwoP"
});
const formTwoP = ref();
console.log(formTwoP);
const message = ref('Hello, FormTwoP');
</script>

<template>
  <PageLay ref="formTwoP" class="form-two-p">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.form-two-p {
  /* Add your styles here */
}
</style>
