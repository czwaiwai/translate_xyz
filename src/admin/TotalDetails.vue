<script setup>
import { ref, h } from 'vue';
import { Notification, Modal } from '@arco-design/web-vue';
import { emnum } from '@/lib/api';
// TotalDetails is 总货明细
defineOptions({
  name: "TotalDetails"
});
const message = ref("total-details");
const form = ref({
  account: "",
  num: "",
  xian: "",
  rangeType: "1",
  rangeMin: "",
  rangeMax: "",
  category: "",
  packageId:"",
})
const typeOpt = ref([
  { label: "赔率", value: 1 },
  { label: "金额", value: 2 },
  { label: "退码", value: 3 },
])
const packageOpt = ref([
  { label: "全部", value: "-1" },
  { label: "散货", value: "0" },
  { label: "包牌", value: "1" },
])
const dateOpt = ref([
 { label: "04-14(25094)", value: "25094" },
  { label: "04-13(25093)", value: "25093" },
  { label:"04-12(25092)", value: "25092" },
])
const submitHandle = () => {}
const printHandle = () => {}
const downloadHandle = () => {}
const tableTitle = ref([
  { value: "注单编号", name: "orderNumber", width: "10%" },
  { value: "会员", name: "member", width: "8%" },
  { value: "下单时间", name: "orderTime", width: "8%" },
  { value: "号码", name: "number", width: "5%" },
  { value: "下注金额", name: "betAmount", width: "10%" },
  { value: "赔率", name: "odds", width: "5%" },
  { value: "中奖", name: "winning", width: "8%" },
  { value: "下线回水", name: "downlineRebate", width: "6%" },
  { value: "实收下线", name: "actualDownline", width: "6%" },
  { value: "自己回水", name: "selfRebate", width: "6%" },
  { value: "实付上线", name: "actualUpline", width: "6%" },
  { value: "赚水", name: "profitRebate", width: "6%" },
  { value: "包牌", name: "package", width: "9%" },
  { value: "路径", name: "path", width: "6%" },
  { value: "IP", name: "ip", width: "4%" },
]);
const tableData = ref([])
const selectDate = ref("25093")
const handicapHandle = () => {
  Modal.confirm({
    title: '温馨提示',
    content: () => h('div',['确定执行',h('span', {className: 'red'}, '打包实货白单数据'),'操作吗？' ]),
    closable: true,
    alignCenter: false,
    draggable: true,
    showIcon: false
  })
}
</script>

<template>
  <PageLay class="total-details">
    <template #extra>
      <a-space>
        <template #split>
          <a-divider direction="vertical" />
        </template>
        <RouterLink to="/total-tab/total-details">
          <a-link href="javascript:void(0)" >总货明细</a-link>
        </RouterLink>
        <!-- <RouterLink  :to="item.path">
          <a-link href="javascript:void(0)" >中奖明细</a-link>
        </RouterLink>
        <RouterLink  :to="item.path">
          <a-link href="javascript:void(0)" >烂货明细</a-link>
        </RouterLink> -->
        <a-link href="javascript:void(0)" @click="handicapHandle">打包拦货白单数据</a-link>
      </a-space>
    </template>
    <CardBox title="" blue>
      <div class="flex-box">
        <div class="flex-item">
          <form @submit.prevent="submitHandle">
            <label class="mr10">查账号 <input v-model="form.account" class="w90" /></label>
            <label class="mr10">查号码 <input v-model="form.num" class="w90" /></label>
            <label class="mr10">现 <input v-model="form.xian" type="checkbox"/></label>
            <label class="mr10">列出 <select v-model="form.rangeType"><option  v-for="item in typeOpt" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
            <label class="mr10"><input v-model="form.rangeMin" class="w60" /></label>
            <label class="mr10">至 <input v-model="form.rangeMax" class="w60" /></label>
            <label class="mr10">分类 <select v-model="form.category"><option  v-for="item in emnum.category" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
            <label class="mr10">类型 <select v-model="form.packageId"><option  v-for="item in packageOpt" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
            <button class="sub-btn mr10" type="submit">提交</button>
            <button class="sub-btn"  @click="printHandle">打印</button>
          </form>
        </div>
        <div class="flex-center">
          <a href="javascript:void(0)" @click="downloadHandle">下载</a>
        </div>
      </div>
    </CardBox>
    <TableBox class="mt10" :title="tableTitle" :data="tableData">
      <template #header="{title}">
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <th class="table-hd-th" colspan="2">总货明细（红色为退码）</th>
            <th class="table-hd-th" colspan="11"></th>
            <th class="table-hd-th tr" colspan="2">
              <SelectBox v-model="selectDate" :options="dateOpt"></SelectBox>
            </th>
          </tr>
          <tr class="table-hd-tr">
            <th class="table-hd-th2" v-for="item in title" :key="item.name">{{ item.value }}</th>
          </tr>
        </thead>
      </template>
      <template #footer>
        <tfoot class="table-ft">
          <tr>
            <td class="tc" colspan="2">合计</td>
            <td>0</td>
            <td></td>
            <td>0</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </template>
    </TableBox>
    <div class="flex-box flex-center-h ">
      <a-pagination :total="50" size="small" show-total show-jumper />
    </div>

  </PageLay>
</template>

<style lang="less" scoped>
.total-details {
  /* Add your styles here */
}
</style>
