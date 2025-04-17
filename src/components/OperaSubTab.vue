<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
// OperaSubTab is 越级操作子路由
defineOptions({
  name: "OperaSubTab"
});
defineProps({
  showCreate: {
    type: Boolean,
    default: false
  },
})
const operaSubTab = ref();
console.log(operaSubTab);
const route = useRoute()
const isLevelManage = computed(() => {
  return route.path.includes('level-manage')
})
const basePath = computed(() => {
  if(isLevelManage.value) {
    return '/level-manage'
  } else {
    return '/admin-opera'
  }
})
</script>

<template>
  <a-space class="report-sub-tab " size="mini" fill >
    <template #split>
      <a-divider direction="vertical" :margin="2" />
    </template>
    <RouterLink v-if="showCreate" :to="basePath + '/create-sub-level'">
      <a-link href="javascript:void(0)" >新增下级</a-link>
    </RouterLink>
    <RouterLink v-if="!isLevelManage" to="/admin-opera/power-opera">
      <a-link href="javascript:void(0)" >账户列表</a-link>
    </RouterLink>
    <RouterLink v-else to="/level-manage/level-manage-list">
      <a-link href="javascript:void(0)" >账户列表</a-link>
    </RouterLink>
  </a-space>
</template>

<style lang="less" scoped>
:deep(.link-active-sub) {
  .arco-link {
    color: #f00;
  }
}
</style>
