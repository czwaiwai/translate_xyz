<script setup>
import { ref, computed, inject } from 'vue';
import {getTwoLabelNum} from '@/lib/utils'
// TwoSetView is 二字定
defineOptions({
  name: "GameInputBox"
});
const model = defineModel({
  type: String,
  default: false
})
const props = defineProps({
  index: {
    type: Number,
    default: 0
  },
  odds: {
    type: String,
    default: '',
  },
  // active: Boolean,
  num: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: '3'
  },
  posiH: {
    type: Number,
    default: 0
  },
  posiV: {
    type: Number,
    default: 0
  }
})
// const typeObj = emnum.twoCate.reduce((before, item) => {
//   before[item.value] = item.label
//   return before
// }, {})
const signStr = computed(() => {
  if(!props.num) return ''
  return getTwoLabelNum(props.num, props.type)
  // let strArr = props.num.split('')
  // // return typeObj[props.type]
  // // return typeObj[props.type]
  // return typeObj[props.type].replace('口', strArr[0]).replace('口', strArr[1])
})
const activeClass = computed(() => {
  return props.active? 'active': ''
})
const addGameBox = inject('addGameBox')
const setInput = (val) => {
  model.value = val
}
const getInput = () => {
  return model.value;
}
addGameBox({
  ...props,
  setInput,
  getInput
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
      <div >{{ signStr }}</div>
    </div>
    <div class="flex-item tc">
      <input ref="input" class="w60" v-model="model">
    </div>
  </div>
</template>

<style lang="less" scoped>
.game-box {
  display: flex;
  padding: 4px;
  cursor: pointer;
  &.active {
    background:yellow;
  }
  .odds {
    color:red;
  }
}
</style>
