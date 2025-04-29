<script setup>
// InputNum is
defineOptions({
  name: "InputNum"
});
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
</script>

<template>
  <input class="input-number" ref="input" autocomplete="off" v-model="model" v-bind="$attrs" @input="inputHandle" >
</template>

<style lang="less" scoped>
.input-num {
  /* Add your styles here */
}
</style>
