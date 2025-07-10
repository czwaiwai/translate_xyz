<script setup>
import { computed, inject } from 'vue'
import { emnum } from '@/lib/api'
// TwoSetView is 二字定
defineOptions({
  name: 'GameBox',
})
const active = defineModel('active', {
  type: Boolean,
  default: false,
})
const type = defineModel('type', {
  type: String,
  default: '3',
})
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  odds: {
    type: String,
    default: '',
  },
  // active: Boolean,
  num: {
    type: String,
    default: '',
  },
  // type: {
  //   type: String,
  //   default: '3'
  // },
  posiH: {
    type: Number,
    default: 0,
  },
  posiV: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['click'])
const typeObj = emnum.twoCate.reduce((before, item) => {
  before[item.value] = item.label
  return before
}, {})
const signStr = computed(() => {
  if (!props.num) return ''
  let strArr = props.num.split('')
  // return typeObj[props.type]
  // return typeObj[props.type]
  return typeObj[type.value].replace('口', strArr[0]).replace('口', strArr[1])
})
const activeClass = computed(() => {
  return props.active ? 'active' : ''
})
const addGameBox = inject('addGameBox')
const toggle = (bool) => {
  if (typeof bool === 'boolean') {
    return (active.value = bool)
  }
  active.value = !active.value
}
// 获取选中状态
const getActive = () => {
  return active.value
}
// 获取号码
const getCode = () => {
  return signStr.value
}
const changeType = (newType) => {
  type.value = newType
}
addGameBox({
  ...props,
  getCode,
  getActive,
  toggle,
  changeType,
})
const clickHandle = () => {
  emit('click', {
    ...props,
  })
}
</script>

<template>
  <div @click="clickHandle" class="game-box" :class="activeClass">
    <div class="flex-item tc">{{ signStr }}</div>
    <div class="flex-item odds tc">{{ odds }}</div>
  </div>
</template>

<style lang="less" scoped>
.game-box {
  display: flex;
  padding: 4px;
  cursor: pointer;
  &.active {
    background: yellow;
  }
  .odds {
    color: red;
  }
}
</style>
