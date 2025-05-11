<script setup>
defineOptions({
  name: "BetView"
});
</script>

<template>
  <div class="route-next">
    <div class="big_link">
      <a-space size="mini">
        <RouterLink to="/home/bet/bet-two-set">
          <a-button>二字定</a-button>
        </RouterLink>
        <RouterLink to="/home/bet/bet-quick-bet">
          <a-button  >快打</a-button>
        </RouterLink>
        <RouterLink to="/home/bet/bet-quick-choose">
          <a-button >快选</a-button>
        </RouterLink>
      </a-space>
    </div>
    <RouterView />
    <div class="flex-box gap4">
      <div class="flex-item">
        <CardBox title="推荐一" minHeight="400px">
          <table class="table_num">
          <thead>
            <tr>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 10" :key="item">
              <td>46XX</td>
              <td>99.2</td>
              <td>42XX</td>
              <td>99.2</td>
              <td>46XX</td>
              <td>99.2</td>
              <td>42XX</td>
              <td>99.2</td>
              <td>42XX</td>
              <td>99.2</td>
            </tr>
          </tbody>
        </table>
        </CardBox>
      </div>
    </div>
  </div>

</template>
<style lang="less" scoped>
.route-next {
  width: 100%;
  display: flex;
  flex-direction: column;
  :deep(.page-lay) {
    height: auto;
  }
}
.mai_btn {
  height: 40px;
  line-height:40px;
  text-align: center;
  font-size: 20px;
  border:1px solid #ccc;
  margin: 4px;
  cursor: pointer;
}

.big_link {
  margin-bottom:4px;
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
      background-image: linear-gradient(to bottom, #a5d7ee, #FFF);
      border-color: transparent;
    }
  }
}
</style>
