<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
import { useGameStore } from '@/stores';
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
const routeToQuick = () => {
  router.push({name: 'QuickBetView'})
}
const historyHandle = () => {

}
const clearHanlde = () => {
  gameStore.clearPackageData(props.packageType)
}
const submitHandle = (event) => {
  console.log(event)
  const formData = new FormData(event.target)
  console.log(formData)
  let allRound = formData.get('allRound')
  let num =  formData.get('num')
  let money = formData.get('money')
  console.log(allRound,num, money)
}
</script>

<template>

    <div ref="packageBetForm" class="package-bet-form bt">
    <div class="flex-box  ptb6 plr4">
        <form @submit.prevent="submitHandle"  class="flex-item flex-inline gap10">
          <label class="flex-inline flex-cv ">全转 <input name="allRound" type="checkbox" class="ml4" ></label>
          <label class="flex-inline flex-cv fs22">号码 <input name="num" type="text" class="ml4 w60 input_h36" required  maxlength="4" ></label>
          <label class="flex-inline flex-cv fs22">金额 <input name="money" type="text" class="mlr4 w60 input_h36"  required > 元</label>
          <button class="pri-btn-v" type="submit"  >确定</button>
       </form>
      <div class="flex-inline flex-cv"><button class="pri-btn">包牌预下注使用说明</button></div>
    </div>
    <div class="flex-box ptb6 plr4 gbt">
      <div class="flex-item flex-inline gap10  ">
        <button @click.stop="historyHandle" class="pri-btn">{{packObj[packageType]}}汇总历史</button>
        <button class="pri-btn">下注</button>
        <button class="pri-btn">包牌</button>
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
