<script setup>
import { useUserStore, useGameStore } from '@/stores/index.js'
const userStore = useUserStore()
const gameStore = useGameStore()
</script>

<template>
  <div class="slide-left">
    <CardBox title="会员信息">
      <table class="mem-table">
        <tbody>
          <tr>
            <th>账号：</th>
            <td>{{ userStore.userInfo.username }}</td>
          </tr>
          <tr>
            <th>
              <div>信用：</div>
              <div>已用：</div>
            </th>
            <td>
              <div>{{ userStore.userInfo.creditMax }}</div>
              <div>{{ userStore.userInfo.usedCredit }}</div>
            </td>
          </tr>
          <tr>
            <th>
              <div>可用：</div>
              <div>期号：</div>
            </th>
            <td>
              <div>{{ userStore.userInfo.balance }}</div>
              <div>{{ gameStore.gameInfo.serialNum }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </CardBox>
    <CardBox title="已成交" padding="0" minHeight="200px">
      <table class="mem-table">
        <thead>
          <tr>
            <th>号码</th>
            <th>赔率</th>
            <th>金额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 5" :key="index">
            <td>XX0{{ item }}</td>
            <td>99.9</td>
            <td>980</td>
          </tr>
        </tbody>
      </table>
    </CardBox>
    <CardBox title="挂牌" minHeight="200px">
      <table class="mem-table">
        <thead>
          <tr>
            <th>号码</th>
            <th>赔率</th>
            <th>金额</th>
            <th>结果</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 5" :key="index">
            <td>XX0{{ item }}</td>
            <td>98.9</td>
            <td>980</td>
            <td><button class="pri-btn">删</button></td>
          </tr>
        </tbody>
      </table>
    </CardBox>
    <!-- <PrintTable></PrintTable> -->
  </div>
</template>

<style lang="less" scoped>
.slide-left {
  padding: 5px 1px 10px;
}

.mem-table {
  border-collapse: collapse;
  width: 100%;
  border: none;

  td,
  th {
    text-align: left;
    border: 1px solid #eee;
    padding: 4px 8px;
  }

  th {
    width: 60px;
  }
}
</style>
