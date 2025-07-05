<script setup>
import { ref, watchEffect } from 'vue'
// CheckTwoGroup is
defineOptions({
  name: 'CheckTwoGroup',
})

const props = defineProps({
  modelValue: {
    type: String,
    default: 'XXX',
  },
})

const emits = defineEmits(['update:modelValue'])

const checkboxes = ref([
  props.modelValue[0] === 'T',
  props.modelValue[1] === 'T',
  props.modelValue[2] === 'T',
  // props.modelValue[3] === '1'
])

const updateModel = () => {
  const newModelValue = checkboxes.value.map((checkbox) => (checkbox ? 'T' : 'X')).join('')
  emits('update:modelValue', newModelValue)
}

watchEffect(() => {
  checkboxes.value = [
    props.modelValue[0] === 'T',
    props.modelValue[1] === 'T',
    props.modelValue[2] === 'T',
  ]
})
</script>

<template>
  <div class="flex-inline gap2 ml4 check-three-group">
    <label><input type="checkbox" v-model="checkboxes[0]" @change="updateModel" /></label>
    <label><input type="checkbox" v-model="checkboxes[1]" @change="updateModel" /></label>
    <label><input type="checkbox" v-model="checkboxes[2]" @change="updateModel" /></label>
  </div>
</template>

<style lang="less" scoped>
.check-three-group {
}
</style>
