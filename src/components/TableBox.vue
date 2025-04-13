<script setup>
import { computed, ref } from 'vue';
// TableBox is
defineOptions({
  name: "TableBox"
});
const props = defineProps({
  title: {
    type: Array,
    default: () => [{
      name: 'openTime',
      value: '开奖时间',
      width: '13%',
    },
    {
      name: 'issue',
      value: '期号',
      width: '10%'
    },
    {
      name: 'qian',
      value: '仟',
      width: '10%'
    },
    {
      name: 'bai',
      value: '佰',
      width: '10%'
    },
    {
      name: 'shi',
      value: '拾',
      width: '10%'
    },
    {
      name: 'ge',
      value: '个',
      width: '10%'
    },
    {
      name: 'ball5',
      value: '球5',
      width: '10%'
    }]
  },
  data: {
    type: Array,
    default: () => []
  }
});
const formatData = computed(() => {
  return props.data.map(item => {
    const newItem = {
      list: []
    };
    newItem.list = props.title.map(titleItem => {
      return {
        name: titleItem.name,
        value: item[titleItem.name],
      }
    });
    return newItem;
  });
});
const withOutProp = (item) => {
  const { name, value, ...rest } = item;
  return rest;
}
</script>

<template>
  <div class="table-box">
    <table class="table-wrap">
      <slot name="header">
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <template v-for="(item, index) in title" :key="index">
              <th class="table-hd-th" v-bind="withOutProp(item)">
                <slot name="title" :item="item">{{ item.value }}</slot>
              </th>
            </template>
          </tr>
        </thead>
      </slot>
      <tbody id="tbody" class="table-bd">
        <template v-if="data.length">
          <template v-for="(item, index) in formatData" :key="index">
            <tr class="table-bd-tr">
              <template v-for="(sub, sindex) in item.list" :key="sindex">
                <td class="table-bd-td">
                  <slot name="data" :item="sub" :index="index">{{ sub.value }}</slot>
                </td>
              </template>
            </tr>
          </template>
        </template>
        <template v-else>
          <tr class="table-bd-tr">
            <td class="table-hd-td" :colspan="title.length">暂无数据</td>
          </tr>
        </template>
      </tbody>
      <slot v-if="$slots.footer" name="footer"></slot>
    </table>
  </div>
</template>

<style lang="less" scoped>
.table-box {
  .table-wrap {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border: 0;
    padding: 0;
    margin: 0;
  }

  /* Add your styles here */
  .table-hd {

    // #5cafcf
    background-image: linear-gradient(to bottom, #52a5c5, #1698cc 20%);

    // background-color: #1698cc;
    .table-hd-th {
      text-align: left;
      color: #FFF;
      font-weight: bold;
      height: 30px;
      padding: 0 4px;
    }
  }

  td,
  th {
    text-align: left;
    border: 1px solid #a4d4f9;
  }



  .table-bd {
    td {
      padding: 4px;
      outline: none;
    }

    td:nth-child(2n) {
      background: #F1F5F8;
    }

    tr {
      background: #FFF;
    }

    tr:hover {
      td {
        background: #fffeaa;
        color: red;
      }
    }
  }
}
</style>
