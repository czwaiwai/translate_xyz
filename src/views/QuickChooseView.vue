<script setup>
import { ref } from 'vue';
import { emnum } from '@/lib/api';
// QuickChooseView is
defineOptions({
  name: "QuickChooseView"
});
const gameType = ref('1')
</script>

<template>
  <PageLay class="quick-choose-view">
    <div class="flex-box gap6">
      <div class="flex-item">
        <CardBox class="flex-item" title="生成号码框"></CardBox>
        <CardBox class="flex-item" title="发送框" flexBox padding="0">
          <form class="flex-item flex-box ">
            <label>金额 <input class="w60"></label>
            <button class="pri-btn">下注</button>
            <button class="pri-btn">包牌</button>
            <button class="pri-btn">录入汇总表</button>
          </form>
          <div class="div-green-border">
            <div class="gbb">笔数：0</div>
            <div>金额：0元</div>
          </div>
        </CardBox>
      </div>

      <CardBox class="flex-item other_head" >
        <template #header>
          <div>
            <a-radio-group  class="tab_radio" v-model="gameType" >
              <a-radio v-for="(item, index) in emnum.twoCate" :key="index" :value="item.value">
                <template #radio="{ checked }">
                  <div class="radio-btn" :class="checked?'active':''" >二定位</div>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
        </template>
        <FormTwoP v-if="gameType==='1'"></FormTwoP>
        <FormThreeP  v-if="gameType==='2'"></FormThreeP>
        <FormFourP  v-if="gameType==='3'"></FormFourP>
        <FormTwoX  v-if="gameType==='4'"></FormTwoX>
        <FormThreeX  v-if="gameType==='5'"></FormThreeX>
        <FormFourX  v-if="gameType==='6'"></FormFourX>
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
