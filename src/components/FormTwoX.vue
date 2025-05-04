<script setup>
import { ref, toRaw } from 'vue';
import { dialog } from '@/lib/dialog.js'
import { difference } from 'lodash-es';
import {compose, emptyNums, strAdd, splitNum} from '@/lib/utils.js'
// FormTwoX is
defineOptions({
  name: "FormTwoX"
});
const emit = defineEmits(['submitData'])
const formTwoX = ref();
console.log(formTwoX);
const formObj = ref({
  peishu: '',
  pei1: '',
  pei2: '',
  budingheCheck: false, // 不定位合分
  budinghe: '', // 不定位合分值
  contain: '',  // 二字定 含｜复式
  containVal: '', // 含
  multiVal: '', // 复式
})

// 二字现取逻辑
const quFn = (input1, input2) => {
  let num1Arr = emptyNums(input1).split('')
  let num2Arr = emptyNums(input2).split('')
  let arr = []
  for(let i = 0; i < num1Arr.length; i++) {
    for(let j = 0; j < num2Arr.length; j++) {
      if(num1Arr[i] < num2Arr[j]) {
        arr.push(num1Arr[i] + '' + num2Arr[j])
      } else {
        arr.push(num2Arr[j]+ '' + num1Arr[i])
      }
    }
  }
  return Array.from(new Set(arr))
}
// 配数的处理逻辑
function midPeishu(ctx, next) {
  let {peishu, pei1, pei2} = ctx.formObj
  if (pei1 || pei2) {
    ctx.process++
    if (peishu === '1') { // 取数处理
      ctx.res = quFn(pei1, pei2)
    } else {
      ctx.res = difference(quFn(), quFn(pei1, pei2))
    }
  } else {
    ctx.res = quFn()
  }
  return next();
}

// 不定位合分
function midBudinghe(ctx, next) {
  let {budingheCheck, budinghe} = ctx.formObj
  if (budingheCheck && budinghe) {
    ctx.process ++
    ctx.res = ctx.res.filter(item => budinghe.includes((strAdd(item) % 10).toString()))
  }
  return next()
}

// 二字现  含｜复式
function midContainAndMulti(ctx, next) {
  let {containVal, multiVal, contain} = ctx.formObj
  if (containVal || multiVal) {
    ctx.process ++
    if (contain === '1') {
      ctx.res = ctx.res.filter(item => splitNum(containVal).some(sub => item.includes(sub)))
    } else {
      ctx.res = difference(ctx.res, ctx.res.filter(item => splitNum(containVal).some(sub => item.includes(sub))))
    }
  }
  return next()
}
// 双重
function midDouble(ctx, next) {

  return next()
}
const middlewares = [midPeishu, midBudinghe, midContainAndMulti, midDouble]
const composed = compose(middlewares)
const submitHandle = () => {
  console.log('二字现')
  let {res, process} = composed({
    formObj: toRaw(formObj.value),
    process: 0, // 标记处理步骤
    res: []
  })
  if(process) {
    console.log(res)
    emit('submitData', res)
  } else {
    // 提示没有输入条件
    dialog.alert('请选择或填写条件生成！')
  }
}
const toSubmit = () => {
  // formTwoP.value.submit()
  submitHandle()
}
defineExpose({
  toSubmit
})
</script>

<template>
  <form  @submit.prevent.stop="submitHandle" ref="formTwoX" class="form-flex form-quick-choose">
    <table class="t-1">
      <tbody>
        <tr class="bg2">
          <td colspan="4" class="tc"> <strong class="red2">配数</strong> <SwitchGroup v-model="formObj.peishu" value="1" ></SwitchGroup> </td>
        </tr>
        <tr class="match-input">
          <td colspan="4" class="tc">
            <div class="flex-inline gap4">
              <InputNum v-model="formObj.pei1" type="text" class="w90" boxnumber="1" name="pei1" digits="true" maxlength="10"></InputNum>
              配,
              <InputNum v-model="formObj.pei2" type="text" class="w90" boxnumber="2" name="pei2" digits="true" maxlength="10"></InputNum>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="4" class="remain-match-filter-item">
            <div class="flex-inline gap4">
              <strong class="red2">不定位合分</strong>
              <label><input v-model="formObj.budingheCheck" type="checkbox" class="remain-match-filter checkbox" remainmatchfilter="2"> 两数合</label>
              <InputNum v-model="formObj.budinghe" type="text" class="w90" name="budinghe" digits="true" maxlength="10"></InputNum>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup v-model="formObj.contain" value="1"></SwitchGroup>
            二字现<strong class="red2">含</strong>
            <InputNum type="text" v-model="formObj.containVal" class="contain-filter-item w80" name="han" digits="true" maxlength="10"></InputNum>
            二字现<strong class="red2">复式</strong>
            <InputNum type="text" v-model="formObj.multiVal" class="multiple-filter-item" name="fushi" digits="true" maxlength="10"></InputNum>
          </td>
        </tr>
        <tr>
          <td colspan="4"> <SwitchGroup v-model="formObj.double"></SwitchGroup> (<strong class="red2">双重</strong>) </td>
        </tr>
        <tr>
          <td colspan="4"> <SwitchGroup></SwitchGroup> (<strong
              class="red2">二兄弟</strong>) </td>
        </tr>
        <tr>
          <td colspan="4" class="logarithm-number-item"> <SwitchGroup></SwitchGroup> (<strong
              class="red2">对数</strong>)
              <div class="flex-inline gap2">
                <input type="text" class="w60" name="duishu1" pairnumber="true" maxlength="2">
                <input type="text" class="w60" name="duishu2" pairnumber="true" maxlength="2">
                <input type="text" class="w60" name="duishu3" pairnumber="true" maxlength="2">
              </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="width: 50%">
            <SwitchGroup></SwitchGroup> (<strong class="red2">单</strong>)
            <CheckTwoGroup></CheckTwoGroup>
            <span class="green fb f14"><span id="selectWord_odd"></span>&nbsp;&nbsp;<span id="selectCondition_odd"></span></span>
          </td>
          <td colspan="2" style="width: 50%">
            <SwitchGroup></SwitchGroup> (<strong class="red2">双</strong>)
            <CheckTwoGroup></CheckTwoGroup> <span class="green fb f14"><span id="selectWord_even"></span>&nbsp;&nbsp;<span id="selectCondition_even"></span></span>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="width: 50%">
            <SwitchGroup></SwitchGroup> (<strong class="red2">大</strong>)
            <CheckTwoGroup></CheckTwoGroup>
              <span class="green fb f14"><span id="selectWord_big"></span>&nbsp;&nbsp;<span id="selectCondition_big"></span></span> </td>
          <td colspan="2" style="width: 50%">
            <SwitchGroup></SwitchGroup> (<strong class="red2">小</strong>)
            <CheckTwoGroup></CheckTwoGroup> <span class="green fb f14"><span id="selectWord_small"></span>&nbsp;&nbsp;<span id="selectCondition_small"></span></span>
          </td>
        </tr>
      </tbody>
    </table>
  </form>

</template>

<style lang="less" scoped>
.form-flex {
  gap: 0;

  .flex-item {
    outline: 1px solid #bdf0bc;
  }

  /* Add your styles here */
}
</style>
