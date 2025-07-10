<script setup>
import { ref, computed, inject } from 'vue'
import api, { emnum } from '@/lib/api'
import { useUserStore, useGameStore } from '@/stores'
import { Message } from '@arco-design/web-vue'
// TwoSetView is 二字定
defineOptions({
  name: 'TwoSetView',
})
const userStore = useUserStore()
const gameStore = useGameStore()
const mode = ref('2')
const gameType = ref('3')
const options = [
  { label: '模式1', value: '1' },
  { label: '模式2', value: '2' },
]
const betType = inject('betType', '')
const isMobile = inject('isMobile', false)
const betBtnText = computed(() => {
  if (betType.value === 'bet') {
    return '下单'
  }
  if (betType.value === 'eat') {
    return '挂单'
  }
  return '确认下注'
})
const twoGameMod = ref()
const formObj = ref({
  odds: '',
  amount: '',
})
const twoGameNums = ref(0)
const changeHandle = () => {
  twoGameNums.value = twoGameMod.value.getActives().length
}
const twoGameTotal = computed(() => {
  if (!formObj.value.amount) return 0
  if (isNaN(formObj.value.amount)) return 0
  return parseFloat(twoGameNums.value * formObj.value.amount).toFixed(2)
})
const submitHandle = async () => {
  await api.tradeRecordBet({
    drawNo: gameStore.gameInfo.serialNum,
    betType: betType.value === 'bet' ? 'buy' : 'sell',
    items: twoGameMod.value.getActives().map((item) => {
      if (mode.value === '2') {
        return {
          code: item.getCode(),
          category: '20',
          gameType: gameType.value,
          amount: formObj.value.amount,
          odds: formObj.value.odds,
        }
      } else {
        return {
          code: item.getCode(),
          category: '20',
          gameType: gameType.value,
          amount: item.getInput(),
          odds: formObj.value.odds,
        }
      }
    }),
    userId: userStore.userInfo.id,
  })
  Message.success('下注成功')
  resetHandle()
}
const resetHandle = () => {
  twoGameNums.value = 0
  formObj.value.odds = ''
  formObj.value.amount = ''
  twoGameMod.value.cancelHandle()
}
const modeChangeHandle = () => {
  resetHandle()
}
</script>

<template>
  <PageLay class="two-set-view">
    <CardBox title="" :class="isMobile ? 'mobile_card_box' : ''">
      <template #header>
        <div class="flex-box" :class="isMobile ? 'flex-flow' : ''">
          <div>
            <SelectBox v-model="mode" :options="options" @change="modeChangeHandle"></SelectBox>
            <label class="ml10 bold">类别</label>
          </div>
          <div class="mode_radio">
            <a-radio-group v-model="gameType">
              <a-radio v-for="(item, index) in emnum.twoCate" :key="index" :value="item.value">
                <template #radio="{ checked }">
                  <a-link :status="checked ? 'warning' : ''">{{ item.label }}</a-link>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
          <div class="yellow bold">笔数：{{ twoGameNums }} 总金额： {{ twoGameTotal }}</div>
        </div>
      </template>
      <TwoGameMod
        v-if="mode === '2'"
        ref="twoGameMod"
        :gameType="gameType"
        @change="changeHandle"></TwoGameMod>
      <TwoGameNextMod v-if="mode === '1'" ref="twoGameMod" :gameType="gameType"></TwoGameNextMod>
    </CardBox>
    <CardBox title="发送框">
      <form
        @submit.prevent="submitHandle"
        class="flex-inline gap10"
        :class="isMobile ? 'flex-flow' : ''">
        <div class="flex-inline gap10">
          <label class="fs22">
            赔率
            <input v-model="formObj.odds" name="odds" type="text" class="w60 input-h36" />
          </label>
          <!-- <label class="fs22">号码 <input name="betNo" type="text" class="w60 input-h36" /></label> -->
          <label v-if="mode === '2'" class="fs22">
            金额
            <input v-model="formObj.amount" name="money" type="text" class="w60 input-h36" />
          </label>
        </div>
        <div class="flex-inline gap10">
          <button type="submit" class="pri-btn-h36">{{ betBtnText }}</button>
          <button type="button" @click="resetHandle" class="">取消</button>
        </div>
        <!-- <button type="button" @click="quickHandle" class="ml10 pri-btn-h36">极速快打</button> -->
      </form>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.two-set-view {
  /* Add your styles here */
  .mobile_card_box {
    :deep(.card-box-hd) {
      height: auto;
    }
    :deep(.card-box-bd) {
      overflow: auto;
      padding: 0;
    }
  }
  .mode_radio {
    :deep(.arco-radio) {
      margin-right: 6px;
      .arco-link {
        color: #fff;
        &.arco-link-status-warning {
          color: red;
        }
        &:hover {
          background: transparent;
        }
      }
    }
  }
}
</style>
