<script setup>
import { ref, computed, provide } from 'vue';
import { range, padStart, chunk} from 'lodash-es';

// TwoGameNextMod is 二字定 模式1
defineOptions({
  name: "TwoGameNextMod"
});
const props = defineProps({
  gameType: {
    type: String,
    default: '3'
  },
  oddsList: {
    type: Array,
    default: () => []
  }
})
const arr = range(100)
let data = arr.map((num, index) => {
  return {
      index: index,
      num: padStart(num,2,'0'),
      value: '',
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
provide('addGameBox', function(gameBox) {
  // console.log(gameBox)
  dataMap.set(gameBox.num, gameBox)
})
</script>

<template>
  <div class="two-game-next-mod">
    <table class="game-table" >
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
      <tr  v-for="(items, index) in listFormat" :key="index">
        <td v-for="(item,sIndex) in  items" :key="sIndex">
          <GameInputBox @click="clickHandle" :index="item.index" :odds="item.odds" :num="item.num" v-model="item.value" :posiH="index" :posiV="sIndex" :type="props.gameType"></GameInputBox>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="10">
          <!-- <div class="flex-box "> -->
            <div class="sub-form tc p4">
              <button class="pri-btn">下注</button>
              <button class="pri-btn ml10">包牌</button>
            </div>
          <!-- </div> -->
        </td>
      </tr>
      <tr>
        <td class="tr" colspan="10">
          <ul class="odds_ul">
            <li >包牌金额：</li>
            <li>20组: <span class="red">98.2</span></li>
            <li>25组: <span class="red">98.2</span></li>
            <li>20组: <span class="red">98.2</span></li>
            <li>30组: <span class="red">98.2</span></li>
            <li>45组: <span class="red">98.2</span></li>
            <li>50组: <span class="red">98.2</span></li>
            <li>60组: <span class="red">98.2</span></li>
            <li>70组: <span class="red">98.2</span></li>
            <li>80组: <span class="red">98.2</span></li>
          </ul>
        </td>
      </tr>
    </tfoot>
  </table>
  </div>
</template>

<style lang="less" scoped>
.two-game-next-mod{
  user-select: none;
  table.game-table {
    border-collapse: collapse;
    width: 100%;
    .title_wrap {
      background:orange;
    }
    td,
    th {
      border: 1px solid #333;
    }
    .btn-v {
      position:relative;
      cursor: pointer;
      height:20px;
      &:before {
        position:absolute;
        content: "";
        top:5px;
        left: 16px;
        border-top: 6px solid #333;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
       }
    }
    .btn-h {
      position:relative;
      cursor: pointer;
      width: 20px;
      &:before {
        position:absolute;
        content: "";
        top: 10px;
        left: 5px;
        border-top: 6px solid transparent;
        border-left: 6px solid #333;
        border-bottom: 6px solid transparent;
       }
    }
  }

  .odds_ul {
    margin:0;
    padding:0;
    li {
      padding-left:20px;
      display: inline-block;
    }
  }
}
</style>
