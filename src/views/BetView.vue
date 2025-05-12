<script setup>
import { ref, computed } from 'vue';
import { times, random, padStart, chunk} from 'lodash-es';
defineOptions({
  name: "BetView"
});
const list = ref(times(100, () => random(0, 10000)))
console.log(list.value)
const listFormat = computed(() => {
  return chunk(list.value.map((item, index) => {

    return {
      num: padStart(item, 4, '0'),
      odds: random(80, 100),
      index: index
    }
  }), 10)
})
</script>

<template>
  <div class="route-next bet-view">
    <div class="big_link">
      <a-space size="mini">
        <RouterLink to="/home/bet/bet-two-set">
          <a-button>二字定</a-button>
        </RouterLink>
        <RouterLink to="/home/bet/bet-quick-bet">
          <a-button  >快打</a-button>
        </RouterLink>
        <RouterLink to="/home/bet/bet-quick-choose">
          <a-button >快选</a-button>
        </RouterLink>
      </a-space>
    </div>
    <RouterView />
    <div class="flex-box mt4 gap4">
      <div class="flex-item">
        <CardBox title="赌彩池推荐" minHeight="400px">
          <table class="hot-table" >
            <thead>
              <tr class="title_wrap">
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
                <th class="title">
                  <div class="flex-box title_box">
                    <div class="flex-item">号码</div>
                    <div class="flex-item red">赔率</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="(items, index) in listFormat" :key="index">
                <td v-for="(item,sIndex) in  items" :key="sIndex">
                  <div  class="flex-box">
                    <div class="flex-item tc">{{ item.num }}</div>
                    <div class="flex-item odds tc red">{{ item.odds }}</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBox>
      </div>
    </div>
  </div>

</template>
<style lang="less" scoped>
.route-next {
  background:#c5dff5;
  width: 100%;
  display: flex;
  flex-direction: column;
  :deep(.page-lay) {
    height: auto;
  }
  &.bet-view {
    :deep(.quick-choose-view .radio-btn.active) {
      color:#FFF;
      background: #5f8dce;
    }
    :deep(.form-quick-choose td) {
      border-color:#c5dff5;
    }
  }
}
table.hot-table {
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid #333;
  }
}
.mai_btn {
  height: 40px;
  line-height:40px;
  text-align: center;
  font-size: 20px;
  border:1px solid #ccc;
  margin: 4px;
  cursor: pointer;
}

.big_link {
  margin:4px;
  :deep(.arco-btn-text) {
    color: yellow;
    font-weight: bold;
  }

  :deep(.arco-btn-text:hover) {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
  }


  .link-active-sub {
    :deep(.arco-btn) {
      color: #FFF;
      background-image: linear-gradient(180deg, #9bd2ff, #386bb6);
      border-radius: 2px;
      border: 1px solid #5f8dce;
    }
  }
}
</style>
