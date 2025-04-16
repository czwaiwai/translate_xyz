<script setup>
import { ref } from 'vue';
import { emnum } from '@/lib/api';
// TotalSearch is 总货明细的搜索
defineOptions({
  name: "TotalSearch"
});
const form = ref({
  account: "",
  num: "",
  xian: "",
  rangeType: "1",
  rangeMin: "",
  rangeMax: "",
  category: "",
  packageId:"",
})
const typeOpt = ref([
  { label: "赔率", value: 1 },
  { label: "金额", value: 2 },
  { label: "退码", value: 3 },
])
const packageOpt = ref([
  { label: "全部", value: "-1" },
  { label: "散货", value: "0" },
  { label: "包牌", value: "1" },
])
const submitHandle = () => {}
const printHandle = () => {}
</script>

<template>
  <CardBox title="" blue>
    <div class="flex-box">
      <div class="flex-item">
        <form @submit.prevent="submitHandle">
          <label class="mr10">查账号 <input v-model="form.account" class="w90" /></label>
          <label class="mr10">查号码 <input v-model="form.num" class="w90" /></label>
          <label class="mr10">现 <input v-model="form.xian" type="checkbox"/></label>
          <label class="mr10">列出 <select v-model="form.rangeType"><option  v-for="item in typeOpt" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
          <label class="mr10"><input v-model="form.rangeMin" class="w60" /></label>
          <label class="mr10">至 <input v-model="form.rangeMax" class="w60" /></label>
          <label class="mr10">分类 <select v-model="form.category"><option  v-for="item in emnum.category" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
          <label class="mr10">类型 <select v-model="form.packageId"><option  v-for="item in packageOpt" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
          <button class="sub-btn mr10" type="submit">提交</button>
          <button class="sub-btn"  @click="printHandle">打印</button>
        </form>
      </div>
      <div class="flex-center">
        <slot>
          <a href="javascript:void(0)" @click="downloadHandle">下载</a>
        </slot>
      </div>
    </div>
  </CardBox>
</template>

<style lang="less" scoped>
.total-search {
  /* Add your styles here */
}
</style>
