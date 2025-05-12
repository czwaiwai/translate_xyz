<script setup>
import { ref, computed } from 'vue';
import { times, random, padStart, chunk} from 'lodash-es';
defineOptions({
  name: "EatView"
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
  <div class="route-next eat-view">
    <div class="big_link">
      <a-space size="mini">
        <RouterLink to="/home/eat/eat-two-set">
          <a-button>二字定</a-button>
        </RouterLink>
        <RouterLink to="/home/eat/eat-quick-bet">
          <a-button  >快打</a-button>
        </RouterLink>
        <RouterLink to="/home/eat/eat-quick-choose">
          <a-button >快选</a-button>
        </RouterLink>
      </a-space>
    </div>
    <RouterView />
    <div class="flex-box mt4 gap4">
      <div class="flex-item">
        <CardBox title="吃彩池推荐" minHeight="400px">
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
  background:#ffd2d0;
  width: 100%;
  display: flex;
  flex-direction: column;
  :deep(.page-lay) {
    height: auto;
  }
  &.eat-view {
    :deep(.quick-choose-view .radio-btn.active) {
      color:#FFF;
      background: #ff5a4e;
    }
    :deep(.form-quick-choose td) {
      border-color:#ffd2d0;
    }
    :deep(.card-box-hd) {
      background-image: linear-gradient(0deg, #ff5549, #ff9992);
    }
    :deep(.pri-btn) {
      background-image: linear-gradient(0deg, #ff5549, #ff9992);
    }
    :deep(.pri-btn-h36) {
      background-image: linear-gradient(0deg, #ff5549, #ff9992);
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
  border:1px solid red;
  margin: 4px;
  cursor: pointer;
}

.big_link {
  margin:4px;
  .link-active-sub {
    :deep(.arco-btn) {
      color:#fff;
      background-image: linear-gradient(0deg, #ff5549, #ff9992);
      border-radius: 2px;
      border: 1px solid #ff5a4e;
    }
  }
}
</style>
