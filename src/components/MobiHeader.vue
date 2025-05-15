<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import { IconMenu } from '@arco-design/web-vue/es/icon'

const router = useRouter()
const userStore = useUserStore()
const visible = ref(false)
const visileLeft = ref(false)
const handleMenuClick = (key) => {
  if (key === 'logout') {
    userStore.logout()
    router.replace({ name: 'LoginView' })
  } else {
    router.push({ name: key })
  }
}
</script>

<template>
  <div class="mobi-header">
    <a-button
      @click="visible = !visible"
      type="primary"
      style="background: transparent; color: white"
    >
      <template #icon>
        <icon-menu />
      </template>
    </a-button>

    <div class="title">Translate</div>
    <a-button
      @click="visileLeft = !visileLeft"
      type="primary"
      style="background: transparent; color: white"
      >成交</a-button
    >
    <a-drawer
      :visible="visible"
      @cancel="visible = false"
      width="70%"
      placement="left"
      :header="false"
      :footer="false"
    >
      <a-menu mode="vertical" @menu-item-click="handleMenuClick" :style="{ width: '100%' }">
        <a-menu-item key="BetQuickBet">首页</a-menu-item>
        <a-menu-item key="BetListView">下注明细</a-menu-item>
        <a-menu-item key="PreBetListView">汇总表明细</a-menu-item>
        <a-menu-item key="LastBillView">历史账单</a-menu-item>
        <a-menu-item key="MemberInfoView">会员资料</a-menu-item>
        <!-- <a-menu-item key="PackageOddView">包牌赔率</a-menu-item> -->
        <a-menu-item key="DrawNumberView">开奖号码</a-menu-item>
        <a-menu-item key="RulesView">规则说明</a-menu-item>
        <a-menu-item key="LogView">日志</a-menu-item>
        <a-menu-item key="ChangePwdView">修改密码</a-menu-item>
        <a-menu-item key="logout" status="danger">退出</a-menu-item>
      </a-menu>
    </a-drawer>
    <a-drawer
      :visible="visileLeft"
      @cancel="visileLeft = false"
      width="70%"
      placement="right"
      :header="false"
      :footer="false"
    >
      <SiderLeft></SiderLeft>
    </a-drawer>
  </div>
</template>

<style lang="less" scoped>
.mobi-header {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 48px;
  background: #3494e3;

  .title {
    margin-left: 12px;
    color: white;
    font-weight: bold;
    flex: 1;
  }

  :deep(.a-menu-horizontal) {
    border-bottom: none;
  }

  :deep(.a-menu-item) {
    color: white;
  }
}
</style>
