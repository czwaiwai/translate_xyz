<script setup>
import { ref } from 'vue';
import { queryTypeByNum } from '@/lib/utils.js'
defineOptions({
  name: "InputSquare"
});
const [model] = defineModel({
  set(value) {
    console.log(value)
    let newVal = value.toUpperCase().replace(/[^0-9|Xx]/g, '')
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
  if(model.value.length !== 4) {
    errMsg.value = '至少需要4个字符'
    popup.value = true
    input.value.focus()
    return false
  }
  if (!/^[\d|X]{4}$/.test(model.value)) {
    errMsg.value = '输入号码格式不正确'
    popup.value = true
    input.value.focus()
    return false
  }
  if(!queryTypeByNum(model.value)) {
    errMsg.value = '输入号码格式不正确'
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
    <input ref="input" @click="clickHandle" v-model="model" v-bind="$attrs" @input="inputHandle" >
  </a-trigger>

</template>

<style lang="less" scoped>
.input-square {
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
