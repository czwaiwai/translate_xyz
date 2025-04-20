<script setup>
import { ref } from 'vue';
// OddsMoveView is
defineOptions({
  name: "OddsMoveView"
});
// const message = ref("odds-move-view");
</script>

<template>
  <PageLay class="odds-move-view">
    <!-- <h1>{{ message }}</h1> -->
    <CardBox title="赔率变动">
      <template #header>
        <div class="card-box-title tc">
          <a-radio-group default-value="1">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >二定位</a-link>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >三定位</a-link>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >四定位</a-link>
                </template>
              </a-radio>
              <a-radio value="4">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >二字现</a-link>
                </template>
              </a-radio>
              <a-radio value="5">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >三字现</a-link>
                </template>
              </a-radio>
              <a-radio value="6">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >四字现</a-link>
                </template>
              </a-radio>
            </a-radio-group>
        </div>
      </template>
      <div class="odds-move-content">
        <!-- Odds move content goes here -->
      </div>
      </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.odds-move-view {
  /* Add your styles here */
}
</style>
