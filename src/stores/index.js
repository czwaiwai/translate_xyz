import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useGameStore = defineStore('game', () => {
  const gameInfo = ref({
    name: '',
    serialNum: '25089',
    status: 'open', // open or close
    datetime: '',
  })

  function setGameInfo(name, serialNum, datetime) {
    gameInfo.value.name = name
    gameInfo.value.serialNum = serialNum
    gameInfo.value.datetime = datetime
  }

  return { gameInfo, setGameInfo }
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
