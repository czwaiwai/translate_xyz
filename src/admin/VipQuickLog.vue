<script setup>
import { ref } from 'vue';
import { emnum } from '@/lib/api';
// VipQuickLog is
defineOptions({
  name: "VipQuickLog"
});
const vipQuickLog = ref();
console.log(vipQuickLog);
const form = ref({
  account: "",
  betMoney: "",
  category: "",
  packageId:"",
})
const tableTitle = [{
  name: 'no',
  value: '操作账号',
  width: '130',
},
{
  name: 'account',
  value: '被操作账号',
  width: '190'
},
{
  name: 'nextName',
  value: '操作内容',
},
{
  name: 'percentage',
  value: '操作时间',
  width: '130'
},
{
  name: 'ip',
  value: '操作Ip',
  width: '130'
},
]
const tableData = ref([])
const submitHandle = () => {}
</script>

<template>
  <PageLay ref="vipQuickLog" class="vip-quick-log">
    <template #extra>
      <LogSubTab></LogSubTab>
    </template>
    <CardBox title="会员快选日志" blue>
    <div class="flex-box">
      <div class="flex-item">
        <form @submit.prevent="submitHandle">
          <label class="mr10">操作账号 <input v-model="form.account" class="w90" /></label>
          <label class="mr10"><input v-model="form.betMoney" class="w90" />元以上</label>
          <label class="mr10">
            <SelectBox  v-model="form.category" :options="emnum.topCate"></SelectBox></label>
          <label class="mr10">类型
            <SelectBox v-model="form.packageId" :options="emnum.package"></SelectBox></label>
          <button class="sub-btn mr10" type="submit">提交</button>
        </form>
      </div>
      <div class="flex-center">
        <slot>
          <a href="javascript:void(0)" @click="downloadHandle">下载</a>
        </slot>
      </div>
    </div>
  </CardBox>
    <TableBox class="mt10" :title="tableTitle" :data="tableData">
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.vip-quick-log {
  /* Add your styles here */
}
</style>
