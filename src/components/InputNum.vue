<script setup>
import {ref} from 'vue'
// InputNum is
defineOptions({
  name: "InputNum"
});
const props = defineProps({
  validator: {
    type: Function,
    default: null
  }
})
const nums = ['0','1','2','3','4','5','6','7','8','9']
let beforeVal = ''
const [model] = defineModel({
  set(value) {
    console.log(value)
    let newVal = value.toUpperCase().replace(/[^0-9]/g, '')
    if (value.length >= beforeVal.length) {
      let other = nums.filter(num => !beforeVal.includes(num)).join('')
      let reg = new RegExp(`[^${other}]`,'g')
      newVal = beforeVal + newVal.replace(reg, '')
      beforeVal = newVal
    } else {
      beforeVal = newVal
    }
    return newVal
  }
})
const inputHandle = (event) => {
  event.target.value = model.value
}
const popup = ref(false)
const input = ref()
const errMsg = ref('')
const verfiInput = () => {
  if(props.validator) {
    let err = props.validator(model.value)
    // 如过err有值，说明验证不通过
    if(err) {
      errMsg.value = err
      popup.value = true
      input.value.focus()
      return false
    }
  }
  return true
}
const clickHandle = () => {
  popup.value = false
}
defineExpose({verfiInput})
</script>

<template>
  <a-trigger v-if="validator" v-model:popupVisible="popup" trigger="manual" position="top">
    <template #content>
      <div class="input-tip">{{ errMsg }}</div>
    </template>
    <input class="input-number" ref="input" @click="clickHandle" autocomplete="off" v-model="model" v-bind="$attrs" @input="inputHandle" >
  </a-trigger>
  <input v-else class="input-number" ref="input" autocomplete="off" v-model="model" v-bind="$attrs" @input="inputHandle" >
</template>

<style lang="less" scoped>
.input-num {
  /* Add your styles here */

}
.input-tip {
  border: 1px solid #AA7C00;
  background: #FFFFDD;
  padding: 5px;
  font-size: 12px;
  width:124px;
  white-space: nowrap;
  height: 34px;
  line-height: 24px;
}
</style>
