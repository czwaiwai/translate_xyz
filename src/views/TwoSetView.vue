<script setup>
import { ref, computed, inject } from 'vue'
import { emnum } from '@/lib/api'
// TwoSetView is 二字定
defineOptions({
  name: 'TwoSetView',
})

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
</script>

<template>
  <PageLay class="two-set-view">
    <CardBox title="" :class="isMobile ? 'mobile_card_box' : ''">
      <template #header>
        <div class="flex-box" :class="isMobile ? 'flex-flow' : ''">
          <div>
            <SelectBox v-model="mode" :options="options"></SelectBox>
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
          <div class="yellow bold">笔数：1 总金额： 0</div>
        </div>
      </template>
      <TwoGameMod v-if="mode === '2'" :gameType="gameType"></TwoGameMod>
      <TwoGameNextMod v-if="mode === '1'" :gameType="gameType"></TwoGameNextMod>
    </CardBox>
    <CardBox title="发送框">
      <form
        @submit.prevent="submitHandle"
        class="flex-inline gap10"
        :class="isMobile ? 'flex-flow' : ''"
      >
        <div class="flex-inline gap10">
          <label class="fs22">赔率 <input name="betNo" type="text" class="w60 input-h36" /></label>
          <label class="fs22">号码 <input name="betNo" type="text" class="w60 input-h36" /></label>
          <label class="fs22">金额 <input name="money" type="text" class="w60 input-h36" /></label>
        </div>
        <div class="flex-inline gap10">
          <button type="submit" class="pri-btn-h36">{{ betBtnText }}</button>
          <button type="button" @click="quickHandle" class="">取消</button>
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
