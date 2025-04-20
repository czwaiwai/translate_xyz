<script setup>
import { ref } from 'vue';
import { emnum } from '@/lib/api';
// TwoSetView is 二字定
defineOptions({
  name: "TwoSetView"
});


const mode = ref('2')
const gameType = ref('3')
const options = [
  {label: '模式1', value:'1'},
  {label: '模式2', value:'2'}
]

</script>

<template>
  <PageLay class="two-set-view">
    <CardBox title="" >
      <template #header>
        <div class="flex-box">
          <SelectBox v-model="mode" :options="options"></SelectBox>
          <label class="ml10 bold">类别</label>
          <div class="mode_radio">
            <a-radio-group v-model="gameType" >
              <a-radio v-for="(item, index) in emnum.twoCate" :key="index" :value="item.value">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >{{ item.label }}</a-link>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
          <div class="yellow bold">
            笔数：1 总金额： 0
          </div>
        </div>
      </template>
      <TwoGameMod v-if="mode==='2'" :gameType="gameType" ></TwoGameMod>
      <TwoGameNextMod v-if="mode==='1'" :gameType="gameType" ></TwoGameNextMod>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.two-set-view {
  /* Add your styles here */
  .mode_radio {
    :deep(.arco-radio) {
      margin-right:6px;
      .arco-link {
        color:#fff;
        &.arco-link-status-warning{
          color:red;
        }
        &:hover {
          background:transparent;
        }
      }
    }
  }
}
</style>
