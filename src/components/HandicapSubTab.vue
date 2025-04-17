<script setup>
import { ref } from 'vue';
// HandicapSubTab is
defineOptions({
  name: "HandicapSubTab"
});
const handicapSubTab = ref();
console.log(handicapSubTab);
const message = ref('Hello, HandicapSubTab');
</script>

<template>
  <a-space class="handicap-sub-tab " size="nomarl" fill >
    <RouterLink to="/handicap-dealer/handicap-two-position">
      <a-link href="javascript:void(0)" >二定位</a-link>
    </RouterLink>
    <RouterLink  to="/handicap-dealer/handicap-three-position">
      <a-link href="javascript:void(0)" >三定位</a-link>
    </RouterLink>
    <RouterLink  to="/handicap-dealer/handicap-four-position">
      <a-link href="javascript:void(0)" >四定位</a-link>
    </RouterLink>
    <RouterLink  to="/handicap-dealer/handicap-two-present">
      <a-link href="javascript:void(0)" >二字现</a-link>
    </RouterLink>
    <RouterLink  to="/handicap-dealer/handicap-two-present">
      <a-link href="javascript:void(0)" >三字现</a-link>
    </RouterLink>
    <RouterLink  to="/handicap-dealer/handicap-four-present">
      <a-link href="javascript:void(0)" >四字现</a-link>
    </RouterLink>
  </a-space>
</template>

<style lang="less" scoped>
.handicap-sub-tab {
  .arco-link {
    color: #FFF;
    font-size:12px;
    font-weight: bold;
    &:hover{
      background:transparent;
      text-decoration: underline;
    }
  }
  :deep(.link-active-sub) {
    .arco-link {
      color: yellow;
    }
  }
}
</style>
