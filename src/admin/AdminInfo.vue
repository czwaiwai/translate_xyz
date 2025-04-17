<script setup>
import { ref } from 'vue';
// AdminInfo is 设置-基本资料
defineOptions({
  name: "AdminInfo"
});
const adminInfo = ref();
console.log(adminInfo);

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
              <input type="text" value="Y01" name="account" disabled="disabled">
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
              <input type="text" value="Y" name="nick_name" disabled="disabled">
            </td>
            <td rowspan="2">联系电话</td>
            <td rowspan="2">
              <input type="text" value="" name="contact_phone" disabled="disabled">
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>占成上限</td>
            <td>
              <input type="text" value="0" name="self_hold_rate" disabled="disabled">
            </td>
            <td>信用额度</td>
            <td>
              <input type="text" value="10000" name="credit" required="true" maxlength="20" nonnegative="true" disabled="disabled" aria-required="true">
              <input type="button" value="下级归零" class="sub-btn" disabled="disabled">
            </td>
          </tr>
          <tr>
            <td rowspan="2">&nbsp;</td>
            <td rowspan="2">
              <input type="text" value="" name="pr_id" maxlength="16" autocomplete="off" colspan="3">
            </td>
            <td>短信验证</td>
            <td>
              <input type="button" value="未启用" class="sub-btn" id="sms_edit33">
            </td>
          </tr>
          <tr>
            <td>谷歌验证</td>
            <td>
              <input type="button" value="未启用" class="sub-btn" id="ga_edit">
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </CardBox>
    <div class="tc pt10"><button class="sub-btn">提交</button></div>
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
          <tr>
            <td>

            </td>
            <td class="bg3 blue">二定位</td>
            <td></td>
            <td class="bg3"></td>
            <td></td>
            <td class="bg3"></td>
            <td></td>
          </tr>
          <tr id="1">
            <td></td>
            <td class="bg3">口口XX</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money0" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>100</td>
            <td class="bg3">1000</td>
            <td>100000</td>
          </tr>
          <tr id="2">
            <td></td>
            <td class="bg3">口X口X</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money1" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>100</td>
            <td class="bg3">1000</td>
            <td>100000</td>
          </tr>
          <tr id="3">
            <td></td>
            <td class="bg3">口XX口</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money2" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>100</td>
            <td class="bg3">1000</td>
            <td>100000</td>
          </tr>
          <tr id="4">
            <td></td>
            <td class="bg3">X口X口</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money3" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>100</td>
            <td class="bg3">1000</td>
            <td>100000</td>
          </tr>
          <tr id="5">
            <td></td>
            <td class="bg3">X口口X</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money4" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>100</td>
            <td class="bg3">1000</td>
            <td>100000</td>
          </tr>
          <tr id="6">
            <td></td>
            <td class="bg3">XX口口</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money5" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>100</td>
            <td class="bg3">1000</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>

            </td>
            <td class="bg3 blue">三定位</td>
            <td></td>
            <td class="bg3"></td>
            <td></td>
            <td class="bg3"></td>
            <td></td>
          </tr>
          <tr id="7">
            <td></td>
            <td class="bg3">口口口X</td>
            <td>0.1</td>
            <td class="bg3">
              <input type="text" name="hold_money6" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>1000</td>
            <td class="bg3">100</td>
            <td>7000</td>
          </tr>
          <tr id="8">
            <td></td>
            <td class="bg3">口口X口</td>
            <td>0.1</td>
            <td class="bg3">
              <input type="text" name="hold_money7" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>1000</td>
            <td class="bg3">100</td>
            <td>7000</td>
          </tr>
          <tr id="9">
            <td></td>
            <td class="bg3">口X口口</td>
            <td>0.1</td>
            <td class="bg3">
              <input type="text" name="hold_money8" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>1000</td>
            <td class="bg3">100</td>
            <td>7000</td>
          </tr>
          <tr id="10">
            <td></td>
            <td class="bg3">X口口口</td>
            <td>0.1</td>
            <td class="bg3">
              <input type="text" name="hold_money9" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>1000</td>
            <td class="bg3">100</td>
            <td>7000</td>
          </tr>
          <tr id="11">
            <td></td>
            <td class="bg3">四定位</td>
            <td>0.1</td>
            <td class="bg3">
              <input type="text" name="hold_money10" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" decimalpoint="true" aria-required="true">
            </td>
            <td>10000</td>
            <td class="bg3">50</td>
            <td>2000</td>
          </tr>
          <tr id="12">
            <td></td>
            <td class="bg3">二字现</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money11" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>9.8/16.6</td>
            <td class="bg3">2000</td>
            <td>80000</td>
          </tr>
          <tr id="13">
            <td></td>
            <td class="bg3">三字现</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money12" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>47/78.8/128</td>
            <td class="bg3">1000</td>
            <td>50000</td>
          </tr>
          <tr id="14">
            <td></td>
            <td class="bg3">四字现</td>
            <td>1</td>
            <td class="bg3">
              <input type="text" name="hold_money13" _name="hold_money" value="0" required="true" maxlength="10" nonnegative="true" digits="true" aria-required="true">
            </td>
            <td>352/704/1408/352</td>
            <td class="bg3">50</td>
            <td>3000</td>
          </tr>
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
