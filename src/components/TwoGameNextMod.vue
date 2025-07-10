<script setup>
import { ref, computed, provide, watch, nextTick } from 'vue'
import { range, padStart, chunk } from 'lodash-es'

// TwoGameNextMod is 二字定 模式1
defineOptions({
  name: 'TwoGameNextMod',
})
const emit = defineEmits(['change'])
const props = defineProps({
  gameType: {
    type: String,
    default: '3',
  },
  oddsList: {
    type: Array,
    default: () => [],
  },
})
const arr = range(100)
let data = arr.map((num, index) => {
  return {
    index: index,
    num: padStart(num, 2, '0'),
    value: '',
    // gameType: props.gameType,
    odds: '98.9',
    // posiH:0, // 横向
    // posiV:0, // 纵向
  }
})
let list = ref(data)
watch(
  list,
  () => {
    nextTick(() => {
      emit('change')
    })
  },
  { deep: true },
)
const listFormat = computed(() => {
  return chunk(list.value, 10)
})
let dataMap = new Map()
provide('addGameBox', function (gameBox) {
  // console.log(gameBox)
  dataMap.set(gameBox.num, gameBox)
})
const clickHandle = () => {}
// 获取所有选中
const getActives = () => {
  return Array.from(dataMap.values()).filter((item) => item.getActive())
}
const restActive = () => {
  list.value.forEach((item) => {
    item.value = ''
  })
}
const cancelHandle = () => {
  restActive()
}
defineExpose({ getActives, cancelHandle })
</script>

<template>
  <div class="two-game-next-mod">
    <table class="game-table">
      <thead>
        <tr class="title_wrap">
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
          <th class="title">
            <div class="flex-box title_box">
              <div class="flex-item">号码</div>
              <div class="flex-item red">金额</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in listFormat" :key="index">
          <td v-for="(item, sIndex) in items" :key="sIndex">
            <GameInputBox
              @click="clickHandle"
              :index="item.index"
              :odds="item.odds"
              :num="item.num"
              v-model="item.value"
              :posiH="index"
              :posiV="sIndex"
              :type="props.gameType"></GameInputBox>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less" scoped>
.two-game-next-mod {
  user-select: none;
  table.game-table {
    border-collapse: collapse;
    width: 100%;
    .title_wrap {
      background: orange;
    }
    td,
    th {
      border: 1px solid #333;
    }
    .btn-v {
      position: relative;
      cursor: pointer;
      height: 20px;
      &:before {
        position: absolute;
        content: '';
        top: 5px;
        left: 16px;
        border-top: 6px solid #333;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      }
    }
    .btn-h {
      position: relative;
      cursor: pointer;
      width: 20px;
      &:before {
        position: absolute;
        content: '';
        top: 10px;
        left: 5px;
        border-top: 6px solid transparent;
        border-left: 6px solid #333;
        border-bottom: 6px solid transparent;
      }
    }
  }

  .odds_ul {
    margin: 0;
    padding: 0;
    li {
      padding-left: 20px;
      display: inline-block;
    }
  }
}
</style>
