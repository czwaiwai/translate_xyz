<script setup>
import { ref } from 'vue';
// ThreePackageView is 三字定包牌汇总表
defineOptions({
  name: "ThreePackageView"
});
const tableTitle = ref([
  {name: 'groupCount', value: '组数', width: '50%'},
  {name: 'odds', value: '赔率', width: '50%'}
])
const tableData = ref([
  { groupCount: '200组', odds: '980' },
  { groupCount: '200组', odds: '980' },
  { groupCount: '200组', odds: '980' },
  { groupCount: '200组', odds: '980' },
  { groupCount: '200组', odds: '980' },
])
</script>

<template>
  <PageLay class="three-package-view" isBox>
    <div class="page-view flex-item">
     <CardBox title="" close="正在开盘中...">

     </CardBox>
    </div>
    <div class="page-view wp200">
      <CardBox title="包牌" center padding="0">
        <TableBox :title="tableTitle" :data="tableData" center>
        </TableBox>
      </CardBox>
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
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.three-package-view {
  /* Add your styles here */
}
</style>
