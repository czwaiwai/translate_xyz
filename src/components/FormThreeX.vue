<script setup>
import { ref } from 'vue';
// FormThreeX is
defineOptions({
  name: "FormThreeX"
});
const formThreeX = ref();
console.log(formThreeX);
const message = ref('Hello, FormThreeX');
</script>

<template>
  <PageLay ref="formThreeX" class="form-three-x">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.form-three-x {
  /* Add your styles here */
}
</style>
