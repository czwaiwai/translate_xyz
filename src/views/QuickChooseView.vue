<script setup>
import { ref,computed, shallowRef } from 'vue';
import { emnum } from '@/lib/api';
import FormTwoP from '@/components/FormTwoP.vue';
import FormThreeP from '@/components/FormThreeP.vue';
import FormFourP from '@/components/FormFourP.vue';
import FormTwoX from '@/components/FormTwoX.vue';
import FormThreeX from '@/components/FormThreeX.vue';
import FormFourX from '@/components/FormFourX.vue';
// QuickChooseView is
defineOptions({
  name: "QuickChooseView"
});
const gameType = ref('20')

const topCate = computed(() => {
  const [all, ...arr] = emnum.topCate
  return arr
})
const tabsObj = {
  '20': FormTwoP,
  '30': FormThreeP,
  '40': FormFourP,
  '21': FormTwoX,
  '31': FormThreeX,
  '41': FormFourX,
}
const formRef = ref()
const genNoHandle = () => {
  formRef.value.toSubmit()
}
</script>

<template>
  <PageLay class="quick-choose-view">
    <div class="flex-box gap6">
      <div class="flex-item">
        <CardBox class="flex-item" title="生成号码框" padding="0" minHeight="300px">
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </CardBox>
        <CardBox class="flex-item" title="发送框" flexBox padding="0">
          <form class="flex-item flex-inline ptb6 plr4 flex-cv gap10">
            <label class="fs22 flex-inline flex-cv ">金额 <input class="mlr4 w60 input-h36"></label>
            <button class="pri-btn-h36 ">下注</button>
            <button class="pri-btn-h36 ">包牌</button>
            <button class="pri-btn-h36 ">录入汇总表</button>
          </form>
          <div class="div-green-border " >
            <div class="gbb w130">笔数：0</div>
            <div class="w130">金额：0元</div>
          </div>
        </CardBox>
      </div>
      <div class="flex-item">
        <CardBox class="other_head" padding="0" >
          <template #header>
            <div>
              <a-radio-group  class="tab_radio" v-model="gameType" >
                <a-radio v-for="(item, index) in topCate" :key="index" :value="item.value">
                  <template #radio="{ checked }">
                    <div class="radio-btn" :class="checked?'active':''" >{{ item.label }}</div>
                  </template>
                </a-radio>
              </a-radio-group>
            </div>
          </template>
          <!-- <FormTwoP ref="formTwoP"  v-if="gameType==='20'"></FormTwoP>
          <FormThreeP ref="formThreeP"  v-if="gameType==='30'"></FormThreeP>
          <FormFourP ref="formFourP"  v-if="gameType==='40'"></FormFourP>
          <FormTwoX  ref="formTwoX" v-if="gameType==='21'"></FormTwoX>
          <FormThreeX  v-if="gameType==='31'"></FormThreeX>
          <FormFourX  v-if="gameType==='41'"></FormFourX> -->
          <Component ref="formRef" :is="tabsObj[gameType]"></Component>
          <template #footer>
            <div class="flex-box flex-ch flex-cv gap10 bt ptb4">
              <button @click="genNoHandle" class="pri-btn-h36 ">生成</button>
              <button @click="resetHandle" class="pri-btn-h36 ">复位</button>
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
    display:flex;
    :deep(.arco-radio) {
      flex:1;
      margin:0;
      padding:0;
    }
    :deep(.arco-radio + .arco-radio) {
      border-left: 1px solid #333;
    }
  }
  .other_head {
    :deep(.card-box-hd) {
      background:#FFF;
      height:38px;
      padding:0;
    }
    .radio-btn {
      width:100%;
      height:37px;
      line-height: 37px;
      color:#333;
      text-align: center;
      &.active {
        background:#a9e58c;
      }
    }
  }
  /* Add your styles here */
}
</style>
