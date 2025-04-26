<script setup>
import { ref } from 'vue'
// FormTwoP is
defineOptions({
  name: 'FormTwoP',
})
const formTwoP = ref()
console.log(formTwoP)
</script>

<template>
  <form ref="formTwoP" class="form-quick-choose">
    <table class="t-1">
      <tbody>
        <tr class="bg2">
          <td colspan="2" class="tc">
            <strong class="red2">定位置</strong>
            <SwitchGroup></SwitchGroup>
          </td>
          <td colspan="2" class="tc">
            <strong class="red2">配数全转</strong>
            <SwitchGroup></SwitchGroup>
          </td>
        </tr>
        <tr class="fixed-input tc">
          <td width="25%">仟</td>
          <td width="25%">佰</td>
          <td width="25%">拾</td>
          <td width="25%">个</td>
        </tr>
        <tr class="fixed-input tc">
          <td>
            <input type="text" class="w90" boxnumber="1" name="qian" digits="true" maxlength="10" value="" />
          </td>
          <td>
            <input type="text" class="w90" boxnumber="2" name="bai" digits="true" maxlength="10" value="" />
          </td>
          <td>
            <input type="text" class="w90" boxnumber="3" name="shi" digits="true" maxlength="10" value="" />
          </td>
          <td>
            <input type="text" class="w90" boxnumber="4" name="ge" digits="true" maxlength="10" value="" />
          </td>
        </tr>
        <tr class="match-input hide">
          <td colspan="4" class="tc">
            <input type="text" class="w90" boxnumber="1" name="pei1" digits="true" maxlength="10" />配,<input
              type="text" class="w90" boxnumber="2" name="pei2" digits="true" maxlength="10" />
          </td>
        </tr>
        <tr class="bg2">
          <td colspan="4" class="tc">
            <strong class="red2">合</strong>&nbsp;&nbsp; <strong class="red2">分</strong>
            <SwitchGroup></SwitchGroup>
          </td>
        </tr>
        <tr class="tc">
          <td class="remain-fixed-filter-item">
            1. <CheckFourGroup></CheckFourGroup> <br />
            <input type="text" class="w90" name="he1" digits="true" maxlength="10" />
          </td>
          <td class="remain-fixed-filter-item">
            2. <CheckFourGroup></CheckFourGroup> <br />
            <input type="text" class="w90" name="he2" digits="true" maxlength="10" />
          </td>
          <td class="remain-fixed-filter-item">
            3. <CheckFourGroup></CheckFourGroup> <br />
            <input type="text" class="w90" name="he3" digits="true" maxlength="10" />
          </td>
          <td class="remain-fixed-filter-item">
            4. <CheckFourGroup></CheckFourGroup> <br />
            <input type="text" class="w90" name="he4" digits="true" maxlength="10" />
          </td>
        </tr>
        <tr>
          <td colspan="4" class="remain-match-filter-item">
            <strong class="red2">不定位合分</strong>
            <label><input type="checkbox" remainmatchfilter="2"
                class="remain-match-filter checkbox" />两数合</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" class="w90" name="budinghe" digits="true" maxlength="10" />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <div class="flex-inline gap2">
              <strong class="red2">全转</strong>
              <input type="text" class="transform-filter-item w50" name="quanzhuan" digits="true" maxlength="10" />
              <strong class="red2">上奖</strong>
              <input type="text" class="upper-filter-item w50" name="shangjiang" digits="true" maxlength="10" />
              <strong class="red2">排除</strong>
              <input type="text" class="except-filter-item w50" name="paichu" digits="true" maxlength="10" />
              <strong class="red2">乘号位置</strong>
            </div>
            <CheckFourGroup></CheckFourGroup>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup></SwitchGroup>
            二字定含
            <input type="text" class="contain-filter-item w80" name="han" digits="true" maxlength="10" />
            二字定复式
            <input type="text" class="multiple-filter-item" name="fushi" digits="true" maxlength="10" />
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
              <input type="text" class="w60" name="duishu1" pairnumber="true" maxlength="2" />
              <input type="text" class="w60" name="duishu2" pairnumber="true" maxlength="2" />
              <input type="text" class="w60" name="duishu3" pairnumber="true" maxlength="2" />
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
