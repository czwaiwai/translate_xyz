<script setup>
import { ref } from 'vue';
// QuickChooseView is
defineOptions({
  name: "QuickChooseView"
});
</script>

<template>
  <PageLay class="quick-choose-view">
    <div class="flex-box">
      <CardBox class="flex-item" title="生成号码框"></CardBox>
      <CardBox class="flex-item" hideHead>
        <a-tabs type="capsule" size="large" justify>
          <a-tab-pane key="1" title="二字定">
            Content of Tab Panel 1
          </a-tab-pane>
          <a-tab-pane key="2" title="三字定">
            Content of Tab Panel 2
          </a-tab-pane>
          <a-tab-pane key="3" title="四字定">
            Content of Tab Panel 3
          </a-tab-pane>
          <a-tab-pane key="4" title="二字现">
            Content of Tab Panel 3
          </a-tab-pane>
          <a-tab-pane key="5" title="三字现">
            Content of Tab Panel 3
          </a-tab-pane>
          <a-tab-pane key="6" title="四字现">
            Content of Tab Panel 3
          </a-tab-pane>
        </a-tabs>
      </CardBox>
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.quick-choose-view {
  /* Add your styles here */
}
</style>
