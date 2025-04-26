<script setup>
import { ref, computed, provide} from 'vue';
import { emnum } from '@/lib/api';
import {range, chunk, padStart} from 'lodash-es'
// TwoPackageGame is 二字定包牌
defineOptions({
  name: "TwoPackageGame"
});
const twoPackageGame = ref();
console.log(twoPackageGame);
// const message = ref('Hello, TwoPackageGame');
const gameType = ref('1')
const arr = range(100)
let data = arr.map((num, index) => {
  return {
      index: index,
      num: padStart(num,2,'0'),
      value: '',
      active: false,
      // gameType: props.gameType,
      odds: '98.9',
      // posiH:0, // 横向
      // posiV:0, // 纵向
  }
})
let list = ref(data)
const listFormat = computed(() => {
  return chunk(list.value, 10)
})
let dataMap = new Map()
provide('addPgBox', function(gameBox) {
  // console.log(gameBox)
  dataMap.set(gameBox.num, gameBox)
})
</script>

<template>
  <CardBox ref="twoPackageGame" class="two-package-game" padding="0">
    <template #header>
      <div class="mode_radio">
        <a-radio-group v-model="gameType" >
          <a-radio v-for="(item, index) in emnum.twoCate" :key="index" :value="item.value">
            <template #radio="{ checked }">
              <a-link :status="checked?'warning':''" >{{ item.label }}</a-link>
            </template>
          </a-radio>
        </a-radio-group>
        <span class="yellow">总金额: 0</span>
      </div>
    </template>
    <table class="package_table">
      <thead>
        <tr>
          <th v-for="key in 10" :key="key">号码/金额</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in listFormat" :key="index">
          <td v-for="(sub, sindex) in items" :key="sindex">
            <PgBox v-model:type="gameType" v-model:active="sub.active" :num="sub.num" :x="sindex" :y="index"></PgBox>
          </td>
        </tr>
      </tbody>
    </table>
    <div>

    </div>
    <template #footer> <PackageBetForm packageType="two"></PackageBetForm></template>
  </CardBox>
</template>

<style lang="less" scoped>
.two-package-game {
  .mode_radio {
    text-align:center;
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
  .package_table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border: 0;
    padding: 0;
    margin: 0;
    thead {
      th {
        text-align: center;
        background: rgb(224,255,209);
      }
    }
    td,
    th {
      padding: 4px;
      outline: none;
      font-weight: bold;
      text-align: left;
      border: 1px solid #bdf0bc;
    }
  }
}
</style>
