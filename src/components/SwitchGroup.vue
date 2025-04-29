<script setup>
import { ref, watch, onMounted } from 'vue';
// SwitchGroup is
defineOptions({
  name: "SwitchGroup"
});
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
})
const emit = defineEmits(['change'])
const model = defineModel({
  type: String,
  default: '0'  // -1 除  0 空  1取
})
onMounted(() => {
  model.value = props.value
})

const setModel = (chuVal, quVal) => {
  console.log(chuVal, quVal)
  if(!chuVal && !quVal) {
    return model.value = '0'
  }
  if(chuVal && !quVal) {
    return model.value = '-1'
  }
  if(!chuVal && quVal) {
    return model.value = '1'
  }
}
watch(model, (newVal, oldVal) => {
  console.log(newVal, oldVal)
  if(newVal !== oldVal) {
    if(newVal === '0') {
      chu.value = false
      qu.value = false
    }
    if(newVal === '-1') {
      chu.value = true
      qu.value =  false
    }
    if(newVal === '1') {
      chu.value = false
      qu.value = true
    }
    emit('change', newVal)
  }
})
const chu = ref(false)
const qu = ref(false)
const changeHandle = (e, index) => {
  if(index === 1) {
    if(qu.value) {
      qu.value = false
    }
    if (props.value) {
      chu.value = true
    }
  }
  if (index === 2) {
    if(chu.value) {
      chu.value = false
    }
    if(props.value) {
      qu.value = true
    }
  }
  setModel(chu.value, qu.value)
}
</script>

<template>
  <div class="flex-inline gap2 ml4">
    <label><input v-model="chu" @change="changeHandle($event, 1)"  type="checkbox"> 除</label>
    <label><input v-model="qu" @change="changeHandle($event, 2)"  type="checkbox" > 取</label>
  </div>
</template>

<style lang="less" scoped>
.switch-group {
  /* Add your styles here */
}
</style>
