<script setup>
import { ref } from 'vue';
// FormFourX is
defineOptions({
  name: "FormFourX"
});
const formFourX = ref();
console.log(formFourX);
const message = ref('Hello, FormFourX');
</script>

<template>
  <PageLay ref="formFourX" class="form-four-x">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.form-four-x {
  /* Add your styles here */
}
</style>
