<script setup>
import { ref, computed } from 'vue';
import {range} from 'lodash-es'
import {getZhUnit, getTwoLabel, twoPosi2Nums, twoContain2Nums} from '@/lib/utils'
// FourPackageView is  四字定包牌汇总表
defineOptions({
  name: "PosiBtns"
});
const model = defineModel({
  type: Array,
  default: () => []
})

const props = defineProps({
  gameType: {
    type: String,
    default: '3'
  }
})
const btns = [
  ...range(10).map(num => {
    return {label: num + '', value: num + '' }
  }),
  {label: '单',value: 'single'},
  {label: '双',value: 'double'},
  {label: '大',value: 'big'},
  {label: '小',value: 'small'}
]
const containBtns = [
  ...range(5).map(num => {
    return {label: num + '', value: num + '' }
  }),
  {label: '单',value: 'single'},
  ...range(5, 10).map(num => {
    return {label: num + '', value: num + '' }
  }),
  {label: '双',value: 'double'},
]
const units = computed(() => {
  return  getZhUnit(getTwoLabel(props.gameType))
})

const posiObj = ref({
  posi0: [],
  posi1: []
})
const containArr = ref([])
const posiClickHandle = (btn, index) => {
  const findIndex = posiObj.value['posi' + index].indexOf(btn.value)
  if (findIndex === -1) {
    posiObj.value['posi' +index].push(btn.value)
  } else {
    posiObj.value['posi' +index].splice(findIndex, 1)
  }
  getAllComb()
}
const posiClass = (btn, index) => {
  return posiObj.value['posi' +index].includes(btn.value)? 'active': ''
}
const containClickHandle = (btn) => {
  const findIndex = containArr.value.indexOf(btn.value)
  if (findIndex === -1) {
    containArr.value.push(btn.value)
  } else {
    containArr.value.splice(findIndex, 1)
  }
  getAllComb()
  // emit('containClick', btn)
}
// 选中样式
const containClass = (btn) => {
  return containArr.value.includes(btn.value)? 'active': ''
}
// 转换成所有组合
const getAllComb = () => {
  model.value =  Array.from(new Set([...twoPosi2Nums(posiObj.value['posi0'], posiObj.value['posi1']), ...twoContain2Nums(containArr.value)]))
}
</script>

<template>
  <div class="posi-btns">
    <div class="flex-item flex-box">
      <div class="posi-hd">
        定位置
      </div>
      <div class="flex-item">
        <div v-for="(item, index) in units" class="posi-btn-wrap" :key="item.value">
          {{item.label }}
          <button @click="posiClickHandle(btn, index ,item.value)" v-for="btn in btns" :class="posiClass(btn, index)"  :key="btn.value">{{ btn.label }}</button>
        </div>
      </div>
    </div>
    <div class="contain-btns flex-box">
      <div class="posi-hd">
        合分
      </div>
      <div class="flex-item flex-box posi-bd ">
        <button @click="containClickHandle(btn)" v-for="btn in containBtns" :class="containClass(btn)" :key="btn.value">{{ btn.label }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.posi-btns {
  box-sizing: border-box;
  display:flex;
  border:1px solid #333;
  .active {
    background:red;
  }
  .posi-hd {
    box-sizing: border-box;
    background:orange;
    padding: 0 10px;
    border-left:1px solid #333;
    border-right:1px solid #333;
    margin-right:4px;
    padding-top:15px;
  }
  .posi-btn-wrap {
    padding:2px;
  }
  .posi-btn-wrap + .posi-btn-wrap {
    border-top:1px solid #333;
  }
  .contain-btns {
    width:250px;
    padding-right:30px;
    .posi-bd {
      flex-wrap: wrap;
    }
  }
}
</style>
