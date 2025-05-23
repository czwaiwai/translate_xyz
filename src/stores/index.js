import { ref, computed, toRaw } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
import { mergeBets } from '@/lib/utils'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useGameStore = defineStore('game', () => {
  const packageInfo = ref({
    twoArr: [],
    threeArr: [],
    fourArr: []
  })
  const gameInfo = ref({
    name: '',
    serialNum: '25089',
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
    if(type) {
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
    // userInfo = {
    //   name: 'y05',
    //   token: 'xxxxxxx',
    //   credit: 0,
    //   used: 0,
    //   canUse: 0,
    //   serialNum: '25089',
    // }
    const userdefault = {
      name: '',
      token: '',
      credit: 0,
      used: 0,
      canUse: 0,
      serialNum: '',
    }
    const userInfo = ref(userdefault)

    function setUserInfo(obj) {
      userInfo.value.name = obj.name
      userInfo.value.token = obj.token
      userInfo.value.credit = obj.credit
      userInfo.value.used = obj.used
      userInfo.value.canUse = obj.canUse
      userInfo.value.serialNum = obj.serialNum
      token.value = obj.token
    }
    function logout() {
      userInfo.value = cloneDeep(userdefault)
      token.value = ''
    }
    return { token, userInfo, setUserInfo, logout }
  },
  {
    persist: true,
  },
)
