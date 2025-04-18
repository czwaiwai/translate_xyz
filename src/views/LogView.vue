<script setup>
import { ref } from 'vue';
// LogView is 日志
defineOptions({
  name: "LogView"
});
const tableTitle = [
  { value: "笔数", name: "count", width: 120 },
  { value: "金额", name: "amount", width: 120 },
  { value: "操作内容", name: "operation" },
  { value: "类型", name: "type", width: 120 },
  { value: "操作时间", name: "operationTime", width: 130 },
  { value: "再次生成", name: "regenerate", width: 60 },
  { value: "常用", name: "common", width: 60 },
]
const tableData = []
</script>

<template>
  <PageLay class="log-view">
    <CardBox padding="0">
      <template #header>
        <div class="flex-box">
          <div class="bold pr20">日志</div>
          <div class="flex-item log_radio">
            <a-radio-group default-value="1">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >二定位</a-link>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >三定位</a-link>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >四定位</a-link>
                </template>
              </a-radio>
              <a-radio value="4">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >二字现</a-link>
                </template>
              </a-radio>
              <a-radio value="5">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >三字现</a-link>
                </template>
              </a-radio>
              <a-radio value="6">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >四字现</a-link>
                </template>
              </a-radio>
              <a-radio value="7">
                <template #radio="{ checked }">
                  <a-link :status="checked?'warning':''" >全部</a-link>
                </template>
              </a-radio>
            </a-radio-group>
          </div>

        </div>
      </template>
      <TableBox :title="tableTitle" :data="tableData"></TableBox>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.log-view {
  /* Add your styles here */
  .log_radio {
    :deep(.arco-radio) {
      margin-right:6px;
      .arco-link {
        color:#fff;
        &.arco-link-status-warning{
          color:yellow;
        }
        &:hover {
          background:transparent;
        }
      }
    }
  }
}
</style>
