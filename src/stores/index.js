import { ref, computed, toRaw } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
import { mergeBets } from '@/lib/utils'
import dayjs from 'dayjs'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useGameStore = defineStore('game', () => {
  const serialNum = dayjs().format('YYYYMMDD') // 期号
  const packageInfo = ref({
    twoArr: [],
    threeArr: [],
    fourArr: [],
  })
  const gameInfo = ref({
    name: '',
    serialNum: serialNum,
    status: 'close', // open or close
    statusTxt: '正在开盘中...',
    datetime: '',
  })

  function setGameInfo(name, serialNum, datetime) {
    gameInfo.value.name = name
    gameInfo.value.serialNum = serialNum
    gameInfo.value.datetime = datetime
  }
  function setPackageData(type, arr) {
    packageInfo.value[type + 'Arr'] = mergeBets(toRaw(packageInfo.value[`${type}Arr`]), arr)
  }
  function clearPackageData(type) {
    if (type) {
      packageInfo.value[`${type}Arr`] = []
    } else {
      packageInfo.value.twoArr = []
      packageInfo.value.threeArr = []
      packageInfo.value.fourArr = []
    }
  }

  return { gameInfo, setGameInfo, packageInfo, setPackageData, clearPackageData }
})
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const refreshToken = ref('')
    // userInfo = {
    //   name: 'y05',
    //   token: 'xxxxxxx',
    //   credit: 0,
    //   used: 0,
    //   canUse: 0,
    //   serialNum: '25089',
    // }
    const userdefault = {
      id: '',
      username: '',
      nickname: '',
      token: '',
      credit: 0,
      used: 0,
      canUse: 0,
      balance: 0,
      creditMax: 0,
      usedCredit: 0,
      // serialNum: '',
    }
    const userInfo = ref(userdefault)

    function setUserInfo(data) {
      let { userInfo: obj, accessToken, refreshToken: longToken } = data
      userInfo.value.id = obj.userId
      userInfo.value.nickname = obj.nickName
      userInfo.value.username = obj.userName
      userInfo.value.token = accessToken
      userInfo.value.credit = obj.balance // 剩余
      userInfo.value.used = obj.usedCredit // 已使用
      userInfo.value.canUse = obj.creditMax // 最大限额
      userInfo.value.balance = obj.balance // 可用
      userInfo.value.creditMax = obj.creditMax // 最大限额
      userInfo.value.usedCredit = obj.usedCredit // 已使用
      // userInfo.value.serialNum = obj.serialNum
      token.value = accessToken
      refreshToken.value = longToken
    }
    function setToken(t) {
      token.value = t
    }
    function setRefreshToken(t) {
      refreshToken.value = t
    }
    function logout() {
      userInfo.value = cloneDeep(userdefault)
      token.value = ''
      refreshToken.value = ''
    }
    return { token, refreshToken, userInfo, setUserInfo, logout, setToken, setRefreshToken }
  },
  {
    persist: true,
  },
)
