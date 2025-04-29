<script setup>
import { ref } from 'vue';
// SmallQuickBox is
defineOptions({
  name: "SmallQuickBox"
});
const smallQuickBox = ref();
console.log(smallQuickBox);
const message = ref('Hello, SmallQuickBox');
</script>

<template>
  <CardBox title="下注框" minHeight="200px" padding="0">
    <table>
      <thead>
        <tr>
          <th>时间</th>
          <th>号码</th>
          <th>金额</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </CardBox>
  <CardBox>
    <template #header>
      <div><label>四字现 <input type="checkbox"></label></div>
    </template>
    <form class="flex-inline fs22 gap20">
      <label>号码<input class="w60 input-h36" /></label>
      <label>金额<input class="w60 input-h36" /></label>
      <button class="pri-btn-h36">确认下注</button>
    </form>
  </CardBox>
</template>

<style lang="less" scoped>
.small-quick-box {
  /* Add your styles here */
}
</style>
