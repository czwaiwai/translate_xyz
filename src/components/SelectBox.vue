<script setup>
import { ref } from 'vue';
// SelectBox is
defineOptions({
  name: "SelectBox"
});
const model = defineModel()
const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
})
</script>

<template>
<select v-model="model" v-bind="$attrs"><option  v-for="item in props.options" :key="item.value" :value="item.value">{{ item.label }}</option></select>
</template>
