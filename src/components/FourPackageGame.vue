<script setup>
import { ref, computed, provide } from 'vue';
import { useGameStore } from '@/stores';
// import {emnum} from '@/lib/api.js'
import {chunk} from 'lodash-es'
// PackageGame is
defineOptions({
  name: "PackageGame"
});
const gameType = ref('11')
const props = defineProps({
  packageType: {
    type: String,
    default: 'four'
  }
})
const gameStore = useGameStore()
const pageno = ref('1')
// const options = ref([
//   {label: '第一页', value: '1'}
// ])
const packageGame = ref();
// const gameType = ref('7')
console.log(packageGame);
const list = computed(() => {
  return gameStore.packageInfo[`${props.packageType}Arr`].filter(item => item.gameType === gameType.value).map(item => ({
    ...item,
    active: true
  }))
})
const options = computed(() => {
  let arr = chunk(list.value, 100)
  return arr.map((subArr, index) => {
    return {label: `第${index+1}页`, value: '' + (index+1)}
  })
})
const listFormat = computed(() => {
  let arr = chunk(list.value, 100)
  return chunk(arr[pageno.value - 1], 10)
  // return chunk(list.value, 10)
})
const totalMoney = computed(() => {
  return list.value.reduce((before,item) => before + +item.value, 0)
})
let dataMap = new Map()
provide('addPgBox', function(gameBox) {
  // console.log(gameBox)
  dataMap.set(gameBox.num, gameBox)
})
</script>

<template>
    <CardBox ref="packageGame"  class="package-game" padding="0" minHeight="346px">
    <template #header>
      <slot name="header">
        <div class="flex-box gap20 flex-ch">
          <div class="red bold" >四字定 </div>
          <div class="bold yellow" >总金额: {{totalMoney}}</div>
          <div><SelectBox v-model="pageno" :options="options"></SelectBox></div>
        </div>
      </slot>
    </template>
    <table class="package_table">
      <thead>
        <tr>
          <th v-for="key in 10" :key="key">号码/金额</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in listFormat" :key="index">
          <td v-for="(sub, sindex) in items" :key="sindex"  :class="sub.active? 'active': ''">
            <PgBox v-model:type="gameType" v-model:active="sub.active" v-model:value="sub.value" :betNo="sub.betNo" :num="sub.num" :x="sindex" :y="index"></PgBox>
          </td>
        </tr>
      </tbody>
    </table>
    <div>

    </div>
    <template #footer> <PackageBetForm :packageType="packageType"></PackageBetForm></template>
  </CardBox>
</template>

<style lang="less" scoped>
.package-game {
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
  :deep(.card-box-bd) {
    height:346px;
    overflow: auto;
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
    td.active {
      background:rgb(244,231,221)
    }
  }
}
</style>
