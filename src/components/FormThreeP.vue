<script setup>
import { ref } from 'vue';
// FormThreeP is
defineOptions({
  name: "FormThreeP"
});
const formThreeP = ref();
console.log(formThreeP);
const message = ref('Hello, FormThreeP');
</script>

<template>
  <PageLay ref="formThreeP" class="form-three-p">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.form-three-p {
  /* Add your styles here */
}
</style>
