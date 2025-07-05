<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores'
import { IconPlusCircle, IconMinusCircle } from '@arco-design/web-vue/es/icon'
// AdmInfoBox is
defineOptions({
  name: 'AdmInfoBox',
})
const cardBox = ref()
const toggle = ref(true)
const toggleHandle = () => {
  toggle.value = cardBox.value.toggleCont()
}
const userStore = useUserStore()
const userInfo = computed(() => {
  return userStore.userInfo
})
</script>

<template>
  <CardBox ref="cardBox" class="adm-info-box" blue>
    <template #header>
      <div class="flex-box">
        <div class="flex-item bold">信息提示</div>
        <div @click="toggleHandle" class="toggle">
          <IconPlusCircle v-if="toggle" :style="{ fontSize: '16px' }" />
          <IconMinusCircle v-else :style="{ fontSize: '16px' }" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="flex-box gap20">
        <div>总信用额度： {{ userInfo.creditMax }}；</div>
        <div>可分配信用额度：{{ userInfo.balance }}；</div>
        <div>已分配信用额度：{{ userInfo.usedCredit }}；</div>
      </div>
    </template>
  </CardBox>
</template>

<style lang="less" scoped>
.adm-info-box {
  /* Add your styles here */
}
</style>
