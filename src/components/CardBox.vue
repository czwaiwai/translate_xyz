<script setup>
import { ref, computed, inject } from 'vue';
import { useGameStore } from '@/stores';
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
  close: {
    type: String,
    default: ''
  },
  flexBox: {
    type: Boolean,
    default: false
  },
  blue: Boolean,
  center: Boolean,
  hideHead: Boolean,
  hideBorder: Boolean,
  hideContent: Boolean
})
const color = inject('theme')
const gameStore = useGameStore()
const headClass = computed(() => {
  let tmp = ''
  if (!props.hideBorder) {
    tmp += 'card-box-hd-line '
  }
  if (props.blue || color === 'blue') {
    tmp += 'card-box-hd-blue '
  }
  return tmp
})
const bdClass = computed(() => {
  if(props.flexBox) {
    return 'flex-box'
  }
  return ''
})
const toggle = ref(true);
const toggleCont = () => {
  toggle.value = !toggle.value;
  return toggle.value;
}
const waitOpen =  computed(() => {
  return props.close || gameStore.statusTxt
})
defineExpose({toggleCont})
</script>

<template>
  <div class="card-box" :class="!props.hideBorder ? 'card-box-border' : ''">
    <div v-if="!hideHead" class="card-box-hd" :class="headClass">
      <slot name="header">
        <div class="card-box-title" :class="center ? 'tc' : ''">{{ props.title }}</div>
      </slot>
    </div>
    <div v-show="toggle" class="card-box-bd" :class="bdClass">
      <template v-if="waitOpen">
        <div class="card-box-close" >
          {{ close }}
        </div>
      </template>
      <template v-else>
        <slot></slot>
      </template>
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
  &-close {
    min-height:300px;
    padding-top:140px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  &-hd {
    background: #52b731;
    height: 28px;
    padding: 0 4px;
    color: #FFF;
    line-height: 28px;
    font-size: 12px;
    font-weight: bold;

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
