<script setup>
import { ref, h } from 'vue';
import { Modal } from '@arco-design/web-vue';
// TotalSubTab is
defineOptions({
  name: "TotalSubTab"
});
const totalSubTab = ref();
console.log(totalSubTab);
const handicapHandle = () => {
  Modal.confirm({
    title: '温馨提示',
    content: () => h('div',['确定执行',h('span', {className: 'red'}, '打包实货白单数据'),'操作吗？' ]),
    closable: true,
    alignCenter: false,
    draggable: true,
    showIcon: false
  })
}
</script>

<template>
  <a-space class="total-sub-tab " size="mini" fill >
    <template #split>
      <a-divider direction="vertical" :margin="2" />
    </template>
    <RouterLink to="/total-tab/total-details">
      <a-link href="javascript:void(0)" >总货明细</a-link>
    </RouterLink>
    <RouterLink  to="/total-tab/win-details">
      <a-link href="javascript:void(0)" >中奖明细</a-link>
    </RouterLink>
    <RouterLink  to="/total-tab/handicap-details">
      <a-link href="javascript:void(0)" >拦货明细</a-link>
    </RouterLink>
    <a-link href="javascript:void(0)" @click="handicapHandle">打包拦货白单数据</a-link>
  </a-space>
</template>

<style lang="less" scoped>
.total-sub-tab {
  :deep(.link-active-sub) {
    .arco-link {
      color: #f00;
    }
  }
}
</style>
