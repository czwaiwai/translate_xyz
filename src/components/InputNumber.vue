<script setup>
import { ref } from 'vue';
defineOptions({
  name: "InputNumber"
});
const [model] = defineModel({
  set(value) {
    console.log(value)
    let newVal = value.toUpperCase().replace(/[^0-9]/g, '')
    console.log(newVal)
    return newVal
  }
})
const popup = ref(false)

const inputHandle = (event) => {
  event.target.value = model.value
}
const input = ref()
const errMsg = ref('')
const verfiInput = () => {
  console.log(popup.value)
  if(!model.value) {
    errMsg.value = '此项不能为空'
    popup.value = true
    input.value.focus()
    return false
  }
  return true
}
const clickHandle = () => {
  popup.value = false
}
defineExpose({verfiInput})
</script>

<template>
  <a-trigger v-model:popupVisible="popup" trigger="manual" position="top">
    <template #content>
      <div class="input-tip">{{ errMsg }}</div>
    </template>
    <input class="input-number" ref="input" @click="clickHandle" v-model="model" v-bind="$attrs" @input="inputHandle" >
  </a-trigger>

</template>

<style lang="less" scoped>
.input-number {
  /* Add your styles here */
}
.input-tip {
  border: 1px solid #AA7C00;
  background: #FFFFDD;
  padding: 5px;
  font-size: 12px;
  width:124px;
  height: 34px;
  line-height: 24px;
}

</style>
