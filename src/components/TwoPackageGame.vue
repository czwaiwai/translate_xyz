<script setup>
import { ref } from 'vue';
import { emnum } from '@/lib/api';
// TwoPackageGame is 二字定包牌
defineOptions({
  name: "TwoPackageGame"
});
const twoPackageGame = ref();
console.log(twoPackageGame);
// const message = ref('Hello, TwoPackageGame');
const gameType = ref('1')
</script>

<template>
  <CardBox ref="twoPackageGame" class="two-package-game" padding="0">
    <template #header>
      <div class="mode_radio">
        <a-radio-group v-model="gameType" >
          <a-radio v-for="(item, index) in emnum.twoCate" :key="index" :value="item.value">
            <template #radio="{ checked }">
              <a-link :status="checked?'warning':''" >{{ item.label }}</a-link>
            </template>
          </a-radio>
        </a-radio-group>
        <span class="yellow">总金额: 0</span>
      </div>
    </template>
    <table class="package_table">
      <thead>
        <tr>
          <th v-for="key in 10" :key="key">号码/金额</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div>

    </div>
  </CardBox>
</template>

<style lang="less" scoped>
.two-package-game {
  .mode_radio {
    text-align:center;
    :deep(.arco-radio) {
      margin-right:6px;
      .arco-link {
        color:#fff;
        &.arco-link-status-warning{
          color:red;
        }
        &:hover {
          background:transparent;
        }
      }
    }
  }
  .package_table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border: 0;
    padding: 0;
    margin: 0;
    thead {
      th {
        text-align: center;
        background: rgb(224,255,209);
      }
    }
    td,
    th {
      padding: 4px;
      outline: none;
      font-weight: bold;
      text-align: left;
      border: 1px solid #bdf0bc;
    }
  }
}
</style>
