<script setup>
import { ref, toRaw } from 'vue'
import { dialog } from '@/lib/dialog.js'
import { cloneDeep, range, padStart } from 'lodash-es'
import { formP, toComposed } from '@/lib/threeP.js'
import { validLogar } from '@/lib/utils.js'
// FormThreeP is
defineOptions({
  name: 'FormThreeP',
})
const formThreeP = ref()
const emit = defineEmits(['submitData'])
const formObj = ref(cloneDeep(formP))
const positionHandle = (val) => {
  if (val !== '0') {
    formObj.value.transform = '0'
  }
}
const transformHandle = (val) => {
  if (val !== '0') {
    formObj.value.position = '0'
  }
}
// 对数有效值校验
const duishuValid = (value) => {
  if (!validLogar(value)) {
    return '请输入差值为5的对数'
  }
}
const duishu1 = ref()
const duishu2 = ref()
const duishu3 = ref()
const arr = [duishu1, duishu2, duishu3]
const duishuChangeHandle = (val) => {
  if (val === '0') {
    formObj.value.duishu1 = ''
    formObj.value.duishu2 = ''
    formObj.value.duishu3 = ''
  }
}
const submitHandle = () => {
  // // $event.preventDefault()
  // let {qian,shi,bai,ge,pei1,pei2,position, transform} = formObj.value
  // let arr = []
  // if (position !== '0') {
  //   if(position === '1') {
  //     arr = generateAllCombinations(qian,bai, shi,ge)
  //   }
  //   if(position === '-1') {
  //     arr = generateAllCombinations(nextNum(qian),nextNum(bai),nextNum(shi),nextNum(ge))
  //   }
  // }
  // if (transform !=='0') {
  //   if (transform === '1') {
  //     arr = generateAllTransform(pei1,pei2)
  //   }
  //   if(transform === '-1') {
  //     arr = generateAllTransform(nextNum(pei1),nextNum(pei2))
  //   }
  // }
  // console.log(arr)
  // emit('submitData', arr)
  if (arr.some((comp) => !comp.value.verfiInput())) return
  let { res, process } = toComposed({
    formObj: toRaw(formObj.value),
    template: 'X口口口',
    nums: range(0, 1000).map((num) => padStart(num, 3, '0')),
    nodes: [],
    process: 0, // 标记处理步骤
    res: [],
  })
  if (process) {
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
const toReset = () => {
  formObj.value = cloneDeep(formP)
}
defineExpose({
  toSubmit,
  toReset,
})
</script>

<template>
  <form ref="formThreeP" class="form-quick-choose">
    <table class="t-1">
      <tbody>
        <tr class="bg2">
          <td colspan="2" class="tc">
            <strong class="red2">定位置</strong>
            <SwitchGroup
              v-model="formObj.position"
              value="1"
              @change="positionHandle"
            ></SwitchGroup>
          </td>
          <td colspan="2" class="tc">
            <strong class="red2">配数全转</strong>
            <SwitchGroup
              v-model="formObj.transform"
              value="0"
              @change="transformHandle"
            ></SwitchGroup>
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
            <InputNum
              v-model="formObj.qian"
              type="text"
              class="w90"
              boxnumber="1"
              name="qian"
              digits="true"
              maxlength="10"
              value=""
            />
          </td>
          <td>
            <InputNum
              v-model="formObj.bai"
              type="text"
              class="w90"
              boxnumber="2"
              name="bai"
              digits="true"
              maxlength="10"
              value=""
            />
          </td>
          <td>
            <InputNum
              v-model="formObj.shi"
              type="text"
              class="w90"
              boxnumber="3"
              name="shi"
              digits="true"
              maxlength="10"
              value=""
            />
          </td>
          <td>
            <InputNum
              v-model="formObj.ge"
              type="text"
              class="w90"
              boxnumber="4"
              name="ge"
              digits="true"
              maxlength="10"
              value=""
            />
          </td>
        </tr>
        <tr v-show="formObj.transform !== '0'" class="match-input hide">
          <td colspan="4" class="tc">
            <div class="flex-inline gap4">
              <InputNum
                v-model="formObj.pei1"
                type="text"
                class="w90"
                boxnumber="1"
                name="pei1"
                digits="true"
                maxlength="10"
              />
              配,
              <InputNum
                v-model="formObj.pei2"
                type="text"
                class="w90"
                boxnumber="2"
                name="pei2"
                digits="true"
                maxlength="10"
              />
              配,
              <InputNum
                v-model="formObj.pei3"
                type="text"
                class="w90"
                boxnumber="3"
                name="pei3"
                digits="true"
                maxlength="10"
              />
            </div>
          </td>
        </tr>
        <tr class="bg2">
          <td colspan="4" class="tc">
            <strong class="red2">合</strong>&nbsp;&nbsp; <strong class="red2">分</strong>
            <SwitchGroup v-model="formObj.fenhe" value="1"></SwitchGroup>
          </td>
        </tr>
        <tr class="tc">
          <td class="remain-fixed-filter-item">
            1. <CheckFourGroup v-model="formObj.he1check"></CheckFourGroup> <br />
            <InputNum
              v-model="formObj.he1"
              type="text"
              class="w90"
              name="he1"
              digits="true"
              maxlength="10"
            />
          </td>
          <td class="remain-fixed-filter-item">
            2. <CheckFourGroup v-model="formObj.he2check"></CheckFourGroup> <br />
            <InputNum
              v-model="formObj.he2"
              type="text"
              class="w90"
              name="he2"
              digits="true"
              maxlength="10"
            />
          </td>
          <td class="remain-fixed-filter-item">
            3. <CheckFourGroup v-model="formObj.he3check"></CheckFourGroup> <br />
            <InputNum
              v-model="formObj.he3"
              type="text"
              class="w90"
              name="he3"
              digits="true"
              maxlength="10"
            />
          </td>
          <td class="remain-fixed-filter-item">
            4. <CheckFourGroup v-model="formObj.he4check"></CheckFourGroup> <br />
            <InputNum
              v-model="formObj.he4"
              type="text"
              class="w90"
              name="he4"
              digits="true"
              maxlength="10"
            />
          </td>
        </tr>
        <tr>
          <td colspan="4" class="remain-match-filter-item">
            <div class="flex-inline gap4">
              <strong class="red2">不定位合分</strong>
              <label
                ><input
                  v-model="formObj.budingheCheck"
                  type="checkbox"
                  class="remain-match-filter checkbox"
                  remainmatchfilter="2"
                />
                两数合</label
              >
              <InputNum
                v-model="formObj.budinghe"
                type="text"
                class="w90"
                name="budinghe"
                digits="true"
                maxlength="10"
              ></InputNum>
              <label
                ><input
                  v-model="formObj.budingheCheckThree"
                  type="checkbox"
                  class="remain-match-filter-three checkbox"
                  remainmatchfilterthree="3"
                />
                三数合</label
              >
              <InputNum
                v-model="formObj.budingheThree"
                type="text"
                class="w90"
                name="budinghe"
                digits="true"
                maxlength="10"
              ></InputNum>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <div class="flex-inline gap2">
              <strong class="red2">全转</strong>
              <input
                v-model="formObj.allRound"
                type="text"
                class="transform-filter-item w50"
                name="quanzhuan"
                digits="true"
                maxlength="10"
              />
              <strong class="red2">上奖</strong>
              <input
                v-model="formObj.upper"
                type="text"
                class="upper-filter-item w50"
                name="shangjiang"
                digits="true"
                maxlength="10"
              />
              <strong class="red2">排除</strong>
              <input
                v-model="formObj.exclude"
                type="text"
                class="except-filter-item w50"
                name="paichu"
                digits="true"
                maxlength="10"
              />
              <strong class="red2">乘号位置</strong>
              <CheckFourGroup v-model="formObj.timesWhere"></CheckFourGroup>
            </div>
          </td>
        </tr>
        <!-- <tr>
          <td colspan="4"> <SwitchGroup></SwitchGroup>
            三字定含 <input type="text" class="contain-filter-item w80" name="han" digits="true" maxlength="10"> 三字定复式
            <input type="text" class="multiple-filter-item" name="fushi" digits="true" maxlength="10"> </td>
        </tr> -->
        <tr>
          <td colspan="4">
            <SwitchGroup v-model="formObj.containGroup" value="1"></SwitchGroup>
            三字定含
            <InputNum
              v-model="formObj.containVal"
              type="text"
              class="contain-filter-item w80"
              name="han"
              digits="true"
              maxlength="10"
            ></InputNum>
            三字定复式
            <InputNum
              v-model="formObj.multiVal"
              type="text"
              class="multiple-filter-item"
              name="fushi"
              digits="true"
              maxlength="10"
            ></InputNum>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup v-model="formObj.doubleGroup"></SwitchGroup> (<strong class="red2"
              >双重</strong
            >) <SwitchGroup v-model="formObj.doubleThreeGroup"></SwitchGroup> (<strong class="red2"
              >三重</strong
            >)
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup v-model="formObj.brotherGroup"></SwitchGroup> (<strong class="red2"
              >二兄弟</strong
            >) <SwitchGroup v-model="formObj.brotherThreeGroup"></SwitchGroup> (<strong class="red2"
              >三兄弟</strong
            >)
          </td>
        </tr>
        <tr>
          <td colspan="4" class="logarithm-number-item">
            <SwitchGroup v-model="formObj.duishuGroup" @change="duishuChangeHandle"></SwitchGroup>
            (<strong class="red2">对数</strong>)
            <div class="flex-inline gap2">
              <InputNum
                ref="duishu1"
                v-model="formObj.duishu1"
                type="text"
                class="w60"
                name="duishu1"
                :validator="duishuValid"
                maxlength="2"
              ></InputNum>
              <InputNum
                ref="duishu2"
                v-model="formObj.duishu2"
                type="text"
                class="w60"
                name="duishu2"
                :validator="duishuValid"
                maxlength="2"
              ></InputNum>
              <InputNum
                ref="duishu3"
                v-model="formObj.duishu3"
                type="text"
                class="w60"
                name="duishu3"
                :validator="duishuValid"
                maxlength="2"
              ></InputNum>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="width: 50%">
            <SwitchFourComb
              v-model:group="formObj.oddGroup"
              v-model:check="formObj.oddCheckStr"
              title="单"
            ></SwitchFourComb>
          </td>
          <td colspan="2" style="width: 50%">
            <SwitchFourComb
              v-model:group="formObj.evenGroup"
              v-model:check="formObj.evenCheckStr"
              title="双"
            ></SwitchFourComb>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="width: 50%">
            <SwitchFourComb
              v-model:group="formObj.bigGroup"
              v-model:check="formObj.bigCheckStr"
              title="大"
            ></SwitchFourComb>
          </td>
          <td colspan="2" style="width: 50%">
            <SwitchFourComb
              v-model:group="formObj.smallGroup"
              v-model:check="formObj.smallCheckStr"
              title="小"
            ></SwitchFourComb>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<style lang="less" scoped>
.form-three-p {
  /* Add your styles here */
}
</style>
