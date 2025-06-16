<script setup>
import { ref } from 'vue'
// OddsMoveView is
defineOptions({
  name: 'OddsMoveView',
})
// const message = ref("odds-move-view");
</script>

<template>
  <PageLay class="odds-move-view">
    <!-- <h1>{{ message }}</h1> -->
    <CardBox title="赔率变动" padding="0">
      <template #header>
        <div class="card-box-title tc mode_radio">
          <a-radio-group default-value="1">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-link :status="checked ? 'warning' : ''">二定位</a-link>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-link :status="checked ? 'warning' : ''">三定位</a-link>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-link :status="checked ? 'warning' : ''">四定位</a-link>
              </template>
            </a-radio>
            <a-radio value="4">
              <template #radio="{ checked }">
                <a-link :status="checked ? 'warning' : ''">二字现</a-link>
              </template>
            </a-radio>
            <a-radio value="5">
              <template #radio="{ checked }">
                <a-link :status="checked ? 'warning' : ''">三字现</a-link>
              </template>
            </a-radio>
            <a-radio value="6">
              <template #radio="{ checked }">
                <a-link :status="checked ? 'warning' : ''">四字现</a-link>
              </template>
            </a-radio>
          </a-radio-group>
        </div>
      </template>
      <div class="odds-move-content">
        <table class="table_num">
          <thead>
            <tr>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
              <th width="10%">号码</th>
              <th width="10%">赔率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 10" :key="item">
              <td>46XX</td>
              <td>99.2</td>
              <td>42XX</td>
              <td>99.2</td>
              <td>46XX</td>
              <td>99.2</td>
              <td>42XX</td>
              <td>99.2</td>
              <td>42XX</td>
              <td>99.2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.odds-move-view {
  .table_num {
    width: 100%;
    text-align: center;
    td,
    th {
      border: 1px solid var(--table-border-color);
      height: 22px;
      border-width: 0 1px 1px 0;
      padding: 2px 4px;
    }
    th {
      background: #f0f0f0;
    }
    th:nth-child(4n + 3),
    th:nth-child(4n + 4) {
      background: #fffeaa;
    }
    td:nth-child(4n + 3),
    td:nth-child(4n + 4) {
      background: #fffeaa;
    }
  }
  .mode_radio {
    :deep(.arco-radio) {
      margin-right: 6px;
      .arco-link {
        color: #fff;
        &.arco-link-status-warning {
          color: red;
        }
        &:hover {
          background: transparent;
        }
      }
    }
  }
}
</style>
