<script setup>
import { useUserStore } from '@/stores/index.js'
import { Modal } from '@arco-design/web-vue'
// PrintTable is
defineOptions({
  name: "PrintTable"
});
const userStore = useUserStore()

const doPrint = () => {
  Modal.confirm({
    title: '温馨提示',
    content: '暂无可打印内容',
    closable: true,
    alignCenter: false,
    draggable: true,
    showIcon: false
  })
}
</script>

<template>
  <div id="bet_print" class="main-print print-table">
    <div class="tr unit f15" id="unit">单位：元</div>
    <table class="t-2 f13" id="order_list">
      <thead>
        <tr>
          <td colspan="3" class="tc f15 print-title">
            <strong class="red">排列五</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="line20" colspan="3"> 时间: <br> 会员: {{ userStore.userInfo.name }} <br> 编号: </td>
        </tr>
        <tr class="tc f14 height22">
          <td>号码</td>
          <td>赔率</td>
          <td>金额</td>
        </tr>
      </tbody>
      <tbody id="tbody2">
        <tr class="height22">
          <td colspan="3" class="f15">
            笔数 <span class="recordsCount" id="recordsCount">0</span>
            总金额 <span class="totalBetMoney">0</span>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td colspan="3" class="tc">
            <a-space>
              <a-button size="mini">清空</a-button>
              <a-button @click="doPrint" size="mini"> 打印</a-button>
            </a-space>
            <!-- <input type="button" class="fn-clear margin-right10" value="清空">
            <input type="button" value="打印" class="fn-print"> -->
          </td>
        </tr>
        <tr class="border-none">
          <td colspan="3" class="f15">第{{ userStore.userInfo.serialNum }}期，3天内有效!!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less" scoped>
.print-table {
  margin-top: 20px;

  table {
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      border: 1px solid #333;
      padding: 4px 8px;
    }

    th {
      width: 60px;
    }
  }

}
</style>
