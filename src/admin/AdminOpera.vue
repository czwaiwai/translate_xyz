<script setup>
import { ref } from 'vue';
// AdminOpera is
defineOptions({
  name: "AdminOpera"
});
const adminOpera = ref();
console.log(adminOpera);
const form = ref({
  account: "",
  nextAccount: "",
})
const submitHandle = () => { }
</script>

<template>
  <PageLay ref="adminOpera" class="admin-opera">
    <AdmInfoBox></AdmInfoBox>
    <CardBox title="级别查询" blue>
      <div class="flex-box">
        <div class="flex-item">
          <form @submit.prevent="submitHandle">
            <label class="mr10">账号：<input v-model="form.account" class="w90" /></label>
            <label class="mr10">代号：<input v-model="form.nextAccount" class="w90" /></label>
            <button class="sub-btn" type="submit">搜索级别</button>
          </form>
        </div>
        <div class="flex-center">
          <label for="account">资金模式：</label>
          <select id="account" name="account" disabled>
            <option value="0">全部</option>
            <option value="1">股东</option>
            <option value="2">总代</option>
            <option value="3">代理</option>
          </select>
        </div>
      </div>
    </CardBox>
    <TableBox class="mt10"></TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-opera {
  /* Add your styles here */
}
</style>
