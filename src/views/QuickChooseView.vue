<script setup>
import { ref,computed } from 'vue';
import { emnum } from '@/lib/api';
// QuickChooseView is
defineOptions({
  name: "QuickChooseView"
});
const gameType = ref('20')

const topCate = computed(() => {
  const [all, ...arr] = emnum.topCate
  return arr
})
</script>

<template>
  <PageLay class="quick-choose-view">
    <div class="flex-box gap6">
      <div class="flex-item">
        <CardBox class="flex-item" title="生成号码框"></CardBox>
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

      <CardBox class="flex-item other_head" padding="0" >
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
        <FormTwoP v-if="gameType==='20'"></FormTwoP>
        <FormThreeP  v-if="gameType==='30'"></FormThreeP>
        <FormFourP  v-if="gameType==='40'"></FormFourP>
        <FormTwoX  v-if="gameType==='21'"></FormTwoX>
        <FormThreeX  v-if="gameType==='31'"></FormThreeX>
        <FormFourX  v-if="gameType==='41'"></FormFourX>
      </CardBox>
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
