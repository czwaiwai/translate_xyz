<script setup>
import { ref } from 'vue';
import { Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/stores/index.js';
import { useRouter } from 'vue-router';
// AdmHeader is
defineOptions({
  name: "AdmHeader"
});
const now = Date.now();
const valueStyle = {
  color: '#FFF',
  fontSize: '14px'
}
const curPage = ref('1')
const headList = [
  { key: "TotalDetails", title: "总货明细", path: '/total-tab' },
  { key: "ReportClass", title: "分类账", path: '/report-class' },
  { key: "ReportInfo", title: "报表", path: '/report-info' },
  { key: "DrawNum", title: "开奖号码", path: '/draw-num' },
  { key: "AdminOpera", title: "越级操作", path: '/admin-opera' },
  { key: "LevelManage", title: "下级管理", path: '/level-manage' },
  { key: "AdminLog", title: "日志", path: '/admin-log' },
  { key: "RuleSeq", title: "规则说明", path: '/rule-seq' },
  { key: "AdminSetting", title: "设置", path: '/admin-setting' },
  { key: "HandicapDealer", title: "拦货盘", path: '/handicap-dealer' },
  // { key: "11", title: "退出" },
]

const netCheckHandle = () => {
  Modal.confirm({
    title: '温馨提示',
    content: '网络测速',
    closable: true,
    alignCenter: false,
    draggable: true,
    showIcon: false
  })
}
const router = useRouter()
const logoutHandle = () => {
  const useStore = useUserStore()
  useStore.logout()
  router.replace({ name: 'LoginView' })
}
</script>

<template>
  <div class="adm-header">
    <APageHeader title="Translate" :show-back="false">
      <template #extra>
        <a-space direction="vertical" size="mini" fill>
          <div class="flex-box marquee-line">
            <div class="flex-item flex-box">
              <div class="color_yellow mr6">排列五</div>
              <Component :is="'marquee'" scrollamount="2" class="marquee">
                <span>欢迎光临!+管理【b1.p69jp636.xyz】【b2.p69jp636.xyz】【b3.p69jp636.xyz】【b4.p69jp636.xyz】【b5.p69jp636.xyz】【b6.p69jp636.xyz】【b7.p69jp636.xyz】【b8.p69jp636.xyz】【b9.p69jp636.xyz:8443】+会员【f1.p69jp636.xyz】【f2.p69jp636.xyz】【f3.p69jp636.xyz】【f4.p69jp636.xyz】【f5.p69jp636.xyz】【f6.p69jp636.xyz】【f7.p69jp636.xyz】【f8.p69jp636.xyz】【f9.p69jp636.xyz:8443】+会员手机版【m1.p69jp636.xyz】【m2.p69jp636.xyz】【m3.p69jp636.xyz】【m4.p69jp636.xyz】【m5.p69jp636.xyz】【m6.p69jp636.xyz】【m7.p69jp636.xyz】【m8.p69jp636.xyz】【m9.p69jp636.xyz:8443】+本公司每天上午12:00开盘。开奖日当天21:19分封盘！
                  ++++++++++++++++++++++++++++++++++++++++++++【提示】本公司提供转换赔率功能,请各会员在【会员资料】里设置使用。●●●【温馨提示】各位会员在下注确定后请到“下注明细”里确认注单，一切注单结算以下注明细里资料为准！
                </span>
              </Component>
            </div>
            <!-- <marquee scrollamount="2">

            </marquee> -->
            <div class="color_fff ml6">
              <a-button class="link_yellow" @click="netCheckHandle" status="warning" type="text">网络测速</a-button>
              离开盘还有：
              <a-countdown :value-style="valueStyle" :value="now + 1000 * 60 * 60 * 24 * 4" :now="now"
                format="D 天 H 时 m 分 s 秒" />
            </div>
          </div>
          <div class="big_link">
            <a-space size="mini">
              <RouterLink v-for="item in headList" :key="item.key" :to="item.path">
                <a-button>{{ item.title }}</a-button>
              </RouterLink>
              <a-button @click="logoutHandle">退出</a-button>
            </a-space>
          </div>

        </a-space>

      </template>
    </APageHeader>
    <!-- <h1>{{ message }}</h1> -->
  </div>
</template>

<style lang="less" scoped>
.adm-header {
  background: #3885c1;
}

:deep(.arco-page-header) {
  padding: 7px 0 0 0;
}

:deep(.arco-page-header-wrapper) {
  padding-right: 0;
}

:deep(.arco-page-header-extra) {
  flex: 1;
  overflow: inherit;
}

:deep(.arco-page-header-main) {
  width: 177px;
}

.head-bg {
  background: #589C35 url(@/assets/img/bg-a.jpg) no-repeat;
  background-size: contain;
}

.marquee-line {
  line-height: 24px;
}

.marquee {
  display: inline-block;
  width: 450px;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: text-bottom;
}

.big_link {
  border-bottom: 1px solid #333;

  :deep(.arco-btn-text) {
    color: yellow;
    font-weight: bold;
  }

  :deep(.arco-btn) {
    border: none !important;
  }

  :deep(.arco-btn-text:hover) {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
  }

  .link-active {
    :deep(.arco-btn) {
      color: #002f63;
      background-color: transparent;
      background-image: linear-gradient(to bottom, #a5d7ee, #e1f2ff);
      border-color: transparent;
      // transform: scale(1, 1.1);
      // transform-origin: bottom;
      height: 34px;
      margin-bottom: -2px;
      border: none;
    }
  }
}

:deep(.link_yellow.arco-btn-text) {
  color: yellow;
  font-weight: bold;
}

:deep(.link_yellow.arco-btn-text:hover) {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
