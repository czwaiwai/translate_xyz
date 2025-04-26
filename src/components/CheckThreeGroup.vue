<script setup>
import { ref } from 'vue';
// SwitchGroup is
defineOptions({
  name: "CheckThreeGroup"
});

const q1 = defineModel('q1', {
  default: false
})
const q2 = defineModel('q2', {
  default: false
})
const q3 = defineModel('q3', {
  default: false
})
</script>

<template>
  <div class="flex-inline gap2 ml4 check-three-group">
    <label><input v-model="q1" type="checkbox" ></label>
    <label><input v-model="q2" type="checkbox" ></label>
    <label><input v-model="q3" type="checkbox" ></label>
  </div>
</template>

<style lang="less" scoped>
.check-four-group {
}
</style>
