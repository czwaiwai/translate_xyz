<script setup>
import { inject , computed} from 'vue';
const props = defineProps({
  isBox: {
    type: Boolean,
    default: false
  }
})
const contClass =  computed(() => {
  return props.isBox ? 'page-lay-content-box' : 'page-lay-content'
})
const showBreadcrumb = inject('breadcrumb', true)
</script>

<template>
  <div class="page-lay">
    <div class="page-lay-content" :class="contClass">
      <AdmBread v-if="showBreadcrumb" >
        <template #extra>
          <slot name="extra"></slot>
        </template>
      </AdmBread>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-lay {
  width: 100%;
  height: 100%;

  &-content {
    padding: 5px 1px 10px;
    &-box {
      display:flex;
      padding: 0;

      width: 100%;
      height: 100%;
      gap:4px;
    }
  }

}
</style>
