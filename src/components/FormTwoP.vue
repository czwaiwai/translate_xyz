<script setup>
import { ref } from 'vue'
// FormTwoP is
defineOptions({
  name: 'FormTwoP',
})
const formTwoP = ref()
console.log(formTwoP)
const formObj = ref({
  position: '0',
  transform:  '0',
  ge: '',
  shi: '',
  bai: '',
  qian: '',
  pei1: '',
  pei2: '',
  fenhe: '',
  he1: '',
  he2: '',
  he3: '',
  he4: '',
})
const positionHandle = (val) => {
  if(val !== '0') {
    formObj.value.transform = '0'
  }
}
const transformHandle = (val) => {
  if(val !== '0') {
    formObj.value.position = '0'
  }
}

</script>

<template>
  <form ref="formTwoP" class="form-quick-choose">
    <table class="t-1">
      <tbody>
        <tr class="bg2">
          <td colspan="2" class="tc">
            <strong class="red2">定位置</strong>
            <SwitchGroup v-model="formObj.position" value="-1" @change="positionHandle"></SwitchGroup>
          </td>
          <td colspan="2" class="tc">
            <strong class="red2">配数全转</strong>
            <SwitchGroup v-model="formObj.transform" value="0" @change="transformHandle"></SwitchGroup>
          </td>
        </tr>
        <tr v-show="formObj.position !== '0'" class="fixed-input tc">
          <td width="25%">仟</td>
          <td width="25%">佰</td>
          <td width="25%">拾</td>
          <td width="25%">个</td>
        </tr>
        <tr v-show="formObj.position !== '0'" class="fixed-input tc">
          <td>
            <InputNum v-model="formObj.qian" type="text" class="w90" boxnumber="1" name="qian" digits="true" maxlength="10" value="" />
          </td>
          <td>
            <InputNum  v-model="formObj.bai" type="text" class="w90" boxnumber="2" name="bai" digits="true" maxlength="10" value="" />
          </td>
          <td>
            <InputNum  v-model="formObj.shi" type="text" class="w90" boxnumber="3" name="shi" digits="true" maxlength="10" value="" />
          </td>
          <td>
            <InputNum  v-model="formObj.ge" type="text" class="w90" boxnumber="4" name="ge" digits="true" maxlength="10" value="" />
          </td>
        </tr>
        <tr v-show="formObj.transform !=='0'" class="match-input hide">
          <td colspan="4" class="tc">
            <div class="flex-inline gap4">
              <InputNum v-model="formObj.pei1" type="text" class="w90" boxnumber="1" name="pei1" digits="true" maxlength="10" />
              配,
              <InputNum v-model="formObj.pei2" type="text" class="w90" boxnumber="2" name="pei2" digits="true" maxlength="10" />
            </div>
          </td>
        </tr>
        <tr class="bg2">
          <td colspan="4" class="tc">
            <strong class="red2">合</strong>&nbsp;&nbsp; <strong class="red2">分</strong>
            <SwitchGroup v-model="fenhe"></SwitchGroup>
          </td>
        </tr>
        <tr class="tc">
          <td class="remain-fixed-filter-item">
            1. <CheckFourGroup></CheckFourGroup> <br />
            <InputNum v-model="formObj.he1"  type="text" class="w90" name="he1" digits="true" maxlength="10" />
          </td>
          <td class="remain-fixed-filter-item">
            2. <CheckFourGroup></CheckFourGroup> <br />
            <InputNum v-model="formObj.he2"  type="text" class="w90" name="he2" digits="true" maxlength="10" />
          </td>
          <td class="remain-fixed-filter-item">
            3. <CheckFourGroup></CheckFourGroup> <br />
            <InputNum v-model="formObj.he3"  type="text" class="w90" name="he3" digits="true" maxlength="10" />
          </td>
          <td class="remain-fixed-filter-item">
            4. <CheckFourGroup></CheckFourGroup> <br />
            <InputNum v-model="formObj.he4"  type="text" class="w90" name="he4" digits="true" maxlength="10" />
          </td>
        </tr>
        <tr>
          <td colspan="4" class="remain-match-filter-item">
            <strong class="red2">不定位合分</strong>
            <label><InputNum type="checkbox" remainmatchfilter="2"  class="remain-match-filter checkbox" />两数合</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <InputNum type="text" class="w90" name="budinghe" digits="true" maxlength="10" />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <div class="flex-inline gap2">
              <strong class="red2">全转</strong>
              <InputNum type="text" class="transform-filter-item w50" name="quanzhuan" digits="true" maxlength="10" />
              <strong class="red2">上奖</strong>
              <InputNum type="text" class="upper-filter-item w50" name="shangjiang" digits="true" maxlength="10" />
              <strong class="red2">排除</strong>
              <InputNum type="text" class="except-filter-item w50" name="paichu" digits="true" maxlength="10" />
              <strong class="red2">乘号位置</strong>
            </div>
            <CheckFourGroup></CheckFourGroup>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup></SwitchGroup>
            二字定含
            <InputNum type="text" class="contain-filter-item w80" name="han" digits="true" maxlength="10" />
            二字定复式
            <InputNum type="text" class="multiple-filter-item" name="fushi" digits="true" maxlength="10" />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup></SwitchGroup>
            (<strong class="red2">双重</strong>)
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup></SwitchGroup>
            (<strong class="red2">二兄弟</strong>)
          </td>
        </tr>
        <tr>
          <td colspan="4" class="logarithm-number-item">
            <SwitchGroup></SwitchGroup>
            (<strong class="red2">对数</strong>)
            <div class="flex-inline gap2">
              <InputNum type="text" class="w60" name="duishu1" pairnumber="true" maxlength="2" />
              <InputNum type="text" class="w60" name="duishu2" pairnumber="true" maxlength="2" />
              <InputNum type="text" class="w60" name="duishu3" pairnumber="true" maxlength="2" />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <SwitchGroup></SwitchGroup>
            (<strong class="red2">单</strong>)
            <CheckFourGroup></CheckFourGroup>
            <span class="green fb f14"><span id="selectWord_odd"></span>&nbsp;&nbsp;<span
                id="selectCondition_odd"></span></span>
          </td>
          <td colspan="2">
            <SwitchGroup></SwitchGroup>
            (<strong class="red2">双</strong>)
            <CheckFourGroup></CheckFourGroup>
            <span class="green fb f14"><span id="selectWord_even"></span>&nbsp;&nbsp;<span
                id="selectCondition_even"></span></span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <SwitchGroup></SwitchGroup>
            (<strong class="red2">大</strong>)
            <CheckFourGroup></CheckFourGroup>
            <span class="green fb f14"><span id="selectWord_big"></span>&nbsp;&nbsp;<span
                id="selectCondition_big"></span></span>
          </td>
          <td colspan="2">
            <SwitchGroup></SwitchGroup>
            (<strong class="red2">小</strong>)
            <CheckFourGroup></CheckFourGroup>
            <span class="green fb f14"><span id="selectWord_small"></span>&nbsp;&nbsp;<span
                id="selectCondition_small"></span></span>
          </td>
        </tr>
      </tbody>
    </table>

  </form>
</template>

<style lang="less" scoped>

</style>
