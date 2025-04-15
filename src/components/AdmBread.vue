<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// AdmBread is
defineOptions({
  name: "AdmBread"
});
const admBread = ref();
const route = useRoute()
const router = useRouter()
console.log(admBread);
console.log(route)
const routes = route.matched.map(item => {
  let title = item?.meta?.title
  let path = item.path
  if (item.path === '/') {
    title = '位置'
    path = '/admin/'
  }
  return {
    label: title,
    path: path,
    name: item.name
  }
}).filter(item => item.label)

const clickHandle = (route) => {
  console.log(route)
  router.push({
    name: route.name
  })
}
</script>

<template>
  <div ref="admBread" class="adm-bread">
    <div class="flex-item">
      <a-breadcrumb separator=">>" :routes="routes">
        <template #item-render="{ route }">
          <a @click="clickHandle(route)">
            {{ route.label }}
          </a>
        </template>
      </a-breadcrumb>
    </div>
    <slot name="extra"></slot>
  </div>
</template>

<style lang="less" scoped>
.adm-bread {
  border: 1px solid #3783c0;
  padding: 5px 10px;
  background: #FBFFE1;
  display: flex;
  margin-bottom: 10px;
}
</style>
