<script setup>
import { ref, computed, shallowRef, inject } from 'vue'
import { emnum } from '@/lib/api'
import { chunk } from 'lodash-es'
import FormTwoP from '@/components/FormTwoP.vue'
import FormThreeP from '@/components/FormThreeP.vue'
import FormFourP from '@/components/FormFourP.vue'
import FormTwoX from '@/components/FormTwoX.vue'
import FormThreeX from '@/components/FormThreeX.vue'
import FormFourX from '@/components/FormFourX.vue'
// QuickChooseView is
defineOptions({
  name: 'QuickChooseView',
})
const gameType = ref('20')
const isMobile = inject('isMobile')
const topCate = computed(() => {
  const [all, ...arr] = emnum.topCate
  return arr
})
const tabsObj = {
  20: FormTwoP,
  30: FormThreeP,
  40: FormFourP,
  21: FormTwoX,
  31: FormThreeX,
  41: FormFourX,
}
const formRef = ref()
const list = ref([])
const genNoHandle = () => {
  formRef.value.toSubmit()
}

const resetHandle = () => {
  list.value = []
  formRef.value.toReset()
}
const submitData = (arr) => {
  list.value = arr
}
const listFormat = computed(() => {
  return chunk(list.value, 8)
})
const showByX = computed(() => {
  return ['21', '31', '41'].includes(gameType.value)
})
const betType = inject('betType', '')
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
  <PageLay class="quick-choose-view">
    <div class="flex-box gap6" :class="isMobile ? 'flex-wrap' : ''">
      <div class="flex-item">
        <CardBox class="flex-item" title="生成号码框" padding="0" minHeight="300px">
          <table class="nums-table">
            <tbody>
              <tr v-for="(items, index) in listFormat" :key="index">
                <td v-for="(num, sIndex) in items" :key="sIndex" width="12.5%">{{ num }}</td>
              </tr>
            </tbody>
          </table>
        </CardBox>
        <CardBox
          class="flex-item"
          title="发送框"
          flexBox
          padding="0"
          :bdClassName="isMobile ? 'flex-flow' : 'flex-cv'"
        >
          <form
            class="flex-item flex-inline ptb6 plr4 gap10"
            :class="isMobile ? 'flex-flow' : 'flex-cv'"
          >
            <div class="flex-inline gap10">
              <label class="fs22 flex-inline gap4 flex-cv"
                >赔率 <input class="w60 input-h36"
              /></label>
              <label class="fs22 flex-inline gap4 flex-cv"
                >金额 <input class="w60 input-h36"
              /></label>
              <button class="pri-btn-h36">{{ betBtnText }}</button>
            </div>
            <!-- <template v-if="!showByX">
              <button class="pri-btn-h36">录入汇总表</button>
            </template> -->
          </form>
          <div class="div-green-border" :class="isMobile ? 'flex-box' : ''">
            <div class="w130">笔数：{{ list.length }}</div>
            <div class="w130">金额：0元</div>
          </div>
        </CardBox>
      </div>
      <div class="flex-item">
        <CardBox class="other_head" padding="0">
          <template #header>
            <div>
              <a-radio-group class="tab_radio" v-model="gameType">
                <a-radio v-for="(item, index) in topCate" :key="index" :value="item.value">
                  <template #radio="{ checked }">
                    <div class="radio-btn" :class="checked ? 'active' : ''">{{ item.label }}</div>
                  </template>
                </a-radio>
              </a-radio-group>
            </div>
          </template>
          <Component ref="formRef" :is="tabsObj[gameType]" @submitData="submitData"></Component>
          <template #footer>
            <div class="flex-box flex-ch flex-cv gap10 bt ptb4">
              <button @click="genNoHandle" class="pri-btn-h36">生成</button>
              <button @click="resetHandle" class="pri-btn-h36">复位</button>
            </div>
          </template>
        </CardBox>
      </div>
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.quick-choose-view {
  .tab_radio {
    display: flex;
    :deep(.arco-radio) {
      flex: 1;
      margin: 0;
      padding: 0;
    }
    :deep(.arco-radio + .arco-radio) {
      border-left: 1px solid #333;
    }
  }
  .other_head {
    :deep(.card-box-hd) {
      background: #fff;
      height: 38px;
      padding: 0;
    }
    .radio-btn {
      width: 100%;
      height: 37px;
      line-height: 37px;
      color: #333;
      text-align: center;
      &.active {
        background: #a9e58c;
      }
    }
  }
  .nums-table {
    td {
      border: 1px solid #000;
      height: 25px;
      text-align: center;
    }
  }
  /* Add your styles here */
}
</style>
