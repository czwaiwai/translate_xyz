<script setup>
import { ref, computed, inject } from 'vue'
import { getTwoLabelNum } from '@/lib/utils'
// TwoSetView is 二字定
defineOptions({
  name: 'GameInputBox',
})
const model = defineModel({
  type: String,
  default: false,
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
  type: {
    type: String,
    default: '3',
  },
  posiH: {
    type: Number,
    default: 0,
  },
  posiV: {
    type: Number,
    default: 0,
  },
})
const signStr = computed(() => {
  if (!props.num) return ''
  return getTwoLabelNum(props.num, props.type)
})
const activeClass = computed(() => {
  return model.value ? 'active' : ''
})
const addGameBox = inject('addGameBox')
const setInput = (val) => {
  model.value = val
}

// 获取所有选中
const getActive = () => {
  return model.value
}
const getInput = () => {
  return model.value
}
const getCode = () => {
  return signStr.value
}
addGameBox({
  ...props,
  getCode,
  getActive,
  setInput,
  getInput,
})
const input = ref()
const clickHandle = () => {
  input.value.focus()
}
</script>

<template>
  <div @click="clickHandle" class="game-box" :class="activeClass">
    <div class="flex-item tl">
      <div class="red">{{ odds }}</div>
      <div>{{ signStr }}</div>
    </div>
    <div class="flex-item tc">
      <input ref="input" class="w60" v-model="model" />
    </div>
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
