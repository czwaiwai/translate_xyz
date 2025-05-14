<script setup>
import { ref, watch, provide } from 'vue'
import { useRoute } from 'vue-router'
defineOptions({
  name: 'HomeView',
})
const route = useRoute()
const betType = ref('bet')
watch(route, (to) => {
  if (to.path.includes('/home/bet')) {
    betType.value = 'bet'
  }
  if (to.path.includes('/home/eat')) {
    betType.value = 'eat'
  }
})
provide('betType', betType)
</script>

<template>
  <div class="route-page">
    <div class="flex-box">
      <div class="flex-item">
        <RouterLink to="/home/bet">
          <div class="mai_btn mai_btn_bet">买入</div>
        </RouterLink>
      </div>
      <div class="flex-item">
        <RouterLink to="/home/eat">
          <div class="mai_btn mai_btn_eat">卖出</div>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>
<style lang="less" scoped>
.route-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  :deep(.page-lay) {
    height: auto;
  }
}
.mai_btn {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ccc;
  color: #333;
  background: #ccc;
  margin: 4px;
  cursor: pointer;
}
.link-active {
  .mai_btn_bet {
    color: #fff;
    text-decoration: none;
    border: 1px solid #5f8dce;
    background-image: linear-gradient(180deg, #9bd2ff, #386bb6);
  }
  .mai_btn_eat {
    color: #fff;
    text-decoration: none;
    border: 1px solid #ff5a4e;
    background-image: linear-gradient(0deg, #ff5549, #ff9992);
  }
}

.big_link {
  margin-bottom: 4px;
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
    }
  }
}
</style>
