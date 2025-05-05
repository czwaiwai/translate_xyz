<script setup>
import {  computed } from 'vue';
// SwitchThreeComb is
defineOptions({
  name: "SwitchThreeComb"
});
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
})
const group = defineModel('group')
const checkStr = defineModel('check')
const groupName = computed(() => {
  let val = group.value
  if(!val) return ''
  if(val === '0') return ''
  if(!checkStr.value) return ''
  if(!checkStr.value.includes('T')) return ''
  if(val === '1') {
    return '取'
  }
  if(val === '-1') {
    return  '除'
  }
  return ''
})
const checkName = computed(() => {
  let val = group.value
  if(!val) return ''
  if(val === '0') return ''
  if(!checkStr.value) return ''
  if(!checkStr.value.includes('T')) return ''
  return checkStr.value.replace(/T/g, props.title)
})
const changeHandle = () => {
  if(!group.value || group.value === '0') {
    checkStr.value = ''
  }
}
</script>

<template>
  <div class="flex-inline gap4">
    <SwitchGroup v-model="group" @change="changeHandle" ></SwitchGroup>
    <span>(<strong class="red2">{{title}}</strong>)</span>
    <CheckThreeGroup v-model="checkStr"></CheckThreeGroup>
    <span class="green fs12 bold">{{groupName}}</span>
    <span class="green fs12 bold">{{checkName}}</span>
  </div>
</template>

<style lang="less" scoped>
.switch-group {
  /* Add your styles here */
}
</style>
