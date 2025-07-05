<script setup>
import { ref } from 'vue'
import api from '@/lib/api'

// LevelManage is 下级管理
defineOptions({
  name: 'LevelManageList',
})
const tableTitle = [
  {
    name: 'no',
    value: '序号',
    width: '40',
  },
  {
    name: 'userName',
    value: '账号',
    width: '11%',
  },
  {
    name: 'nickName',
    value: '代号',
    width: '5%',
  },
  {
    name: 'percentage',
    value: '占成',
    width: '20%',
  },
  {
    name: 'maxCredit',
    value: '信用额度/现金馀额',
    width: '8%',
  },
  {
    name: 'updateTime',
    value: '修改时间',
    width: '8%',
  },
  {
    name: 'updator',
    value: '修改者',
    width: '4%',
  },
  {
    name: 'ip',
    value: '股东IP',
    width: '8%',
  },
  {
    name: 'status',
    value: '查看停用',
    width: '10%',
  },
  {
    name: 'opera',
    value: '内容',
    colspan: ['opera_a', 'opera_b', 'opera_c'],
  },
]
const tableData = ref([
  {
    no: 1,
    account: 'admin',
    nextName: 'admin',
    percentage: '0.00',
    credit: '0.00',
    updateTime: '10-01 12:00',
    updator: 'admin',
    ip: '0.0.0.0',
    status: '查看',
    opera_a: true,
    opera_b: true,
    opera_c: true,
  },
])
const getList = async () => {
  const res = await api.userSearch({
    pageSize: 20,
    pageNo: 1,
  })
  tableData.value = res.data.records
  console.log(res)
}
getList()
</script>

<template>
  <PageLay class="level-manage">
    <template #extra>
      <OperaSubTab showCreate></OperaSubTab>
    </template>
    <AdmInfoBox></AdmInfoBox>
    <CardBox title="查询模式" blue>
      <div class="flex-box">
        <div class="flex-item"></div>
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
    <TableBox class="mt10" :title="tableTitle" :data="tableData">
      <template #opera_a>
        <span>修改 ｜ 查看</span>
      </template>
      <template #opera_b>
        <span>月报表</span>
      </template>
      <template #opera_c>
        <span>周报表</span>
      </template>
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.level-manage {
  /* Add your styles here */
}
</style>
