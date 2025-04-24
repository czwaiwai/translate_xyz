<script setup>
import { ref } from 'vue';
// SwitchGroup is
defineOptions({
  name: "SwitchGroup"
});
const chu = ref(false)
const qu = ref(false)
const chuHandle = (e) => {
  if(chu.value) {
    qu.value = false
  }
}
const quHandle = (e) => {
  if (qu.value) {
    chu.value = false
  }
}
</script>

<template>
  <div class="flex-inline gap2 ml4">
    <label><input v-model="chu" type="checkbox" @change="chuHandle"> 除</label>
    <label><input v-model="qu" type="checkbox" @change="quHandle"> 取</label>
  </div>
</template>

<style lang="less" scoped>
.switch-group {
  /* Add your styles here */
}
</style>
