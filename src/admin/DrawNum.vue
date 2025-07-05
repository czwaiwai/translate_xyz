<script setup>
import { ref } from 'vue'
import { Message } from '@arco-design/web-vue'
import api from '@/lib/api'
// DrawNum is 开奖号码
defineOptions({
  name: 'DrawNum',
})
const tableTitle = [
  {
    name: 'openTime',
    value: '开奖时间',
    width: '13%',
  },
  {
    name: 'drawNo',
    value: '期号',
    width: '10%',
  },
  {
    name: 'qian',
    value: '仟',
    width: '10%',
  },
  {
    name: 'bai',
    value: '佰',
    width: '10%',
  },
  {
    name: 'shi',
    value: '拾',
    width: '10%',
  },
  {
    name: 'ge',
    value: '个',
    width: '10%',
  },
  {
    name: 'ball5',
    value: '球5',
    width: '10%',
  },
]
const tableData = ref([])
const getList = async () => {
  const res = await api.lotterySearch({
    pageSize: 100,
    pageNo: 1,
  })
  tableData.value = res.data.records
}
getList()

const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const visible = ref(false)
const formObj = ref({
  openTime: '',
  drawNo: '',
  qian: '',
  bai: '',
  shi: '',
  ge: '',
  ball5: '',
})
const handleAddDrawNum = () => {
  visible.value = true
}

const handleBeforeOk = async (done) => {
  console.log(formObj)
  await api
    .lotteryResult(formObj.value)
    .then((res) => {
      console.log(res)
      Message.success({
        content: '添加赛果成功',
        closable: true,
      })
      getList()
      done()
    })
    .catch((err) => {
      err.message && Message.error(err.message)
      done(false)
    })
}
const handleCancel = () => {
  visible.value = false
}
</script>

<template>
  <PageLay class="draw-num">
    <template #extra>
      <a-link @click="handleAddDrawNum" href="javascript:void(0)">添加赛果</a-link>
    </template>
    <a-modal
      v-model:visible="visible"
      title="添加赛果"
      @cancel="handleCancel"
      @before-ok="handleBeforeOk"
    >
      <a-form :model="formObj">
        <a-form-item field="name" label="开奖时间">
          <!-- <a-input v-model="formObj.startTime" /> -->
          <a-date-picker
            show-time
            v-model="formObj.openTime"
            :time-picker-props="{ defaultValue: '00:00:00' }"
            format="YYYY-MM-DD HH:mm:ss"
          />
        </a-form-item>
        <a-form-item field="no" label="期号">
          <a-input v-model="formObj.drawNo"></a-input>
        </a-form-item>
        <a-form-item field="qian" label="仟">
          <a-select v-model="formObj.qian" placeholder="请选择" :options="options"> </a-select>
        </a-form-item>
        <a-form-item field="bai" label="佰">
          <a-select v-model="formObj.bai" placeholder="请选择" :options="options"> </a-select>
        </a-form-item>
        <a-form-item field="shi" label="拾">
          <a-select v-model="formObj.shi" placeholder="请选择" :options="options"> </a-select>
        </a-form-item>
        <a-form-item field="ge" label="个">
          <a-select v-model="formObj.ge" placeholder="请选择" :options="options"> </a-select>
        </a-form-item>
        <a-form-item field="ball5" label="球5">
          <a-select v-model="formObj.ball5" placeholder="请选择" :options="options"> </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
    <TableBox :title="tableTitle" :data="tableData">
      <template #qian="{ item, index }">
        <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
      </template>
      <template #bai="{ item, index }">
        <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
      </template>
      <template #shi="{ item, index }">
        <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
      </template>
      <template #ge="{ item, index }">
        <Ball :color="index == 0 ? 'red' : 'blue'">{{ item.value }}</Ball>
      </template>
      <template #ball5="{ item }">
        <Ball>{{ item.value }}</Ball>
      </template>
    </TableBox>
  </PageLay>
</template>

<style lang="less" scoped>
.draw-num {
  /* Add your styles here */
}
</style>
