<script setup>
import { ref } from 'vue';

</script>

<template>
  <div class="page-lay">
    <div class="page-lay-content">
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
