<script setup>
import { ref } from 'vue';
// PreBetBox is 预下注项
defineOptions({
  name: "PreBetBox"
});
const preBetBox = ref();
console.log(preBetBox);
</script>

<template>
  <CardBox class="print-table" title="预下注项" center padding="0">
    <div class="tr">单位：元</div>
    <div class="tc bold gbt bc_333 red">排列五</div>
    <div class="p4 gbt bc_333">
      <div>时间：</div>
      <div>会员：y05</div>
      <div>编号：</div>
    </div>
    <table style="margin-left:-1px;margin-bottom:-1px;">
      <thead >
        <tr class="tc bold">
          <th>号码</th>
          <th>赔率</th>
          <th>金额</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      <tfoot>
        <tr>
          <td class="bold" colspan="3">
            <span>笔数 0</span> <span> 总金额 0</span>
          </td>
        </tr>
        <tr>
          <td colspan="3" class="tc">
            <button class="pri-btn">清空</button>
            <button  class="pri-btn ml10">打印</button>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            第25100期，3天内有效
          </td>
        </tr>
      </tfoot>
    </table>
  </CardBox>
</template>

<style lang="less" scoped>
.pre-bet-box {
  /* Add your styles here */
}
</style>
