<script setup>
import { ref } from 'vue';
// FormTwoX is
defineOptions({
  name: "FormTwoX"
});
const formTwoX = ref();
console.log(formTwoX);

</script>

<template>
  <form class="form-flex">
    <div class="flex-box">
      <div class="flex-item flex-inline flex-ch "><span class="red bold">定位置</span> <SwitchGroup></SwitchGroup></div>
      <div class="flex-item flex-inline flex-ch bold"><span class="red bold">配数全转</span> <SwitchGroup></SwitchGroup></div>
    </div>
    <div class="flex-box flex-ch">
      <div class="flex-item tc">仟</div>
      <div class="flex-item tc">佰</div>
      <div class="flex-item tc">拾</div>
      <div class="flex-item tc">个</div>
    </div>
    <div class="flex-box flex-ch">
      <div class="flex-item tc"><input class="w90" /></div>
      <div class="flex-item tc"><input class="w90" /></div>
      <div class="flex-item tc"><input class="w90" /></div>
      <div class="flex-item tc"><input class="w90" /></div>
    </div>
    <div class="flex-box">
      <div class="flex-item bold flex-inline flex-ch">合 分 <SwitchGroup></SwitchGroup></div>
    </div>
  </form>

</template>

<style lang="less" scoped>
.form-flex {
  .flex-item {
    border:1px solid #bdf0bc;
  }
  /* Add your styles here */
}
</style>
