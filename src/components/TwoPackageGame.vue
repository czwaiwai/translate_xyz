<script setup>
import { ref, computed, provide } from 'vue'
import { useGameStore } from '@/stores'
import { emnum } from '@/lib/api'
import { getTwoLabelNum } from '@/lib/utils.js'
import { range, chunk, padStart } from 'lodash-es'
// TwoPackageGame is 二字定包牌
defineOptions({
  name: 'TwoPackageGame',
})
const twoPackageGame = ref()
console.log(twoPackageGame)
// const message = ref('Hello, TwoPackageGame');
const gameType = ref('1')
const gameStore = useGameStore()
const arr = range(100)
let data = arr.map((num, index) => {
  return {
    index: index,
    num: padStart(num, 2, '0'),
    betNo: '',
    value: '',
    active: false,
    // gameType: props.gameType,
    odds: '98.9',
    // posiH:0, // 横向
    // posiV:0, // 纵向
  }
})
let list = ref(data)
// {
//   betNo:'',
//   nums: '',
//   value: '',
// }
// 转换以num为key的对象，方便选取
const betsObj = computed(() => {
  console.log(gameStore.packageInfo)
  return gameStore.packageInfo.twoArr
    .filter((item) => item.gameType === gameType.value)
    .reduce((before, item) => {
      before[item.betNo] = item
      return before
    }, {})
})
const listFormat = computed(() => {
  console.log(betsObj.value)
  list.value.forEach((item) => {
    let betNo = getTwoLabelNum(item.num, gameType.value)
    item.betNo = betNo
    let betItem = betsObj.value[item.betNo]
    if (betItem) {
      console.log('匹配好的---', betItem)
      item.active = true
      item.value = betItem.value
      // item.odds  = betItem.odds //有接口后实现
    } else {
      item.active = false
      item.value = ''
    }
  })
  return chunk(list.value, 10)
})
let dataMap = new Map()
provide('addPgBox', function (gameBox) {
  dataMap.set(gameBox.num, gameBox)
})
</script>

<template>
  <CardBox ref="twoPackageGame" class="two-package-game" padding="0">
    <template #header>
      <div class="mode_radio">
        <a-radio-group v-model="gameType">
          <a-radio v-for="(item, index) in emnum.twoCate" :key="index" :value="item.value">
            <template #radio="{ checked }">
              <a-link :status="checked ? 'warning' : ''">{{ item.label }}</a-link>
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
          <td v-for="(sub, sindex) in items" :key="sindex" :class="sub.active ? 'active' : ''">
            <PgBox
              v-model:type="gameType"
              v-model:active="sub.active"
              v-model:value="sub.value"
              :betNo="sub.betNo"
              :num="sub.num"
              :x="sindex"
              :y="index"
            ></PgBox>
          </td>
        </tr>
      </tbody>
    </table>
    <div></div>
    <template #footer> <PackageBetForm packageType="two"></PackageBetForm></template>
  </CardBox>
</template>

<style lang="less" scoped>
.two-package-game {
  .mode_radio {
    text-align: center;
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
        background: rgb(224, 255, 209);
      }
    }
    td,
    th {
      padding: 4px;
      outline: none;
      font-weight: bold;
      text-align: left;
      border: 1px solid var(--table-border-color);
    }
    td.active {
      background: rgb(244, 231, 221);
    }
  }
}
</style>
