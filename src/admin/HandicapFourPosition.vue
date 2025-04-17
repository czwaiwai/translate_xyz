<script setup>
import { ref } from 'vue';
import {range, chunk, padStart} from 'lodash-es'
// HandicapFourPosition is
defineOptions({
  name: "HandicapFourPosition"
});
const handicapFourPosition = ref();
console.log(handicapFourPosition);
let arr = range(1,101)
let handNums = arr.map((num, index) => {
  return {
      num:padStart(index, 4, '0'),
      id:num,
      lose:0,
      win:0,
  }
})
let hand2Nums = chunk(handNums, 10)
console.log(handNums, hand2Nums)
// const message = ref('Hello, HandicapFourPosition');
</script>

<template>
  <PageLay ref="handicapFourPosition" class="handicap-four-position">
    <CardBox  blue>
      <template #header>
        <div class="flex-box">
          <div class="bold pr20">拦货盘</div>
          <div class="">
            <HandicapSubTab></HandicapSubTab>
            <span > </span>
          </div>
          <div class="yellow bold flex-item pl20">提示：偶尔会出现（同号码同秒）下单造成超出（拦货金额），请（补码）。</div>
          <div class="bold">汇总打印</div>
        </div>
      </template>
      <div class="flex-box">
        <div class="flex-item"><form><label>拦货金额 <input class="w90 ml10" /></label><button class="ml10 sub-btn">提交</button></form></div>
        <div class="flex-item"></div>
      </div>

    </CardBox>
    <div class="pt20">
        <table class="table-form2">
          <tbody>
            <tr v-for="(items, index) in hand2Nums" :key="index">
              <td v-for="(item, sindex) in items" :key="sindex">
                <HandBox :item="item"></HandBox>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </PageLay>
</template>

<style lang="less" scoped>
.handicap-four-position {
  /* Add your styles here */
}
</style>
