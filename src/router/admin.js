import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../admin/HomeView.vue'
import { useUserStore } from '@/stores'
import AdminLay from '../admin/AdminLay.vue'
import RouteNext from '@/components/RouteNext.vue'
const router = createRouter({
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-active-sub',
  history: createWebHashHistory('/admin/'),
  routes: [
    {
      path: '/',
      name: 'AdminLay',
      component: AdminLay,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'AdminHome',
          meta: { title: '首页' },
          component: () => import('../admin/AdminHome.vue'),
        },
        {
          path: 'total-tab',
          name: 'TotalTab',
          meta: { title: '' },
          component: RouteNext,
          redirect: '/total-tab/total-details',
          children: [{
            path: 'total-details',
            name: 'TotalDetails',
            meta: { title: '总货明细' },
            component: () => import('../admin/TotalDetails.vue'),
          },
          {
            path: 'win-details',
            name: 'WinDetails',
            meta: { title: '中奖明细' },
            component: () => import('../admin/WinDetails.vue'),
          },
          {
            path: 'handicap-details',
            name: 'HandicapDetails',
            meta: { title: '拦货明细' },
            component: () => import('../admin/HandicapDetails.vue'),
          }
          ]
        },
        {
          path: 'report-class',
          name: 'ReportClass',
          meta: { title: '' },
          component: RouteNext,
          redirect: '/report-class/report-class-day',
          children: [
            {
              path: 'report-class-day',
              name: 'ReportClassDay',
              meta: { title: '日分类账' },
              component: () => import('../admin/ReportClassDay.vue'),
            },
            {
              path: 'contribution',
              name: 'Contribution',
              meta: { title: '贡献度' },
              component: () => import('../admin/Contribution.vue'),
            },
            {
              path: 'report-class-month',
              name: 'ReportClassMonth',
              meta: { title: '月分类账' },
              component: () => import('../admin/ReportClassMonth.vue'),
            },
          ],
        },
        {
          path: 'report-info',
          name: 'ReportInfo',
          meta: { title: '' },
          component: RouteNext,
          redirect: '/report-info/report-info-day',
          children: [
            {
              path: 'report-info-day',
              name: 'ReportInfoDay',
              meta: { title: '日报表' },
              component: () => import('../admin/ReportInfoDay.vue'),
            },
            {
              path: 'report-info-month',
              name: 'ReportInfoMonth',
              meta: { title: '月报表' },
              component: () => import('../admin/ReportInfoMonth.vue'),
            },
            {
              path: 'report-info-week',
              name: 'ReportInfoWeek',
              meta: { title: '周报表' },
              component: () => import('../admin/ReportInfoWeek.vue'),
            },
          ],
        },
        {
          path: 'draw-num',
          name: 'DrawNum',
          meta: { title: '开奖号码' },
          component: () => import('../admin/DrawNum.vue'),
        },
        {
          path: 'admin-opera',
          name: 'AdminOpera',
          meta: { title: '' },
          component: RouteNext,
          redirect: '/admin-opera/power-opera',
          children: [
            {
              path: 'create-sub-level',
              name: 'CreateSubLevel',
              meta: { title: '新增' },
              component: () => import('../admin/CreateSubLevel.vue'),
              alias: '/level-manage/create-sub-level',
            },
            {
              path: 'update-sub-level',
              name: 'UpdateSubLevel',
              meta: { title: '编辑' },
              component: () => import('../admin/UpdateSubLevel.vue'),
              alias: '/level-manage/update-sub-level',
            },
            {
              path: 'power-opera',
              name: 'PowerOpera',
              meta: { title: '越级操作' },
              component:  () => import('../admin/PowerOpera.vue'),
            },
          ],
        },
        {
          path: 'level-manage',
          name: 'LevelManage',
          meta: { title: '下级管理' },
          component: RouteNext,
          redirect: '/level-manage/level-manage-list',
          children: [
            // {
            //   path: 'create-sub-level',
            //   name: 'CreateSubLevel',
            //   meta: { title: '新增' },
            //   component: () => import('../admin/CreateSubLevel.vue'),
            // },
            // {
            //   path: 'update-sub-level',
            //   name: 'UpdateSubLevel',
            //   meta: { title: '编辑' },
            //   component: () => import('../admin/UpdateSubLevel.vue'),
            // },
            {
              path: 'level-manage-list',
              name: 'LevelManageList',
              meta: { title: '下级管理' },
              component:  () => import('../admin/LevelManageList.vue'),
            },
          ],
        },
        {
          path: 'admin-log',
          name: 'Log',
          meta: { title: '' },
          component: RouteNext,
          redirect: '/admin-log/log',
          children: [
            {
              path: 'log',
              name: 'AdminLog',
              meta: { title: '越级操作日志' },
              component: () => import('../admin/AdminLog.vue'),
            },
            {
              path: 'self-log',
              name: 'SelfLog',
              meta: { title: '自己操作日志' },
              component: () => import('../admin/SelfLog.vue'),
            },
            {
              path: 'handicp-log',
              name: 'HandicapLog',
              meta: { title: '拦货金额日志' },
              component: () => import('../admin/HandicapLog.vue'),
            },
            {
              path: 'vip-quick-log',
              name: 'VipQuickLog',
              meta: { title: '会员快选日志' },
              component: () => import('../admin/VipQuickLog.vue'),
            },
          ],
        },
        {
          path: 'rule-seq',
          name: 'RuleSeq',
          meta: { title: '规则说明' },
          component: () => import('../admin/RuleSeq.vue'),
        },
        {
          path: 'admin-setting',
          name: 'AdminSetting',
          meta: { title: '' },
          component: RouteNext,
          redirect: '/admin-setting/admin-info',
          children: [
            {
              path: 'admin-info',
              name: 'AdminInfo',
              meta: { title: '基本资料' },
              component: () => import('../admin/AdminInfo.vue'),
            },
            {
              path: 'admin-change-pwd',
              name: 'AdminChangePwd',
              meta: { title: '修改密码' },
              component: () => import('../admin/AdminChangePwd.vue'),
            },
            {
              path: 'sub-account-list',
              name: 'SubAccountList',
              meta: { title: '子账号列表' },
              component: () => import('../admin/SubAccountList.vue'),
            },
            {
              path: 'create-sub-account',
              name: 'CreateSubAccount',
              meta: { title: '新增子账号' },
              component: () => import('../admin/CreateSubAccount.vue'),
            },
          ]
        },
        {
          path: 'handicap-dealer',
          name: 'HandicapDealer',
          meta: { title: '拦货盘' },
          component: RouteNext,
          redirect: '/handicap-dealer/handicap-four-position',
          children: [
            {
              path: 'handicap-two-position',
              name: 'HandicapTwoPosition',
              meta: { title: '', info: '二定位' },
              component: () => import('../admin/HandicapTwoPosition.vue'),
            },
            {
              path: 'handicap-three-position',
              name: 'HandicapThreePosition',
              meta: { title: '', info: '三定位' },
              component: () => import('../admin/HandicapThreePosition.vue'),
            },
            {
              path: 'handicap-four-position',
              name: 'HandicapFourPosition',
              meta: { title: '', info: '四定位' },
              component: () => import('../admin/HandicapFourPosition.vue'),
            },
            {
              path: 'handicap-two-present',
              name: 'HandicapTwoPresent',
              meta: { title: '', info: '二字现' },
              component: () => import('../admin/HandicapTwoPresent.vue'),
            },
            {
              path: 'handicap-three-present',
              name: 'HandicapThreePresent',
              meta: { title: '', info: '三字现' },
              component: () => import('../admin/HandicapThreePresent.vue'),
            },
            {
              path: 'handicap-four-present',
              name: 'HandicapFourPresent',
              meta: { title: '', info: '四字现' },
              component: () => import('../admin/HandicapFourPresent.vue'),
            },
          ]
          // component: () => import('../admin/HandicapDealer.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'LoginView',
      meta: { title: '登录' },
      component: () => import('../views/LoginView.vue'),
    },
  ],
})
// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  let userStore = useUserStore()
  // 示例：检查是否需要登录
  const isAuthenticated = userStore.token // 假设 token 存储在 localStorage 中
  if (to.name !== 'LoginView' && !isAuthenticated) {
    // 如果未登录且目标路由不是登录页，则跳转到登录页
    next({ name: 'LoginView' })
  } else {
    // 否则允许导航
    next()
  }
})
export default router
