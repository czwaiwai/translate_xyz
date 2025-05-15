<script setup>
defineOptions({
  name: 'AdminLay',
})
</script>
<template>
  <a-layout ref="featrue" theme="light" class="h100 ">
    <a-layout-header>
      <AdmHeader />
    </a-layout-header>
    <a-layout>
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
.layout_content {
  background: #e1f2ff;
}

:deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  // width: 0;
}
</style>
