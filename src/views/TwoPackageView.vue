<script setup>
import PreBetBox from '@/components/PreBetBox.vue';
import { ref } from 'vue';
// TwoPackageView is 二字定包牌汇总表
defineOptions({
  name: "TwoPackageView"
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
  <PageLay class="two-package-view" isBox>
    <!-- <h1>{{ message }}</h1> -->
    <div class="page-view flex-item">
     <!-- <CardBox title="" close="正在开盘中...">

     </CardBox> -->
     <TwoPackageGame>
     </TwoPackageGame>


    </div>
    <div class="page-view wp200">
      <CardBox title="包牌" center padding="0">
        <TableBox :title="tableTitle" :data="tableData" center>
        </TableBox>
      </CardBox>
      <PreBetBox></PreBetBox>
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.two-package-view {
  /* Add your styles here */

}
</style>
