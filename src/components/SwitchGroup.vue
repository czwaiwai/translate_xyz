<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
// SwitchGroup is
defineOptions({
  name: "SwitchGroup"
});
const props = defineProps({
  value: {
    type: String,
    default: '0'
  },
})
const model = defineModel({
  type: String,
  default: '0'  // -1 除  0 空  1取
})
onMounted(() => {
  model.value = props.value
})
// const chu = computed({
//   set(val) {
//     setModel(val, qu.value, '-1')
//   },
//   get() {
//     return model.value === '-1'
//   }
// })
// const qu = computed({
//   set(val) {
//     setModel(chu.value, val, '1')
//   },
//   get() {
//     return model.value === '1'
//   }
// })
// const setModel = (chuVal, quVal, where) => {
//   console.log(chuVal, quVal)
//   if(!chuVal && !quVal) {
//     if (props.value !== '0') {
//       setTimeout(() => {
//         model.value = where
//       },1000)

//       return
//     }
//     return model.value = '0'
//   }
//   if (chuVal && quVal) {
//     return model.value = where
//   }
//   if(chuVal && !quVal) {
//     return model.value = '-1'
//   }
//   if(!chuVal && quVal) {
//     return model.value = '1'
//   }

// }
const chu = ref(false)
const qu = ref(false)
const changeHandle = (e, index) => {
  if(index === 1) {
    if(chu.value) {
      return
    }
    chu.value = true
    qu.value = false
    return
  }
  if(index === 2) {
    if(qu.value) {
      return
    }
    qu.value = true
    chu.value = false
  }
}
</script>

<template>
  <div class="flex-inline gap2 ml4">
    <label><input v-model="chu" @chage="changeHandle($event, 1)"  type="checkbox"> 除</label>
    <label><input v-model="qu" @change="changeHandle($event, 2)"  type="checkbox" > 取</label>
  </div>
</template>

<style lang="less" scoped>
.switch-group {
  /* Add your styles here */
}
</style>
