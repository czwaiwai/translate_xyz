<script setup>
import { ref } from 'vue';
// FormTwoX is
defineOptions({
  name: "FormTwoX"
});
const formTwoX = ref();
console.log(formTwoX);
const message = ref('Hello, FormTwoX');
</script>

<template>
  <PageLay ref="formTwoX" class="form-two-x">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.form-two-x {
  /* Add your styles here */
}
</style>
