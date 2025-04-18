<script setup>
import { inject } from 'vue';
const showBreadcrumb = inject('breadcrumb', true)
</script>

<template>
  <div class="page-lay">
    <div class="page-lay-content">
      <AdmBread v-if="showBreadcrumb" >
        <template #extra>
          <slot name="extra"></slot>
        </template>
      </AdmBread>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-lay {
  width: 100%;
  height: 100%;

  &-content {
    padding: 5px 1px 10px;
  }
}
</style>
