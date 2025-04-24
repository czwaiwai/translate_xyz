<script setup>
import { ref } from 'vue';
// InputSquare is
defineOptions({
  name: "InputSquare"
});
const props = defineProps({
  gameType: {
    type: String,
    default: '1'
  }
})
const model = defineModel({
  set(value) {
    let val = value.replace(/\D/g, '')
  }
})

const inputHandle = () => {

}
</script>

<template>
  <input v-model="model" @input="inputHandle" >
</template>

<style lang="less" scoped>
.input-square {
  /* Add your styles here */
}
</style>
