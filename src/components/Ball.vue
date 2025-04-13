<script setup>
import { ref } from 'vue';
// Ball is
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ball'
});
const props = defineProps({
  color: {
    type: String,
    default: 'gray'
  },
})
const ball = ref();
console.log(ball);
</script>

<template>
  <span class="ball" :class="props.color">
    <slot></slot>
  </span>
</template>

<style lang="less" scoped>
.ball {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 7px #d1d1d1, 3px 3px 7px rgba(0, 0, 0, 0.2);
  line-height: 30px;
  text-align: center;
  font-weight: bold;

  &.red {
    color: #FFF;
    background: linear-gradient(145deg, #ff4d4d, #ff0000);
    box-shadow: inset -3px -3px 7px #ff6666, inset 3px 3px 7px #cc0000, 3px 3px 7px rgba(0, 0, 0, 0.2);
  }

  &.gray {
    color: #333;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 7px #d1d1d1, 3px 3px 7px rgba(0, 0, 0, 0.2);
  }

  &.blue {
    color: #FFF;
    background: linear-gradient(145deg, #4d94ff, #0066ff);
    box-shadow: inset -3px -3px 7px #66a3ff, inset 3px 3px 7px #0052cc, 3px 3px 7px rgba(0, 0, 0, 0.2);
  }
}
</style>
