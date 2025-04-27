<script setup>
import { ref } from 'vue';
// FourPackageView is  四字定包牌汇总表
defineOptions({
  name: "FourPackageView"
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
  <PageLay class="four-package-view" isBox>
    <div class="page-view flex-item">
      <FourPackageGame gameType="11" ></FourPackageGame>
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
.four-package-view {
  /* Add your styles here */
}
</style>
