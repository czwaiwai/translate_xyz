<script setup>
import { ref } from 'vue';
// HandicapThreePresent is
defineOptions({
  name: "HandicapThreePresent"
});
const handicapThreePresent = ref();
console.log(handicapThreePresent);

</script>

<template>
  <PageLay ref="handicapThreePresent" class="handicap-three-present">
    <CardBox  blue>
      <template #header>
        <div class="flex-box">
          <div class="bold pr20">拦货盘</div>
          <div class="">
            <HandicapSubTab></HandicapSubTab>
            <span > </span>
          </div>
          <div class="yellow bold flex-item pl20">提示：偶尔会出现（同号码同秒）下单造成超出（拦货金额），请（补码）。</div>
          <div class="bold">汇总打印</div>
        </div>
      </template>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.handicap-three-present {
  /* Add your styles here */
}
</style>
