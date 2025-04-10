<script setup>
import { ref } from 'vue';
// MemberInfoView is 会员资料
defineOptions({
  name: "MemberInfoView"
});
const message = ref("member-info-view");
</script>

<template>
  <PageLay class="member-info-view">
    <h1>{{ message }}</h1>
  </PageLay>
</template>

<style lang="less" scoped>
.member-info-view {
  /* Add your styles here */
}
</style>
