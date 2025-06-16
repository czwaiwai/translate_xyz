<script setup>
import { computed, inject } from 'vue'
// TableBox is
defineOptions({
  name: 'TableBox',
})
let theme = inject('theme', 'blue')
const props = defineProps({
  title: {
    type: Array,
    default: () => [
      {
        name: 'openTime',
        value: '开奖时间',
        width: '13%',
      },
      {
        name: 'issue',
        value: '期号',
        width: '10%',
      },
      {
        name: 'qian',
        value: '仟',
        width: '10%',
      },
      {
        name: 'bai',
        value: '佰',
        width: '10%',
      },
      {
        name: 'shi',
        value: '拾',
        width: '10%',
      },
      {
        name: 'ge',
        value: '个',
        width: '10%',
      },
      {
        name: 'ball5',
        value: '球5',
        width: '10%',
      },
    ],
  },
  data: {
    type: Array,
    default: () => [],
  },
  center: Boolean,
})
const formatData = computed(() => {
  return props.data.map((item) => {
    const newItem = {
      list: [],
    }
    props.title.forEach((titleItem) => {
      if (titleItem.colspan && titleItem.colspan.length) {
        return titleItem.colspan.forEach((col) => {
          newItem.list.push({
            name: col,
            value: item[col],
          })
        })
      }
      newItem.list.push({
        name: titleItem.name,
        value: item[titleItem.name],
      })
    })
    return newItem
  })
})
const withOutProp = (item) => {
  const { name, value, colspan, ...rest } = item
  if (colspan && colspan.length) {
    rest.colspan = colspan.length
  }
  return {
    ...rest,
  }
}
const frontClass = computed(() => {
  let tmp = ''
  if (theme === 'green') {
    tmp += 'front'
  }
  if (props.center) {
    tmp += ' center'
  }
  return tmp
})
</script>

<template>
  <div class="table-box" :class="frontClass">
    <table class="table-wrap">
      <slot name="header" :title="title">
        <thead class="table-hd">
          <tr class="table-hd-tr">
            <template v-for="(item, index) in title" :key="index">
              <th class="table-hd-th" v-bind="withOutProp(item)">
                <slot :name="'title_' + item.name" :item="item">{{ item.value }}</slot>
              </th>
            </template>
          </tr>
        </thead>
      </slot>
      <tbody id="tbody" class="table-bd">
        <template v-if="data.length">
          <template v-for="(item, index) in formatData" :key="index">
            <tr class="table-bd-tr">
              <slot name="data" :item="item.list" :index="index">
                <template v-for="(sub, sindex) in item.list" :key="sindex">
                  <td class="table-bd-td">
                    <slot :name="sub.name" :item="sub" :index="index">{{ sub.value }}</slot>
                  </td>
                </template>
              </slot>
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
    .table-hd-th {
      text-align: left;
      color: #fff;
      font-weight: bold;
      height: 30px;
      padding: 0 4px;
    }
    // background-color: #1698cc;
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
      background: #f1f5f8;
    }

    tr {
      background: #fff;
    }

    tr:hover {
      td {
        background: #fffeaa;
        color: red;
      }
    }
  }
  &.front {
    .table-hd {
      background: #f0f0f0;
      background-image: none;
      .table-hd-th {
        text-align: center;
        color: #333;
        font-weight: bold;
        height: 30px;
        padding: 0 4px;
      }
    }
    :slotted(.table-ft) {
      tr {
        background: #f0f0f0;
        background-image: none;
      }
      td {
        text-align: center;
        color: #333;
        font-weight: bold;
        height: 30px;
        padding: 0 4px;
      }
      tr:hover {
        td {
          background: #fffeaa;
          color: red;
        }
      }
    }
    td,
    th {
      border: 1px solid var(--table-border-color);
    }
  }
  &.center {
    td,
    th {
      text-align: center;
    }
  }
}
</style>
