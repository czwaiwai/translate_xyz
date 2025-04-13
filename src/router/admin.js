import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../admin/HomeView.vue'
import { useUserStore } from '@/stores'
import AdminLay from '../admin/AdminLay.vue'
import RouteNext from '@/components/RouteNext.vue'
const router = createRouter({
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-active-sub',
  history: createWebHistory(import.meta.env.BASE_URL + 'admin/index.html'),
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
          path: 'total-details',
          name: 'TotalDetails',
          meta: { title: '总货明细' },
          component: () => import('../admin/TotalDetails.vue'),
        },
        {
          path: 'report-class',
          name: 'ReportClass',
          meta: { title: '分类账' },
          component: () => import('../admin/ReportClass.vue'),
        },
        {
          path: 'report-info',
          name: 'ReportInfo',
          meta: { title: '报表' },
          component: () => import('../admin/ReportInfo.vue'),
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
          meta: { title: '越级操作' },
          component: () => import('../admin/AdminOpera.vue'),
        },
        {
          path: 'level-manage',
          name: 'LevelManage',
          meta: { title: '下级管理' },
          component: () => import('../admin/LevelManage.vue'),
        },
        {
          path: 'admin-log',
          name: 'Log',
          meta: { title: '日志' },
          component: RouteNext,
          redirect: '/admin-log/log',
          children: [
            {
              path: 'log',
              name: 'AdminLog',
              meta: { title: '越级操作日志' },
              component: () => import('../admin/AdminLog.vue'),
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
          meta: { title: '设置' },
          component: () => import('../admin/AdminSetting.vue'),
        },
        {
          path: 'handicap-dealer',
          name: 'HandicapDealer',
          meta: { title: '拦货盘' },
          component: () => import('../admin/HandicapDealer.vue'),
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
