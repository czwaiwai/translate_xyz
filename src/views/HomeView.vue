<script setup>
</script>

<template>
  <div class="route-page">
    <div class="flex-box">
      <div class="flex-item">
        <div class="mai_btn">买</div>
      </div>
      <div class="flex-item">
        <div class="mai_btn">卖</div>
      </div>
    </div>
    <div class="big_link">
      <a-space size="mini">
        <RouterLink to="/home/sub-two-set">
          <a-button>二字定</a-button>
        </RouterLink>
        <RouterLink to="/home/sub-quick-bet">
          <a-button  >快打</a-button>
        </RouterLink>
        <RouterLink to="/home/sub-quick-choose">
          <a-button >快选</a-button>
        </RouterLink>
      </a-space>
    </div>
    <RouterView />
    <div class="flex-box gap4">
      <div class="flex-item">
        <CardBox title="推荐一" minHeight="400px"></CardBox>
      </div>
      <div class="flex-item">
        <CardBox title="推荐二" minHeight="400px"></CardBox>
      </div>
    </div>
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
  line-height:40px;
  text-align: center;
  font-size: 20px;
  border:1px solid red;
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
