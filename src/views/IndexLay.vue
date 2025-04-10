<script setup>
defineOptions({
  name: 'IndexLay',
})
import { ref } from 'vue';

const feature = ref();
console.log(feature)
</script>
<template>
  <a-layout ref="featrue" theme="light" class="h100 ">
    <a-layout-header>
      <MemHeader />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <SiderLeft></SiderLeft>
      </a-layout-sider>
      <a-layout-content class="layout_content">
        <div class="main_sub">
          <RouterView />
        </div>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped>
:deep(.arco-layout-has-sider) {
  flex-shrink: 0;
  height: 0;
}

:deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 0;
}
</style>
