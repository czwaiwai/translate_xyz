<script setup>
import { ref, provide, computed } from 'vue';
import { range, padStart, chunk} from 'lodash-es';
// 二字定模式2
defineOptions({
  name: "TwoGameMod"
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
      // gameType: props.gameType,
      odds: '98.9',
      // posiH:0, // 横向
      // posiV:0, // 纵向
      active: false, // 是否选中
  }
})
let list = ref(data)

let dataMap = new Map()
provide('addGameBox', function(gameBox) {
  // console.log(gameBox)
  dataMap.set(gameBox.num, gameBox)
})
const vHandle = (posiV) => {
  Array.from(dataMap.values()).filter(item => item.posiV === posiV).map(item => item.toggle())
}
const hHandle = (posiH) => {
  Array.from(dataMap.values()).filter(item => item.posiH === posiH).map(item => item.toggle())
}
const clickHandle = (gameItem) => {
  dataMap.get(gameItem.num).toggle()
}
const posiValues = ref([])
const listFormat = computed(() => {
  console.log(posiValues.value, '????')
  list.value.forEach(item => {
    item.active = posiValues.value.includes(item.num)
  })
  // list.value.forEach(item => {
  //   if(containValue.value && item.num.includes(containValue.value)) {
  //     item.active = true
  //   } else {
  //     item.active = false
  //   }
  // })
  return chunk(list.value, 10)
})
const getValues = () => {
  return Array.from(dataMap.values())
}
// 清空选中
const restActive = () => {
  getValues().forEach(item => item.toggle(false))
}
// 获取所有选中
const getActives = () => {
  return Array.from(dataMap.values()).filter(item => item.active)
}
defineExpose({getActives, restActive})
</script>
<template>
  <div class="two-game-mod">
  <table class="game-table" >
    <thead>
      <tr>
        <td ></td>
        <td @click="vHandle(0)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(1)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(2)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(3)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(4)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(5)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(6)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(7)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(8)" class="btn-v">&nbsp;</td>
        <td  @click="vHandle(9)" class="btn-v">&nbsp;</td>
      </tr>
      <tr class="title_wrap">
        <th></th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
        <th class="title">
          <div class="flex-box title_box">
            <div class="flex-item">号码</div>
            <div class="flex-item red">赔率</div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(items, index) in listFormat" :key="index">
        <td @click="hHandle(index)" class="btn-h"></td>
        <td v-for="(item,sIndex) in  items" :key="sIndex">
          <GameBox @click="clickHandle" :index="item.index" :odds="item.odds" :num="item.num" v-model:active="item.active" :posiH="sIndex" :posiV="index" :type="props.gameType"></GameBox>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="11">
          <div class="flex-box ">
            <div class="flex-item p4 gbr bc_333">
              <PosiBtns v-model="posiValues" :gameType="gameType" ></PosiBtns>
            </div>
            <div class="sub-form">
              <form>
                <label>金额： <input class="w60"></label>
                <button class="pri-btn">下注</button>
                <button class="pri-btn">包牌</button>
                <button class="pri-btn">取消</button>
              </form>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="tr" colspan="11">
          <ul class="odds_ul">
            <li >包牌赔率：</li>
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
.two-game-mod {
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
  .sub-form {
    width: 300px;
  }
}
</style>
