import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores'
import IndexLay from '../layout/IndexLay.vue'
import MobiLay from '../layout/MobiLay.vue'
import RouteNext from '@/components/RouteNext.vue'
import { isMobile } from '@/lib/utils'

const router = createRouter({
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-active-sub',
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: 'IndexLay',
      component: isMobile() ? MobiLay : IndexLay,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'HomeView',
          meta: { title: '' },
          component: () => import('../views/HomeView.vue'),
          redirect: '/home/bet/bet-quick-bet',
          children: [
            {
              path: 'bet',
              meta: { title: '买入' },
              name: 'Bet',
              redirect: '/home/bet/bet-quick-bet',
              component: () => import('../views/BetView.vue'),
              children: [
                {
                  path: 'bet-two-set',
                  meta: { title: '二字定' },
                  name: 'BetTwoSet',
                  component: () => import('../views/TwoSetView.vue'),
                },
                {
                  path: 'bet-quick-bet',
                  meta: { title: '快打' },
                  name: 'BetQuickBet',
                  component: () => import('../views/QuickBetView.vue'),
                },
                {
                  path: 'bet-quick-choose',
                  meta: { title: '快选' },
                  name: 'BetQuickChoose',
                  component: () => import('../views/QuickChooseView.vue'),
                },
              ],
            },
            {
              path: 'eat',
              meta: { title: '吃' },
              name: 'Eat',
              redirect: '/home/eat/eat-quick-bet',
              component: () => import('../views/EatView.vue'),
              children: [
                {
                  path: 'eat-two-set',
                  meta: { title: '二字定' },
                  name: 'EatTwoSet',
                  component: () => import('../views/TwoSetView.vue'),
                },
                {
                  path: 'eat-quick-bet',
                  meta: { title: '快打' },
                  name: 'EatQuickBet',
                  component: () => import('../views/QuickBetView.vue'),
                },
                {
                  path: 'eat-quick-choose',
                  meta: { title: '快选' },
                  name: 'EatQuickChoose',
                  component: () => import('../views/QuickChooseView.vue'),
                },
              ],
            },
          ],
        },
        {
          path: 'bet-list',
          name: 'BetListView',
          component: () => import('../views/BetListView.vue'),
        },
        {
          path: 'pre-bet-list',
          name: 'PreBetListView',
          component: () => import('../views/PreBetListView.vue'),
        },
        {
          path: 'last-bill',
          name: 'LastBillView',
          component: () => import('../views/LastBillView.vue'),
        },
        {
          path: 'member-info',
          name: 'MemberInfoView',
          component: () => import('../views/MemberInfoView.vue'),
        },
        {
          path: 'package-odd',
          name: 'PackageOddView',
          component: () => import('../views/PackageOddView.vue'),
        },
        {
          path: 'draw-number',
          name: 'DrawNumberView',
          component: () => import('../views/DrawNumberView.vue'),
        },
        {
          path: 'rules',
          name: 'RulesView',
          component: () => import('../views/RulesView.vue'),
        },
        {
          path: 'log',
          name: 'LogView',
          component: () => import('../views/LogView.vue'),
        },
        {
          path: 'changepwd',
          name: 'ChangePwdView',
          component: () => import('../views/ChangePwdView.vue'),
        },

        {
          path: 'two-set',
          name: 'TwoSetView',
          component: () => import('../views/TwoSetView.vue'),
        },
        {
          path: 'quick-bet',
          name: 'QuickBetView',
          component: () => import('../views/QuickBetView.vue'),
        },
        {
          path: 'quick-choose',
          name: 'QuickChooseView',
          component: () => import('../views/QuickChooseView.vue'),
        },
        {
          path: 'txt-import',
          name: 'TxtImportView',
          component: () => import('../views/TxtImportView.vue'),
        },
        {
          path: 'two-package',
          name: 'TwoPackageView',
          component: () => import('../views/TwoPackageView.vue'),
        },
        {
          path: 'three-package',
          name: 'ThreePackageView',
          component: () => import('../views/ThreePackageView.vue'),
        },
        {
          path: 'four-package',
          name: 'FourPackageView',
          component: () => import('../views/FourPackageView.vue'),
        },
        {
          path: 'odds-move',
          name: 'OddsMoveView',
          component: () => import('../views/OddsMoveView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
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
