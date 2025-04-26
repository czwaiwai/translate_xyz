<script setup>
defineOptions({
  name: "InputSquare"
});
const [model] = defineModel({
  set(value) {
    console.log(value)
    let newVal = value.toUpperCase().replace(/[^0-9|X]/g, '')
    console.log(newVal)
    return newVal
  }
})

const inputHandle = (event) => {
  event.target.value = model.value
}
</script>

<template>
  <input v-model="model" v-bind="$attrs" @input="inputHandle" >
</template>

<style lang="less" scoped>
.input-square {
  /* Add your styles here */
}
</style>
