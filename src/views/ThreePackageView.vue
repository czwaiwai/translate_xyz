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
      <PackageGame></PackageGame>
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
.three-package-view {
  /* Add your styles here */
}
</style>
