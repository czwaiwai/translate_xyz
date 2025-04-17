<script setup>
import { ref } from 'vue';
// HandBox is
defineOptions({
  name: "HandBox"
});
defineProps({
  item: {
    type: Object,
    default: () => ({
      num:0,
      id:1,
      lose:0,
      win:0,
    })
  }
});
const handBox = ref();
console.log(handBox);
const message = ref('Hello, HandBox');
</script>

<template>
  <div class="flex-box hand-box">
    <div class="flex-item left-num">
      <div class="blue">[{{ item.id }}]</div>
      <div >{{ item.num }}</div>
    </div>
    <div class="score">
      <div>{{ item.lose }}</div>
      <div class="red">{{ item.win }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hand-box {
  .left-num {
    padding:4px;
  }
  .score {
    width: 45px;
    padding:4px;
    border-left:1px solid #dcf7db;
  }
  /* Add your styles here */
}
</style>
