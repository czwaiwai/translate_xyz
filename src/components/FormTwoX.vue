<script setup>
import { ref, toRaw } from 'vue'
import { dialog } from '@/lib/dialog.js'
import { validLogar } from '@/lib/utils.js'
import { cloneDeep } from 'lodash-es'
import { formX, toComposed } from '@/lib/twoX.js'
// FormTwoX is
defineOptions({
  name: 'FormTwoX',
})
const emit = defineEmits(['submitData'])
const formTwoX = ref()
const formObj = ref(cloneDeep(formX))
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
const submitHandle = () => {
  // console.log('二字现')
  if (arr.some((comp) => !comp.value.verfiInput())) return
  let { res, process } = toComposed({
    formObj: toRaw(formObj.value),
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
const duishuChangeHandle = (val) => {
  if (val === '0') {
    formObj.value.duishu1 = ''
    formObj.value.duishu2 = ''
    formObj.value.duishu3 = ''
  }
}
const toSubmit = () => {
  // formTwoP.value.submit()
  submitHandle()
}
const toReset = () => {
  console.log(formX)
  formObj.value = cloneDeep(formX)
}
defineExpose({
  toSubmit,
  toReset,
})
</script>

<template>
  <form @submit.prevent.stop="submitHandle" ref="formTwoX" class="form-flex form-quick-choose">
    <table class="t-1">
      <tbody>
        <tr class="bg2">
          <td colspan="4" class="tc">
            <strong class="red2">配数</strong>
            <SwitchGroup v-model="formObj.peishu" value="1"></SwitchGroup>
          </td>
        </tr>
        <tr class="match-input">
          <td colspan="4" class="tc">
            <div class="flex-inline gap4">
              <InputNum
                v-model="formObj.pei1"
                type="text"
                class="w70"
                boxnumber="1"
                name="pei1"
                digits="true"
                maxlength="10"
              ></InputNum>
              配,
              <InputNum
                v-model="formObj.pei2"
                type="text"
                class="w70"
                boxnumber="2"
                name="pei2"
                digits="true"
                maxlength="10"
              ></InputNum>
            </div>
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
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup v-model="formObj.containGroup" value="1"></SwitchGroup>
            二字现<strong class="red2">含</strong>
            <InputNum
              type="text"
              v-model="formObj.containVal"
              class="contain-filter-item w80"
              name="han"
              digits="true"
              maxlength="10"
            ></InputNum>
            二字现<strong class="red2">复式</strong>
            <InputNum
              type="text"
              v-model="formObj.multiVal"
              class="multiple-filter-item"
              name="fushi"
              digits="true"
              maxlength="10"
            ></InputNum>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup v-model="formObj.doubleGroup"></SwitchGroup>
            (<strong class="red2">双重</strong>)
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <SwitchGroup v-model="formObj.brotherGroup"></SwitchGroup>
            (<strong class="red2">二兄弟</strong>)
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
            <SwitchTwoComb
              v-model:group="formObj.oddGroup"
              v-model:check="formObj.oddCheckStr"
              title="单"
            ></SwitchTwoComb>
          </td>
          <td colspan="2" style="width: 50%">
            <SwitchTwoComb
              v-model:group="formObj.evenGroup"
              v-model:check="formObj.evenCheckStr"
              title="双"
            ></SwitchTwoComb>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="width: 50%">
            <SwitchTwoComb
              v-model:group="formObj.bigGroup"
              v-model:check="formObj.bigCheckStr"
              title="大"
            ></SwitchTwoComb>
          </td>
          <td colspan="2" style="width: 50%">
            <SwitchTwoComb
              v-model:group="formObj.smallGroup"
              v-model:check="formObj.smallCheckStr"
              title="小"
            ></SwitchTwoComb>
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
    outline: 1px solid var(--table-border-color);
  }

  /* Add your styles here */
}
</style>
