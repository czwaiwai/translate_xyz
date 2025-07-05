<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import api, { emnum } from '@/lib/api'
import { filterZero } from '@/lib/utils'
import { Message } from '@arco-design/web-vue'
// AdminInfo is 设置-基本资料
defineOptions({
  name: 'AdminInfo',
})
const adminInfo = ref()
console.log(adminInfo)
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
    console.log(item, list)
    let itemData = list.find((sub) => sub.gameType + '' === item.value)
    console.log(itemData)
    if (itemData) {
      return {
        ...item,
        ...itemData,
      }
    }
    return item
  })
  console.log(cateTop.value, 'topTop.value===')
  cateTwo.value = twoCate.map((item) => {
    let itemData = list.find((sub) => sub.gameType + '' === item.value)
    if (itemData) {
      return {
        ...item,
        ...itemData,
      }
    }
    return item
  })
  cateThree.value = threeCate.map((item) => {
    let itemData = list.find((sub) => sub.gameType + '' === item.value)
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
  console.log(arr, '========')
  let res = await api.userSettingSave(arr)
  Message.success('保存成功')
  console.log(res)
}
const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
</script>

<template>
  <PageLay ref="adminInfo" class="admin-info">
    <template #extra>
      <SettingSubTab></SettingSubTab>
    </template>
    <AdmInfoBox></AdmInfoBox>
    <CardBox title="基本资料" blue padding="0">
      <form>
        <table class="table-form">
          <tbody>
            <tr>
              <td>账号</td>
              <td>
                <input type="text" value="Y01" name="account" disabled="disabled" />
              </td>
              <td>贡献度占成</td>
              <td>
                <select name="contribution_rate">
                  <option value="0" selected="selected">0</option>
                </select>
              </td>
            </tr>
            <tr>
              <td rowspan="2">代号</td>
              <td rowspan="2">
                <input type="text" value="Y" name="nick_name" disabled="disabled" />
              </td>
              <td rowspan="2">联系电话</td>
              <td rowspan="2">
                <input type="text" value="" name="contact_phone" disabled="disabled" />
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>占成上限</td>
              <td>
                <input type="text" value="0" name="self_hold_rate" disabled="disabled" />
              </td>
              <td>信用额度</td>
              <td>
                <input
                  type="text"
                  value="10000"
                  name="credit"
                  required="true"
                  maxlength="20"
                  nonnegative="true"
                  disabled="disabled"
                  aria-required="true" />
                <input type="button" value="下级归零" class="sub-btn" disabled="disabled" />
              </td>
            </tr>
            <tr>
              <td rowspan="2">&nbsp;</td>
              <td rowspan="2">
                <input
                  type="text"
                  value=""
                  name="pr_id"
                  maxlength="16"
                  autocomplete="off"
                  colspan="3" />
              </td>
              <td>短信验证</td>
              <td>
                <input type="button" value="未启用" class="sub-btn" id="sms_edit33" />
              </td>
            </tr>
            <tr>
              <td>谷歌验证</td>
              <td>
                <input type="button" value="未启用" class="sub-btn" id="ga_edit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </CardBox>
    <div class="tc pt10"><button @click="submitHandle" class="sub-btn">提交</button></div>
    <div class="mt10">
      <table class="table-form">
        <thead>
          <tr class="bg1">
            <td width="4%"></td>
            <td width="12%">类别</td>
            <td width="12%">最小下注</td>
            <td width="12%">拦货金额</td>
            <td width="12%">赔率上限</td>
            <td width="12%">单注上限</td>
            <td width="12%">单项上限</td>
          </tr>
        </thead>
        <tbody id="tbody" class="fn-hover">
          <template v-for="item in cateTop" :key="item.value">
            <tr v-if="item.gameType" class="fn-hover">
              <td width="4%"></td>
              <td width="12%">{{ item.label }}</td>
              <td width="12%">{{ item.betMin }}</td>
              <td width="12%">
                <input type="text" v-model="item.holdMoney" />
              </td>
              <td width="12%">{{ item.oddsMax }}</td>
              <td width="12%">{{ item.straightMax }}</td>
              <td width="12%">{{ item.singleDigitMax }}</td>
            </tr>
            <template v-else>
              <tr class="bg3">
                <td>
                  <span
                    href="javascript:void(0)"
                    class="fn-ico-switch btn-pointer"
                    _target="td_erd"></span>
                </td>
                <td>
                  <span href="javascript:void(0)" class="btn-pointer" status="1" act="erd">
                    {{ item.label }}
                  </span>
                </td>
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
                        <td width="4%"></td>
                        <td width="12%">{{ sub.label }}</td>
                        <td width="12%">{{ sub.betMin }}</td>
                        <td width="12%">
                          <input type="text" v-model="item.holdMoney" />
                        </td>
                        <td width="12%">{{ sub.oddsMax }}</td>
                        <td width="12%">{{ sub.straightMax }}</td>
                        <td width="12%">{{ sub.singleDigitMax }}</td>
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
                        <td width="4%"></td>
                        <td width="12%">{{ sub.label }}</td>
                        <td width="12%">{{ sub.betMin }}</td>
                        <td width="12%">
                          <input type="text" v-model="item.holdMoney" />
                        </td>
                        <td width="12%">{{ sub.oddsMax }}</td>
                        <td width="12%">{{ sub.straightMax }}</td>
                        <td width="12%">{{ sub.singleDigitMax }}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </template>
          </template>
        </tbody>
      </table>
    </div>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-info {
  /* Add your styles here */
}
</style>
