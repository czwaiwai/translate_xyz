<script setup>
import { ref } from 'vue';
// FormFourP is
defineOptions({
  name: "FormFourP"
});
const formFourP = ref();
console.log(formFourP);
const message = ref('Hello, FormFourP');
</script>

<template>
  <PageLay ref="formFourP" class="form-four-p">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.form-four-p {
  /* Add your styles here */
}
</style>
