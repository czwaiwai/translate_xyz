<script setup>
// 定包牌汇总历史
defineOptions({
  name: 'TableHistory'
});
const props = defineProps({
  color: {
    type: String,
    default: 'gray'
  },
})
</script>

<template>
  <table class="table-history tc" cellpadding="0" cellspacing="0">
    <thead>
      <!-- <tr class="hide">
        <td colspan="10" class="tr"> <input type="button" value="全部删除" class="fn-del-all" data-type="20"> </td>
      </tr> -->
      <tr>
        <td width="140">序号</td>
        <td width="60">来源</td>
        <td width="140">注单时间</td>
        <td width="80">注单/注单数</td>
        <td width="80">单注金额</td>
        <td width="80">合计金额</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="7">暂无数据!</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="less" scoped>
.table-history {
  width: 100%;
  background: #fff;
  border: 1px solid #f6d3bc;
  border-width: 1px 0 0 1px;
  margin: 0px;
  padding: 0px;
  thead {
    background-color: #fff5f5;
  }
  td {
    border: 1px solid #f6d3bc;
    height: 22px;
    border-width: 0 1px 1px 0;
    padding: 2px 4px;
    margin: 0px;
    font-size:12px;
  }
}
</style>
