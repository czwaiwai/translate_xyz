<script setup>
import { useUserStore } from '@/stores/index.js'
const userStore = useUserStore()
</script>

<template>
  <div class="slide-left">
    <CardBox title="会员信息">
      <table class="mem-table">
        <tbody>
          <tr>
            <th>账号：</th>
            <td>{{ userStore.userInfo.name }}</td>
          </tr>
          <tr>
            <th>
              <div>信用：</div>
              <div>已用：</div>
            </th>
            <td>
              <div>{{ userStore.userInfo.credit }}</div>
              <div>{{ userStore.userInfo.used }}</div>
            </td>
          </tr>
          <tr>
            <th>
              <div>可用：</div>
              <div>期号：</div>
            </th>
            <td>
              <div>{{ userStore.userInfo.canUse }}</div>
              <div>{{ userStore.userInfo.serialNum }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </CardBox>
    <PrintTable></PrintTable>
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
