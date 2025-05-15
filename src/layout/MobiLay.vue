<script setup>
import MobiHeader from '@/components/MobiHeader.vue'

defineOptions({
  name: 'MobiLay',
})
</script>

<template>
  <a-layout theme="light" class="h100">
    <a-layout-header>
      <MobiHeader />
    </a-layout-header>
    <a-layout-content class="mobi_content">
      <div class="main_sub">
        <RouterView />
      </div>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped>
.mobi_content {
  flex: 1;
  overflow: auto;
}
</style>
