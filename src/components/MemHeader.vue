<script setup>
import { onMounted } from 'vue'
import { Notification, Modal } from '@arco-design/web-vue'
import { useUserStore } from '@/stores/index.js'
import { useRouter } from 'vue-router'
const now = Date.now()
console.log('111')
onMounted(() => {
  Notification.info({
    title: '温馨提示',
    content: '欢迎光临!',
    position: 'bottomRight',
    duration: 0,
    closable: true,
    showIcon: false,
  })
})

const valueStyle = {
  color: '#FFF',
  fontSize: '14px',
}
const netCheckHandle = () => {
  Modal.confirm({
    title: '温馨提示',
    content: '网络测速',
    closable: true,
    alignCenter: false,
    draggable: true,
    showIcon: false,
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
  <div class="head-bg">
    <APageHeader title="Translate" :show-back="false">
      <template #extra>
        <a-space direction="vertical" size="mini" fill>
          <div class="big_link">
            <a-space size="mini">
              <!-- <a-button @click="netCheckHandle">换线路</a-button> -->
              <RouterLink to="/bet-list">
                <a-button>下注明细</a-button>
              </RouterLink>
              <RouterLink to="/pre-bet-list">
                <a-button>汇总表明细</a-button>
              </RouterLink>
              <RouterLink to="/last-bill">
                <a-button>历史账单</a-button>
              </RouterLink>
              <RouterLink to="/member-info">
                <a-button>会员资料</a-button>
              </RouterLink>
              <RouterLink to="/package-odd">
                <a-button>包牌赔率</a-button>
              </RouterLink>
              <RouterLink to="/draw-number">
                <a-button>开奖号码</a-button>
              </RouterLink>
              <RouterLink to="/rules">
                <a-button>规则说明</a-button>
              </RouterLink>
              <RouterLink to="/log">
                <a-button>日志</a-button>
              </RouterLink>
              <RouterLink to="/changepwd">
                <a-button>修改密码</a-button>
              </RouterLink>
              <a-button @click="logoutHandle">退出</a-button>
              <a-button @click="netCheckHandle" status="warning" type="text">网络测速</a-button>
            </a-space>
          </div>
          <div class="flex-box marquee-line">
            <div class="color_yellow mr6">排列五</div>
            <Component :is="'marquee'" scrollamount="2" class="marquee">
              <span
                >欢迎光临!+会员【f1.p69jp636.xyz】【f2.p69jp636.xyz】【f3.p69jp636.xyz】【f4.p69jp636.xyz】【f5.p69jp636.xyz】【f6.p69jp636.xyz】【f7.p69jp636.xyz】【f8.p69jp636.xyz】【f9.p69jp636.xyz:8443】+会员手机版【m1.p69jp636.xyz】【m2.p69jp636.xyz】【m3.p69jp636.xyz】【m4.p69jp636.xyz】【m5.p69jp636.xyz】【m6.p69jp636.xyz】【m7.p69jp636.xyz】【m8.p69jp636.xyz】【m9.p69jp636.xyz:8443】+本公司每天上午12:00开盘。开奖日当天21:19分封盘！
                ++++++++++++++++++++++++++++++++++++++++++++【提示】本公司提供转换赔率功能,请各会员在【会员资料】里设置使用。●●●【温馨提示】各位会员在下注确定后请到“下注明细”里确认注单，一切注单结算以下注明细里资料为准！
              </span>
            </Component>
            <!-- <marquee scrollamount="2">

            </marquee> -->
            <div class="color_fff ml6">
              离开盘还有：
              <a-countdown
                :value-style="valueStyle"
                :value="now + 1000 * 60 * 60 * 24 * 4"
                :now="now"
                format="D 天 H 时 m 分 s 秒"
              />
            </div>
          </div>
          <!-- <div class="quick_link">
            <a-space size="mini">
              <RouterLink to="/two-set">
                <a-button size="mini" type="text">二字定</a-button>
              </RouterLink>
              <RouterLink to="/quick-bet">
                <a-button size="mini" type="text">快打</a-button>
              </RouterLink>
              <RouterLink to="/quick-choose">
                <a-button size="mini" type="text">快选</a-button>
              </RouterLink>
              <RouterLink to="/txt-import">
                <a-button size="mini" type="text">txt导入</a-button>
              </RouterLink>
              <RouterLink to="/two-package">
                <a-button size="mini" type="text">二字定包牌汇总表</a-button>
              </RouterLink>
              <RouterLink to="/three-package">
                <a-button size="mini" type="text">三字定包牌汇总表</a-button>
              </RouterLink>
              <RouterLink to="/four-package">
                <a-button size="mini" type="text">四字定包牌汇总表</a-button>
              </RouterLink>
              <RouterLink to="/odds-move">
                <a-button size="mini" type="text">赔率变动表</a-button>
              </RouterLink>
              <RouterLink to="/rules">
                <a-button size="mini" type="text">全截说明</a-button>
              </RouterLink>
              <RouterLink to="/rules">
                <a-button size="mini" type="text">奖王APP</a-button>
              </RouterLink>
            </a-space>
          </div> -->
        </a-space>
      </template>
    </APageHeader>
    <!-- <RouterLink to="/about">About</RouterLink> -->
  </div>
</template>

<style lang="less" scoped>
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
  background: #589c35 url(@/assets/img/bg-a.jpg) no-repeat;
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

.quick_link {
  background: #2d5c16;
  border-left: 1px solid #2a2626;
  border-top: 1px solid #2a2626;

  :deep(.arco-btn-text) {
    color: #fff;
    font-weight: bold;
  }

  :deep(.arco-btn-text:hover) {
    color: #fff;
    background-color: transparent;
    text-decoration: underline;
  }

  .link-active-sub {
    :deep(.arco-btn-text) {
      color: yellow;
    }
  }
}

.big_link {
  :deep(.arco-btn-text) {
    color: yellow;
    font-weight: bold;
  }

  :deep(.arco-btn-text:hover) {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
  }

  .link-active-sub {
    :deep(.arco-btn) {
      color: #002f63;
      background-color: transparent;
      background-image: linear-gradient(to bottom, #a5d7ee, #fff);
      border-color: transparent;
      transform: scale(1, 1.1);
      transform-origin: bottom;
    }
  }
}
</style>
