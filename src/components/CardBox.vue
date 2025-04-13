<script setup>
import { computed } from 'vue';
defineOptions({
  name: 'CardBox'
})
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  padding: {
    type: String,
    default: '4px'
  },
  blue: Boolean,
  center: Boolean,
  hideHead: {
    type: Boolean,
    default: false
  },
  hideBorder: {
    type: Boolean,
    default: false
  }
})
const headClass = computed(() => {
  let tmp = ''
  if (!props.hideBorder) {
    tmp += 'card-box-hd-line '
  }
  if (props.blue) {
    tmp += 'card-box-hd-blue '
  }
  return tmp
})
</script>

<template>
  <div class="card-box" :class="!props.hideBorder ? 'card-box-border' : ''">
    <div v-if="!hideHead" class="card-box-hd" :class="headClass">
      <slot name="header">
        <div class="card-box-title" :class="center ? 'tc' : ''">{{ props.title }}</div>
      </slot>
    </div>
    <div class="card-box-bd">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-box-ft">
      <slot name="footer"></slot>
    </div>
  </div>
</template>


<style lang="less" scoped>
.card-box+.card-box {
  margin-top: 10px;
}

.card-box {
  :deep(.arco-form-layout-inline .arco-form-item) {
    margin-bottom: 0;
  }

  &-hd {
    background: #52b731;
    height: 28px;
    padding: 0 4px;

    &-blue {
      background-image: linear-gradient(to bottom, #52a5c5, #1698cc 20%);
    }
  }

  &-hd-line {
    border-bottom: 1px solid #640000;
  }

  &-title {
    color: #FFF;
    line-height: 28px;
    font-size: 12px;
    font-weight: bold;
  }

  &-bd {
    padding: v-bind(padding);
    background: #FFF;
    // min-height: 80px;
  }

  &-border {
    border: 1px solid #640000;
  }

  &-ft {}
}
</style>
