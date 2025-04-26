<script setup>
import { ref } from 'vue';
// FormFourX is
defineOptions({
  name: "FormFourX"
});
const formFourX = ref();
console.log(formFourX);
</script>

<template>
  <form ref="formFourX" class="form-quick-choose">
    <table class="t-1">
      <tbody>
        <tr class="bg2">
          <td colspan="4" class="tc"> <strong class="red2">配数</strong>
            <SwitchGroup></SwitchGroup>
          </td>
        </tr>
        <tr class="match-input">
          <td colspan="4" class="tc"> <input type="text" class="w90" boxnumber="1" name="pei1" digits="true"
              maxlength="10">配,<input type="text" class="w90" boxnumber="2" name="pei2" digits="true"
              maxlength="10">配,<input type="text" class="w90" boxnumber="3" name="pei3" digits="true"
              maxlength="10">配,<input type="text" class="w90" boxnumber="4" name="pei4" digits="true" maxlength="10">
          </td>
        </tr>
        <tr>
          <td colspan="4" class="remain-match-filter-item"> <strong class="red2">不定位合分</strong>
            <label><input type="checkbox" class="remain-match-filter checkbox" remainmatchfilter="2">两数合</label>
            &nbsp;&nbsp;
            <input type="text" class="w90" name="budinghe" digits="true" maxlength="10"> &nbsp;&nbsp;
            <label><input  type="checkbox" class="remain-match-filter-three checkbox" remainmatchfilterthree="3">三数合</label>
            &nbsp;&nbsp;
            <input type="text" class="w90" name="budinghe" digits="true" maxlength="10">
          </td>
        </tr>
        <tr>
          <td colspan="4"> <SwitchGroup></SwitchGroup>
            四字现<strong class="red2">含</strong>
            <input type="text" class="contain-filter-item w80" name="han" digits="true" maxlength="10">
            四字现<strong class="red2">复式</strong>
            <input type="text" class="multiple-filter-item" name="fushi" digits="true" maxlength="10">
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup></SwitchGroup> (<strong class="red2">双重</strong>)
            <SwitchGroup></SwitchGroup> (<strong class="red2">三重</strong>)
            <SwitchGroup></SwitchGroup> (<strong class="red2">四重</strong>)
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup></SwitchGroup> (<strong class="red2">二兄弟</strong>)
            <SwitchGroup></SwitchGroup> (<strong class="red2">三兄弟</strong>)
            <SwitchGroup></SwitchGroup> (<strong class="red2">四兄弟</strong>)
          </td>
        </tr>
        <tr>
          <td colspan="4" class="logarithm-number-item"> <SwitchGroup></SwitchGroup> (<strong  class="red2">对数</strong>)
              <div class="flex-inline gap2">
              <input type="text" class="w60" name="duishu1" pairnumber="true" maxlength="2">
              <input type="text" class="w60" name="duishu2" pairnumber="true" maxlength="2">
              <input type="text" class="w60" name="duishu3" pairnumber="true" maxlength="2">
              </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="width: 50%"> <SwitchGroup></SwitchGroup> (<strong class="red2">单</strong>)
            <CheckFourGroup></CheckFourGroup>
            <span class="green fb f14"><span id="selectWord_odd"></span>&nbsp;&nbsp;<span
                id="selectCondition_odd"></span></span>
              </td>
          <td colspan="2" style="width: 50%"> <SwitchGroup></SwitchGroup> (<strong class="red2">双</strong>)
            <CheckFourGroup></CheckFourGroup> <span class="green fb f14"><span id="selectWord_even"></span>&nbsp;&nbsp;<span id="selectCondition_even"></span></span>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="width: 50%"> <SwitchGroup></SwitchGroup> (<strong class="red2">大</strong>)
            <CheckFourGroup></CheckFourGroup>
            <span class="green fb f14"><span id="selectWord_big"></span>&nbsp;&nbsp;<span id="selectCondition_big"></span></span>
          </td>
          <td colspan="2" style="width: 50%"> <SwitchGroup></SwitchGroup> (<strong class="red2">小</strong>)
            <CheckFourGroup></CheckFourGroup>
            <span class="green fb f14"><span id="selectWord_small"></span>&nbsp;&nbsp;<span id="selectCondition_small"></span></span>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<style lang="less" scoped>
.form-four-x {
  /* Add your styles here */
}
</style>
