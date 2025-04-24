<script setup>
import { ref, computed } from 'vue';
import { useGameStore } from '@/stores';
import {emnum} from '@/lib/api.js'
import {chunk} from 'lodash-es'
// PackageGame is
defineOptions({
  name: "PackageGame"
});
const gameType = defineModel({
  default: '7'
})
defineProps({
  packageType: {
    type: String,
    default: 'three'
  }
})
const gameStore = useGameStore()
const packageGame = ref();
// const gameType = ref('7')
console.log(packageGame);
const list = computed(() => {
  return gameStore.packageInfo.threeArr
})
const listFormat = computed(() => {
  return chunk(list.value, 10)
})
</script>

<template>
    <CardBox ref="packageGame"  class="package-game" padding="0">
    <template #header>
      <slot name="header">
        <div class="mode_radio">
          <a-radio-group v-model="gameType" >
            <a-radio v-for="(item, index) in emnum.threeCate" :key="index" :value="item.value">
              <template #radio="{ checked }">
                <a-link :status="checked?'warning':''" >{{ item.label }}</a-link>
              </template>
            </a-radio>
          </a-radio-group>
          <span class="yellow">总金额: 0</span>
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
          <td v-for="(sub, sindex) in items" :key="sindex">
            <PgBox v-model:type="gameType" v-model:active="sub.active" :num="sub.num" :x="sindex" :y="index"></PgBox>
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
  .package_table {
    width: 100%;
    min-height: 346px;
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
