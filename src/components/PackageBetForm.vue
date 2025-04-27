<script setup>
import { ref, h } from 'vue';
import {capitalize} from 'lodash-es'
import { dialog } from '@/lib/dialog.js'
import { queryPackageByNum, coverToBets, queryTypeByNum } from '@/lib/utils.js'
import { useRouter, useRoute } from 'vue-router'
import { useGameStore } from '@/stores';
import TableHistory from './TableHistory.vue';
import TableBets from './TableBets.vue'
// PackageBetForm is
defineOptions({
  name: "PackageBetForm"
});
const props = defineProps({
  packageType: {
    type: String,
    default: 'two' // two three four
  }
})
const packObj = {
  two: '二字定包牌',
  three: '三字定包牌',
  four: '四字定包牌'
}
const gameStore = useGameStore()
const packageBetForm = ref();
console.log(packageBetForm);
const router = useRouter()
const route = useRoute()
const routeToQuick = () => {
  router.push({name: 'QuickBetView'})
}
const historyHandle = () => {
  dialog({
    title: `预下注汇总`,
    content: () => h(TableHistory),
    width: 780,
    footer: false
  })
}
const clearHanlde = async () => {
  await dialog.confirm('是否要一键清除二字定(xxxx)包牌汇总注单')
  gameStore.clearPackageData(props.packageType)
}
const baoHandle = () => {
  dialog.alert('未选择任何号码！')
}
const betHandle = () => {
  // dialog.alert('未选择任何号码！')
  dialog({
    title: `确认`,
    content: () => h(TableBets, {ref: 'tabBet',list: gameStore.packageInfo[`${props.packageType}Arr`]} ),
    width: 480,
    // footer: false
  }).then(res => {
    const tabBet = ref()
    console.log(tabBet)
  })
}
const formObj = ref({
  transform: false,
  num: '',
  money: '',
})
const inputSquare = ref()
const inputMoney = ref()
const submitHandle = (event) => {
  // console.log(event)
  // const formData = new FormData(event.target)
  // console.log(formData)
  console.log(formObj)
  console.log(queryPackageByNum(formObj.value.num))
  // 验证是不是有效的num

  console.log(route)
  if(!inputSquare.value.verfiInput()) return
  if(!inputMoney.value.verfiInput()) return
  let packageType = queryPackageByNum(formObj.value.num)
  console.log('当前要添加的组是',packageType)
  gameStore.setPackageData(packageType, coverToBets(formObj.value))
  // 清空表单
  formObj.value.num = ''
  formObj.value.money = ''
  // 如果下注的route不是当前route则跳转到对应的route中
  let routeName = capitalize(packageType) + 'PackageView'
  if (routeName !== route.name) {
    router.push({name: routeName})
  }
  console.log(coverToBets(formObj.value))
  //
  // queryTypeByNum
  // console.log(setPackageData, '---')
  // console.log(queryTypeByNum(formObj.value.num))
  // let transform = formData.get('transform')
  // let num =  formData.get('num')
  // let money = formData.get('money')
  // console.log(transform,num, money)
}
</script>

<template>

    <div ref="packageBetForm" class="package-bet-form bt">
    <div class="flex-box  ptb6 plr4">
        <form @submit.prevent="submitHandle"  class="flex-item flex-inline gap10">
          <label class="flex-inline flex-cv ">全转 <input v-model="formObj.transform" name="transform" type="checkbox" class="ml4" ></label>
          <label class="flex-inline flex-cv fs22">号码 <InputSquare ref="inputSquare" v-model="formObj.num" name="num" class="ml4 w60 input-h36"   maxlength="4"  required></InputSquare></label>
          <label class="flex-inline flex-cv fs22">金额 <InputNumber ref="inputMoney" v-model="formObj.money" name="money" type="text" class="mlr4 w60 input-h36"  required ></InputNumber> 元</label>
          <button class="pri-btn-v" type="submit"  >确定</button>
       </form>
      <div class="flex-inline flex-cv"><button class="pri-btn">包牌预下注使用说明</button></div>
    </div>
    <div class="flex-box ptb6 plr4 gbt">
      <div class="flex-item flex-inline gap10  ">
        <button @click.stop="historyHandle" class="pri-btn">{{packObj[packageType]}}汇总历史</button>
        <button @click="betHandle" class="pri-btn">下注</button>
        <button @click="baoHandle" class="pri-btn">包牌</button>
        <button @click="clearHanlde" class="pri-btn">一键清除</button>
        <div>总笔数：2 总金额：<span class="red">2</span>元</div>
        <div>包牌组： <span class="blue">暂无满足的包牌组。</span></div>
      </div>
      <div><button @click="routeToQuick" class="pri-btn">快选</button></div>
    </div>
    </div>
</template>

<style lang="less" scoped>
.package-bet-form {
  /* Add your styles here */
  background: rgb(255,244,192	)

}
</style>
