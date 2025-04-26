<script setup>
import { ref } from 'vue';
// SwitchGroup is
defineOptions({
  name: "CheckTwoGroup"
});

const q1 = defineModel('q1', {
  default: false
})
const q2 = defineModel('q2', {
  default: false
})
</script>

<template>
  <div class="flex-inline gap2 ml4 check-two-group">
    <label><input v-model="q1" type="checkbox" ></label>
    <label><input v-model="q2" type="checkbox" ></label>
  </div>
</template>

<style lang="less" scoped>
.check-two-group {
}
</style>
