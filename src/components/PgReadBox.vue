<script setup>
import { ref, computed,inject } from 'vue';
import {getTwoLabelNum} from '@/lib/utils.js'
// PgBox is 定包牌盒子
defineOptions({
  name: "PgBox"
});
const active = defineModel('active', {
  type: Boolean,
  default: false
})
const type = defineModel('type', {
  type: String,
  default: '3'
})
const val = defineModel('value', {
  type: String,
  default: ''
})
const props = defineProps({
  num: {
    type: String,
    default: '',
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  }
})
const pgBox = ref();
const addPgBox = inject('addPgBox')
const toggle = (bool) => {
  if(typeof bool === 'boolean') {
    return active.value = bool
  }
  active.value = !active.value
}
const changeType = (newType) => {
  type.value = newType
}
const setValue = (newVal) => {
  val.value = newVal
}
addPgBox({
  ...props,
  toggle,
  changeType,
  setValue
})
const activeClass = computed(() => {
  return active.value? 'active': ''
})
const signStr= computed(() => {
  return getTwoLabelNum(props.num, type.value)
})
</script>

<template>
  <div ref="pgBox" class="pg-box" :class="activeClass" >
    <div class="flex-item">{{ signStr }}</div>
    <div class="flex-item"><input  v-model="val" readonly class="input_w40" /></div>
  </div>
</template>

<style lang="less" scoped>
.pg-box {
  display:flex;
  .input_w40 {
    width:40px;
  }
}
</style>
