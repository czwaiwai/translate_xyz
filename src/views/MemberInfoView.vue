<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import api, { emnum } from '@/lib/api'
import { filterZero } from '@/lib/utils'
import { Message } from '@arco-design/web-vue'
// MemberInfoView is 会员资料
defineOptions({
  name: 'MemberInfoView',
})
let userStore = useUserStore()
let topCate = filterZero(emnum.topCate)
let twoCate = filterZero(emnum.twoCate)
let threeCate = filterZero(emnum.threeCate)
// let fourCate = filterZero(emnum.fourCat
const cateTop = ref([])
const cateTwo = ref([])
const cateThree = ref([])
api.userSettingById({ id: userStore.userInfo.id }).then((res) => {
  let list = res.data
  console.log(list)
  cateTop.value = topCate.map((item) => {
    let itemData = list.find((sub) => sub.type === item.label)
    if (itemData) {
      return {
        ...item,
        ...itemData,
      }
    }
    return item
  })
  cateTwo.value = twoCate.map((item) => {
    let itemData = list.find((sub) => sub.type === item.label)
    if (itemData) {
      return {
        ...item,
        ...itemData,
      }
    }
    return item
  })
  cateThree.value = threeCate.map((item) => {
    let itemData = list.find((sub) => sub.type === item.label)
    if (itemData) {
      return {
        ...item,
        ...itemData,
      }
    }
    return item
  })
  console.log(cateTop.value)
  console.log(cateTwo.value)
  console.log(cateThree.value)
})
const submitHandle = async () => {
  console.log('submit')
  const arr = [...cateTop.value, ...cateTwo.value, ...cateThree.value]
    .filter((item) => item.id)
    .map((item) => {
      let { label, value, belongto, ...obj } = item
      return obj
    })
  let res = await api.userSettingSave(arr)
  Message.success('保存成功')
  console.log(res)
}
</script>

<template>
  <PageLay class="member-info-view">
    <form @submit.prevent="submitHandle">
      <div class="flex-box gap10 w100">
        <CardBox class="flex-item" title="会员资料" padding="0">
          <table class="table-form-blue">
            <tbody>
              <tr>
                <td width="50%">账号：</td>
                <td>{{ userStore.userInfo.username }}</td>
              </tr>
              <tr>
                <td>姓名：</td>
                <td>{{ userStore.userInfo.nickname }}</td>
              </tr>
              <tr>
                <td>信用额度：</td>
                <td>{{ userStore.userInfo.credit }}</td>
              </tr>
            </tbody>
          </table>
        </CardBox>
        <CardBox class="flex-item" title="录码模式" padding="0" space="0">
          <table class="table-form-blue">
            <tbody>
              <tr>
                <td width="20%">自动：</td>
                <td width="13%"><input type="radio" name="input_mode" /></td>
                <td width="20%">小票打印：</td>
                <td width="13%"><input type="radio" name="show_mode" /></td>
                <td width="20%">实际赔率：</td>
                <td width="13%"><input type="radio" name="odds_type" /></td>
              </tr>
              <tr>
                <td width="20%">回车：</td>
                <td width="13%"><input type="radio" name="input_mode" /></td>
                <td width="20%">显示彩种：</td>
                <td width="13%"><input type="radio" name="show_mode" /></td>
                <td width="20%">转换赔率：</td>
                <td width="13%"><input type="radio" name="odds_type" /></td>
              </tr>
              <tr>
                <td>小票截图</td>
                <td colspan="5"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>销售点：</td>
                <td colspan="5"><input type="text" /></td>
              </tr>
            </tbody>
          </table>
        </CardBox>
      </div>
      <div class="tc ptb20"><button class="pri-btn" type="submit">提交</button></div>
    </form>
    <CardBox class="mt10" hideHead padding="0">
      <div class="playtype">
        <table class="table-form-blue">
          <thead>
            <tr class="bg1">
              <td width="6%"></td>
              <td width="13%">类别</td>
              <td width="10%">最小下注</td>
              <td width="13%">赔率上限(多个用/分开)</td>
              <td width="13%">单注上限</td>
              <td width="13%">单项上限</td>
              <td width="13%">交易回水</td>
              <td width="19%">赔率</td>
            </tr>
          </thead>
          <tbody id="tbody">
            <template v-for="item in cateTop" :key="item.value">
              <tr v-if="item.type" class="fn-hover">
                <td width="6%"></td>
                <td width="13%">{{ item.label }}</td>
                <td width="10%">{{ item.betMin }}</td>
                <td width="13%">{{ item.oddsMax }}</td>
                <td width="13%">{{ item.straightMax }}</td>
                <td width="13%">{{ item.singleDigitMax }}</td>
                <td width="13%">
                  <select
                    v-model="item.taxRate"
                    id="12"
                    index="11"
                    _name="return_water"
                    class="w70 s_11"
                  ></select>
                </td>
                <td width="19%">
                  <select
                    v-model="item.oddsRate"
                    index="11"
                    _name="odds_limit"
                    class="s_a s_11"
                  ></select>
                </td>
              </tr>
              <template v-else>
                <tr class="bg3">
                  <td>
                    <span
                      href="javascript:void(0)"
                      class="fn-ico-switch btn-pointer"
                      _target="td_erd"
                    >
                    </span>
                  </td>
                  <td>
                    <span href="javascript:void(0)" class="btn-pointer" status="1" act="erd">{{
                      item.label
                    }}</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr v-if="item.value === '20'" id="td_erd">
                  <td colspan="8" style="padding: 0px">
                    <table class="t-1">
                      <tbody>
                        <tr v-for="sub in cateTwo" :key="sub.value" class="fn-hover">
                          <td width="6%"></td>
                          <td width="13%">{{ sub.label }}</td>
                          <td width="10%">{{ sub.betMin }}</td>
                          <td width="13%">{{ sub.oddsMax }}</td>
                          <td width="13%">{{ sub.straightMax }}</td>
                          <td width="13%">{{ sub.singleDigitMax }}</td>
                          <td width="13%">
                            <select
                              id="1"
                              v-model="sub.taxRate"
                              index="0"
                              first="1"
                              selectall="1"
                              _name="return_water"
                              class="w70 s_erd"
                            ></select>
                          </td>
                          <td width="19%">
                            <select
                              index="0"
                              v-model="sub.oddsRate"
                              selectall="1"
                              _name="odds_limit"
                              class="s_a s_erd"
                            ></select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr v-if="item.value === '30'" id="td_erd">
                  <td colspan="8" style="padding: 0px">
                    <table class="t-1">
                      <tbody>
                        <tr v-for="sub in cateThree" :key="sub.value" class="fn-hover">
                          <td width="6%"></td>
                          <td width="13%">{{ sub.label }}</td>
                          <td width="10%">{{ sub.betMin }}</td>
                          <td width="13%">{{ sub.oddsMax }}</td>
                          <td width="13%">{{ sub.straightMax }}</td>
                          <td width="13%">{{ sub.singleDigitMax }}</td>
                          <td width="13%">
                            <select
                              id="1"
                              v-model="sub.taxRate"
                              index="0"
                              first="1"
                              selectall="1"
                              _name="return_water"
                              class="w70 s_erd"
                            ></select>
                          </td>
                          <td width="19%">
                            <select
                              index="0"
                              v-model="sub.oddsRate"
                              selectall="1"
                              _name="odds_limit"
                              class="s_a s_erd"
                            ></select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
        <!-- <div id="show_tip" class="hide">
        <span>
          <font color="red">【提示：因上级赚水调整，导致交易回水超限，详见上表中交易回水一栏红色字体提示，请重新设置并提交保存。】</font>
        </span>
      </div> -->
      </div>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.member-info-view {
  /* Add your styles here */
}
</style>
