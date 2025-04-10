<script setup>
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
    default: '0'
  },
  titleLeft: Boolean,
  hideHead: {
    type: Boolean,
    default: false
  },
  hideBorder: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card-box" :class="!props.hideBorder ? 'card-box-border' : ''">
    <div v-if="!hideHead" class="card-box-hd" :class="!props.hideBorder ? 'card-box-hd-line' : ''">
      <slot name="header">
        <div class="card-box-title" :class="titleLeft ? 'tl' : ''">{{ props.title }}</div>
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
.card-box {
  &-hd {
    background: #52b731;
    height: 28px;
    text-align: center;
  }

  &-hd-line {
    border-bottom: 1px solid #640000;
  }

  &-title {
    text-align: center;
    color: #FFF;
    line-height: 28px;
    font-size: 12px;
    font-weight: bold;
  }

  &-bd {
    padding: v-bind(padding);
    min-height: 80px;
  }

  &-border {
    border: 1px solid #640000;
  }

  &-ft {}
}
</style>
